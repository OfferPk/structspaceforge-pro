/**
 * StructSpaceForge Pro (v1.0.0) — Core ECSS-E-ST-32-10C Rev. 2 & ECSS-E-ST-32-02C Rev. 2 Structural Engine
 * Standards:
 *  - ECSS-E-ST-32-10C Rev. 2 (Structural factors of safety for spaceflight hardware)
 *  - ECSS-E-ST-32-02C Rev. 2 (Structural design and verification of pressurized hardware)
 *  - ECSS-E-HB-32-26A (Spacecraft mechanical loads analysis handbook — Miles' Equation)
 */

export const ECSS_32_CONSTANTS = {
  G0_M_S2: 9.80665,
  // ECSS-E-ST-32-10C Rev. 2 Table 5-1 Normative Factors of Safety
  FOS_TABLE: {
    satellite_metallic_tested: { fosy: 1.10,osu: 1.25, label: "Satellite Metallic (Verified by Test: FOSY=1.10, FOSU=1.25)" },
    satellite_metallic_analysis: { fosy: 1.25,osu: 2.00, label: "Satellite Metallic (Verified by Analysis Only: FOSY=1.25, FOSU=2.00)" },
    satellite_frp_tested: { fosy: 1.25,osu: 1.25, label: "Satellite FRP Composite (Verified by Test: FOSU=1.25)" },
    satellite_frp_analysis: { fosy: 1.50,osu: 2.00, label: "Satellite FRP Composite (Analysis Only: FOSU=2.00)" },
    man_rated_launch: { fosy: 1.25,osu: 1.40, label: "Man-Rated Spacecraft Launch (FOSY=1.25, FOSU=1.40)" },
    man_rated_orbit: { fosy: 1.10,osu: 1.50, label: "Man-Rated Spacecraft On-Orbit (FOSY=1.10, FOSU=1.50)" }
  },
  // ECSS-E-ST-32-02C Rev. 2 Pressurized Hardware Proof & Burst Factors
  PRESSURE_VESSEL_FACTORS: {
    metallic_tank: { jProof: 1.25, jBurst: 1.50, label: "Metallic Propellant Tank (j_proof=1.25, j_burst=1.50)" },
    copv_vessel: { jProof: 1.50, jBurst: 2.00, label: "Composite Overwrapped Pressure Vessel COPV (j_proof=1.50, j_burst=2.00)" }
  }
};

