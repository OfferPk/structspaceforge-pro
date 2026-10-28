\<\!DOCTYPE html\>  
\<html lang="en" class="dark"\>  
\<head\>  
  \<meta charset="UTF-8" /\>  
  \<meta name="viewport" content="width=device-width, initial-scale=1.0" /\>  
  \<title\>StructSpaceForge Pro v1.0.0 — ECSS-E-ST-32-10C Rev.2 Spacecraft Structural Loads \&amp; Margin of Safety Studio\</title\>  
  \<script src="https\://cdn.tailwindcss.com/3.4.17" async\>\</script\>  
  \<link rel="preconnect" href="https\://fonts.googleapis.com" /\>  
  \<link rel="preconnect" href="https\://fonts.gstatic.com" crossorigin /\>  
  \<link href="https\://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700\&family=JetBrains+Mono:wght@400;500;600;700\&display=swap" rel="stylesheet" /\>  
  \<style\>  
    /\* Air-Gapped / Offline Cleanroom Utility Fallback CSS \*/  
    \*, \*::before, \*::after { box-sizing: border-box; }  
    body { margin: 0; font-family: 'Inter', system-ui, \-apple-system, sans-serif; background-color: \#060b16; color: \#e2e8f0; }  
    header { background: rgba(2, 6, 23, 0.94); border-bottom: 1px solid \#1e293b; padding: 12px 24px; }  
    main { max-width: 1280px; margin: 0 auto; padding: 20px 24px; }  
    .max-w-7xl { max-width: 1280px; margin: 0 auto; }  
    .flex { display: flex; }  
    .flex-wrap { flex-wrap: wrap; }  
    .items-center { align-items: center; }  
    .justify-between { justify-content: space-between; }  
    .gap-2 { gap: 8px; }  
    .gap-3 { gap: 12px; }  
    .gap-4 { gap: 16px; }  
    .gap-6 { gap: 24px; }  
    .grid { display: grid; }  
    .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }  
    .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }  
    .lg\\:col-span-4 { grid-column: span 4 / span 4; }  
    .lg\\:col-span-8 { grid-column: span 8 / span 8; }  
    .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }  
    .space-y-6 \> \* \+ \* { margin-top: 20px; }  
    .space-y-4 \> \* \+ \* { margin-top: 14px; }  
    .space-y-3 \> \* \+ \* { margin-top: 10px; }  
    .space-y-1\\.5 \> \* \+ \* { margin-top: 6px; }  
    .rounded-xl { border-radius: 12px; }  
    .rounded-lg { border-radius: 8px; }  
    .rounded { border-radius: 5px; }  
    .p-3 { padding: 12px; }  
    .p-4 { padding: 16px; }  
    .p-5 { padding: 20px; }  
    .px-3 { padding-left: 12px; padding-right: 12px; }  
    .py-2 { padding-top: 8px; padding-bottom: 8px; }  
    .py-2\\.5 { padding-top: 9px; padding-bottom: 9px; }  
    .mt-1 { margin-top: 4px; }  
    .mt-4 { margin-top: 16px; }  
    .mb-1 { margin-bottom: 4px; }  
    .mb-4 { margin-bottom: 16px; }  
    .pb-3 { padding-bottom: 12px; }  
    .w-full { width: 100%; }  
    .h-60 { height: 240px; }  
    .text-xs { font-size: 12px; line-height: 1.4; }  
    .text-sm { font-size: 14px; line-height: 1.4; }  
    .text-lg { font-size: 18px; line-height: 1.3; }  
    .text-xl { font-size: 21px; line-height: 1.25; }  
    .font-bold { font-weight: 700; }  
    .font-semibold { font-weight: 600; }  
    .uppercase { text-transform: uppercase; }  
    .text-right { text-align: right; }  
    .text-left { text-align: left; }  
    .text-white { color: \#ffffff; }  
    .text-slate-100 { color: \#f1f5f9; }  
    .text-slate-200 { color: \#e2e8f0; }  
    .text-slate-300 { color: \#cbd5e1; }  
    .text-slate-400 { color: \#94a3b8; }  
    .text-sky-300 { color: \#7dd3fc; }  
    .text-sky-400 { color: \#38bdf8; }  
    .text-emerald-300 { color: \#6ee7b7; }  
    .text-emerald-400 { color: \#34d399; }  
    .text-amber-300 { color: \#fcd34d; }  
    .text-amber-400 { color: \#fbbf24; }  
    .text-rose-300 { color: \#fda4af; }  
    .text-rose-400 { color: \#fb7185; }  
    .bg-slate-900 { background-color: \#0f172a; }  
    .bg-slate-900\\/70 { background-color: rgba(15, 23, 42, 0.75); }  
    .bg-slate-950\\/90 { background-color: rgba(2, 6, 23, 0.9); }  
    .bg-slate-800 { background-color: \#1e293b; }  
    .bg-sky-500 { background-color: \#0ea5e9; color: \#020617; }  
    .bg-sky-500\\/15 { background-color: rgba(14, 165, 233, 0.16); }  
    .bg-emerald-500\\/15 { background-color: rgba(16, 185, 129, 0.16); }  
    .bg-amber-500\\/15 { background-color: rgba(245, 158, 11, 0.16); }  
    .bg-rose-500\\/20 { background-color: rgba(244, 63, 94, 0.22); }  
    .border { border: 1px solid \#334155; }  
    .border-b { border-bottom: 1px solid \#1e293b; }  
    .border-slate-700 { border-color: \#334155; }  
    .border-slate-800 { border-color: \#1e293b; }  
    .hidden { display: none \!important; }  
    table { width: 100%; border-collapse: collapse; }  
    th, td { border-bottom: 1px solid rgba(30, 41, 59, 0.75); }  
    select, button, input\[type="range"\] { cursor: pointer; }  
    .mono { font-family: 'JetBrains Mono', monospace; }  
    .cockpit-card {  
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.92) 0%, rgba(9, 14, 28, 0.96) 100%);  
      border: 1px solid rgba(56, 189, 248, 0.18);  
      box-shadow: 0 10px 30px \-10px rgba(0, 0, 0, 0.65);  
    }  
  \</style\>  
\</head\>  
\<body class="min-h-screen antialiased selection:bg-sky-500 selection:text-slate-950"\>  
  \<\!-- Top Avionics Header \--\>  
  \<header class="border-b border-slate-800/90 bg-slate-950/90 backdrop-blur sticky top-0 z-30"\>  
    \<div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3"\>  
      \<div class="flex items-center gap-3"\>  
        \<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 font-bold text-slate-950 mono text-sm"\>  
          STR  
        \</div\>  
        \<div\>  
          \<div class="flex items-center gap-2 flex-wrap"\>  
            \<h1 class="text-base sm:text-lg font-bold tracking-tight text-white"\>StructSpaceForge Pro\</h1\>  
            \<span class="text-xs mono px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-400/30"\>v1.0.0\</span\>  
            \<span class="text-xs mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"\>ECSS-E-ST-32-10C Rev.2 \&amp; 32-02C\</span\>  
          \</div\>  
          \<p class="text-xs text-slate-400"\>Spacecraft Structural Factors of Safety (FOSY/FOSU), Miles' Random Vibration, COPV Burst \&amp; Margin of Safety Studio\</p\>  
        \</div\>  
      \</div\>

      \<div class="flex items-center gap-2 flex-wrap"\>  
        \<label for="presetSelect" class="text-xs text-slate-400 mono"\>VEHICLE PRESET:\</label\>  
        \<select id="presetSelect" class="bg-slate-900 border border-slate-700 text-slate-100 text-xs rounded-lg px-3 py-2 mono focus:outline-none focus:border-sky-400"\>  
          \<option value="falcon9\_rideshare\_smallsat"\>Falcon 9 ESPA SmallSat (Al 7075-T7351, Metallic Tested)\</option\>  
          \<option value="ariane6\_geo\_central\_tube"\>Ariane 6 GEO CFRP Central Cylinder (FRP Tested, 4,800 kg)\</option\>  
          \<option value="man\_rated\_orbital\_module"\>Man-Rated Crew Orbital Module (Launch Class, Al-Li 2195)\</option\>  
        \</select\>  
        \<button id="injectOverloadBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-400/30 transition"\>  
          Inject STR-01 Overstress  
        \</button\>  
        \<button id="resetStructBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"\>  
          Reset Structure  
        \</button\>  
        \<button id="exportXmlBtn" type="button" class="text-xs mono px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition"\>  
          Export ECSS XML  
        \</button\>  
      \</div\>  
    \</div\>  
  \</header\>

  \<main class="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6"\>  
    \<\!-- Toast Notification Banner \--\>  
    \<div id="statusToast" class="hidden rounded-lg px-4 py-2.5 text-xs mono border bg-sky-950/80 border-sky-500/40 text-sky-200 flex items-center justify-between"\>  
      \<span id="statusToastText"\>Structural parameters nominal.\</span\>  
      \<button id="closeToastBtn" type="button" class="text-slate-400 hover:text-white ml-4"\>DISMISS\</button\>  
    \</div\>

    \<\!-- Top KPI Telemetry Ribbon \--\>  
    \<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>ECSS Safety Factors\</div\>  
        \<div id="kpiFosPair" class="text-xl font-bold text-sky-400 mono mt-1"\>1.10 / 1.25\</div\>  
        \<div id="kpiDllFactor" class="text-xs text-emerald-400 mono mt-1"\>DLL Factor: 1.155 (KM×KP)\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Axial Ultimate Load\</div\>  
        \<div id="kpiUltForce" class="text-xl font-bold text-white mono mt-1"\>29.47 kN\</div\>  
        \<div id="kpiDllForce" class="text-xs text-slate-300 mono mt-1"\>DLL Axial: 23.58 kN\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Miles' 3-Sigma Vib\</div\>  
        \<div id="kpiMilesPeak" class="text-xl font-bold text-sky-300 mono mt-1"\>51.90 g\</div\>  
        \<div id="kpiMilesGrms" class="text-xs text-slate-300 mono mt-1"\>17.30 Grms (Q \= 20.0)\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>Minimum Structural MoS\</div\>  
        \<div id="kpiMinMos" class="text-xl font-bold text-emerald-400 mono mt-1"\>+0.469\</div\>  
        \<div id="kpiCOPVMos" class="text-xs text-slate-300 mono mt-1"\>COPV Burst MoS: \+0.040\</div\>  
      \</div\>  
      \<div class="cockpit-card rounded-xl p-4"\>  
        \<div class="text-xs text-slate-400 mono uppercase"\>ECSS-E-ST-32-10C Audit\</div\>  
        \<div id="kpiAuditScore" class="text-xl font-bold text-emerald-400 mono mt-1"\>10 / 10 PASS\</div\>  
        \<div id="kpiAuditBadge" class="text-xs text-emerald-300 mono mt-1"\>ECSS-E-ST-32-10C CERTIFIED\</div\>  
      \</div\>  
    \</section\>

    \<\!-- Main Workbench Grid: Left Controls \+ Right Modal/Vibration Plot & Subcards \--\>  
    \<div class="grid grid-cols-1 lg:grid-cols-12 gap-6"\>  
      \<\!-- Parametric Structural Controls \--\>  
      \<section class="lg:col-span-4 cockpit-card rounded-xl p-5 space-y-4"\>  
        \<div class="flex items-center justify-between border-b border-slate-800 pb-3"\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>1. Launch Loads \&amp; Factors\</h2\>  
          \<span class="text-xs mono text-sky-400"\>Table 4-1 / 5-1\</span\>  
        \</div\>

        \<div class="space-y-3 text-xs"\>  
          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="vehicleClassInput" class="text-slate-300"\>ECSS Hardware Verification Class\</label\>  
            \</div\>  
            \<select id="vehicleClassInput" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 mono text-slate-100"\>  
              \<option value="satellite\_metallic\_tested"\>Satellite Metallic (Tested: 1.10 / 1.25)\</option\>  
              \<option value="satellite\_metallic\_analysis"\>Satellite Metallic (Analysis Only: 1.25 / 2.00)\</option\>  
              \<option value="satellite\_frp\_tested"\>Satellite FRP Composite (Tested: 1.25 / 1.25)\</option\>  
              \<option value="man\_rated\_launch"\>Man-Rated Crew Launch (1.25 / 1.40)\</option\>  
              \<option value="man\_rated\_orbit"\>Man-Rated Crew On-Orbit (1.10 / 1.50)\</option\>  
            \</select\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="massInput" class="text-slate-300"\>Spacecraft Wet Mass (kg)\</label\>  
              \<span id="massVal" class="mono text-sky-300"\>245 kg\</span\>  
            \</div\>  
            \<input id="massInput" type="range" min="50" max="10000" step="25" value="245" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="axialGInput" class="text-slate-300"\>Quasi-Static Axial Limit Load (g)\</label\>  
              \<span id="axialGVal" class="mono text-sky-300"\>8.5 g\</span\>  
            \</div\>  
            \<input id="axialGInput" type="range" min="2.0" max="14.0" step="0.1" value="8.5" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="kmInput" class="text-slate-300"\>Model Factor K\_M (ECSS Table 4-1)\</label\>  
              \<span id="kmVal" class="mono text-sky-300"\>1.10\</span\>  
            \</div\>  
            \<input id="kmInput" type="range" min="1.00" max="1.30" step="0.01" value="1.10" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="kpInput" class="text-slate-300"\>Project Growth Factor K\_P\</label\>  
              \<span id="kpVal" class="mono text-sky-300"\>1.05\</span\>  
            \</div\>  
            \<input id="kpInput" type="range" min="1.00" max="1.25" step="0.01" value="1.05" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="axialFreqInput" class="text-slate-300"\>Bus Fundamental Axial Mode (Hz)\</label\>  
              \<span id="axialFreqVal" class="mono text-sky-300"\>52.0 Hz\</span\>  
            \</div\>  
            \<input id="axialFreqInput" type="range" min="20" max="90" step="0.5" value="52.0" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="panelFreqInput" class="text-slate-300"\>Secondary Panel Mode f\_n (Hz)\</label\>  
              \<span id="panelFreqVal" class="mono text-sky-300"\>118.0 Hz\</span\>  
            \</div\>  
            \<input id="panelFreqInput" type="range" min="45" max="220" step="1.0" value="118.0" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="psdInput" class="text-slate-300"\>Random Vibration PSD (g²/Hz)\</label\>  
              \<span id="psdVal" class="mono text-sky-300"\>0.080 g²/Hz\</span\>  
            \</div\>  
            \<input id="psdInput" type="range" min="0.01" max="0.20" step="0.005" value="0.08" class="w-full accent-sky-400" /\>  
          \</div\>

          \<div\>  
            \<div class="flex justify-between mb-1"\>  
              \<label for="meopInput" class="text-slate-300"\>Pressurant Tank MEOP (bar)\</label\>  
              \<span id="meopVal" class="mono text-sky-300"\>310 bar\</span\>  
            \</div\>  
            \<input id="meopInput" type="range" min="15" max="350" step="5" value="310" class="w-full accent-sky-400" /\>  
          \</div\>  
        \</div\>  
      \</section\>

      \<\!-- Right Column: SDOF Transmissibility & Miles' Random Vibration Plot \+ Breakdown Subcards \--\>  
      \<section class="lg:col-span-8 space-y-6"\>  
        \<div class="cockpit-card rounded-xl p-5"\>  
          \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
            \<div\>  
              \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>2. Modal Frequency Separation \&amp; Miles' 1-DOF Random Vibration Spectrum\</h2\>  
              \<p class="text-xs text-slate-400"\>Launch vehicle cutoff isolation, secondary panel transmissibility Q(f), and Yield/Ultimate Margin of Safety bars\</p\>  
            \</div\>  
            \<div class="flex items-center gap-4 text-xs mono"\>  
              \<span class="flex items-center gap-1.5 text-sky-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"\>\</span\>Transmissibility \|H(f)\|\</span\>  
              \<span class="flex items-center gap-1.5 text-emerald-400"\>\<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"\>\</span\>Element MoS\_Y / MoS\_U\</span\>  
            \</div\>  
          \</div\>

          \<div class="w-full overflow-hidden rounded-lg bg-slate-950/90 border border-slate-800/80 p-3"\>  
            \<svg id="structuralSpectrumSvg" viewBox="0 0 760 250" class="w-full h-60"\>\</svg\>  
          \</div\>

          \<\!-- Detailed Subcards \--\>  
          \<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs mono"\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>QUASI-STATIC FORCE CHAIN\</div\>  
              \<div class="flex justify-between"\>\<span\>Limit Axial Force:\</span\>\<span id="detailLimitForce" class="text-white"\>20.42 kN\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Design Limit (DLL):\</span\>\<span id="detailDllForce" class="text-white"\>23.58 kN\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Qualification (K\_Q):\</span\>\<span id="detailQualForce" class="text-sky-300"\>29.47 kN\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Ultimate Design Load:\</span\>\<span id="detailUltForce" class="text-emerald-300"\>29.47 kN\</span\>\</div\>  
            \</div\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>MODAL \&amp; MILES VIBRATION\</div\>  
              \<div class="flex justify-between"\>\<span\>Bus Axial / Lateral:\</span\>\<span id="detailBusModes" class="text-white"\>52.0 / 24.5 Hz\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Octave Ratio (f\_p/f\_b):\</span\>\<span id="detailModalRatio" class="text-emerald-300"\>2.27 (\&ge;1.41)\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Miles' G\_rms:\</span\>\<span id="detailGrms" class="text-white"\>17.30 Grms\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>3-Sigma Peak Load:\</span\>\<span id="detail3Sigma" class="text-sky-300"\>51.90 g\</span\>\</div\>  
            \</div\>  
            \<div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3 space-y-1.5"\>  
              \<div class="text-slate-400 font-semibold"\>COPV / TANK (ECSS-32-02C)\</div\>  
              \<div class="flex justify-between"\>\<span\>MDP (MEOP×KM×KP):\</span\>\<span id="detailMdpBar" class="text-white"\>358.05 bar\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Proof Pressure:\</span\>\<span id="detailProofBar" class="text-white"\>537.08 bar\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Burst Pressure:\</span\>\<span id="detailBurstBar" class="text-sky-300"\>716.10 bar\</span\>\</div\>  
              \<div class="flex justify-between"\>\<span\>Burst Hoop MoS:\</span\>\<span id="detailBurstMos" class="text-emerald-300"\>+0.040\</span\>\</div\>  
            \</div\>  
          \</div\>  
        \</div\>  
      \</section\>  
    \</div\>

    \<\!-- Section 3: Primary & Secondary Structural Elements Margin of Safety (MoS\_Y & MoS\_U) Matrix \--\>  
    \<section class="cockpit-card rounded-xl p-5"\>  
      \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
        \<div\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>3. ECSS-E-ST-32-10C Structural Elements Stress \&amp; Margin of Safety (MoS) Matrix\</h2\>  
          \<p class="text-xs text-slate-400"\>Verifies Yield Margin (MoS\_Y \&ge; 0.0) and Ultimate Margin (MoS\_U \&ge; 0.0) across metallic and composite primary/secondary load paths\</p\>  
        \</div\>  
        \<span id="mosSummaryBadge" class="text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>  
          ALL STRUCTURAL MARGINS POSITIVE  
        \</span\>  
      \</div\>

      \<div class="overflow-x-auto"\>  
        \<table class="w-full text-left border-collapse text-xs mono"\>  
          \<thead\>  
            \<tr class="border-b border-slate-800 text-slate-400 uppercase"\>  
              \<th class="py-2.5 px-3"\>Element ID\</th\>  
              \<th class="py-2.5 px-3"\>Structural Component\</th\>  
              \<th class="py-2.5 px-3"\>Material\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Limit \&sigma; (MPa)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>DLL \&sigma; (MPa)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Allow Y/U (MPa)\</th\>  
              \<th class="py-2.5 px-3 text-right"\>MoS\_Yield\</th\>  
              \<th class="py-2.5 px-3 text-right"\>MoS\_Ultimate\</th\>  
              \<th class="py-2.5 px-3"\>Status\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Action\</th\>  
            \</tr\>  
          \</thead\>  
          \<tbody id="mosTableBody" class="divide-y divide-slate-800/70"\>\</tbody\>  
        \</table\>  
      \</div\>  
    \</section\>

    \<\!-- Section 4: 10-Point Normative ECSS-E-ST-32-10C Rev. 2 & ECSS-E-ST-32-02C Compliance Auditor \--\>  
    \<section class="cockpit-card rounded-xl p-5"\>  
      \<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4"\>  
        \<div\>  
          \<h2 class="text-sm font-semibold text-white uppercase tracking-wider mono"\>4. 10-Point ECSS-E-ST-32-10C Rev. 2 \&amp; ECSS-E-ST-32-02C Normative Compliance Auditor\</h2\>  
          \<p class="text-xs text-slate-400"\>Automated verification across FOSY/FOSU tables, DLL multiplicative factors, thermal relieving loads, modal separation, Miles' vibration, and COPV burst margins\</p\>  
        \</div\>  
        \<span id="auditHeaderBadge" class="text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>  
          10 / 10 RULES VERIFIED (100%)  
        \</span\>  
      \</div\>

      \<div class="overflow-x-auto"\>  
        \<table class="w-full text-left border-collapse text-xs mono"\>  
          \<thead\>  
            \<tr class="border-b border-slate-800 text-slate-400 uppercase"\>  
              \<th class="py-2.5 px-3"\>Rule ID\</th\>  
              \<th class="py-2.5 px-3"\>ECSS Clause\</th\>  
              \<th class="py-2.5 px-3"\>Verification Requirement\</th\>  
              \<th class="py-2.5 px-3"\>Measured Telemetry\</th\>  
              \<th class="py-2.5 px-3 text-right"\>Verdict\</th\>  
            \</tr\>  
          \</thead\>  
          \<tbody id="auditTableBody" class="divide-y divide-slate-800/70"\>\</tbody\>  
        \</table\>  
      \</div\>  
    \</section\>

    \<\!-- XML Manifest Modal \--\>  
    \<section id="xmlModal" class="hidden cockpit-card rounded-xl p-5 border border-sky-500/40"\>  
      \<div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3"\>  
        \<h3 class="text-sm font-semibold text-white mono"\>ECSS-E-ST-32-10C Structural System Manifest (XML Export)\</h3\>  
        \<div class="flex items-center gap-2"\>  
          \<button id="copyXmlBtn" type="button" class="text-xs mono px-3 py-1.5 rounded bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400"\>  
            Copy XML  
          \</button\>  
          \<button id="closeXmlBtn" type="button" class="text-xs mono px-3 py-1.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"\>  
            Close  
          \</button\>  
        \</div\>  
      \</div\>  
      \<pre id="xmlOutputPre" class="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs mono text-sky-300 overflow-x-auto max-h-80"\>\</pre\>  
    \</section\>  
  \</main\>

  \<script\>  
    const ECSS\_32\_CONSTANTS \= {  
      G0\_M\_S2: 9.80665,  
      FOS\_TABLE: {  
        satellite\_metallic\_tested: { fosy: 1.10, fosu: 1.25, label: "Satellite Metallic (Verified by Test)" },  
        satellite\_metallic\_analysis: { fosy: 1.25, fosu: 2.00, label: "Satellite Metallic (Analysis Only)" },  
        satellite\_frp\_tested: { fosy: 1.25, fosu: 1.25, label: "Satellite FRP Composite (Verified by Test)" },  
        man\_rated\_launch: { fosy: 1.25, fosu: 1.40, label: "Man-Rated Spacecraft Launch" },  
        man\_rated\_orbit: { fosy: 1.10, fosu: 1.50, label: "Man-Rated Spacecraft On-Orbit" }  
      },  
      PRESSURE\_VESSEL\_FACTORS: {  
        metallic\_tank: { jProof: 1.25, jBurst: 1.50 },  
        copv\_vessel: { jProof: 1.50, jBurst: 2.00 }  
      }  
    };

    const MISSION\_PRESETS \= {  
      falcon9\_rideshare\_smallsat: {  
        id: "falcon9\_rideshare\_smallsat",  
        name: "Falcon 9 Rideshare ESPA SmallSat Bus (Al 7075-T7351, Verified by Test)",  
        vehicleClass: "satellite\_metallic\_tested",  
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
        vesselType: "copv\_vessel",  
        meopBar: 310.0,  
        vesselRadiusMm: 145.0,  
        vesselWallThicknessMm: 4.8,  
        vesselAllowableUltMpa: 2250.0,  
        structuralElements: \[  
          { id: "STR-01", component: "Primary Separation Ring Skirt", material: "Al 7075-T7351", limitStressMpa: 215.0, allowYieldMpa: 435.0, allowUltMpa: 505.0 },  
          { id: "STR-02", component: "+Z Optical Bench Shear Panel", material: "Al 6061-T6", limitStressMpa: 132.0, allowYieldMpa: 255.0, allowUltMpa: 290.0 },  
          { id: "STR-03", component: "Reaction Wheel Titanium Bracket", material: "Ti-6Al-4V", limitStressMpa: 410.0, allowYieldMpa: 825.0, allowUltMpa: 895.0 },  
          { id: "STR-04", component: "Solar Array Yoke Root Hinge", material: "Al 7075-T7351", limitStressMpa: 238.0, allowYieldMpa: 435.0, allowUltMpa: 505.0 },  
          { id: "STR-05", component: "Propulsion Deck Strut Tube", material: "Ti-6Al-4V", limitStressMpa: 385.0, allowYieldMpa: 825.0, allowUltMpa: 895.0 }  
        \]  
      },  
      ariane6\_geo\_central\_tube: {  
        id: "ariane6\_geo\_central\_tube",  
        name: "Ariane 6 GEO Telecom CFRP Central Cylinder (FRP Tested, 4,800 kg)",  
        vehicleClass: "satellite\_frp\_tested",  
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
        vesselType: "copv\_vessel",  
        meopBar: 280.0,  
        vesselRadiusMm: 320.0,  
        vesselWallThicknessMm: 9.2,  
        vesselAllowableUltMpa: 2400.0,  
        structuralElements: \[  
          { id: "STR-01", component: "CFRP Central Thrust Cone Shell", material: "M55J/Cyanate Ester", limitStressMpa: 310.0, allowYieldMpa: 640.0, allowUltMpa: 780.0 },  
          { id: "STR-02", component: "LVA 2624 Clampband Interface Ring", material: "Al 7075-T7351", limitStressMpa: 205.0, allowYieldMpa: 435.0, allowUltMpa: 505.0 },  
          { id: "STR-03", component: "North/South Radiator Honeycomb Core", material: "Al 5056 / Facesheet", limitStressMpa: 118.0, allowYieldMpa: 245.0, allowUltMpa: 285.0 },  
          { id: "STR-04", component: "Ka-Band Reflector Hold-Down Bipod", material: "Ti-6Al-4V", limitStressMpa: 390.0, allowYieldMpa: 825.0, allowUltMpa: 895.0 },  
          { id: "STR-05", component: "Xenon Tank Polar Boss Fitting", material: "Ti-6Al-4V", limitStressMpa: 365.0, allowYieldMpa: 825.0, allowUltMpa: 895.0 }  
        \]  
      },  
      man\_rated\_orbital\_module: {  
        id: "man\_rated\_orbital\_module",  
        name: "Man-Rated Crew Orbital Transfer Module (Launch Class, Al-Li 2195)",  
        vehicleClass: "man\_rated\_launch",  
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
        vesselType: "metallic\_tank",  
        meopBar: 24.0,  
        vesselRadiusMm: 210.0,  
        vesselWallThicknessMm: 3.5,  
        vesselAllowableUltMpa: 895.0,  
        structuralElements: \[  
          { id: "STR-01", component: "Crew Cabin Pressure Bulkhead Ring", material: "Al-Li 2195-T8", limitStressMpa: 220.0, allowYieldMpa: 490.0, allowUltMpa: 545.0 },  
          { id: "STR-02", component: "Docking Mechanism Axial Load Ring", material: "Ti-6Al-4V", limitStressMpa: 375.0, allowYieldMpa: 825.0, allowUltMpa: 895.0 },  
          { id: "STR-03", component: "ECLSS Rack Secondary Longerons", material: "Al 7075-T7351", limitStressMpa: 195.0, allowYieldMpa: 435.0, allowUltMpa: 505.0 },  
          { id: "STR-04", component: "Micrometeoroid Whipple Shield Standoff", material: "Al 6061-T6", limitStressMpa: 112.0, allowYieldMpa: 255.0, allowUltMpa: 290.0 },  
          { id: "STR-05", component: "Service Module Engine Thrust Frame", material: "Ti-6Al-4V", limitStressMpa: 395.0, allowYieldMpa: 825.0, allowUltMpa: 895.0 }  
        \]  
      }  
    };

    let currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS.falcon9\_rideshare\_smallsat));

    function showToast(msg) {  
      const t \= document.getElementById("statusToast");  
      document.getElementById("statusToastText").textContent \= msg;  
      t.classList.remove("hidden");  
    }

    function renderSpectrumChart(vib, mosMatrix) {  
      const svg \= document.getElementById("structuralSpectrumSvg");  
      const w \= 760, h \= 250, padL \= 48, padR \= 45, padT \= 22, padB \= 32;  
      const plotW \= 430;  
      const plotH \= h \- padT \- padB;

      // Left half: SDOF Transmissibility curve \|H(f)\| from 10 Hz to 240 Hz  
      const fMax \= 240.0;  
      const fn \= vib.panelNaturalFreqHz;  
      const zeta \= vib.dampingRatioZeta;  
      const qMax \= Math.max(25.0, vib.transmissibilityQ \* 1.1);

      const pts \= \[\];  
      for (let f \= 10; f \<= fMax; f \+= 3\) {  
        const r \= f / fn;  
        const num \= Math.sqrt(1 \+ Math.pow(2 \* zeta \* r, 2));  
        const den \= Math.sqrt(Math.pow(1 \- r \* r, 2\) \+ Math.pow(2 \* zeta \* r, 2));  
        const tr \= Math.min(qMax, num / Math.max(1e-4, den));  
        const x \= padL \+ ((f \- 10\) / (fMax \- 10)) \* plotW;  
        const y \= padT \+ plotH \- (tr / qMax) \* plotH;  
        pts.push(\`\${x.toFixed(1)},\${y.toFixed(1)}\`);  
      }

      const busX \= padL \+ ((vib.busAxialFreqHz \- 10\) / (fMax \- 10)) \* plotW;  
      const panelX \= padL \+ ((vib.panelNaturalFreqHz \- 10\) / (fMax \- 10)) \* plotW;

      // Right half: Element MoS bars  
      const barStartX \= padL \+ plotW \+ 38;  
      const barMaxW \= w \- barStartX \- 24;  
      const barsHtml \= mosMatrix.elements  
        .map((e, idx) \=\> {  
          const y \= padT \+ 14 \+ idx \* 36;  
          const clampedMos \= Math.max(0, Math.min(1.2, e.minMos));  
          const bw \= (clampedMos / 1.2) \* (barMaxW \- 55);  
          const col \= e.compliant ? "\#34d399" : "\#fb7185";  
          return \`  
            \<text x="\${barStartX}" y="\${y}" fill="\#cbd5e1" font-size="10" font-family="JetBrains Mono"\>\${e.id} (\${e.minMos \>= 0 ? "+" : ""}\${e.minMos.toFixed(2)})\</text\>  
            \<rect x="\${barStartX}" y="\${y \+ 5}" width="\${Math.max(6, bw).toFixed(1)}" height="10" rx="3" fill="\${col}" /\>  
          \`;  
        })  
        .join("");

      svg.innerHTML \= \`  
        \<rect x="\${padL}" y="\${padT}" width="\${plotW}" height="\${plotH}" fill="rgba(15, 23, 42, 0.55)" /\>  
        \<line x1="\${busX.toFixed(1)}" y1="\${padT}" x2="\${busX.toFixed(1)}" y2="\${padT \+ plotH}" stroke="\#fbbf24" stroke-dasharray="4 3" stroke-width="1.5" /\>  
        \<line x1="\${panelX.toFixed(1)}" y1="\${padT}" x2="\${panelX.toFixed(1)}" y2="\${padT \+ plotH}" stroke="\#38bdf8" stroke-dasharray="3 3" stroke-width="1.2" /\>  
        \<polyline fill="none" stroke="\#38bdf8" stroke-width="2.4" points="\${pts.join(" ")}" /\>  
        \<text x="\${busX \+ 4}" y="\${padT \+ 14}" fill="\#fbbf24" font-size="10" font-family="JetBrains Mono"\>f\_bus=\${vib.busAxialFreqHz}Hz\</text\>  
        \<text x="\${Math.min(padL \+ plotW \- 95, panelX \+ 4)}" y="\${padT \+ 28}" fill="\#38bdf8" font-size="10" font-family="JetBrains Mono"\>f\_panel=\${vib.panelNaturalFreqHz}Hz (Q=\${vib.transmissibilityQ})\</text\>  
        \<text x="\${padL}" y="\${h \- 8}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>10 Hz\</text\>  
        \<text x="\${padL \+ plotW \- 50}" y="\${h \- 8}" fill="\#94a3b8" font-size="10" font-family="JetBrains Mono"\>240 Hz\</text\>  
        \<text x="\${barStartX}" y="\${padT \+ 2}" fill="\#34d399" font-size="10" font-weight="bold" font-family="JetBrains Mono"\>MIN ELEMENT MoS\</text\>  
        \${barsHtml}  
      \`;  
    }

    function updateStudio() {  
      const fosSpec \= ECSS\_32\_CONSTANTS.FOS\_TABLE\[currentConfig.vehicleClass\];  
      const massKg \= Number(currentConfig.spacecraftMassKg);  
      const gAx \= Number(currentConfig.axialQuasiStaticG);  
      const km \= Number(currentConfig.modelFactorKm);  
      const kp \= Number(currentConfig.projectFactorKp);  
      const kq \= Number(currentConfig.qualificationFactorKq);  
      const kld \= Number(currentConfig.localDesignFactorKld);  
      const kmp \= Number(currentConfig.marginPolicyFactorKmp);

      const dllFactor \= km \* kp;  
      const coefB \= fosSpec.fosy \* kld \* kmp;  
      const coefC \= fosSpec.fosu \* kld \* kmp;

      const limitAxialKn \= (massKg \* gAx \* ECSS\_32\_CONSTANTS.G0\_M\_S2) / 1000.0;  
      const dllAxialKn \= limitAxialKn \* dllFactor;  
      const qualAxialKn \= dllAxialKn \* kq;  
      const ultAxialKn \= dllAxialKn \* coefC;

      const fnPanel \= Number(currentConfig.panelNaturalFreqHz);  
      const zeta \= Number(currentConfig.dampingRatioZeta);  
      const psd \= Number(currentConfig.randomPsdG2PerHz);  
      const qFactor \= 1.0 / (2.0 \* zeta);  
      const gRms \= Math.sqrt((Math.PI / 2.0) \* fnPanel \* qFactor \* psd);  
      const g3Sigma \= 3.0 \* gRms;

      const fAx \= Number(currentConfig.busAxialFreqHz);  
      const fLat \= Number(currentConfig.busLateralFreqHz);  
      const modalRatio \= fnPanel / Math.max(1.0, fAx);  
      const axialOk \= fAx \>= Number(currentConfig.lvMinAxialFreqHz);  
      const latOk \= fLat \>= Number(currentConfig.lvMinLateralFreqHz);  
      const octaveOk \= modalRatio \>= Math.SQRT2;

      const pvSpec \= ECSS\_32\_CONSTANTS.PRESSURE\_VESSEL\_FACTORS\[currentConfig.vesselType \|\| "copv\_vessel"\];  
      const meopBar \= Number(currentConfig.meopBar);  
      const mdpBar \= meopBar \* km \* kp;  
      const proofBar \= mdpBar \* pvSpec.jProof;  
      const burstBar \= mdpBar \* pvSpec.jBurst;  
      const burstStressMpa \= ((burstBar \* 0.1) \* Number(currentConfig.vesselRadiusMm)) / Math.max(0.1, Number(currentConfig.vesselWallThicknessMm));  
      const burstMos \= Number(currentConfig.vesselAllowableUltMpa) / Math.max(1e-6, burstStressMpa) \- 1.0;

      const elements \= currentConfig.structuralElements.map((el, idx) \=\> {  
        const lim \= Number(el.limitStressMpa);  
        const dllS \= lim \* dllFactor;  
        const yS \= dllS \* coefB;  
        const uS \= dllS \* coefC;  
        const mosY \= Number(el.allowYieldMpa) / Math.max(1e-6, yS) \- 1.0;  
        const mosU \= Number(el.allowUltMpa) / Math.max(1e-6, uS) \- 1.0;  
        const minMos \= Math.min(mosY, mosU);  
        const compliant \= mosY \>= 0.0 && mosU \>= 0.0;  
        return {  
          index: idx,  
          id: el.id,  
          component: el.component,  
          material: el.material,  
          limitStressMpa: lim,  
          dllStressMpa: dllS,  
          allowYieldMpa: Number(el.allowYieldMpa),  
          allowUltMpa: Number(el.allowUltMpa),  
          mosYield: mosY,  
          mosUlt: mosU,  
          minMos,  
          compliant,  
          status: compliant ? "MOS\_POSITIVE\_PASS" : "STRUCTURAL\_OVERSTRESS\_FAIL"  
        };  
      });

      const minMosY \= Math.min(...elements.map((e) \=\> e.mosYield));  
      const minMosU \= Math.min(...elements.map((e) \=\> e.mosUlt));  
      const minOverallMos \= Math.min(minMosY, minMosU);  
      const failedCount \= elements.filter((e) \=\> \!e.compliant).length;

      const checks \= \[  
        { id: "ECSS-32-01", clause: "ECSS-E-ST-32-10C Table 5-1", req: "Normative Yield & Ultimate Safety Factors (FOSY \>= 1.10, FOSU \>= 1.25)", measured: \`FOSY=\${fosSpec.fosy.toFixed(2)}, FOSU=\${fosSpec.fosu.toFixed(2)}\`, passed: fosSpec.fosy \>= 1.10 && fosSpec.fosu \>= 1.25 },  
        { id: "ECSS-32-02", clause: "ECSS-E-ST-32-10C Table 4-1", req: "Multiplicative Design Limit Load Factor (DLL \= LL × K\_M × K\_P)", measured: \`DLL Factor \= \${dllFactor.toFixed(3)} (K\_M=\${km.toFixed(2)}, K\_P=\${kp.toFixed(2)})\`, passed: km \>= 1.05 && kp \>= 1.00 },  
        { id: "ECSS-32-03", clause: "ECSS-E-ST-32-10C Cl. 4.2", req: "Qualification Load Envelope Factor (K\_Q \>= 1.25)", measured: \`K\_Q \= \${kq.toFixed(2)} (F\_qual \= \${qualAxialKn.toFixed(2)} kN)\`, passed: kq \>= 1.25 },  
        { id: "ECSS-32-04", clause: "ECSS-E-ST-32-10C Cl. 5.1.2", req: "Relieving Thermally Induced Load Factor (FOS\_thermal \= 1.00)", measured: \`Relieving Thermal FOS \= \${currentConfig.thermalRelievingFos.toFixed(2)}\`, passed: currentConfig.thermalRelievingFos \=== 1.0 },  
        { id: "ECSS-32-05", clause: "ECSS-E-HB-32-26A Cl. 6.2", req: \`Launch Vehicle Fundamental Stiffness (f\_ax \>= \${currentConfig.lvMinAxialFreqHz}Hz, f\_lat \>= \${currentConfig.lvMinLateralFreqHz}Hz)\`, measured: \`f\_ax=\${fAx.toFixed(1)} Hz, f\_lat=\${fLat.toFixed(1)} Hz\`, passed: axialOk && latOk },  
        { id: "ECSS-32-06", clause: "ECSS-E-HB-32-26A Cl. 6.4", req: "Secondary Panel Octave Modal Decoupling (f\_panel / f\_bus \>= 1.414)", measured: \`Ratio \= \${modalRatio.toFixed(2)} (\${fnPanel.toFixed(1)} Hz / \${fAx.toFixed(1)} Hz)\`, passed: octaveOk },  
        { id: "ECSS-32-07", clause: "ECSS-E-HB-32-26A Cl. 8.3", req: "Miles' Equation 1-DOF Random Vibration 3-Sigma Peak \<= 65.0 g", measured: \`\${gRms.toFixed(2)} Grms (\${g3Sigma.toFixed(2)} g 3-sigma peak)\`, passed: g3Sigma \<= 65.0 },  
        { id: "ECSS-32-08", clause: "ECSS-E-ST-32-02C Cl. 4.3", req: \`Pressurized Hardware Proof (\${pvSpec.jProof}x) & Burst (\${pvSpec.jBurst}x) Margin \>= 0.0\`, measured: \`Burst=\${burstBar.toFixed(1)} bar, Burst MoS=\${burstMos \>= 0 ? "+" : ""}\${burstMos.toFixed(3)}\`, passed: burstMos \>= 0.0 },  
        { id: "ECSS-32-09", clause: "ECSS-E-ST-32-10C Cl. 5.2", req: "Positive Yield Margin of Safety (MoS\_Y \>= 0.0) Across All Elements", measured: \`Min MoS\_Y \= \${minMosY \>= 0 ? "+" : ""}\${minMosY.toFixed(3)}\`, passed: minMosY \>= 0.0 },  
        { id: "ECSS-32-10", clause: "ECSS-E-ST-32-10C Cl. 5.3", req: "Positive Ultimate Margin of Safety (MoS\_U \>= 0.0) Across All Elements", measured: \`Min MoS\_U \= \${minMosU \>= 0 ? "+" : ""}\${minMosU.toFixed(3)} (\${failedCount} failed)\`, passed: minMosU \>= 0.0 && failedCount \=== 0 }  
      \];

      const passCount \= checks.filter((c) \=\> c.passed).length;

      // Update KPI Cards  
      document.getElementById("kpiFosPair").textContent \= \`\${fosSpec.fosy.toFixed(2)} / \${fosSpec.fosu.toFixed(2)}\`;  
      document.getElementById("kpiDllFactor").textContent \= \`DLL Factor: \${dllFactor.toFixed(3)} (KM×KP)\`;  
      document.getElementById("kpiUltForce").textContent \= \`\${ultAxialKn.toFixed(2)} kN\`;  
      document.getElementById("kpiDllForce").textContent \= \`DLL Axial: \${dllAxialKn.toFixed(2)} kN\`;  
      document.getElementById("kpiMilesPeak").textContent \= \`\${g3Sigma.toFixed(2)} g\`;  
      document.getElementById("kpiMilesGrms").textContent \= \`\${gRms.toFixed(2)} Grms (Q \= \${qFactor.toFixed(1)})\`;

      document.getElementById("kpiMinMos").textContent \= \`\${minOverallMos \>= 0 ? "+" : ""}\${minOverallMos.toFixed(3)}\`;  
      document.getElementById("kpiMinMos").className \= \`text-xl font-bold mono mt-1 \${minOverallMos \>= 0 ? "text-emerald-400" : "text-rose-400"}\`;  
      document.getElementById("kpiCOPVMos").textContent \= \`Tank Burst MoS: \${burstMos \>= 0 ? "+" : ""}\${burstMos.toFixed(3)}\`;

      document.getElementById("kpiAuditScore").textContent \= \`\${passCount} / 10 PASS\`;  
      document.getElementById("kpiAuditScore").className \= \`text-xl font-bold mono mt-1 \${passCount \=== 10 ? "text-emerald-400" : "text-amber-400"}\`;  
      document.getElementById("kpiAuditBadge").textContent \= passCount \=== 10 ? "ECSS-E-ST-32-10C CERTIFIED" : "MARGIN / STIFFNESS WARNING";

      // Subcards  
      document.getElementById("detailLimitForce").textContent \= \`\${limitAxialKn.toFixed(2)} kN\`;  
      document.getElementById("detailDllForce").textContent \= \`\${dllAxialKn.toFixed(2)} kN\`;  
      document.getElementById("detailQualForce").textContent \= \`\${qualAxialKn.toFixed(2)} kN\`;  
      document.getElementById("detailUltForce").textContent \= \`\${ultAxialKn.toFixed(2)} kN\`;

      document.getElementById("detailBusModes").textContent \= \`\${fAx.toFixed(1)} / \${fLat.toFixed(1)} Hz\`;  
      document.getElementById("detailModalRatio").textContent \= \`\${modalRatio.toFixed(2)} (\${octaveOk ? "≥1.41" : "\<1.41"})\`;  
      document.getElementById("detailGrms").textContent \= \`\${gRms.toFixed(2)} Grms\`;  
      document.getElementById("detail3Sigma").textContent \= \`\${g3Sigma.toFixed(2)} g\`;

      document.getElementById("detailMdpBar").textContent \= \`\${mdpBar.toFixed(2)} bar\`;  
      document.getElementById("detailProofBar").textContent \= \`\${proofBar.toFixed(2)} bar\`;  
      document.getElementById("detailBurstBar").textContent \= \`\${burstBar.toFixed(2)} bar\`;  
      document.getElementById("detailBurstMos").textContent \= \`\${burstMos \>= 0 ? "+" : ""}\${burstMos.toFixed(3)}\`;

      renderSpectrumChart(  
        {  
          panelNaturalFreqHz: fnPanel,  
          dampingRatioZeta: zeta,  
          transmissibilityQ: Number(qFactor.toFixed(1)),  
          busAxialFreqHz: fAx  
        },  
        { elements }  
      );

      // Render Structural Elements Table  
      const mosBadge \= document.getElementById("mosSummaryBadge");  
      if (failedCount \=== 0\) {  
        mosBadge.textContent \= "ALL STRUCTURAL MARGINS POSITIVE";  
        mosBadge.className \= "text-xs mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30";  
      } else {  
        mosBadge.textContent \= \`\${failedCount} ELEMENT(S) NEGATIVE MoS OVERSTRESS\`;  
        mosBadge.className \= "text-xs mono px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40";  
      }

      document.getElementById("mosTableBody").innerHTML \= elements  
        .map((e) \=\> {  
          const badge \= e.compliant  
            ? \`\<span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"\>\${e.status}\</span\>\`  
            : \`\<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30"\>\${e.status}\</span\>\`;  
          return \`  
            \<tr class="hover:bg-slate-900/50"\>  
              \<td class="py-2.5 px-3 font-semibold text-sky-300"\>\${e.id}\</td\>  
              \<td class="py-2.5 px-3 text-slate-200"\>\${e.component}\</td\>  
              \<td class="py-2.5 px-3 text-slate-300"\>\${e.material}\</td\>  
              \<td class="py-2.5 px-3 text-right"\>\${e.limitStressMpa.toFixed(1)}\</td\>  
              \<td class="py-2.5 px-3 text-right text-slate-300"\>\${e.dllStressMpa.toFixed(1)}\</td\>  
              \<td class="py-2.5 px-3 text-right text-slate-400"\>\${e.allowYieldMpa.toFixed(0)} / \${e.allowUltMpa.toFixed(0)}\</td\>  
              \<td class="py-2.5 px-3 text-right \${e.mosYield \>= 0 ? "text-emerald-300" : "text-rose-400 font-bold"}"\>\${e.mosYield \>= 0 ? "+" : ""}\${e.mosYield.toFixed(3)}\</td\>  
              \<td class="py-2.5 px-3 text-right \${e.mosUlt \>= 0 ? "text-emerald-300" : "text-rose-400 font-bold"}"\>\${e.mosUlt \>= 0 ? "+" : ""}\${e.mosUlt.toFixed(3)}\</td\>  
              \<td class="py-2.5 px-3"\>\${badge}\</td\>  
              \<td class="py-2.5 px-3 text-right"\>  
                \<button type="button" data-el-index="\${e.index}" class="mos-toggle-btn px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"\>  
                  \${e.compliant ? "Test Overload" : "Restore Load"}  
                \</button\>  
              \</td\>  
            \</tr\>  
          \`;  
        })  
        .join("");

      document.querySelectorAll(".mos-toggle-btn").forEach((btn) \=\> {  
        btn.addEventListener("click", () \=\> {  
          const idx \= Number(btn.getAttribute("data-el-index"));  
          const el \= currentConfig.structuralElements\[idx\];  
          const presetKey \= document.getElementById("presetSelect").value;  
          const nomLimit \= MISSION\_PRESETS\[presetKey\].structuralElements\[idx\].limitStressMpa;  
          if (el.limitStressMpa \> nomLimit \* 1.3) {  
            el.limitStressMpa \= nomLimit;  
            showToast(\`Restored \${el.id} (\${el.component}) to nominal limit stress (\${el.limitStressMpa} MPa).\`);  
          } else {  
            el.limitStressMpa \= Number((el.allowUltMpa \* 0.92).toFixed(1));  
            showToast(\`Injected overload on \${el.id}: Limit stress \${el.limitStressMpa} MPa \-\> Negative MoS.\`);  
          }  
          updateStudio();  
        });  
      });

      // Render 10-Point Audit Table  
      const auditBadge \= document.getElementById("auditHeaderBadge");  
      auditBadge.textContent \= \`\${passCount} / 10 RULES VERIFIED (\${passCount \* 10}%)\`;  
      auditBadge.className \= \`text-xs mono px-2.5 py-1 rounded \${  
        passCount \=== 10  
          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"  
          : "bg-amber-500/20 text-amber-300 border border-amber-500/40"  
      }\`;

      document.getElementById("auditTableBody").innerHTML \= checks  
        .map(  
          (c) \=\> \`  
          \<tr class="hover:bg-slate-900/50"\>  
            \<td class="py-2.5 px-3 font-semibold text-sky-300"\>\${c.id}\</td\>  
            \<td class="py-2.5 px-3 text-slate-400"\>\${c.clause}\</td\>  
            \<td class="py-2.5 px-3 text-slate-200"\>\${c.req}\</td\>  
            \<td class="py-2.5 px-3 text-slate-300"\>\${c.measured}\</td\>  
            \<td class="py-2.5 px-3 text-right"\>  
              \<span class="px-2 py-0.5 rounded \${  
                c.passed  
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"  
                  : "bg-rose-500/20 text-rose-300 border border-rose-500/30"  
              }"\>\${c.passed ? "PASS" : "FAIL"}\</span\>  
            \</td\>  
          \</tr\>  
        \`  
        )  
        .join("");

      const xmlLines \= \[  
        \`\<?xml version="1.0" encoding="UTF-8"?\>\`,  
        \`\<ECSS\_StructuralSystemManifest standard="ECSS-E-ST-32-10C-Rev.2" pressureStandard="ECSS-E-ST-32-02C-Rev.2" version="1.0.0"\>\`,  
        \`  \<Mission name="\${currentConfig.name}" vehicleClass="\${currentConfig.vehicleClass}" massKg="\${currentConfig.spacecraftMassKg}" /\>\`,  
        \`  \<FactorsOfSafety fosy="\${fosSpec.fosy}" fosu="\${fosSpec.fosu}" km="\${km}" kp="\${kp}" kq="\${kq}" dllFactor="\${dllFactor.toFixed(4)}" /\>\`,  
        \`  \<ModalAndVibration axialHz="\${fAx}" lateralHz="\${fLat}" panelHz="\${fnPanel}" milesGrms="\${gRms.toFixed(2)}" miles3SigmaPeakG="\${g3Sigma.toFixed(2)}" /\>\`,  
        \`  \<PressurizedHardware type="\${currentConfig.vesselType}" meopBar="\${meopBar}" mdpBar="\${mdpBar.toFixed(2)}" burstBar="\${burstBar.toFixed(2)}" burstMos="\${burstMos.toFixed(3)}" /\>\`,  
        \`  \<MarginsOfSafety minMosYield="\${minMosY.toFixed(3)}" minMosUlt="\${minMosU.toFixed(3)}" auditScore="\${passCount}/10" /\>\`,  
        \`\</ECSS\_StructuralSystemManifest\>\`  
      \];  
      document.getElementById("xmlOutputPre").textContent \= xmlLines.join("\\n");  
    }

    function syncInputs() {  
      document.getElementById("vehicleClassInput").value \= currentConfig.vehicleClass;  
      document.getElementById("massInput").value \= currentConfig.spacecraftMassKg;  
      document.getElementById("massVal").textContent \= \`\${currentConfig.spacecraftMassKg} kg\`;  
      document.getElementById("axialGInput").value \= currentConfig.axialQuasiStaticG;  
      document.getElementById("axialGVal").textContent \= \`\${currentConfig.axialQuasiStaticG} g\`;  
      document.getElementById("kmInput").value \= currentConfig.modelFactorKm;  
      document.getElementById("kmVal").textContent \= Number(currentConfig.modelFactorKm).toFixed(2);  
      document.getElementById("kpInput").value \= currentConfig.projectFactorKp;  
      document.getElementById("kpVal").textContent \= Number(currentConfig.projectFactorKp).toFixed(2);  
      document.getElementById("axialFreqInput").value \= currentConfig.busAxialFreqHz;  
      document.getElementById("axialFreqVal").textContent \= \`\${currentConfig.busAxialFreqHz} Hz\`;  
      document.getElementById("panelFreqInput").value \= currentConfig.panelNaturalFreqHz;  
      document.getElementById("panelFreqVal").textContent \= \`\${currentConfig.panelNaturalFreqHz} Hz\`;  
      document.getElementById("psdInput").value \= currentConfig.randomPsdG2PerHz;  
      document.getElementById("psdVal").textContent \= \`\${Number(currentConfig.randomPsdG2PerHz).toFixed(3)} g²/Hz\`;  
      document.getElementById("meopInput").value \= currentConfig.meopBar;  
      document.getElementById("meopVal").textContent \= \`\${currentConfig.meopBar} bar\`;  
    }

    window.addEventListener("DOMContentLoaded", () \=\> {  
      syncInputs();  
      updateStudio();

      document.getElementById("presetSelect").addEventListener("change", (e) \=\> {  
        const key \= e.target.value;  
        if (MISSION\_PRESETS\[key\]) {  
          currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS\[key\]));  
          syncInputs();  
          updateStudio();  
          showToast(\`Loaded structural preset: \${currentConfig.name}\`);  
        }  
      });

      document.getElementById("vehicleClassInput").addEventListener("change", (e) \=\> {  
        currentConfig.vehicleClass \= e.target.value;  
        updateStudio();  
      });

      const bindSlider \= (id, valId, prop, unit, digits \= null) \=\> {  
        const el \= document.getElementById(id);  
        el.addEventListener("input", () \=\> {  
          currentConfig\[prop\] \= Number(el.value);  
          const formatted \= digits \!== null ? Number(el.value).toFixed(digits) : el.value;  
          document.getElementById(valId).textContent \= unit ? \`\${formatted} \${unit}\` : formatted;  
          updateStudio();  
        });  
      };

      bindSlider("massInput", "massVal", "spacecraftMassKg", "kg");  
      bindSlider("axialGInput", "axialGVal", "axialQuasiStaticG", "g", 1);  
      bindSlider("kmInput", "kmVal", "modelFactorKm", "", 2);  
      bindSlider("kpInput", "kpVal", "projectFactorKp", "", 2);  
      bindSlider("axialFreqInput", "axialFreqVal", "busAxialFreqHz", "Hz", 1);  
      bindSlider("panelFreqInput", "panelFreqVal", "panelNaturalFreqHz", "Hz", 1);  
      bindSlider("psdInput", "psdVal", "randomPsdG2PerHz", "g²/Hz", 3);  
      bindSlider("meopInput", "meopVal", "meopBar", "bar");

      document.getElementById("injectOverloadBtn").addEventListener("click", () \=\> {  
        const el \= currentConfig.structuralElements\[0\];  
        el.limitStressMpa \= Number((el.allowUltMpa \* 0.92).toFixed(1));  
        updateStudio();  
        showToast(\`Injected overload on \${el.id} (\${el.component}): Limit stress \= \${el.limitStressMpa} MPa.\`);  
      });

      document.getElementById("resetStructBtn").addEventListener("click", () \=\> {  
        const key \= document.getElementById("presetSelect").value;  
        currentConfig \= JSON.parse(JSON.stringify(MISSION\_PRESETS\[key\]));  
        syncInputs();  
        updateStudio();  
        showToast("All structural elements and safety factors restored to nominal state.");  
      });

      document.getElementById("exportXmlBtn").addEventListener("click", () \=\> {  
        document.getElementById("xmlModal").classList.remove("hidden");  
      });

      document.getElementById("closeXmlBtn").addEventListener("click", () \=\> {  
        document.getElementById("xmlModal").classList.add("hidden");  
      });

      document.getElementById("copyXmlBtn").addEventListener("click", () \=\> {  
        const xmlText \= document.getElementById("xmlOutputPre").textContent;  
        try {  
          if (navigator.clipboard && navigator.clipboard.writeText) {  
            navigator.clipboard.writeText(xmlText);  
          } else {  
            const ta \= document.createElement("textarea");  
            ta.value \= xmlText;  
            document.body.appendChild(ta);  
            ta.select();  
            document.execCommand("copy");  
            document.body.removeChild(ta);  
          }  
          showToast("ECSS-E-ST-32-10C Structural XML Manifest copied to clipboard.");  
        } catch (err) {  
          showToast("XML Manifest ready in viewer.");  
        }  
      });

      document.getElementById("closeToastBtn").addEventListener("click", () \=\> {  
        document.getElementById("statusToast").classList.add("hidden");  
      });  
    });  
  \</script\>  
\</body\>  
\</html\>  
