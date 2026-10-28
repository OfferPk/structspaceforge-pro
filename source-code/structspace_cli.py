#!/usr/bin/env python3
"""
StructSpaceForge Pro (v1.0.0) — Python 3 CLI Suite for Spacecraft Structural Factors of Safety
Implements ECSS-E-ST-32-10C Rev. 2, ECSS-E-ST-32-02C Rev. 2, and ECSS-E-HB-32-26A.
"""
import argparse
import json
import math
from typing import Dict, Any

G0_M_S2 = 9.80665

FOS_TABLE = {
    "satellite_metallic_tested": {"fosy": 1.10, "fosu": 1.25, "label": "Satellite Metallic (Verified by Test)"},
    "satellite_metallic_analysis": {"fosy": 1.25, "fosu": 2.00, "label": "Satellite Metallic (Verified by Analysis Only)"},
    "satellite_frp_tested": {"fosy": 1.25, "fosu": 1.25, "label": "Satellite FRP Composite (Verified by Test)"},
    "satellite_frp_analysis": {"fosy": 1.50, "fosu": 2.00, "label": "Satellite FRP Composite (Analysis Only)"},
    "man_rated_launch": {"fosy": 1.25, "fosu": 1.40, "label": "Man-Rated Spacecraft Launch"},
    "man_rated_orbit": {"fosy": 1.10, "fosu": 1.50, "label": "Man-Rated Spacecraft On-Orbit"},
}

PRESSURE_VESSEL_FACTORS = {
    "metallic_tank": {"j_proof": 1.25, "j_burst": 1.50},
    "copv_vessel": {"j_proof": 1.50, "j_burst": 2.00},
}