export const MISSION_PRESETS = {
  falcon9_rideshare_smallsat: {
    id: "falcon9_rideshare_smallsat",
    name: "Falcon 9 Rideshare ESPA SmallSat Bus (Al 7075-T7351, Verified by Test)",
    vehicleClass: "satellite_metallic_tested",
    spacecraftMassKg: 245.0,
    axialQuasiStaticG: 8.5,
    lateralQuasiStaticG: 4.0,
    modelFactorKm: 1.10,
    projectFactorKp: 1.05,
    qualificationFactorKq: 1.25,
    localDesignFactorKld: 1.00,
    marginPolicyFactorKmp: 1.00,
    thermalRelievingLoad: true,
    thermalRelievingFos: 1.00,
    busAxialFreqHz: 52.0,
    busLateralFreqHz: 24.5,
    lvMinAxialFreqHz: 35.0,
    lvMinLateralFreqHz: 15.0,
    panelNaturalFreqHz: 118.0,
    dampingRatioZeta: 0.025,
    randomPsdG2PerHz: 0.08,
    vesselType: "copv_vessel",
    meopBar: 310.0,
    vesselRadiusMm: 145.0,
    vesselWallThicknessMm: 4.8,
    vesselAllowableUltMpa: 2250.0,
    structuralElements: [
      { id: "STR-01", component: "Primary Separation Ring Skirt", material: "Al 7075-T7351", limitStressMpa: 215.0, allowYieldMpa: 435.0, allowUltMpa: 505.0, critical: true },
      { id: "STR-02", component: " +Z Optical Bench Shear Panel", material: "Al 6061-T6", limitStressMpa: 132.0, allowYieldMpa: 255.0, allowUltMpa: 290.0, critical: true },
      { id: "STR-03", component: "Reaction Wheel Titanium Bracket", material: "Ti-6Al-4V", limitStressMpa: 410.0, allowYieldMpa: 825.0, allowUltMpa: 895.0, critical: true },
      { id: "STR-04", component: "Solar Array Yoke Root Hinge", material: "Al 7075-T7351", limitStressMpa: 238.0, allowYieldMpa: 435.0, allowUltMpa: 505.0, critical: false },
      { id: "STR-05", component: "Propulsion Deck Strut Tube", material: "Ti-6Al-4V", limitStressMpa: 385.0, allowYieldMpa: 825.0, allowUltMpa: 895.0, critical: true }
    ]
  },
  ariane6_geo_central_tube: {
    id: "ariane6_geo_central_tube",
    name: "Ariane 6 GEO Telecom CFRP Central Cylinder (FRP Tested, 4,800 kg)",
    vehicleClass: "satellite_frp_tested",
    spacecraftMassKg: 4800.0,
    axialQuasiStaticG: 6.2,
    lateralQuasiStaticG: 2.5,
    modelFactorKm: 1.10,
    projectFactorKp: 1.05,
    qualificationFactorKq: 1.25,
    localDesignFactorKld: 1.05,
    marginPolicyFactorKmp: 1.00,
    thermalRelievingLoad: true,
    thermalRelievingFos: 1.00,
    busAxialFreqHz: 39.5,
    busLateralFreqHz: 17.8,
    lvMinAxialFreqHz: 31.0,
    lvMinLateralFreqHz: 12.0,
    panelNaturalFreqHz: 88.0,
    dampingRatioZeta: 0.020,
    randomPsdG2PerHz: 0.06,
    vesselType: "copv_vessel",
    meopBar: 280.0,
    vesselRadiusMm: 320.0,
    vesselWallThicknessMm: 9.2,
    vesselAllowableUltMpa: 2400.0,
    structuralElements: [
      { id: "STR-01", component: "CFRP Central Thrust Cone Shell", material: "M55J/Cyanate Ester", limitStressMpa: 310.0, allowYieldMpa: 640.0, allowUltMpa: 780.0, critical: true },
      { id: "STR-02", component: "LVA 2624 Clampband Interface Ring", material: "Al 7075-T7351", limitStressMpa: 205.0, allowYieldMpa: 435.0, allowUltMpa: 505.0, critical: true },
      { id: "STR-03", component: "North/South Radiator Honeycomb Core", material: "Al 5056 / Facesheet", limitStressMpa: 118.0, allowYieldMpa: 245.0, allowUltMpa: 285.0, critical: false },
      { id: "STR-04", component: "Ka-Band Reflector Hold-Down Bipod", material: "Ti-6Al-4V", limitStressMpa: 390.0, allowYieldMpa: 825.0, allowUltMpa: 895.0, critical: true },
      { id: "STR-05", component: "Xenon Tank Polar Boss Fitting", material: "Ti-6Al-4V", limitStressMpa: 365.0, allowYieldMpa: 825.0, allowUltMpa: 895.0, critical: true }
    ]
  },
  man_rated_orbital_module: {
    id: "man_rated_orbital_module",
    name: "Man-Rated Crew Orbital Transfer Module (Launch Class, Al-Li 2195)",
    vehicleClass: "man_rated_launch",
    spacecraftMassKg: 9200.0,
    axialQuasiStaticG: 5.5,
    lateralQuasiStaticG: 2.0,
    modelFactorKm: 1.10,
    projectFactorKp: 1.05,
    qualificationFactorKq: 1.40,
    localDesignFactorKld: 1.05,
    marginPolicyFactorKmp: 1.00,
    thermalRelievingLoad: true,
    thermalRelievingFos: 1.00,
    busAxialFreqHz: 44.0,
    busLateralFreqHz: 19.5,
    lvMinAxialFreqHz: 32.0,
    lvMinLateralFreqHz: 14.0,
    panelNaturalFreqHz: 96.0,
    dampingRatioZeta: 0.030,
    randomPsdG2PerHz: 0.05,
    vesselType: "metallic_tank",
    meopBar: 24.0,
    vesselRadiusMm: 210.0,
    vesselWallThicknessMm: 3.5,
    vesselAllowableUltMpa: 895.0,
    structuralElements: [
      { id: "STR-01", component: "Crew Cabin Pressure Bulkhead Ring", material: "Al-Li 2195-T8", limitStressMpa: 220.0, allowYieldMpa: 490.0, allowUltMpa: 545.0, critical: true },
      { id: "STR-02", component: "Docking Mechanism Axial Load Ring", material: "Ti-6Al-4V", limitStressMpa: 375.0, allowYieldMpa: 825.0, allowUltMpa: 895.0, critical: true },
      { id: "STR-03", component: "ECLSS Rack Secondary Longerons", material: "Al 7075-T7351", limitStressMpa: 195.0, allowYieldMpa: 435.0, allowUltMpa: 505.0, critical: true },
      { id: "STR-04", component: "Micrometeoroid Whipple Shield Standoff", material: "Al 6061-T6", limitStressMpa: 112.0, allowYieldMpa: 255.0, allowUltMpa: 290.0, critical: false },
      { id: "STR-05", component: "Service Module Engine Thrust Frame", material: "Ti-6Al-4V", limitStressMpa: 395.0, allowYieldMpa: 825.0, allowUltMpa: 895.0, critical: true }
    ]
  }
};

