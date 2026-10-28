#!/usr/bin/env python3
"""
StructSpaceForge Pro (v1.0.0) — Automated 10-Point Verification & Boundary Suite
Validates ECSS-E-ST-32-10C Rev. 2, ECSS-E-ST-32-02C Rev. 2, and ECSS-E-HB-32-26A.
"""
import copy
import math
import sys
from structspace_cli import (
    PRESETS,
    validate_config,
    solve_quasi_static_loads,
    analyze_vibration_and_modal,
    analyze_pressurized_hardware,
    evaluate_structural_elements_mos,
    run_ecss_audit,
)


def run_tests() -> int:
    print("=" * 76)
    print("StructSpaceForge Pro — ECSS-E-ST-32-10C & 32-02C Automated Verification Suite")
    print("=" * 76)
    passed = 0
    total = 10

    f9 = copy.deepcopy(PRESETS["falcon9_rideshare_smallsat"])

    # TEST 01: Normative FOSY/FOSU Table 5-1 Lookup & Multiplicative DLL Factor
    qs = solve_quasi_static_loads(f9)
    assert qs["fosy"] == 1.10 and qs["fosu"] == 1.25
    assert abs(qs["design_factor_dll"] - (1.10 * 1.05)) < 1e-6
    print(f"[TEST 01] ECSS-E-ST-32-10C Table 5-1 FOSY={qs['fosy']}, FOSU={qs['fosu']}, DLL={qs['design_factor_dll']}.... PASS")
    passed += 1

    # TEST 02: Qualification & Ultimate Axial Design Force Chain (Table 4-1)
    assert qs["ult_design_force_kn"] > qs["yield_design_force_kn"] > qs["dll_axial_force_kn"] > qs["limit_axial_force_kn"]
    print(f"[TEST 02] Axial Force Chain (LL={qs['limit_axial_force_kn']}kN -> Ult={qs['ult_design_force_kn']}kN)....... PASS")
    passed += 1

    # TEST 03: Relieving Thermal Load Factor (Clause 5.1.2: FOS_thermal = 1.0)
    assert f9["thermal_relieving_load"] is True and f9["thermal_relieving_fos"] == 1.0
    print("[TEST 03] Relieving Thermal Load Factor Verification (FOS_thermal=1.00)...... PASS")
    passed += 1

    # TEST 04: Launch Vehicle Fundamental Modal Stiffness Isolation
    vib = analyze_vibration_and_modal(f9)
    assert vib["axial_stiffness_compliant"] is True and vib["lateral_stiffness_compliant"] is True
    print(f"[TEST 04] LV Modal Stiffness Isolation (f_ax={vib['bus_axial_freq_hz']}Hz >= 35Hz, f_lat={vib['bus_lateral_freq_hz']}Hz)... PASS")
    passed += 1

    # TEST 05: Secondary Structure Octave Modal Decoupling (f_panel / f_bus >= sqrt(2))
    assert vib["octave_separation_compliant"] is True and vib["modal_ratio"] >= math.sqrt(2.0)
    print(f"[TEST 05] Secondary Panel Octave Modal Separation (Ratio={vib['modal_ratio']} >= 1.414)..... PASS")
    passed += 1

    # TEST 06: Miles' Equation 1-DOF Random Vibration Grms & 3-Sigma Peak Load
    expected_q = 1.0 / (2.0 * f9["damping_ratio_zeta"])
    expected_grms = math.sqrt((math.pi / 2.0) * f9["panel_natural_freq_hz"] * expected_q * f9["random_psd_g2_hz"])
    assert abs(vib["miles_grms"] - round(expected_grms, 2)) < 1e-2
    assert abs(vib["miles_3sigma_peak_g"] - round(3.0 * expected_grms, 2)) < 1e-1
    print(f"[TEST 06] Miles' Random Vibration Solver (G_rms={vib['miles_grms']}g, 3-Sigma={vib['miles_3sigma_peak_g']}g).... PASS")
    passed += 1

    # TEST 07: Pressurized Hardware / COPV Proof (1.5x MDP) & Burst (2.0x MDP) Margin (ECSS-E-ST-32-02C)
    pv = analyze_pressurized_hardware(f9)
    assert pv["j_proof"] == 1.50 and pv["j_burst"] == 2.00
    assert pv["burst_compliant"] is True and pv["burst_mos"] > 0.0
    print(f"[TEST 07] COPV Pressure Vessel Verification (Burst={pv['burst_pressure_bar']}bar, MoS=+{pv['burst_mos']})... PASS")
    passed += 1

    # TEST 08: Primary & Secondary Structural Elements Positive Yield/Ultimate MoS
    mos = evaluate_structural_elements_mos(f9, qs)
    assert mos["all_positive_mos"] is True and mos["min_mos_yield"] > 0.0 and mos["min_mos_ult"] > 0.0
    print(f"[TEST 08] Structural Margin of Safety Matrix (Min MoS_Y=+{mos['min_mos_yield']}, MoS_U=+{mos['min_mos_ult']}).. PASS")
    passed += 1

    # TEST 09: Multi-Vehicle ECSS-E-ST-32-10C Audit (Falcon 9 Metallic, Ariane 6 CFRP, Man-Rated Crew)
    for key in ("falcon9_rideshare_smallsat", "ariane6_geo_central_tube", "man_rated_orbital_module"):
        aud = run_ecss_audit(PRESETS[key])
        assert aud["certified"] is True and aud["pass_count"] == 10, f"Preset {key} failed audit"
    print("[TEST 09] Multi-Class ECSS Audit (Metallic, FRP Composite, Man-Rated Crew)... PASS")
    passed += 1

    # TEST 10: Structural Overstress Fault Detection & Invalid Parameter Boundary Rejection
    overload_cfg = copy.deepcopy(f9)
    overload_cfg["structural_elements"][0]["limit_mpa"] = 420.0  # Exceeds Al 7075-T7351 allowable after DLL*FOSU
    overload_mos = evaluate_structural_elements_mos(overload_cfg, qs)
    assert overload_mos["elements"][0]["status"] == "STRUCTURAL_OVERSTRESS_FAIL"
    assert overload_mos["failed_count"] == 1

    bad_km = copy.deepcopy(f9)
    bad_km["model_factor_km"] = 0.85
    raised_km = False
    try:
        validate_config(bad_km)
    except ValueError:
        raised_km = True
    assert raised_km is True
    print("[TEST 10] Overstress Fault Detection & Boundary Error Handling............... PASS")
    passed += 1

    print("=" * 76)
    print(f"RESULT: {passed}/{total} TESTS PASSED (100.0% ECSS-E-ST-32-10C Verification Score)")
    print("=" * 76)
    return 0 if passed == total else 1


if __name__ == "__main__":
    sys.exit(run_tests())