PRESETS: Dict[str, Dict[str, Any]] = {
    "falcon9_rideshare_smallsat": {
        "id": "falcon9_rideshare_smallsat",
        "name": "Falcon 9 Rideshare ESPA SmallSat Bus (Al 7075-T7351, Verified by Test)",
        "vehicle_class": "satellite_metallic_tested",
        "spacecraft_mass_kg": 245.0,
        "axial_quasi_static_g": 8.5,
        "lateral_quasi_static_g": 4.0,
        "model_factor_km": 1.10,
        "project_factor_kp": 1.05,
        "qualification_factor_kq": 1.25,
        "local_design_factor_kld": 1.00,
        "margin_policy_factor_kmp": 1.00,
        "thermal_relieving_load": True,
        "thermal_relieving_fos": 1.00,
        "bus_axial_freq_hz": 52.0,
        "bus_lateral_freq_hz": 24.5,
        "lv_min_axial_freq_hz": 35.0,
        "lv_min_lateral_freq_hz": 15.0,
        "panel_natural_freq_hz": 118.0,
        "damping_ratio_zeta": 0.025,
        "random_psd_g2_hz": 0.08,
        "vessel_type": "copv_vessel",
        "meop_bar": 310.0,
        "vessel_radius_mm": 145.0,
        "vessel_wall_thickness_mm": 4.8,
        "vessel_allowable_ult_mpa": 2250.0,
        "structural_elements": [
            {"id": "STR-01", "component": "Primary Separation Ring Skirt", "material": "Al 7075-T7351", "limit_mpa": 215.0, "allow_yield_mpa": 435.0, "allow_ult_mpa": 505.0, "critical": True},
            {"id": "STR-02", "component": "+Z Optical Bench Shear Panel", "material": "Al 6061-T6", "limit_mpa": 132.0, "allow_yield_mpa": 255.0, "allow_ult_mpa": 290.0, "critical": True},
            {"id": "STR-03", "component": "Reaction Wheel Titanium Bracket", "material": "Ti-6Al-4V", "limit_mpa": 410.0, "allow_yield_mpa": 825.0, "allow_ult_mpa": 895.0, "critical": True},
            {"id": "STR-04", "component": "Solar Array Yoke Root Hinge", "material": "Al 7075-T7351", "limit_mpa": 238.0, "allow_yield_mpa": 435.0, "allow_ult_mpa": 505.0, "critical": False},
            {"id": "STR-05", "component": "Propulsion Deck Strut Tube", "material": "Ti-6Al-4V", "limit_mpa": 385.0, "allow_yield_mpa": 825.0, "allow_ult_mpa": 895.0, "critical": True},
        ],
    },
    "ariane6_geo_central_tube": {
        "id": "ariane6_geo_central_tube",
        "name": "Ariane 6 GEO Telecom CFRP Central Cylinder (FRP Tested, 4,800 kg)",
        "vehicle_class": "satellite_frp_tested",
        "spacecraft_mass_kg": 4800.0,
        "axial_quasi_static_g": 6.2,
        "lateral_quasi_static_g": 2.5,
        "model_factor_km": 1.10,
        "project_factor_kp": 1.05,
        "qualification_factor_kq": 1.25,
        "local_design_factor_kld": 1.05,
        "margin_policy_factor_kmp": 1.00,
        "thermal_relieving_load": True,
        "thermal_relieving_fos": 1.00,
        "bus_axial_freq_hz": 39.5,
        "bus_lateral_freq_hz": 17.8,
        "lv_min_axial_freq_hz": 31.0,
        "lv_min_lateral_freq_hz": 12.0,
        "panel_natural_freq_hz": 88.0,
        "damping_ratio_zeta": 0.020,
        "random_psd_g2_hz": 0.06,
        "vessel_type": "copv_vessel",
        "meop_bar": 280.0,
        "vessel_radius_mm": 320.0,
        "vessel_wall_thickness_mm": 9.2,
        "vessel_allowable_ult_mpa": 2400.0,
        "structural_elements": [
            {"id": "STR-01", "component": "CFRP Central Thrust Cone Shell", "material": "M55J/Cyanate Ester", "limit_mpa": 310.0, "allow_yield_mpa": 640.0, "allow_ult_mpa": 780.0, "critical": True},
            {"id": "STR-02", "component": "LVA 2624 Clampband Interface Ring", "material": "Al 7075-T7351", "limit_mpa": 205.0, "allow_yield_mpa": 435.0, "allow_ult_mpa": 505.0, "critical": True},
            {"id": "STR-03", "component": "North/South Radiator Honeycomb Core", "material": "Al 5056 / Facesheet", "limit_mpa": 118.0, "allow_yield_mpa": 245.0, "allow_ult_mpa": 285.0, "critical": False},
        ],
    },
    "man_rated_orbital_module": {
        "id": "man_rated_orbital_module",
        "name": "Man-Rated Crew Orbital Transfer Module (Launch Class, Al-Li 2195)",
        "vehicle_class": "man_rated_launch",
        "spacecraft_mass_kg": 9200.0,
        "axial_quasi_static_g": 5.5,
        "lateral_quasi_static_g": 2.0,
        "model_factor_km": 1.10,
        "project_factor_kp": 1.05,
        "qualification_factor_kq": 1.40,
        "local_design_factor_kld": 1.05,
        "margin_policy_factor_kmp": 1.00,
        "thermal_relieving_load": True,
        "thermal_relieving_fos": 1.00,
        "bus_axial_freq_hz": 44.0,
        "bus_lateral_freq_hz": 19.5,
        "lv_min_axial_freq_hz": 32.0,
        "lv_min_lateral_freq_hz": 14.0,
        "panel_natural_freq_hz": 96.0,
        "damping_ratio_zeta": 0.030,
        "random_psd_g2_hz": 0.05,
        "vessel_type": "metallic_tank",
        "meop_bar": 24.0,
        "vessel_radius_mm": 210.0,
        "vessel_wall_thickness_mm": 3.5,
        "vessel_allowable_ult_mpa": 895.0,
        "structural_elements": [
            {"id": "STR-01", "component": "Crew Cabin Pressure Bulkhead Ring", "material": "Al-Li 2195-T8", "limit_mpa": 220.0, "allow_yield_mpa": 490.0, "allow_ult_mpa": 545.0, "critical": True},
            {"id": "STR-02", "component": "Docking Mechanism Axial Load Ring", "material": "Ti-6Al-4V", "limit_mpa": 375.0, "allow_yield_mpa": 825.0, "allow_ult_mpa": 895.0, "critical": True},
            {"id": "STR-03", "component": "ECLSS Rack Secondary Longerons", "material": "Al 7075-T7351", "limit_mpa": 195.0, "allow_yield_mpa": 435.0, "allow_ult_mpa": 505.0, "critical": True},
        ],
    },
}