export function validateStructuralConfig(config) {
  if (!config || typeof config !== "object") {
    throw new Error("Structural configuration object is required.");
  }
  if (!ECSS_32_CONSTANTS.FOS_TABLE[config.vehicleClass]) {
    throw new Error(`Unsupported ECSS vehicleClass: ${config.vehicleClass}`);
  }
  if (Number(config.spacecraftMassKg) <= 0) {
    throw new Error("Spacecraft mass must be positive (kg).");
  }
  if (Number(config.modelFactorKm) < 1.0 || Number(config.projectFactorKp) < 1.0) {
    throw new Error("ECSS design factors K_M and K_P must be >= 1.0.");
  }
  if (Number(config.dampingRatioZeta) <= 0 || Number(config.dampingRatioZeta) >= 1.0) {
    throw new Error("Structural damping ratio zeta must be in (0, 1).");
  }
  return true;
}

/**
 * Computes Quasi-Static Launch Loads & ECSS-E-ST-32-10C Design Factors (Table 4-1).
 */
export function solveQuasiStaticLoads(config) {
  validateStructuralConfig(config);
  const fosSpec = ECSS_32_CONSTANTS.FOS_TABLE[config.vehicleClass];
  const massKg = Number(config.spacecraftMassKg);
  const gAx = Number(config.axialQuasiStaticG);
  const gLat = Number(config.lateralQuasiStaticG);
  const km = Number(config.modelFactorKm);
  const kp = Number(config.projectFactorKp);
  const kq = Number(config.qualificationFactorKq);
  const kld = Number(config.localDesignFactorKld);
  const kmp = Number(config.marginPolicyFactorKmp);

  // Equivalent combined resultant limit load factor (g)
  const combinedLimitG = Math.sqrt(gAx * gAx + gLat * gLat);
  const designFactorDll = km * kp; // DLL = LL * KM * KP
  const coefYieldB = fosSpec.fosy * kld * kmp; // Coef B = FOSY * KLD * KMP
  const coefUltC = fosSpec.osu * kld * kmp;    // Coef C = FOSU * KLD * KMP

  const limitAxialForceKn = (massKg * gAx * ECSS_32_CONSTANTS.G0_M_S2) / 1000.0;
  const dllAxialForceKn = limitAxialForceKn * designFactorDll;
  const qualAxialForceKn = dllAxialForceKn * kq;
  const yieldDesignForceKn = dllAxialForceKn * coefYieldB;
  const ultDesignForceKn = dllAxialForceKn * coefUltC;

  return {
    vehicleClass: config.vehicleClass,
    fosy: fosSpec.fosy,
    fosu: fosSpec.osu,
    combinedLimitG: Number(combinedLimitG.toFixed(3)),
    designFactorDll: Number(designFactorDll.toFixed(4)),
    coefYieldB: Number(coefYieldB.toFixed(4)),
    coefUltC: Number(coefUltC.toFixed(4)),
    limitAxialForceKn: Number(limitAxialForceKn.toFixed(2)),
    dllAxialForceKn: Number(dllAxialForceKn.toFixed(2)),
    qualAxialForceKn: Number(qualAxialForceKn.toFixed(2)),
    yieldDesignForceKn: Number(yieldDesignForceKn.toFixed(2)),
    ultDesignForceKn: Number(ultDesignForceKn.toFixed(2))
  };
}

/**
 * Evaluates Miles' Equation for 1-DOF Random Vibration & Octave Modal Frequency Separation (ECSS-E-HB-32-26A).
 */
