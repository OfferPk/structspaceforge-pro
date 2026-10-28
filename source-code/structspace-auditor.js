/**
 * StructSpaceForge Pro (v1.0.0) — 10-Point Normative Compliance Auditor
 * Validates spacecraft structural architecture against ECSS-E-ST-32-10C Rev. 2, ECSS-E-ST-32-02C Rev. 2, and ECSS-E-HB-32-26A.
 */

export function runECSS3210CAudit(synthesis) {
  const { config, qsLoads, vibration, pressureVessel, mosMatrix } = synthesis;

  const checks = [
    {
      id: "ECSS-32-01",
      clause: "ECSS-E-ST-32-10C Table 5-1",
      title: "Normative Yield & Ultimate Factors of Safety (FOSY / FOSU)",
      requirement: "FOSY >= 1.10 and FOSU >= 1.25 matching hardware verification class",
      measured: `FOSY = ${qsLoads.fosy.toFixed(2)}, FOSU = ${qsLoads.fosu.toFixed(2)} (${config.vehicleClass})`,
      passed: qsLoads.fosy >= 1.10 && qsLoads.fosu >= 1.25
    },
    {
      id: "ECSS-32-02",
      clause: "ECSS-E-ST-32-10C Table 4-1",
      title: "Multiplicative Design Limit Load (DLL = LL * K_M * K_P) Chain",
      requirement: "K_M >= 1.05 and K_P >= 1.00 applied to quasi-static limit loads",
      measured: `DLL Factor = ${qsLoads.designFactorDll.toFixed(4)} (K_M=${config.modelFactorKm}, K_P=${config.projectFactorKp})`,
      passed: Number(config.modelFactorKm) >= 1.05 && Number(config.projectFactorKp) >= 1.00 && qsLoads.dllAxialForceKn > qsLoads.limitAxialForceKn
    },
    {
      id: "ECSS-32-03",
      clause: "ECSS-E-ST-32-10C Clause 4.2",
      title: "Qualification Load Factor Envelope (K_Q >= 1.25)",
      requirement: "Qualification test factor K_Q >= 1.25 (or 1.40 man-rated)",
      measured: `K_Q = ${Number(config.qualificationFactorKq).toFixed(2)} (F_qual = ${qsLoads.qualAxialForceKn} kN)`,
      passed: Number(config.qualificationFactorKq) >= 1.25
    },
    {
      id: "ECSS-32-04",
      clause: "ECSS-E-ST-32-10C Clause 5.1.2",
      title: "Relieving Thermally Induced Load Factor (FOS_thermal = 1.0)",
      requirement: "When thermal loads are relieving, FOSY and FOSU shall equal 1.00",
      measured: `Relieving Thermal FOS = ${Number(config.thermalRelievingFos).toFixed(2)}`,
      passed: Boolean(config.thermalRelievingLoad) && Number(config.thermalRelievingFos) === 1.0
    },
    {
      id: "ECSS-32-05",
      clause: "ECSS-E-HB-32-26A Clause 6.2",
      title: "Primary Launch Vehicle Axial & Lateral Stiffness Isolation",
      requirement: `f_axial >= ${vibration.lvMinAxialFreqHz} Hz and f_lat >= ${vibration.lvMinLateralFreqHz} Hz`,
      measured: `f_axial = ${vibration.busAxialFreqHz} Hz, f_lat = ${vibration.busLateralFreqHz} Hz`,
      passed: vibration.axialStiffnessCompliant && vibration.lateralStiffnessCompliant
    },
    {
      id: "ECSS-32-06",
      clause: "ECSS-E-HB-32-26A Clause 6.4",
      title: "Secondary Structure Octave Modal Decoupling (f_panel / f_bus >= 1.414)",
      requirement: "Secondary panel natural frequency >= sqrt(2) * primary bus axial frequency",
      measured: `Ratio = ${vibration.modalRatio.toFixed(2)} (${vibration.panelNaturalFreqHz} Hz / ${vibration.busAxialFreqHz} Hz)`,
      passed: vibration.octaveSeparationCompliant
    },
    {
      id: "ECSS-32-07",
      clause: "ECSS-E-HB-32-26A Clause 8.3",
      title: "Miles' Equation 1-DOF Random Vibration 3-Sigma Peak Envelope",
      requirement: "3-sigma quasi-static random vibration acceleration <= 65.0 g",
      measured: `G_rms = ${vibration.milesGrms} g, 3-Sigma Peak = ${vibration.miles3SigmaPeakG} g (Q=${vibration.transmissibilityQ})`,
      passed: vibration.milesGrms > 0 && vibration.miles3SigmaPeakG <= 65.0
    },
    {
      id: "ECSS-32-08",
      clause: "ECSS-E-ST-32-02C Clause 4.3",
      title: "Pressurized Hardware / COPV Proof & Burst Pressure Margin",
      requirement: `j_proof = ${pressureVessel.jProof}, j_burst = ${pressureVessel.jBurst}, and Burst MoS >= 0.0`,
      measured: `MDP=${pressureVessel.mdpBar} bar, Burst=${pressureVessel.burstPressureBar} bar, Burst MoS=+${pressureVessel.burstMos}`,
      passed: pressureVessel.burstCompliant && pressureVessel.jBurst >= 1.5
    },
    {
      id: "ECSS-32-09",
      clause: "ECSS-E-ST-32-10C Clause 5.2",
      title: "Positive Yield Margin of Safety (MoS_Y >= 0.0) Across All Elements",
      requirement: "MoS_Y = (sigma_allow,Y / (sigma_DLL * FOSY * K_LD * K_MP)) - 1 >= 0.0",
      measured: `Min MoS_Y = ${mosMatrix.minMosYield >= 0 ? "+" : ""}${mosMatrix.minMosYield.toFixed(3)}`,
      passed: mosMatrix.minMosYield >= 0.0
    },
    {
      id: "ECSS-32-10",
      clause: "ECSS-E-ST-32-10C Clause 5.3",
      title: "Positive Ultimate Margin of Safety (MoS_U >= 0.0) Across All Elements",
      requirement: "MoS_U = (sigma_allow,U / (sigma_DLL * FOSU * K_LD * K_MP)) - 1 >= 0.0",
      measured: `Min MoS_U = ${mosMatrix.minMosUlt >= 0 ? "+" : ""}${mosMatrix.minMosUlt.toFixed(3)} (${mosMatrix.failedCount} failed)`,
      passed: mosMatrix.minMosUlt >= 0.0 && mosMatrix.allPositiveMos
    }
  ];

  const passCount = checks.filter((c) => c.passed).length;
  return {
    standard: "ECSS-E-ST-32-10C Rev. 2 & ECSS-E-ST-32-02C Rev. 2",
    passCount,
    totalChecks: checks.length,
    scorePct: Math.round((passCount / checks.length) * 100),
    certified: passCount === checks.length,
    checks
  };
}