def validate_config(cfg: Dict[str, Any]) -> None:
    if not isinstance(cfg, dict):
        raise ValueError("Configuration must be a dictionary.")
    vc = cfg.get("vehicle_class", "")
    if vc not in FOS_TABLE:
        raise ValueError(f"Unsupported ECSS vehicle_class: {vc}")
    if float(cfg.get("spacecraft_mass_kg", 0)) <= 0:
        raise ValueError("Spacecraft mass must be positive.")
    if float(cfg.get("model_factor_km", 0)) < 1.0 or float(cfg.get("project_factor_kp", 0)) < 1.0:
        raise ValueError("ECSS design factors K_M and K_P must be >= 1.0.")
    zeta = float(cfg.get("damping_ratio_zeta", 0))
    if not (0.0 < zeta < 1.0):
        raise ValueError("Structural damping ratio zeta must be in (0, 1).")


def solve_quasi_static_loads(cfg: Dict[str, Any]) -> Dict[str, Any]:
    validate_config(cfg)
    fos_spec = FOS_TABLE[cfg["vehicle_class"]]
    mass_kg = float(cfg["spacecraft_mass_kg"])
    g_ax = float(cfg["axial_quasi_static_g"])
    g_lat = float(cfg["lateral_quasi_static_g"])
    km = float(cfg["model_factor_km"])
    kp = float(cfg["project_factor_kp"])
    kq = float(cfg["qualification_factor_kq"])
    kld = float(cfg["local_design_factor_kld"])
    kmp = float(cfg["margin_policy_factor_kmp"])

    comb_g = math.sqrt(g_ax ** 2 + g_lat ** 2)
    dll_factor = km * kp
    coef_b = fos_spec["fosy"] * kld * kmp
    coef_c = fos_spec["fosu"] * kld * kmp

    f_lim_kn = (mass_kg * g_ax * G0_M_S2) / 1000.0
    f_dll_kn = f_lim_kn * dll_factor
    f_qual_kn = f_dll_kn * kq
    f_yield_kn = f_dll_kn * coef_b
    f_ult_kn = f_dll_kn * coef_c

    return {
        "vehicle_class": cfg["vehicle_class"],
        "fosy": fos_spec["fosy"],
        "fosu": fos_spec["fosu"],
        "combined_limit_g": round(comb_g, 3),
        "design_factor_dll": round(dll_factor, 4),
        "coef_yield_b": round(coef_b, 4),
        "coef_ult_c": round(coef_c, 4),
        "limit_axial_force_kn": round(f_lim_kn, 2),
        "dll_axial_force_kn": round(f_dll_kn, 2),
        "qual_axial_force_kn": round(f_qual_kn, 2),
        "yield_design_force_kn": round(f_yield_kn, 2),
        "ult_design_force_kn": round(f_ult_kn, 2),
    }


def analyze_vibration_and_modal(cfg: Dict[str, Any]) -> Dict[str, Any]:
    fn = float(cfg["panel_natural_freq_hz"])
    zeta = float(cfg["damping_ratio_zeta"])
    psd = float(cfg["random_psd_g2_hz"])
    q_factor = 1.0 / (2.0 * zeta)

    g_rms = math.sqrt((math.pi / 2.0) * fn * q_factor * psd)
    g_3sigma = 3.0 * g_rms

    f_ax = float(cfg["bus_axial_freq_hz"])
    f_lat = float(cfg["bus_lateral_freq_hz"])
    lv_ax = float(cfg["lv_min_axial_freq_hz"])
    lv_lat = float(cfg["lv_min_lateral_freq_hz"])
    modal_ratio = fn / max(1.0, f_ax)

    return {
        "panel_natural_freq_hz": round(fn, 1),
        "transmissibility_q": round(q_factor, 2),
        "miles_grms": round(g_rms, 2),
        "miles_3sigma_peak_g": round(g_3sigma, 2),
        "bus_axial_freq_hz": round(f_ax, 1),
        "bus_lateral_freq_hz": round(f_lat, 1),
        "modal_ratio": round(modal_ratio, 2),
        "axial_stiffness_compliant": f_ax >= lv_ax,
        "lateral_stiffness_compliant": f_lat >= lv_lat,
        "octave_separation_compliant": modal_ratio >= math.sqrt(2.0),
    }