export function analyzeVibrationAndModal(config) {
  const fnPanel = Number(config.panelNaturalFreqHz);
  const zeta = Number(config.dampingRatioZeta);
  const psd = Number(config.randomPsdG2PerHz);
  const qFactor = 1.0 / (2.0 * zeta);

  // Miles' Equation: G_rms = sqrt((pi / 2) * fn * Q * PSD)
  const gRms = Math.sqrt((Math.PI / 2.0) * fnPanel * qFactor * psd);
  const g3SigmaPeak = 3.0 * gRms;

  const fAx = Number(config.busAxialFreqHz);
  const fLat = Number(config.busLateralFreqHz);
  const lvAxMin = Number(config.lvMinAxialFreqHz);
  const lvLatMin = Number(config.lvMinLateralFreqHz);

  const axialStiffnessCompliant = fAx >= lvAxMin;
  const lateralStiffnessCompliant = fLat >= lvLatMin;
  // Octave rule between primary bus axial mode and secondary panel mode: f_panel / f_bus >= sqrt(2) (1.414)
  const modalRatio = fnPanel / Math.max(1.0, fAx);
  const octaveSeparationCompliant = modalRatio >= Math.SQRT2;

  return {
    panelNaturalFreqHz: Number(fnPanel.toFixed(1)),
    dampingRatioZeta: Number(zeta.toFixed(4)),
    transmissibilityQ: Number(qFactor.toFixed(2)),
    randomPsdG2PerHz: Number(psd.toFixed(4)),
    milesGrms: Number(gRms.toFixed(2)),
    miles3SigmaPeakG: Number(g3SigmaPeak.toFixed(2)),
    busAxialFreqHz: Number(fAx.toFixed(1)),
    busLateralFreqHz: Number(fLat.toFixed(1)),
    lvMinAxialFreqHz: Number(lvAxMin.toFixed(1)),
    lvMinLateralFreqHz: Number(lvLatMin.toFixed(1)),
    modalRatio: Number(modalRatio.toFixed(2)),
    axialStiffnessCompliant,
    lateralStiffnessCompliant,
    octaveSeparationCompliant
  };
}

/**
 * Evaluates Pressurized Hardware / COPV Proof & Burst Factors per ECSS-E-ST-32-02C Rev. 2.
 */
export function analyzePressurizedHardware(config) {
  const pvSpec = ECSS_32_CONSTANTS.PRESSURE_VESSEL_FACTORS[config.vesselType || "copv_vessel"];
  const meopBar = Number(config.meopBar);
  const km = Number(config.modelFactorKm);
  const kp = Number(config.projectFactorKp);

  // ECSS-E-ST-32-02C Rev. 2: MDP = MEOP * KM * KP
  const mdpBar = meopBar * km * kp;
  const proofPressureBar = mdpBar * pvSpec.jProof;
  const burstPressureBar = mdpBar * pvSpec.jBurst;

  // Thin-walled spherical/cylindrical hoop stress at burst pressure: sigma = (P * r) / t (1 bar = 0.1 MPa)
  const rMm = Number(config.vesselRadiusMm);
  const tMm = Number(config.vesselWallThicknessMm);
  const burstPressureMpa = burstPressureBar * 0.1;
  const burstHoopStressMpa = (burstPressureMpa * rMm) / Math.max(0.1, tMm);
  const allowUltMpa = Number(config.vesselAllowableUltMpa);
  const burstMos = allowUltMpa / Math.max(1e-6, burstHoopStressMpa) - 1.0;

  return {
    vesselType: config.vesselType,
    jProof: pvSpec.jProof,
    jBurst: pvSpec.jBurst,
    meopBar: Number(meopBar.toFixed(1)),
    mdpBar: Number(mdpBar.toFixed(2)),
    proofPressureBar: Number(proofPressureBar.toFixed(2)),
    burstPressureBar: Number(burstPressureBar.toFixed(2)),
    burstHoopStressMpa: Number(burstHoopStressMpa.toFixed(1)),
    allowUltMpa: Number(allowUltMpa.toFixed(1)),
    burstMos: Number(burstMos.toFixed(3)),
    burstCompliant: burstMos >= 0.0
  };
}

/**
 * Evaluates Yield and Ultimate Margins of Safety (MoS_Y, MoS_U) across primary/secondary structural elements.
 */
