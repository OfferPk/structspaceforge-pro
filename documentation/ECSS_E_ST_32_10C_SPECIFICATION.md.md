# ECSS-E-ST-32-10C Rev. 2 & ECSS-E-ST-32-02C Rev. 2 Engineering Specification

## 1\. Normative Scope & Reference Standards

**StructSpaceForge Pro (v1.0.0)** implements the normative structural design factors, safety margins, and dynamic vibration equations of:

- [**ECSS-E-ST-32-10C Rev. 2**](https://ecss.nl/wp-content/uploads/2019/05/ECSS-E-ST-32-10C_Rev.2\(15May2019\).pdf) — *Space engineering: Structural factors of safety for spaceflight hardware* (15 May 2019).  
- [**ECSS-E-ST-32-02C Rev. 2**](https://ecss.nl/wp-content/uploads/2024/12/ECSS-E-ST-32-02C_Rev.2-DIR\(11December2024\).pdf) — *Space engineering: Structural design and verification of pressurized hardware* (11 December 2024).  
- [**ECSS-E-HB-32-26A**](http://www.vibrationdata.com/tutorials2/ECSS-E-HB-32-26A_19February2013.pdf) — *Space engineering: Spacecraft mechanical loads analysis handbook* (19 February 2013).  
- [**ECSS-E-HB-32-23A Rev. 1**](https://ecss.nl/wp-content/uploads/2023/02/ECSS-E-HB-32-23A-Rev.1\(6February2023\).pdf) — *Space engineering: Threaded fasteners handbook* (6 February 2023).

## 2\. Mathematical Formulation

### 2.1 Multiplicative Design Factor Chain (ECSS-E-ST-32-10C Rev. 2 Table 4-1)

From Flight Limit Load (\$\\text{LL}\$), the Design Limit Load (\$\\text{DLL}\$), Qualification Load (\$\\text{QL}\$), Yield Design Load (\$\\text{DL}\_Y\$), and Ultimate Design Load (\$\\text{DL}\_U\$) are computed as:

\$\$\\text{DLL} \= \\text{LL} \\times K\_M \\times K\_P, \\quad \\text{QL} \= \\text{DLL} \\times K\_Q\$\$

\$\$\\text{DL}*Y \= \\text{DLL} \\times \\text{FOSY} \\times K*{LD} \\times K\_{MP}, \\quad \\text{DL}*U \= \\text{DLL} \\times \\text{FOSU} \\times K*{LD} \\times K\_{MP}\$\$

### 2.2 Normative Factors of Safety (Table 5-1)

- **Satellite Metallic Structures**: Verified by Test (\$\\text{FOSY} \= 1.10, \\text{FOSU} \= 1.25\$); Verified by Analysis Alone (\$\\text{FOSY} \= 1.25, \\text{FOSU} \= 2.00\$).  
- **Satellite FRP / Composite Structures**: Verified by Test (\$\\text{FOSU} \= 1.25\$); Verified by Analysis Alone (\$\\text{FOSU} \= 2.00\$).  
- **Man-Rated Spacecraft**: Launch (\$\\text{FOSY} \= 1.25, \\text{FOSU} \= 1.40\$); On-Orbit (\$\\text{FOSY} \= 1.10, \\text{FOSU} \= 1.50\$).  
- **Relieving Thermal Loads (Clause 5.1.2)**: When thermally induced loads relieve mechanical stresses, \$\\text{FOSY} \= 1.00\$ and \$\\text{FOSU} \= 1.00\$.

### 2.3 Miles' Equation for 1-DOF Random Vibration & Octave Separation (ECSS-E-HB-32-26A)

Given natural frequency \$f\_n\$, damping ratio \$\\zeta\$, transmissibility \$Q \= \\frac{1}{2\\zeta}\$, and input Acceleration Spectral Density \$\\text{PSD}(f\_n)\$ in \$\\text{g}^2/\\text{Hz}\$:

\$\$G\_{\\text{rms}} \= \\sqrt{\\frac{\\pi}{2} \\cdot f\_n \\cdot Q \\cdot \\text{PSD}(f\_n)}, \\quad G\_{3\\sigma} \= 3 \\cdot G\_{\\text{rms}}\$\$

### 2.4 Pressurized Hardware / COPV Proof & Burst Factors (ECSS-E-ST-32-02C Rev. 2\)

\$\$\\text{MDP} \= \\text{MEOP} \\times K\_M \\times K\_P, \\quad P\_{\\text{proof}} \= j\_{\\text{proof}} \\cdot \\text{MDP}, \\quad P\_{\\text{burst}} \= j\_{\\text{burst}} \\cdot \\text{MDP}\$\$ where \$j\_{\\text{proof}} \= 1.50, j\_{\\text{burst}} \= 2.00\$ for COPVs and \$j\_{\\text{proof}} \= 1.25, j\_{\\text{burst}} \= 1.50\$ for metallic tanks.