def analyze_pressurized_hardware(cfg: Dict[str, Any]) -> Dict[str, Any]:
    pv = PRESSURE_VESSEL_FACTORS[cfg.get("vessel_type", "copv_vessel")]
    meop = float(cfg["meop_bar"])
    km = float(cfg["model_factor_km"])
    kp = float(cfg["project_factor_kp"])

    mdp = meop * km * kp
    proof_bar = mdp * pv["j_proof"]
    burst_bar = mdp * pv["j_burst"]

    r_mm = float(cfg["vessel_radius_mm"])
    t_mm = float(cfg["vessel_wall_thickness_mm"])
    burst_stress_mpa = ((burst_bar * 0.1) * r_mm) / max(0.1, t_mm)
    allow_ult_mpa = float(cfg["vessel_allowable_ult_mpa"])
    burst_mos = (allow_ult_mpa / max(1e-6, burst_stress_mpa)) - 1.0

    return {
        "vessel_type": cfg.get("vessel_type", "copv_vessel"),
        "j_proof": pv["j_proof"],
        "j_burst": pv["j_burst"],
        "meop_bar": round(meop, 1),
        "mdp_bar": round(mdp, 2),
        "proof_pressure_bar": round(proof_bar, 2),
        "burst_pressure_bar": round(burst_bar, 2),
        "burst_hoop_stress_mpa": round(burst_stress_mpa, 1),
        "burst_mos": round(burst_mos, 3),
        "burst_compliant": burst_mos >= 0.0,
    }


def evaluate_structural_elements_mos(cfg: Dict[str, Any], qs: Dict[str, Any]) -> Dict[str, Any]:
    dll_factor = qs["design_factor_dll"]
    coef_b = qs["coef_yield_b"]
    coef_c = qs["coef_ult_c"]

    out = []
    for el in cfg.get("structural_elements", []):
        lim = float(el["limit_mpa"])
        dll_s = lim * dll_factor
        y_s = dll_s * coef_b
        u_s = dll_s * coef_c
        mos_y = (float(el["allow_yield_mpa"]) / max(1e-6, y_s)) - 1.0
        mos_u = (float(el["allow_ult_mpa"]) / max(1e-6, u_s)) - 1.0
        ok = mos_y >= 0.0 and mos_u >= 0.0
        out.append({
            "id": el["id"],
            "component": el["component"],
            "material": el["material"],
            "dll_stress_mpa": round(dll_s, 1),
            "mos_yield": round(mos_y, 3),
            "mos_ult": round(mos_u, 3),
            "compliant": ok,
            "status": "MOS_POSITIVE_PASS" if ok else "STRUCTURAL_OVERSTRESS_FAIL",
        })

    min_mos_y = min(e["mos_yield"] for e in out)
    min_mos_u = min(e["mos_ult"] for e in out)
    failed = sum(1 for e in out if not e["compliant"])
    return {
        "elements": out,
        "min_mos_yield": round(min_mos_y, 3),
        "min_mos_ult": round(min_mos_u, 3),
        "all_positive_mos": failed == 0,
        "failed_count": failed,
    }