export function evaluateStructuralElementsMoS(config, qsLoads) {
  const dllFactor = qsLoads.designFactorDll;
  const coefYieldB = qsLoads.coefYieldB;
  const coefUltC = qsLoads.coefUltC;

  const elements = (config.structuralElements || []).map((el, index) => {
    const limitMpa = Number(el.limitStressMpa);
    const dllStressMpa = limitMpa * dllFactor;
    const yieldDesignStressMpa = dllStressMpa * coefYieldB;
    const ultDesignStressMpa = dllStressMpa * coefUltC;

    const allowY = Number(el.allowYieldMpa);
    const allowU = Number(el.allowUltMpa);

    const mosYield = allowY / Math.max(1e-6, yieldDesignStressMpa) - 1.0;
    const mosUlt = allowU / Math.max(1e-6, ultDesignStressMpa) - 1.0;
    const minMos = Math.min(mosYield, mosUlt);
    const compliant = mosYield >= 0.0 && mosUlt >= 0.0;

    return {
      index,
      id: el.id,
      component: el.component,
      material: el.material,
      critical: Boolean(el.critical),
      limitStressMpa: Number(limitMpa.toFixed(1)),
      dllStressMpa: Number(dllStressMpa.toFixed(1)),
      yieldDesignStressMpa: Number(yieldDesignStressMpa.toFixed(1)),
      ultDesignStressMpa: Number(ultDesignStressMpa.toFixed(1)),
      allowYieldMpa: Number(allowY.toFixed(1)),
      allowUltMpa: Number(allowU.toFixed(1)),
      mosYield: Number(mosYield.toFixed(3)),
      mosUlt: Number(mosUlt.toFixed(3)),
      minMos: Number(minMos.toFixed(3)),
      status: compliant ? "MOS_POSITIVE_PASS" : "STRUCTURAL_OVERSTRESS_FAIL",
      compliant
    };
  });

  const minMosYield = Math.min(...elements.map((e) => e.mosYield));
  const minMosUlt = Math.min(...elements.map((e) => e.mosUlt));
  const failedCount = elements.filter((e) => !e.compliant).length;

  return {
    elements,
    minMosYield: Number(minMosYield.toFixed(3)),
    minMosUlt: Number(minMosUlt.toFixed(3)),
    allPositiveMos: failedCount === 0,
    failedCount
  };
}

export function runCompleteStructuralSynthesis(config) {
  const qsLoads = solveQuasiStaticLoads(config);
  const vibration = analyzeVibrationAndModal(config);
  const pressureVessel = analyzePressurizedHardware(config);
  const mosMatrix = evaluateStructuralElementsMoS(config, qsLoads);

  return {
    timestampIso: "2026-10-21T09:20:00Z",
    config,
    qsLoads,
    vibration,
    pressureVessel,
    mosMatrix
  };
}

export function exportECSSStructuralManifestXML(synthesis, auditReport) {
  const { config, qsLoads, vibration, pressureVessel, mosMatrix } = synthesis;
  const elXml = mosMatrix.elements
    .map(
      (e) =>
        `    <StructuralElement id="${e.id}" component="${e.component}" material="${e.material}" dllStressMpa="${e.dllStressMpa}" mosYield="${e.mosYield}" mosUlt="${e.mosUlt}" status="${e.status}" />`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<ECSS_StructuralSystemManifest standard="ECSS-E-ST-32-10C-Rev.2" pressureStandard="ECSS-E-ST-32-02C-Rev.2" version="1.0.0">
  <MissionHeader name="${config.name}" vehicleClass="${config.vehicleClass}" massKg="${config.spacecraftMassKg}" />
  <QuasiStaticLoads fosy="${qsLoads.fosy}" fosu="${qsLoads.fosu}" dllFactor="${qsLoads.designFactorDll}" dllAxialForceKn="${qsLoads.dllAxialForceKn}" ultDesignForceKn="${qsLoads.ultDesignForceKn}" />
  <ModalAndRandomVibration axialHz="${vibration.busAxialFreqHz}" lateralHz="${vibration.busLateralFreqHz}" modalRatio="${vibration.modalRatio}" milesGrms="${vibration.milesGrms}" miles3SigmaPeakG="${vibration.miles3SigmaPeakG}" />
  <PressurizedHardware type="${pressureVessel.vesselType}" meopBar="${pressureVessel.meopBar}" mdpBar="${pressureVessel.mdpBar}" proofBar="${pressureVessel.proofPressureBar}" burstBar="${pressureVessel.burstPressureBar}" burstMos="${pressureVessel.burstMos}" />
  <MarginOfSafetyMatrix minMosYield="${mosMatrix.minMosYield}" minMosUlt="${mosMatrix.minMosUlt}" failedElements="${mosMatrix.failedCount}">
${elXml}
  </MarginOfSafetyMatrix>
  <NormativeAudit passCount="${auditReport.passCount}" totalChecks="${auditReport.totalChecks}" certified="${auditReport.certified}" />
</ECSS_StructuralSystemManifest>`;
}