def run_ecss_audit(cfg: Dict[str, Any]) -> Dict[str, Any]:
    qs = solve_quasi_static_loads(cfg)
    vib = analyze_vibration_and_modal(cfg)
    pv = analyze_pressurized_hardware(cfg)
    mos = evaluate_structural_elements_mos(cfg, qs)

    checks = [
        ("ECSS-32-01", "Normative Yield & Ultimate Factors of Safety (FOSY / FOSU)", qs["fosy"] >= 1.10 and qs["fosu"] >= 1.25),
        ("ECSS-32-02", "Multiplicative Design Limit Load (DLL = LL * K_M * K_P) Chain", float(cfg["model_factor_km"]) >= 1.05 and qs["dll_axial_force_kn"] > qs["limit_axial_force_kn"]),
        ("ECSS-32-03", "Qualification Load Factor Envelope (K_Q >= 1.25)", float(cfg["qualification_factor_kq"]) >= 1.25),
        ("ECSS-32-04", "Relieving Thermally Induced Load Factor (FOS_thermal = 1.0)", bool(cfg["thermal_relieving_load"]) and float(cfg["thermal_relieving_fos"]) == 1.0),
        ("ECSS-32-05", "Primary Launch Vehicle Axial & Lateral Stiffness Isolation", vib["axial_stiffness_compliant"] and vib["lateral_stiffness_compliant"]),
        ("ECSS-32-06", "Secondary Structure Octave Modal Decoupling (f_panel/f_bus >= 1.414)", vib["octave_separation_compliant"]),
        ("ECSS-32-07", "Miles' Equation 1-DOF Random Vibration 3-Sigma Peak <= 65g", 0 < vib["miles_3sigma_peak_g"] <= 65.0),
        ("ECSS-32-08", "Pressurized Hardware / COPV Proof & Burst Pressure Margin", pv["burst_compliant"] and pv["j_burst"] >= 1.5),
        ("ECSS-32-09", "Positive Yield Margin of Safety (MoS_Y >= 0.0) Across All Elements", mos["min_mos_yield"] >= 0.0),
        ("ECSS-32-10", "Positive Ultimate Margin of Safety (MoS_U >= 0.0) Across All Elements", mos["min_mos_ult"] >= 0.0 and mos["all_positive_mos"]),
    ]
    passed = sum(1 for _, _, ok in checks if ok)
    return {
        "quasi_static": qs,
        "vibration": vib,
        "pressure_vessel": pv,
        "mos_matrix": mos,
        "pass_count": passed,
        "total_checks": len(checks),
        "certified": passed == len(checks),
        "checks": [{"id": cid, "title": t, "passed": ok} for cid, t, ok in checks],
    }


def main():
    parser = argparse.ArgumentParser(description="StructSpaceForge Pro CLI — ECSS-E-ST-32-10C Structural Architect")
    parser.add_argument("--preset", default="falcon9_rideshare_smallsat", choices=list(PRESETS.keys()))
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    cfg = PRESETS[args.preset]
    res = run_ecss_audit(cfg)
    if args.json:
        print(json.dumps(res, indent=2))
    else:
        print(f"=== StructSpaceForge Pro (v1.0.0) — {cfg['name']} ===")
        print(f"Factors of Safety (FOSY/U): {res['quasi_static']['fosy']} / {res['quasi_static']['fosu']} | DLL Factor: {res['quasi_static']['design_factor_dll']}")
        print(f"Axial DLL / Ult Force     : {res['quasi_static']['dll_axial_force_kn']} kN / {res['quasi_static']['ult_design_force_kn']} kN")
        print(f"Miles' Random Vib (3-sig) : {res['vibration']['miles_grms']} Grms ({res['vibration']['miles_3sigma_peak_g']} g peak, Q={res['vibration']['transmissibility_q']})")
        print(f"COPV / Tank Burst Margin  : MDP={res['pressure_vessel']['mdp_bar']} bar, Burst={res['pressure_vessel']['burst_pressure_bar']} bar, MoS=+{res['pressure_vessel']['burst_mos']}")
        print(f"Min Structural MoS (Y/U)  : +{res['mos_matrix']['min_mos_yield']} / +{res['mos_matrix']['min_mos_ult']}")
        print(f"ECSS-E-ST-32-10C Audit    : {res['pass_count']}/{res['total_checks']} PASS (Certified: {res['certified']})")


if __name__ == "__main__":
    main()
