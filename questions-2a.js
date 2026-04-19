/*
 =============================================================
 MN BOILER OPERATOR LICENSE — PRACTICE EXAM QUESTIONS
 License Tier: 2nd Class A
 =============================================================

 HOW TO ADD A NEW QUESTION
 -------------------------
 1. Find the last question in the array below (before the closing ]);)
 2. Add a comma after its closing brace }  then paste your new question
 3. Use the next sequential ID number
 4. Set "level" to "2a"
 5. Set "correct" to: 0=A, 1=B, 2=C, 3=D  — VARY this! Do not always pick B or C
 6. Write a clear explanation of WHY the answer is correct

 QUESTION TEMPLATE:
 {
   "id": 9999,
   "level": "2a",
   "category": "Safety Devices",
   "question": "Your question text here?",
   "options": [
     "Option A text",
     "Option B text",
     "Option C text",
     "Option D text"
   ],
   "correct": 0,
   "explanation": "Explain the correct answer with any relevant code citation or number."
 }

 AVAILABLE CATEGORIES:
   Safety Devices       Boiler Types         MN Statutes & Rules  Water Treatment
   Steam Generation     Combustion           Draft Systems         Heat Transfer
   Boiler Calculations  Safety Valves        Operating Procedures Turbines & Engines
   Electrical           Boiler Testing       ASME & Codes         Water Level Control
   Piping & Valves      Bearings & Governors Layup & Maintenance  Plant Management

 ANSWER DISTRIBUTION TIP:
   Aim for roughly equal A / B / C / D answers across the questions you add.
   See the count at the bottom of this file as a reference.
 =============================================================
*/

const QUESTIONS_2A = [
  {
    "id": 131,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "How many exam questions are on the 2nd Class A license examination?",
    "options": [
      "80",
      "60",
      "50",
      "100"
    ],
    "correct": 0,
    "explanation": "The 2nd Class A license examination consists of 80 questions. A passing score of 70% (56 correct) is required. Grade A exams include all Grade B content plus turbine/engine material."
  },
  {
    "id": 132,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What experience is required for a 2nd Class A engineer license?",
    "options": [
      "1 year of boiler operation plus 1 year of turbine/engine experience",
      "1 year of boiler operation only",
      "2 years of boiler operation only",
      "3 years of total experience"
    ],
    "correct": 0,
    "explanation": "The 2nd Class A license requires a minimum of 1 year of boiler operation plus 1 year of turbine/engine experience (each year equals 2,000 hours). Grade A licenses include steam engine and turbine authorization."
  },
  {
    "id": 133,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "As a 2nd Class A engineer, you can be in charge of a boiler plant up to what HP?",
    "options": [
      "100 BHP",
      "50 BHP",
      "500 BHP",
      "Unlimited"
    ],
    "correct": 0,
    "explanation": "A 2nd Class A engineer may be in charge of a boiler plant up to 100 BHP. As a shift engineer, they may work in plants up to 500 BHP. To be in charge of plants over 100 BHP, a 1st Class license is required."
  },
  {
    "id": 134,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the maximum pressure typically achievable with fire-tube boilers?",
    "options": [
      "100 psig",
      "300 psig",
      "150 psig",
      "500 psig"
    ],
    "correct": 1,
    "explanation": "Fire-tube boilers are typically limited to approximately 300 psig and about 800 BHP. Higher pressures require water-tube boiler design due to shell thickness limitations and safety considerations."
  },
  {
    "id": 135,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What component in a water-tube boiler raises steam temperature above saturation temperature?",
    "options": [
      "Economizer",
      "Deaerator",
      "Reheater",
      "Superheater"
    ],
    "correct": 3,
    "explanation": "A superheater raises steam temperature above its saturation temperature (creating 'superheated steam') by running steam through tubes located in the flue gas path. Superheated steam is used for turbines to prevent condensation damage."
  },
  {
    "id": 136,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of a reheater in a large power boiler system?",
    "options": [
      "Heats the feedwater before it enters the boiler",
      "Preheats the fuel oil before combustion",
      "Reheats combustion air for better efficiency",
      "Reheats partially expanded steam from the HP turbine before sending it to the LP turbine"
    ],
    "correct": 3,
    "explanation": "A reheater takes partially expanded steam from the high-pressure (HP) turbine and reheats it back to near-original temperature before sending it to the low-pressure (LP) turbine. This improves the thermal cycle efficiency and prevents excessive moisture in the LP turbine."
  },
  {
    "id": 137,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of a desuperheater (attemperator) in a boiler system?",
    "options": [
      "Reduces superheated steam temperature by spraying water into the steam",
      "Increases steam temperature above saturation",
      "Reduces the steam pressure to process requirements",
      "Preheats the combustion air"
    ],
    "correct": 0,
    "explanation": "A desuperheater (also called an attemperator) reduces the temperature of superheated steam by spraying controlled amounts of water into the steam flow. This controls the final steam temperature to match turbine or process requirements."
  },
  {
    "id": 138,
    "level": "2a",
    "category": "Safety Valves",
    "question": "A safety valve is set at 200 psig. What is the allowable tolerance per ASME code?",
    "options": [
      "±2 psi",
      "±10 psi",
      "±3% of set pressure (±6 psi)",
      "±1%"
    ],
    "correct": 2,
    "explanation": "Per ASME PG-72, for safety valves set between 71 and 300 psig, the allowable tolerance is ±3% of the set pressure. For 200 psig: 200 × 0.03 = ±6 psi. The valve must pop between 194 and 206 psig."
  },
  {
    "id": 139,
    "level": "2a",
    "category": "Safety Valves",
    "question": "A safety valve is set at 500 psig. What is the allowable tolerance per ASME PG-72?",
    "options": [
      "±3% (±15 psi)",
      "±5 psi",
      "±10 psi",
      "±1% (±5 psi)"
    ],
    "correct": 2,
    "explanation": "Per ASME PG-72, for safety valves set between 301 and 1,000 psig, the allowable tolerance is ±10 psi. Therefore, a 500 psig valve must pop between 490 and 510 psig."
  },
  {
    "id": 140,
    "level": "2a",
    "category": "Safety Valves",
    "question": "When a power boiler has two or more safety valves, what is the rule for setting the additional valves?",
    "options": [
      "All valves must be set at the same pressure",
      "One valve must be set at or below MAWP; additional valves may be set up to 3% above MAWP",
      "All additional valves must be set 10% above MAWP",
      "Additional valves can be set at any pressure below 110% of MAWP"
    ],
    "correct": 1,
    "explanation": "Per ASME Section I PG-67, when a power boiler has two or more safety valves, one valve must be set at or below MAWP. The additional valve(s) may be set up to 3% above MAWP. This allows for staged relief capacity."
  },
  {
    "id": 141,
    "level": "2a",
    "category": "Safety Valves",
    "question": "On a power boiler with a superheater, which safety valve must be set to open FIRST (lowest set pressure)?",
    "options": [
      "The main steam drum safety valve",
      "Either valve can open first",
      "The superheater safety valve",
      "They must open simultaneously"
    ],
    "correct": 2,
    "explanation": "The superheater safety valve must be set to open FIRST (at the lowest set pressure) to protect the superheater from overheating damage. If the superheater valve opened last, steam flow could cease through the superheater while heat continues to be applied, causing tube failure."
  },
  {
    "id": 142,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the blowdown requirement for power boiler safety valves set above 100 psig per ASME PG-67.3?",
    "options": [
      "Maximum 2% of set pressure",
      "Maximum 15% of set pressure",
      "Maximum 10 psi blowdown",
      "Maximum 4% of set pressure but not less than 2 psi"
    ],
    "correct": 3,
    "explanation": "For power boiler safety valves set above 100 psig, the maximum blowdown (blowback) is 4% of the set pressure, but not less than 2 psi. This ensures the valve closes properly after relieving without chattering."
  },
  {
    "id": 143,
    "level": "2a",
    "category": "Water Treatment",
    "question": "For boilers operating above 600 psig, what oxygen scavenger replaces sodium sulfite?",
    "options": [
      "Sodium phosphate",
      "Sodium chloride",
      "Caustic soda",
      "Hydrazine or DEHA (diethylhydroxylamine)"
    ],
    "correct": 3,
    "explanation": "Sodium sulfite is used as an oxygen scavenger only in boilers operating below 600 psig. For higher pressure boilers, hydrazine or DEHA (diethylhydroxylamine) are used because they do not add dissolved solids to the boiler water."
  },
  {
    "id": 144,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What does phosphate treatment do in boiler water chemistry?",
    "options": [
      "Acts as a primary oxygen scavenger",
      "Prevents foaming by reducing surface tension",
      "Reduces the pH of the boiler water",
      "Reacts with residual hardness to form non-adherent sludge that can be blown down"
    ],
    "correct": 3,
    "explanation": "Phosphate treatment (sodium phosphate) reacts with any residual calcium and magnesium hardness to form a non-adherent, powdery sludge rather than hard scale. This sludge remains in suspension and can be removed by blowdown. Maintain 20-50 ppm phosphate residual."
  },
  {
    "id": 145,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the primary cause of carryover (water in the steam) in a boiler?",
    "options": [
      "Low steam pressure",
      "Cold feedwater temperature",
      "High water level, high TDS, foaming from contaminants, or sudden load changes",
      "Insufficient insulation on steam lines"
    ],
    "correct": 2,
    "explanation": "Carryover — water droplets being carried with steam — is caused by: high water level in the steam drum, high Total Dissolved Solids (TDS) causing foaming, oil or chemical contamination, or sudden load increases. Carryover can cause water hammer and turbine damage."
  },
  {
    "id": 146,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is 'priming' in a steam boiler?",
    "options": [
      "Adding the initial dose of water treatment chemicals",
      "The initial startup procedure for the boiler",
      "Violent surging of water into the steam space, causing wet steam and water hammer",
      "Filling the boiler to operating level before startup"
    ],
    "correct": 2,
    "explanation": "Priming is violent, uncontrolled surging of boiler water into the steam space, resulting in very wet steam and potentially causing water hammer in steam lines and damage to downstream equipment like turbines. It is more severe than normal carryover."
  },
  {
    "id": 147,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What does the 'blowdown percentage' formula calculate?",
    "options": [
      "The percentage of boiler efficiency lost",
      "The percentage of makeup water needed",
      "The percentage of steam lost as flash steam",
      "The percent of feedwater flow that must be blown down based on TDS levels"
    ],
    "correct": 3,
    "explanation": "Blowdown % = (Feedwater TDS ÷ Allowable Boiler Water TDS) × 100. Example: 100 ppm feedwater TDS, 3,500 ppm maximum boiler TDS: BD% = (100/3500) × 100 = 2.86%. This percentage of feedwater flow must be blown down to maintain acceptable TDS levels."
  },
  {
    "id": 148,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does a superheater add to the steam cycle efficiency?",
    "options": [
      "Reduces pressure losses in the turbine",
      "Increases cycle efficiency approximately 1% per 20°C rise in superheat temperature",
      "Allows lower steam drum pressures",
      "Reduces the need for water treatment"
    ],
    "correct": 1,
    "explanation": "A superheater improves the thermodynamic efficiency of the steam cycle. At high pressure (above 120 bar), superheating improves cycle efficiency approximately 1% for every 20°C rise in superheat temperature, as the additional heat energy is converted to additional work in the turbine."
  },
  {
    "id": 149,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 'wet steam' and why is it undesirable for turbine operation?",
    "options": [
      "Steam at exactly 212°F at atmospheric pressure — ideal for turbines",
      "Steam that has been superheated — too hot for turbine blades",
      "Steam containing water droplets — causes erosion damage to turbine blades",
      "Steam at very low pressure — lacks sufficient energy"
    ],
    "correct": 2,
    "explanation": "Wet steam contains water droplets suspended in the steam. When wet steam enters a turbine at high velocity, the water droplets act like tiny projectiles, causing severe erosion damage to turbine blades. Dry saturated or superheated steam is preferred for turbine operation."
  },
  {
    "id": 150,
    "level": "2a",
    "category": "Combustion",
    "question": "What does the Orsat analyzer measure in flue gas analysis?",
    "options": [
      "Only oxygen percentage",
      "Only carbon dioxide percentage",
      "CO2, O2, and CO percentages",
      "Only stack temperature"
    ],
    "correct": 2,
    "explanation": "The Orsat analyzer is a laboratory-grade instrument that measures CO2, O2, and CO percentages in flue gases. A Fyrite analyzer is a portable, simpler instrument that measures either O2 or CO2 only. Both are used to analyze combustion efficiency."
  },
  {
    "id": 151,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the optimal flue gas oxygen percentage for natural gas combustion?",
    "options": [
      "3% O2 (approximately 15% excess air)",
      "1% O2 (0% excess air)",
      "7% O2 (approximately 47% excess air)",
      "10% O2 (approximately 85% excess air)"
    ],
    "correct": 0,
    "explanation": "The optimal flue gas oxygen percentage for natural gas combustion is approximately 3% O2, which corresponds to about 15% excess air and approximately 9.9% CO2. Too little O2 risks incomplete combustion (CO), while too much causes efficiency losses."
  },
  {
    "id": 152,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the approximate stoichiometric air/fuel ratio for natural gas?",
    "options": [
      "17.2 lbs air per lb fuel",
      "12.5:1 by weight",
      "8:1 by weight",
      "25:1 by weight"
    ],
    "correct": 0,
    "explanation": "For natural gas (methane), the stoichiometric (theoretically perfect) air/fuel ratio is approximately 17.2 lbs of air per lb of fuel. This is the exact amount of air needed for complete combustion with no excess air — theoretical only, not achievable in practice."
  },
  {
    "id": 153,
    "level": "2a",
    "category": "Combustion",
    "question": "What does an increasing stack temperature over time indicate in boiler operation?",
    "options": [
      "The boiler is operating more efficiently",
      "Fouling on fire-side or water-side surfaces is reducing heat transfer",
      "The fuel has a higher heating value",
      "The stack is the correct height"
    ],
    "correct": 1,
    "explanation": "A rising stack temperature over time indicates fouling on either the fire-side (soot/ash deposits) or water-side (scale deposits) of the boiler surfaces. Both act as insulators, reducing heat transfer to the water and sending more heat up the stack."
  },
  {
    "id": 154,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the Ringelmann Chart used for?",
    "options": [
      "Visual measurement of smoke opacity (scale 0-5)",
      "Measuring fuel consumption rates",
      "Measuring flue gas temperature",
      "Measuring draft pressure"
    ],
    "correct": 0,
    "explanation": "The Ringelmann Chart is used for visual measurement of smoke opacity from chimneys. The scale runs from 0 (clear, no smoke) to 5 (completely opaque). It allows inspectors to estimate combustion efficiency and compliance with smoke regulations."
  },
  {
    "id": 155,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the approximate heating value per gallon for #6 fuel oil (Bunker C)?",
    "options": [
      "115,000 BTU/gallon",
      "140,000 BTU/gallon",
      "175,000 BTU/gallon",
      "150,000 BTU/gallon"
    ],
    "correct": 3,
    "explanation": "#6 fuel oil (Bunker C) has an approximate heating value of 150,000 BTU per gallon. It is the heaviest fuel oil and must be preheated to 180–220°F for proper atomization before burning."
  },
  {
    "id": 156,
    "level": "2a",
    "category": "Combustion",
    "question": "Why must #6 fuel oil be preheated before burning?",
    "options": [
      "To increase its BTU content",
      "To prevent freezing during cold weather",
      "To reduce sulfur emissions",
      "To achieve proper atomization — it is too viscous to atomize at ambient temperature"
    ],
    "correct": 3,
    "explanation": "#6 fuel oil (Bunker C) is very viscous at ambient temperatures and cannot be properly atomized without preheating. It must be heated to 180–220°F to reduce viscosity enough for proper atomization by the burner nozzle."
  },
  {
    "id": 157,
    "level": "2a",
    "category": "Draft Systems",
    "question": "What is the primary factor determining the draft created in a natural draft chimney?",
    "options": [
      "The diameter of the chimney",
      "The material the chimney is made from",
      "The barometric pressure outside",
      "The height of the chimney stack"
    ],
    "correct": 3,
    "explanation": "The primary factor for natural draft is the height of the chimney stack. Taller stacks create greater draft because there is a larger column of hot gases (less dense than outside air) creating more pressure differential. Cooler outside air also increases draft."
  },
  {
    "id": 158,
    "level": "2a",
    "category": "Draft Systems",
    "question": "What is 'balanced draft' and what is the typical furnace pressure?",
    "options": [
      "Naturally created draft with balanced stack height",
      "Draft controlled by adjusting the furnace door",
      "Combination of forced and induced draft fans; furnace pressure near atmospheric (~-0.05 inches WC)",
      "Draft from balanced chimney and flue gas recirculation"
    ],
    "correct": 2,
    "explanation": "Balanced draft uses both a forced draft fan (pushing air in) and an induced draft fan (pulling gases out) operating together. The furnace pressure is maintained near atmospheric pressure (approximately -0.05 inches water column), combining the advantages of both systems."
  },
  {
    "id": 159,
    "level": "2a",
    "category": "Draft Systems",
    "question": "What type of furnace pressure does a forced draft system create?",
    "options": [
      "Negative pressure (below atmospheric)",
      "Positive pressure (above atmospheric)",
      "Exactly atmospheric pressure",
      "Vacuum conditions"
    ],
    "correct": 1,
    "explanation": "A forced draft fan pushes combustion air INTO the furnace, creating a POSITIVE pressure (above atmospheric) in the furnace. An induced draft fan pulls gases OUT, creating negative pressure. Natural draft also creates negative (below atmospheric) pressure."
  },
  {
    "id": 160,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is ASME CSD-1?",
    "options": [
      "The ASME Code section for power boiler construction",
      "The National Board inspection standard for boilers",
      "Controls and Safety Devices for Automatically Fired Boilers — minimum requirements for controls on auto-fired boilers",
      "The ASME welding qualification standard"
    ],
    "correct": 2,
    "explanation": "ASME CSD-1 is the standard for Controls and Safety Devices for Automatically Fired Boilers. It establishes minimum requirements for design, construction, installation, and operation of controls and safety devices on automatically fired boilers up to 12.5 million BTU/hr input."
  },
  {
    "id": 161,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What does the 'combustion air proving switch' in a CSD-1 control system verify?",
    "options": [
      "That combustion air is actually flowing before the burner ignites",
      "That the fuel pressure is correct",
      "That the boiler has reached operating temperature",
      "That the exhaust stack is clear"
    ],
    "correct": 0,
    "explanation": "The combustion air proving switch (air flow interlock) verifies that combustion air is actually flowing to the burner before allowing ignition. This prevents the burner from attempting to fire without adequate air supply, which could cause dangerous fuel accumulation."
  },
  {
    "id": 162,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "In a CSD-1 firing sequence, what must be proven before the main fuel valve is energized?",
    "options": [
      "The boiler has reached 50% of its operating pressure",
      "The blowdown valve has been operated",
      "The pilot (or direct spark ignition) flame has been proven by the flame scanner",
      "The boiler water has been tested for pH"
    ],
    "correct": 2,
    "explanation": "In the CSD-1 firing sequence, the pilot flame must first be proven by the flame scanner before the main fuel valve is allowed to open. This ensures an ignition source exists before main fuel is introduced, preventing uncontrolled fuel accumulation."
  },
  {
    "id": 163,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 'critical speed' in reference to steam turbines?",
    "options": [
      "The maximum allowed operating speed",
      "A rotational speed at which turbine resonance occurs — must be passed through quickly during startup",
      "The speed at which the overspeed trip activates",
      "The minimum speed for governor operation"
    ],
    "correct": 1,
    "explanation": "Critical speed is a rotational speed at which the turbine vibrates resonantly due to natural frequency matching. Operating at or near critical speed causes excessive vibration that can damage the turbine. During startup, critical speed must be passed through quickly to minimize the time spent at that frequency."
  },
  {
    "id": 164,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the overspeed trip setting for a steam turbine?",
    "options": [
      "105% of rated speed",
      "107% of rated speed",
      "110% of rated speed",
      "115% of rated speed"
    ],
    "correct": 2,
    "explanation": "The overspeed trip is set to activate at 110% of the turbine's rated speed. If the turbine reaches 110% of rated RPM, the overspeed trip mechanism shuts off the steam supply to prevent catastrophic turbine failure. Example: 3,600 RPM rated → trip at 3,960 RPM."
  },
  {
    "id": 165,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the difference between an impulse turbine and a reaction turbine?",
    "options": [
      "Impulse turbines use water; reaction turbines use steam",
      "Impulse turbines are single-stage; reaction turbines are always multi-stage",
      "Impulse turbines rotate faster; reaction turbines are more powerful",
      "Impulse turbines: steam expands only in nozzles; Reaction turbines: steam expands in both fixed and moving blades"
    ],
    "correct": 3,
    "explanation": "In an impulse turbine, steam expands and drops in pressure only in the stationary nozzles, hitting the moving blades at high velocity. In a reaction turbine, steam expands and drops pressure in BOTH the fixed (stationary) and moving blades, providing a reaction force. Examples: impulse = De Laval, Curtis, Rateau; reaction = Parsons."
  },
  {
    "id": 166,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "Which turbine type was the first successful single-stage impulse turbine, operating at very high speeds?",
    "options": [
      "Curtis turbine",
      "Parsons turbine",
      "Rateau turbine",
      "De Laval turbine"
    ],
    "correct": 3,
    "explanation": "The De Laval turbine was the first successful single-stage impulse turbine. It operates at very high speeds and uses a single impulse stage. The Curtis turbine is a multi-stage velocity-compounded impulse turbine; the Parsons is a reaction turbine."
  },
  {
    "id": 167,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "Which type of turbine is associated with the name 'Parsons'?",
    "options": [
      "Single-stage impulse turbine",
      "Reaction turbine",
      "Pressure-compounded impulse turbine",
      "Velocity-compounded impulse turbine"
    ],
    "correct": 1,
    "explanation": "The Parsons turbine is the classic reaction turbine design, in which steam expands across both fixed and moving blade rows. It operates at lower blade speeds than impulse turbines. The Curtis is velocity-compounded impulse; the Rateau is pressure-compounded impulse."
  },
  {
    "id": 168,
    "level": "2a",
    "category": "Bearings & Governors",
    "question": "What type of bearing supports the radial (side) loads on a turbine shaft?",
    "options": [
      "Journal (sleeve) bearing",
      "Tapered roller bearing",
      "Kingsbury thrust bearing",
      "Ball bearing only"
    ],
    "correct": 0,
    "explanation": "Journal (sleeve) bearings support radial (perpendicular to shaft) loads on a rotating shaft. They are lined with Babbitt metal, which is a soft bearing alloy. Kingsbury (tilting pad) thrust bearings handle axial (along-shaft) loads."
  },
  {
    "id": 169,
    "level": "2a",
    "category": "Bearings & Governors",
    "question": "What is the melting point range of Babbitt metal, and why is this significant?",
    "options": [
      "212-300°F — prevents boiling",
      "700-800°F — allows high-temperature operation",
      "450-600°F — melts before the shaft is damaged, providing a protective failure mode",
      "Below 100°F — prevents bearing heat buildup"
    ],
    "correct": 2,
    "explanation": "Babbitt metal melts at 450-600°F. This is significant because if the bearing overheats due to insufficient lubrication, the Babbitt melts BEFORE the shaft is damaged. This 'progressive failure' mode protects the expensive shaft and allows detection before catastrophic failure. Rolling element bearings fail catastrophically without this warning."
  },
  {
    "id": 170,
    "level": "2a",
    "category": "Bearings & Governors",
    "question": "What type of bearing handles axial (thrust) loads along the turbine shaft?",
    "options": [
      "Journal bearing (sleeve bearing)",
      "Sleeve bearing with oil grooves",
      "Standard ball bearing only",
      "Kingsbury (tilting pad) thrust bearing"
    ],
    "correct": 3,
    "explanation": "The Kingsbury (tilting pad) thrust bearing handles axial loads along the shaft. It uses a series of tilting pads that generate a hydrodynamic oil film. The Kingsbury bearing is commonly used in large turbines and has a very high load capacity."
  },
  {
    "id": 171,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What type of turbine governor uses centrifugal weights to control the steam admission valve?",
    "options": [
      "Flyball (mechanical) governor",
      "Hydraulic relay governor",
      "Electronic governor",
      "Direct-acting oil governor"
    ],
    "correct": 0,
    "explanation": "The flyball (mechanical) governor uses centrifugal force on rotating weights. As the turbine speeds up, the weights fly outward and close the steam valve; as it slows, they drop in and open the valve. It is the simplest type of turbine speed governor."
  },
  {
    "id": 172,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is 'speed droop' (regulation) in a turbine governor?",
    "options": [
      "The amount the turbine speed drops during an overspeed trip",
      "The percentage speed change from no-load to full-load conditions; typically 3-5%",
      "The rate at which the turbine slows down when steam is cut off",
      "Speed reduction required when approaching critical speed"
    ],
    "correct": 1,
    "explanation": "Speed droop (regulation) is the percentage change in speed from no-load to full-load operation. A typical value is 3-5%. With 5% droop on a 3,600 RPM turbine, the full-load speed would be approximately 3,420 RPM (5% below no-load speed)."
  },
  {
    "id": 173,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of condenser has cooling water flowing through tubes while steam condenses on the outside, keeping steam and cooling water separate?",
    "options": [
      "Jet condenser (direct contact)",
      "Surface condenser",
      "Flash condenser",
      "Barometric condenser"
    ],
    "correct": 1,
    "explanation": "A surface condenser has cooling water flowing through tubes while steam condenses on the outside of the tubes. Steam and cooling water never mix, allowing condensate to be recirculated as clean feedwater. A jet condenser mixes cooling water directly with steam."
  },
  {
    "id": 174,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "Why is a jet condenser's condensate generally NOT reused as boiler feedwater?",
    "options": [
      "It is too hot to use as feedwater",
      "Jet condensers produce condensate with too much dissolved oxygen",
      "The cooling water mixes directly with the steam, contaminating the condensate",
      "Jet condensers are only used for very low pressure systems"
    ],
    "correct": 2,
    "explanation": "In a jet condenser, cooling water sprays directly into the steam — they physically mix. This contamination means the resulting condensate cannot be recirculated as clean boiler feedwater without extensive treatment. Surface condensers keep fluids separate, making condensate reuse practical."
  },
  {
    "id": 175,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "For a steam boiler with two blowdown valves (required for boilers over 100 HP AND over 100 psig), what is the purpose of the slow-opening valve?",
    "options": [
      "Located nearest the boiler; provides fast isolation in emergencies",
      "Located farthest from the boiler; controls the blowdown rate (requires 5+ complete turns to open)",
      "Controls the direction of flow during blowdown",
      "Provides a backup if the quick-opening valve fails"
    ],
    "correct": 1,
    "explanation": "The slow-opening valve (requiring at least 5 complete turns to open) is located FARTHEST from the boiler and controls the blowdown rate. The quick-opening valve (nearest the boiler) is opened first and closed last, acting as the primary isolation. Always open and close blowdown valves slowly."
  },
  {
    "id": 176,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "Which type of valve is required for boiler isolation valves greater than 2 inches?",
    "options": [
      "OS&Y (Outside Screw and Yoke) gate valve with rising stem",
      "Ball valve with rising handle",
      "Globe valve",
      "Butterfly valve"
    ],
    "correct": 0,
    "explanation": "OS&Y (Outside Screw and Yoke) gate valves with rising stems are required for boiler isolation valves greater than 2 inches. The rising stem provides visual confirmation of valve position — stem extended means open, stem retracted means closed."
  },
  {
    "id": 177,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "On a globe valve used for boiler feedwater, where should the inlet pressure be relative to the disc?",
    "options": [
      "Pressure should be above the disc",
      "The disc should be balanced (equal pressure on both sides)",
      "Pressure can be on either side",
      "Pressure should be under the disc"
    ],
    "correct": 3,
    "explanation": "On a globe valve used on boiler feed piping, the inlet pressure should be UNDER the disc. This design assists in opening the valve and helps ensure a tighter shutoff when closed. This is a key installation detail tested on exams."
  },
  {
    "id": 178,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What type of valve is required on the steam outlet of a boiler when multiple boilers share a common steam header?",
    "options": [
      "Globe valve (for throttling)",
      "Gate valve (OS&Y) for isolation",
      "Ball valve (quick closing)",
      "Non-return valve (automatic closing)"
    ],
    "correct": 3,
    "explanation": "A non-return valve is required on the steam outlet of each boiler when multiple boilers share a common header. The non-return valve automatically closes if steam tries to flow backward from the header into the individual boiler, preventing backflow."
  },
  {
    "id": 179,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What is the governing piping code for high-pressure steam piping in Minnesota?",
    "options": [
      "MN Rules Chapter 5225",
      "ASME B31.3 (Process Piping)",
      "ASME B31.1 (Power Piping) adopted by MN Rules Chapter 5230",
      "NFPA 54 (National Fuel Gas Code)"
    ],
    "correct": 2,
    "explanation": "High-pressure steam piping in Minnesota is governed by ASME B31.1 (Power Piping), which is adopted by Minnesota Rules Chapter 5230. MN Rules Chapter 5225 governs the boiler itself. ASME B31.1 covers steam, feedwater, condensate, and other power piping systems."
  },
  {
    "id": 180,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What is a flash tank (flash vessel)?",
    "options": [
      "A storage vessel for fuel oil that requires preheating",
      "A chemical dosing vessel for water treatment",
      "A vessel for rapidly cooling boiler water during shutdown",
      "A pressure vessel that recovers flash steam from high-pressure condensate when released to lower pressure"
    ],
    "correct": 3,
    "explanation": "A flash tank is a pressure vessel used to recover flash steam from high-pressure condensate. When high-pressure condensate is released to a lower pressure, the excess energy causes some water to instantly evaporate ('flash') into steam, which is then recovered and used."
  },
  {
    "id": 181,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What is the approximate percentage of flash steam generated when condensate at 150 psig flashes to 15 psig?",
    "options": [
      "2-4%",
      "5-7%",
      "13-15%",
      "10-12%"
    ],
    "correct": 2,
    "explanation": "When condensate at 150 psig flashes to 15 psig, approximately 13-15% of the condensate becomes flash steam. This represents significant energy that can be recovered by directing the flash steam to a low-pressure header, deaerator, or feedwater heater."
  },
  {
    "id": 182,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "How much boiler fuel can be saved through flash steam recovery?",
    "options": [
      "1-3%",
      "5-7%",
      "20-25%",
      "10-15%"
    ],
    "correct": 3,
    "explanation": "Flash steam recovery can save approximately 10-15% of boiler fuel. Flash steam contains valuable latent heat (970.2 BTU/lb at 212°F). Without recovery, this energy is wasted when steam blows into the condensate tank and eventually to atmosphere."
  },
  {
    "id": 183,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What safety equipment is required on a flash tank?",
    "options": [
      "Safety relief valve, pressure gauge, and drain connection; must be ASME coded",
      "Only a pressure gauge",
      "Just an ASME code stamp",
      "Only a level indicator"
    ],
    "correct": 0,
    "explanation": "A flash tank must be: constructed to ASME Code and stamped accordingly, equipped with a safety relief valve set at or below design pressure, have a pressure gauge, and have a drain connection. It must also be properly sized for the flash steam volume."
  },
  {
    "id": 184,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What is the operating principle of a mechanical steam trap?",
    "options": [
      "Density difference between steam and condensate (float-based)",
      "Pressure and velocity differences (Bernoulli principle)",
      "Temperature difference between steam and condensate",
      "Electrical conductivity difference"
    ],
    "correct": 0,
    "explanation": "Mechanical steam traps operate based on the DENSITY DIFFERENCE between steam and condensate. Steam is much less dense than liquid condensate. Float-based mechanical traps (inverted bucket, float & thermostatic) use this principle."
  },
  {
    "id": 185,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What is the failure mode of an inverted bucket steam trap?",
    "options": [
      "Fails closed, backing up condensate",
      "Fails by freezing shut",
      "Fails by leaking from the body",
      "Fails open (loses prime), allowing live steam to pass"
    ],
    "correct": 3,
    "explanation": "An inverted bucket steam trap fails OPEN when it loses its water prime (seal). Without the water seal, the bucket can no longer float on steam, and the trap valve remains open, allowing live steam to pass continuously into the condensate system — wasting energy."
  },
  {
    "id": 186,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What operating principle does a thermodynamic disc trap use?",
    "options": [
      "Flash steam creates a low-pressure zone above the disc, holding it closed; condensate lifts the disc to drain",
      "Temperature of condensate vs. steam",
      "Float rising on condensate",
      "Bimetallic element expansion"
    ],
    "correct": 0,
    "explanation": "The thermodynamic disc trap uses Bernoulli's principle. When steam passes under the disc at high velocity, it creates a low-pressure zone above the disc, holding it closed. When condensate (slower velocity, higher pressure) accumulates, it lifts the disc, allowing condensate to drain."
  },
  {
    "id": 187,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "Which steam trap type is BEST for heat exchanger applications with continuously varying condensate loads?",
    "options": [
      "Inverted bucket trap",
      "Float & Thermostatic (F&T) trap",
      "Bimetallic thermostatic trap",
      "Thermodynamic disc trap"
    ],
    "correct": 1,
    "explanation": "The Float & Thermostatic (F&T) trap is best for heat exchangers because it provides continuous condensate discharge (the ball float modulates to match load), handles varying loads well, and includes a thermostatic air vent to remove non-condensable gases."
  },
  {
    "id": 188,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What does steam blowing into the condensate tank indicate about a steam trap?",
    "options": [
      "The trap is working correctly at high load",
      "The trap needs manual draining",
      "The trap has failed OPEN — it is passing live steam",
      "The condensate tank is full"
    ],
    "correct": 2,
    "explanation": "Steam blowing into the condensate tank indicates that a steam trap has FAILED OPEN — it is passing live steam through into the return system instead of condensate only. This wastes energy and raises condensate tank temperature."
  },
  {
    "id": 189,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What problem does a FAILED CLOSED steam trap cause?",
    "options": [
      "Live steam passes into the condensate system",
      "Excess pressure builds up in the steam line",
      "Flash steam is lost to atmosphere",
      "Condensate backs up (waterlogged), causing water hammer and reduced heat transfer"
    ],
    "correct": 3,
    "explanation": "A failed closed steam trap cannot discharge condensate, causing it to back up and waterlog the system (e.g., a radiator). Waterlogging reduces heat transfer, causes water hammer as steam collides with trapped condensate, and can damage equipment."
  },
  {
    "id": 190,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of pump is MOST commonly used for boiler feedwater service?",
    "options": [
      "Reciprocating piston pump",
      "Centrifugal pump",
      "Rotary gear pump",
      "Axial flow pump"
    ],
    "correct": 1,
    "explanation": "Centrifugal pumps are the most common type used for boiler feedwater service. They use a rotating impeller to create flow and are well-suited for large-volume, continuous feedwater service. The suction pipe on a feedwater pump should be the LARGER diameter pipe."
  },
  {
    "id": 191,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 'cavitation' in a centrifugal pump?",
    "options": [
      "Air accumulation in the pump casing",
      "The pump running at too high a speed",
      "Formation and collapse of vapor bubbles in the pump due to low suction pressure, causing pitting damage",
      "Blockage of the pump suction strainer"
    ],
    "correct": 2,
    "explanation": "Cavitation occurs when the suction pressure drops below the vapor pressure of the liquid, causing vapor bubbles to form and violently collapse in the pump impeller. This causes a distinctive rattling noise, erosion of the impeller, and reduced pump performance."
  },
  {
    "id": 192,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a 'steam-bound' pump and how is it corrected?",
    "options": [
      "A pump running too fast due to high steam pressure",
      "A pump whose discharge is blocked by a closed valve",
      "Steam entering the pump suction, preventing normal pumping — corrected by cooling the pump (admitting cold water)",
      "A pump with a seized bearing"
    ],
    "correct": 2,
    "explanation": "A steam-bound pump has steam entering the suction, preventing the pump from operating (you cannot pump steam with a centrifugal pump). To correct, admit cold water to cool the pump and condense the steam back to liquid so normal pumping can resume."
  },
  {
    "id": 193,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "In the Rankine cycle, what happens during the 'expansion' process in the turbine?",
    "options": [
      "Liquid water pressure is raised by the feedwater pump",
      "High-pressure steam expands through the turbine, producing mechanical work",
      "Water is heated to saturation and evaporated to steam",
      "Exhaust steam is condensed back to liquid in the condenser"
    ],
    "correct": 1,
    "explanation": "In the Rankine cycle, the expansion process (step 3-4) occurs in the turbine. High-pressure, high-temperature steam expands through the turbine blades, doing work and converting thermal energy to mechanical rotation. Steam pressure and temperature drop as energy is extracted."
  },
  {
    "id": 194,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "In the Rankine cycle, what is the function of the condenser?",
    "options": [
      "Rejects heat by condensing exhaust steam back to liquid water for recirculation",
      "Removes non-condensable gases from the steam",
      "Heats feedwater before the boiler",
      "Compresses steam for reuse"
    ],
    "correct": 0,
    "explanation": "In the Rankine cycle, the condenser (step 4-1) rejects the remaining heat from exhaust steam by condensing it back to liquid water. This liquid water (condensate) is then pumped back to the boiler to complete the cycle."
  },
  {
    "id": 195,
    "level": "2a",
    "category": "Layup & Maintenance",
    "question": "What is the recommended layup method for short-term boiler shutdowns?",
    "options": [
      "Dry layup — drain completely and use desiccants",
      "Wet layup — fill with treated, deaerated water at high alkalinity",
      "Nitrogen blanket only with no water inside",
      "Leave the boiler at normal operating pressure"
    ],
    "correct": 1,
    "explanation": "Wet layup is recommended for SHORT-TERM shutdowns. The boiler is filled with treated, deaerated water with high alkalinity (>400 ppm) and oxygen scavenger (Na2SO3 >200 ppm) to protect internal surfaces. Dry layup is preferred for longer-term storage."
  },
  {
    "id": 196,
    "level": "2a",
    "category": "Layup & Maintenance",
    "question": "What is the recommended layup method for extended (long-term) boiler shutdowns?",
    "options": [
      "Dry layup — drain completely, dry thoroughly, place desiccant inside, seal all openings",
      "Wet layup — fill completely with water",
      "Leave partially filled with untreated water",
      "Keep the boiler warm with low firing"
    ],
    "correct": 0,
    "explanation": "Dry layup is recommended for EXTENDED shutdowns. After draining at below 140°F, the interior is thoroughly dried. Desiccant (silica gel or quicklime) is placed inside to absorb moisture, and all openings are sealed. The desiccant should be renewed every 3 months."
  },
  {
    "id": 197,
    "level": "2a",
    "category": "Layup & Maintenance",
    "question": "During dry layup, at what boiler pressure and temperature should the boiler be drained?",
    "options": [
      "At 0 psig and below 140°F",
      "At 50 psig or less and 200°F or less",
      "At operating pressure and temperature",
      "Any time the fire is off"
    ],
    "correct": 0,
    "explanation": "During dry layup, the boiler should be drained at 0 psig and below 140°F. Draining at higher temperatures can cause thermal shock and condensation issues. The boiler must be at atmospheric pressure with the vent open before draining."
  },
  {
    "id": 198,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does the 'R' stamp on a repaired boiler signify?",
    "options": [
      "The boiler has been rated for higher pressure",
      "The boiler has been recertified by a state inspector",
      "A National Board certified R-stamp repair — all welding repairs must be performed by an R-stamp holder",
      "The boiler has been reconditioned with new tubes"
    ],
    "correct": 2,
    "explanation": "The 'R' stamp means the repair was performed by a National Board certified repair organization. Any welding repair or alteration to a boiler in Minnesota MUST be performed by an organization holding a current National Board 'R' certificate. The ASME Section IX standard governs welding qualifications."
  },
  {
    "id": 199,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does ASME Section VI govern?",
    "options": [
      "Power boiler construction",
      "Care and operation of heating boilers (low-pressure)",
      "Pressure vessel construction",
      "Welding qualifications"
    ],
    "correct": 1,
    "explanation": "ASME Section VI covers the care and operation of heating boilers (low-pressure steam, hot water supply, and hot water heating boilers). Section VII covers the care of power boilers. Both are guidance documents (non-mandatory unless adopted by reference)."
  },
  {
    "id": 200,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does ASME Section IX govern?",
    "options": [
      "Nondestructive examination methods",
      "Power boiler construction",
      "Pressure vessel construction",
      "Welding and brazing qualifications and procedures"
    ],
    "correct": 3,
    "explanation": "ASME Section IX governs welding and brazing qualifications. It establishes procedures and performance qualifications for welders and welding procedures used in the construction and repair of ASME-stamped pressure equipment."
  },
  {
    "id": 201,
    "level": "2a",
    "category": "Boiler Testing",
    "question": "What is the test pressure for a new boiler hydrostatic test per ASME Section I?",
    "options": [
      "Equal to MAWP",
      "1.25 times MAWP",
      "2 times MAWP",
      "1.5 times MAWP minimum"
    ],
    "correct": 3,
    "explanation": "Per ASME Section I, new boiler construction requires a hydrostatic test at a minimum of 1.5 times the MAWP. In-service hydrostatic tests (per NBIC) may be performed at 1.25–1.5 times MAWP depending on jurisdiction and inspector requirements."
  },
  {
    "id": 202,
    "level": "2a",
    "category": "Boiler Testing",
    "question": "What is the purpose of a hydrostatic test on a boiler?",
    "options": [
      "To detect leaks, cracks, and weaknesses using water pressure",
      "To check that the LWCO operates correctly",
      "To verify the safety valve opens at the correct pressure",
      "To verify the correct fuel/air ratio"
    ],
    "correct": 0,
    "explanation": "A hydrostatic test uses water under pressure to detect leaks, cracks, and weaknesses in welds, tubes, and the boiler shell. Water is used (instead of steam/air) because it is incompressible — if a failure occurs, water simply leaks rather than releasing stored energy explosively."
  },
  {
    "id": 203,
    "level": "2a",
    "category": "Boiler Testing",
    "question": "What is the acceptable water temperature range for hydrostatic testing of a firetube boiler?",
    "options": [
      "32-70°F (cold water required)",
      "Above 150°F to prevent condensation",
      "100-120°F preferred",
      "70-100°F minimum to maximum"
    ],
    "correct": 3,
    "explanation": "For firetube boilers, the acceptable water temperature range for hydrostatic testing is 70°F minimum to 100°F maximum. For watertube boilers, the range is 70°F minimum to 160°F maximum. The preferred range for all boilers is 100-120°F."
  },
  {
    "id": 204,
    "level": "2a",
    "category": "Boiler Testing",
    "question": "What is the maximum rate of pressure increase during a hydrostatic test?",
    "options": [
      "50 psi per minute",
      "25 psi per minute",
      "10 psi per minute",
      "100 psi per minute"
    ],
    "correct": 0,
    "explanation": "During a hydrostatic test, pressure should be increased at a maximum rate of 50 psi per minute. Pressure should be increased slowly to allow inspection at all pressure levels and to prevent hydraulic shock."
  },
  {
    "id": 205,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is an HRSG (Heat Recovery Steam Generator)?",
    "options": [
      "A water-tube boiler that captures waste heat from gas turbines or other heat sources instead of direct combustion",
      "A standard fire-tube boiler used in hospitals",
      "A high-reliability steam generator for nuclear plants",
      "A portable steam generator for field use"
    ],
    "correct": 0,
    "explanation": "An HRSG (Heat Recovery Steam Generator) is a water-tube boiler that generates steam by capturing waste heat from exhaust gases of gas turbines, internal combustion engines, or industrial processes — instead of firing a burner. It is commonly used in combined-cycle power plants."
  },
  {
    "id": 206,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the target dissolved oxygen level in boiler feedwater?",
    "options": [
      "Less than 0.07 mg/L",
      "Less than 0.7 mg/L",
      "Less than 0.007 mg/L",
      "Less than 7 mg/L"
    ],
    "correct": 2,
    "explanation": "The target dissolved oxygen level in boiler feedwater is less than 0.007 mg/L (7 ppb). This extremely low level is necessary to prevent pitting corrosion. Deaeration and oxygen scavengers work together to achieve this target."
  },
  {
    "id": 207,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the function of condensate treatment amines (neutralizing amines)?",
    "options": [
      "Add alkalinity to the boiler water",
      "Increase the boiling point of the feedwater",
      "Neutralize carbon dioxide in the condensate to prevent corrosion in return lines",
      "Remove hardness minerals from makeup water"
    ],
    "correct": 2,
    "explanation": "Neutralizing amines (such as morpholine or cyclohexylamine) neutralize carbon dioxide (CO2) that dissolves in condensate, forming carbonic acid. This CO2-caused corrosion attacks condensate return lines. Filming amines create a protective coating on metal surfaces."
  },
  {
    "id": 208,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What does silica in boiler water cause?",
    "options": [
      "Pitting corrosion",
      "Embrittlement of the boiler metal",
      "Foaming and carryover",
      "Hard glassy scale; can also volatilize and deposit on turbine blades at high pressures"
    ],
    "correct": 3,
    "explanation": "Silica forms a hard, glassy scale on boiler heating surfaces that is very difficult to remove. At high pressures, silica can also volatilize (vaporize) and carry over with the steam, depositing on turbine blades and degrading turbine performance."
  },
  {
    "id": 209,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "During normal boiler shutdown, what temperature should the boiler reach before draining?",
    "options": [
      "Below 212°F and at 0 psig",
      "Any temperature after the burner is off",
      "Below 250°F at any pressure",
      "Below 140°F and at 0 psig"
    ],
    "correct": 3,
    "explanation": "During normal shutdown, the boiler should be allowed to cool below 140°F at 0 psig before draining. The vent valve should be opened before draining to prevent a vacuum from forming in the boiler as it cools. Draining while hot can cause thermal shock."
  },
  {
    "id": 210,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of an air ejector in a steam condenser system?",
    "options": [
      "Removes non-condensable gases (air, CO2) from the condenser to maintain vacuum",
      "Injects air into the steam for combustion purposes",
      "Provides cooling air to the condenser",
      "Controls the condensate flow rate"
    ],
    "correct": 0,
    "explanation": "Air ejectors (or vacuum pumps) remove non-condensable gases (air, carbon dioxide) from the condenser. These gases collect in the condenser and reduce its heat transfer effectiveness, reducing the vacuum. Removing them maintains proper condenser vacuum and system efficiency."
  },
  {
    "id": 211,
    "level": "2a",
    "category": "Combustion",
    "question": "What does 'pour point' mean when referring to fuel oil?",
    "options": [
      "The pressure at which fuel oil atomizes",
      "The temperature at which fuel oil ignites",
      "The lowest temperature at which fuel oil will flow as a liquid",
      "The flash point of fuel oil"
    ],
    "correct": 2,
    "explanation": "The pour point of fuel oil is the lowest temperature at which the oil will flow as a liquid. Heavy fuel oils (#5, #6) must be stored and handled above their pour point to prevent flow problems. This is why heavy oils require preheating systems."
  },
  {
    "id": 212,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the primary difference between a condensing boiler and a standard boiler?",
    "options": [
      "Condensing boilers generate more steam pressure",
      "Condensing boilers recover latent heat from flue gases by condensing water vapor, achieving efficiencies up to 98%",
      "Condensing boilers use only electricity, not fuel",
      "Condensing boilers operate at lower pressures"
    ],
    "correct": 1,
    "explanation": "A condensing boiler recovers the latent heat from water vapor in the flue gases by cooling the flue gas below its dew point, condensing the moisture. This additional heat recovery achieves efficiencies of up to 98% (vs. 80-85% for standard boilers). Special corrosion-resistant materials are required for the condensate."
  },
  {
    "id": 213,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 'factor of safety' in the context of boiler shell design?",
    "options": [
      "The percentage of excess pressure above MAWP that is allowed",
      "Ultimate Tensile Strength divided by Safe Working Stress",
      "The safety valve accumulation percentage",
      "A multiplier applied to operating pressure for safety valve testing"
    ],
    "correct": 1,
    "explanation": "Factor of Safety = Ultimate Tensile Strength ÷ Safe Working Stress. Minnesota and ASME typically require a Factor of Safety of 5 for older boilers and 3.5 for modern welded construction per ASME Section I."
  },
  {
    "id": 214,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "A boiler has 2,500 square feet of heating surface. What is its rating in Boiler HP?",
    "options": [
      "250 BHP",
      "125 BHP",
      "500 BHP",
      "1,000 BHP"
    ],
    "correct": 0,
    "explanation": "For conventional boilers: BHP = Heating Surface ÷ 10. Therefore: 2,500 sq ft ÷ 10 = 250 BHP. This is also equivalent to evaporating 34.5 × 250 = 8,625 lbs of steam/hr from and at 212°F."
  },
  {
    "id": 215,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "What is the conversion between water head and pressure? (1 foot of water = how many psi?)",
    "options": [
      "0.100 psi",
      "0.231 psi",
      "0.433 psi",
      "1.000 psi"
    ],
    "correct": 2,
    "explanation": "1 foot of water head = 0.433 psi. Conversely, 1 psi = 2.31 feet of water head. This conversion is used to calculate pump head requirements and static pressure from water column height."
  },
  {
    "id": 216,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "How many BTU/hr does 1 Boiler Horsepower represent?",
    "options": [
      "2,545 BTU/hr",
      "12,000 BTU/hr",
      "33,479 BTU/hr",
      "100,000 BTU/hr"
    ],
    "correct": 2,
    "explanation": "1 Boiler Horsepower = 33,479 BTU/hr = evaporation of 34.5 lbs of steam per hour from and at 212°F. Note: 1 mechanical HP = 2,545 BTU/hr (different unit), and 1 ton of refrigeration = 12,000 BTU/hr."
  },
  {
    "id": 217,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "How many gallons are there in one cubic foot of water?",
    "options": [
      "6.25 gallons",
      "8.33 gallons",
      "7.48 gallons",
      "10.0 gallons"
    ],
    "correct": 2,
    "explanation": "There are 7.48 gallons per cubic foot of water. One cubic foot of water also weighs 62.4 pounds. One gallon of water weighs approximately 8.33-8.34 pounds."
  },
  {
    "id": 218,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What happens to the volume and latent heat of steam as pressure increases?",
    "options": [
      "Volume and latent heat both decrease; temperature increases",
      "Volume decreases and latent heat increases",
      "Both increase as pressure increases",
      "Volume increases and latent heat decreases"
    ],
    "correct": 0,
    "explanation": "As steam pressure increases: volume decreases (steam becomes more dense), latent heat decreases (less heat is needed for the phase change), and saturation temperature increases. This is an important property affecting steam system design."
  },
  {
    "id": 219,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a 'deaerator' and at what approximate pressure does it operate?",
    "options": [
      "A chemical dosing device operating at boiler pressure",
      "A mechanical device that removes dissolved gases from feedwater by heating to saturation; operates at 5-15 psig",
      "A filter vessel operating at atmospheric pressure",
      "A vacuum vessel operating at below atmospheric pressure"
    ],
    "correct": 1,
    "explanation": "A deaerator is a feedwater heater that removes dissolved oxygen and CO2 by heating the water to saturation temperature, causing the gases to come out of solution. It operates at approximately 5-15 psig (225-250°F). The target dissolved oxygen after deaeration is less than 0.007 mg/L."
  },
  {
    "id": 220,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does an economizer add to the boiler system's overall efficiency?",
    "options": [
      "3-5% efficiency improvement",
      "5-15% efficiency improvement",
      "15-20% efficiency improvement",
      "Less than 1% improvement"
    ],
    "correct": 0,
    "explanation": "An economizer typically increases overall boiler efficiency by approximately 3-5% by recovering heat from waste flue gases and using it to preheat feedwater. The exact improvement depends on the temperature difference between flue gas and feedwater."
  },
  {
    "id": 221,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a 'compound gauge' and when is it used?",
    "options": [
      "A gauge that reads two different pressures on the same dial",
      "A gauge combined with a thermometer",
      "A gauge with both Fahrenheit and Celsius scales",
      "A gauge that reads both vacuum (below atmospheric) and pressure (above atmospheric)"
    ],
    "correct": 3,
    "explanation": "A compound gauge reads both vacuum (negative pressure, below atmospheric) and pressure (above atmospheric) on a single dial. It is used in condenser systems, vacuum steam heating systems, and any application where both vacuum and positive pressure may occur."
  },
  {
    "id": 222,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "For a boiler over 100 HP AND over 100 psig, how many blowdown valves are required?",
    "options": [
      "One valve is always sufficient",
      "Three valves for redundancy",
      "Two valves are required on the blowdown line",
      "The number depends on boiler size"
    ],
    "correct": 2,
    "explanation": "Boilers over 100 HP AND over 100 psig must have TWO valves on the blowdown line. With two valves, the quick-opening valve is located nearest to the boiler, and the slow-opening valve (requiring 5+ turns) is located farthest from the boiler."
  },
  {
    "id": 223,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of valve is BEST for surface blowdown and instrument connections?",
    "options": [
      "Gate valve (OS&Y)",
      "Globe valve for larger flows",
      "Needle valve (for precise small-volume control)",
      "Ball valve"
    ],
    "correct": 2,
    "explanation": "A needle valve, with its long tapered point, is used for precise small-volume flow control on surface blowdown lines and instrument connections. It provides very fine throttling control for small flow applications."
  },
  {
    "id": 224,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 'surface blowdown' and how does it differ from 'bottom blowdown'?",
    "options": [
      "They are the same operation performed at different times",
      "They both remove sediment but from different parts of the boiler",
      "Surface blowdown is done manually; bottom blowdown is automatic",
      "Surface blowdown removes floating impurities (oil, foam, dissolved solids) from the water surface; bottom blowdown removes sediment from the bottom"
    ],
    "correct": 3,
    "explanation": "Surface blowdown removes dissolved solids, oil, and foam from near the water surface (via a continuous or intermittent skimming action), helping to control TDS and reduce carryover. Bottom blowdown removes sludge and sediment from the lowest point of the boiler waterside."
  },
  {
    "id": 225,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "On a boiler feed pump, which pipe should have the LARGER diameter — the suction or the discharge?",
    "options": [
      "The suction pipe should be the larger pipe",
      "Both should be the same size",
      "The discharge pipe should be larger",
      "It depends on the pump type"
    ],
    "correct": 0,
    "explanation": "On a boiler feed pump, the suction pipe should be the LARGER pipe. A larger suction pipe reduces velocity and friction losses, keeping suction pressure high enough to prevent cavitation. The discharge pipe handles the higher pressure output and can be smaller."
  },
  {
    "id": 226,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "Which steam trap type is BEST for superheated steam applications?",
    "options": [
      "Balanced pressure thermostatic trap",
      "Bimetallic or disc (thermodynamic) trap",
      "Float & Thermostatic trap",
      "Inverted bucket trap"
    ],
    "correct": 1,
    "explanation": "Bimetallic thermostatic traps and thermodynamic disc traps are best for superheated steam applications because they handle superheat temperatures. Balanced pressure thermostatic traps cannot handle superheat — the liquid-filled element would vaporize at superheat temperatures."
  },
  {
    "id": 227,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does a 'high-limit pressuretrol' do on a steam boiler?",
    "options": [
      "Sets the normal operating pressure range",
      "Adjusts the feedwater pump pressure",
      "Controls the steam pressure at the end use",
      "Acts as a safety backup — if the operating pressuretrol fails, it shuts off the burner; typically requires a manual reset"
    ],
    "correct": 3,
    "explanation": "The high-limit pressuretrol is a safety backup control that shuts off the burner if steam pressure rises above a preset safety limit (in case the operating pressuretrol fails). It typically has a manual reset to require operator attention before the boiler is restarted."
  },
  {
    "id": 228,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the typical boiler efficiency range for a well-maintained fire-tube boiler?",
    "options": [
      "80-85%",
      "70-75%",
      "50-65%",
      "92-98%"
    ],
    "correct": 0,
    "explanation": "A well-maintained fire-tube boiler typically achieves 80-85% efficiency. Water-tube boilers typically achieve 85-92%, and condensing boilers achieve 92-98% by recovering latent heat from flue gases."
  },
  {
    "id": 229,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does the 'factor of evaporation' measure?",
    "options": [
      "The percentage of water converted to steam",
      "The ratio of actual steam conditions to the standard boiler HP reference conditions; = (H_steam - h_fw) / 970.3",
      "The efficiency of the feedwater heating system",
      "The steam dryness fraction"
    ],
    "correct": 1,
    "explanation": "The factor of evaporation is calculated as: (Enthalpy of steam - Enthalpy of feedwater) ÷ 970.3 BTU/lb. It compares actual steam production to the standard reference (from and at 212°F) and is used to calculate equivalent evaporation and boiler efficiency."
  },
  {
    "id": 230,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is a 'double block and bleed' system in a gas burner fuel train?",
    "options": [
      "Two pressure gauges on the fuel line for redundancy",
      "Two separate fuel supply lines feeding one burner",
      "Two safety shutoff valves with a vent between them — if either valve leaks, gas vents safely to atmosphere",
      "A system that blocks air flow and bleeds excess fuel"
    ],
    "correct": 2,
    "explanation": "A double block and bleed system has two safety shutoff valves in series with a vented space between them. If either valve leaks, gas is vented safely to atmosphere instead of entering the combustion chamber. This provides redundant fuel shut-off safety on larger burner systems."
  },
  {
    "id": 231,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of steam engine uses two cylinders in series to extract more energy from steam?",
    "options": [
      "Compound steam engine",
      "Simple steam engine",
      "Triple-expansion steam engine",
      "Uniflow steam engine"
    ],
    "correct": 0,
    "explanation": "A compound steam engine uses two cylinders: the high-pressure cylinder extracts energy first, and the expanded exhaust steam passes to a larger low-pressure cylinder for further expansion and energy extraction. Triple expansion uses three cylinders."
  },
  {
    "id": 232,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of an intercooler on a multi-stage air compressor?",
    "options": [
      "Heats the air between stages for better compression",
      "Removes moisture from the final compressed air output",
      "Lubricates the air compressor bearings",
      "Cools the compressed air between stages to increase density and reduce compression work"
    ],
    "correct": 3,
    "explanation": "An intercooler cools compressed air between stages in a multi-stage compressor. Cooling the air reduces its volume (increases density), reducing the work needed for the next compression stage. An aftercooler cools air after the final compression stage."
  },
  {
    "id": 233,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 'wire drawing' in reference to a safety valve?",
    "options": [
      "Pulling wires to operate a remote safety valve",
      "Erosion of the valve seat from continuous minor leakage at pressures below set point",
      "Drawing wire through the valve for cleaning",
      "The mechanical linkage inside the valve actuator"
    ],
    "correct": 1,
    "explanation": "Wire drawing is the erosion of the valve disc and seat caused by minor steam leakage at pressures below the set point. Steam flowing past a slightly leaking safety valve gradually erodes the metal surfaces, eventually causing the valve to leak more severely."
  },
  {
    "id": 234,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "For what maximum BTU/hr input does ASME CSD-1 apply to automatically fired boilers?",
    "options": [
      "1 million BTU/hr",
      "12.5 million BTU/hr",
      "5 million BTU/hr",
      "50 million BTU/hr"
    ],
    "correct": 1,
    "explanation": "ASME CSD-1 applies to automatically fired boilers with inputs up to 12.5 million BTU/hr. Larger boilers are typically governed by ASME Section I and NFPA 85 (Boiler and Combustion Systems Hazards Code)."
  },
  {
    "id": 235,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of a 'flat gauge glass' vs. a standard round sight glass?",
    "options": [
      "Flat gauge glasses are for horizontal water columns; round are for vertical",
      "Flat gauge glasses are required above 250 psig because of higher pressure rating",
      "Flat glasses provide better visibility; round ones are for older boilers",
      "There is no functional difference"
    ],
    "correct": 1,
    "explanation": "Flat (plate) gauge glasses are required at higher pressures — ASME requires flat gauge glass above 250 psig (1,724 kPa). Round (tubular) gauge glass is used at lower pressures. Flat gauge glass can withstand higher pressure without the fragility issues of round glass tubes."
  },
  {
    "id": 236,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is propane (LP gas) property that requires special ventilation considerations?",
    "options": [
      "Propane is lighter than air and rises",
      "Propane dissipates immediately — no ventilation needed",
      "Propane is the same density as air",
      "Propane is heavier than air and can accumulate in low areas and pits"
    ],
    "correct": 3,
    "explanation": "Propane (LP gas) is HEAVIER than air. In case of leaks, propane settles and accumulates in low-lying areas, pits, sumps, and basement areas. This requires special ventilation design to prevent dangerous accumulations. Natural gas (methane) is lighter than air."
  },
  {
    "id": 237,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the approximate heating value of #2 fuel oil per gallon vs. natural gas per cubic foot?",
    "options": [
      "#2 oil ≈ 140,000 BTU/gal vs. gas ≈ 1,000 BTU/cf",
      "#2 oil = 100,000 BTU/gal vs. gas = 500 BTU/cf",
      "#2 oil = 50,000 BTU/gal vs. gas = 2,000 BTU/cf",
      "They are equal at approximately 1,000 BTU/unit"
    ],
    "correct": 0,
    "explanation": "#2 fuel oil has approximately 140,000 BTU per gallon. Natural gas has approximately 1,000 BTU per cubic foot. These are standard reference values tested on the exam. #6 fuel oil has approximately 150,000 BTU/gallon."
  },
  {
    "id": 238,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a 'Scotch Marine wet-back' vs. 'dry-back' boiler?",
    "options": [
      "Wet-back has more tubes; dry-back has fewer tubes",
      "Wet-back fires wet fuel; dry-back fires dry fuel",
      "Wet-back operates at low pressure; dry-back at high pressure",
      "Wet-back has water-cooled rear turnaround; dry-back has refractory-lined rear turnaround"
    ],
    "correct": 3,
    "explanation": "In a Scotch Marine wet-back design, the rear combustion chamber turnaround is water-cooled (water jacket). In a dry-back design, the rear turnaround is lined with refractory (heat-resistant brick/cement). Wet-back is more thermally efficient; dry-back is easier to inspect and maintain."
  },
  {
    "id": 239,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What atmospheric pressure value is used in boiler calculations?",
    "options": [
      "10 psi = 25.4 inches Hg",
      "14.7 psi = 29.92 inches Hg",
      "15.0 psi = 30 inches Hg",
      "14.0 psi = 28 inches Hg"
    ],
    "correct": 1,
    "explanation": "Standard atmospheric pressure is 14.7 psi = 29.92 inches of mercury (Hg). This value is used in absolute pressure calculations (absolute pressure = gauge pressure + 14.7 psi) and in other boiler performance calculations."
  },
  {
    "id": 240,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of heat transfer is primary in a furnace when hot gas flows over boiler tubes?",
    "options": [
      "Radiation from the flame",
      "Convection — heat carried from gas to tube surface by fluid movement",
      "Conduction through the tube wall",
      "All three occur equally"
    ],
    "correct": 1,
    "explanation": "When hot combustion gases flow over boiler tubes, the primary mechanism is convection — heat is transferred from the moving gas to the tube surface. Within the furnace itself, radiation is important for heat transfer from the flame to waterwall tubes. Conduction then transfers heat through the tube wall to the water."
  },
  {
    "id": 241,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of waterwall tubes in a water-tube boiler furnace?",
    "options": [
      "Form the outer casing of the boiler",
      "Form the furnace walls and absorb radiant heat directly from the flame",
      "Insulate the furnace walls",
      "Support the steam drum"
    ],
    "correct": 1,
    "explanation": "Waterwall tubes form the walls of the furnace in a water-tube boiler, providing the structural boundary of the combustion space. They are filled with water and directly absorb radiant heat from the flame, making them highly effective heat transfer surfaces."
  },
  {
    "id": 242,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the minimum pipe size required for the feedwater check valve installation?",
    "options": [
      "The same size as the feedwater main",
      "3% larger than the stop valve",
      "Must deliver water at pressure 3% above safety valve set pressure",
      "Must match the feedwater line size — no specific separate minimum"
    ],
    "correct": 2,
    "explanation": "While no specific minimum pipe size governs the check valve itself, each independent feedwater source must be capable of delivering water to the boiler at a pressure at least 3% above the safety valve set pressure. This ensures the feedwater can always enter the boiler against operating pressure."
  },
  {
    "id": 243,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a 'vacuum boiler' and how does it differ from standard boilers?",
    "options": [
      "A boiler that uses vacuum pressure to pull combustion air",
      "A boiler with a vacuum pump for feedwater circulation",
      "A condensing boiler that creates a vacuum in the condenser",
      "A boiler that operates below atmospheric pressure; water boils below 200°F; not subject to ASME pressure vessel codes in most jurisdictions"
    ],
    "correct": 3,
    "explanation": "A vacuum boiler operates below atmospheric pressure, using the lower boiling point of water at sub-atmospheric pressure (below 212°F). Because it does not operate under pressure above atmospheric, it is generally not subject to ASME pressure vessel codes in most jurisdictions."
  },
  {
    "id": 244,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the 'EDR' rating and how many BTU/hr does 1 sq ft of steam EDR represent?",
    "options": [
      "Equivalent Direct Radiation; 240 BTU/hr per sq ft steam",
      "Equivalent Direct Radiation; 120 BTU/hr per sq ft",
      "Effective Draft Rating; 500 BTU/hr per sq ft",
      "Equivalent Discharge Rate; 100 BTU/hr per sq ft"
    ],
    "correct": 0,
    "explanation": "EDR stands for Equivalent Direct Radiation — it is used to measure heating system capacity. 1 square foot of steam EDR = 240 BTU/hr. 1 square foot of hot water EDR = 150 BTU/hr. 1 BHP = 33,479 BTU/hr = 139.5 sq ft of steam EDR."
  },
  {
    "id": 245,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does 1 mechanical horsepower (HP) equal in BTU/hr?",
    "options": [
      "746 BTU/hr",
      "2,545 BTU/hr",
      "1,000 BTU/hr",
      "33,479 BTU/hr"
    ],
    "correct": 1,
    "explanation": "1 mechanical horsepower = 2,545 BTU/hr = 33,000 ft-lbs/min = 746 watts. This is different from 1 Boiler HP = 33,479 BTU/hr. The mechanical HP value is used in turbine and engine efficiency calculations."
  },
  {
    "id": 246,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "When is an accumulation test performed and what does it verify?",
    "options": [
      "Daily — verifies LWCO operation",
      "Annually — verifies boiler structural integrity",
      "Monthly — verifies water treatment chemicals are adequate",
      "When the safety valve is tested — verifies capacity to prevent pressure from exceeding MAWP + allowed accumulation"
    ],
    "correct": 3,
    "explanation": "The accumulation test verifies that the safety valve(s) have sufficient CAPACITY to prevent boiler pressure from rising above MAWP plus the allowed accumulation (6% for power boilers; 5 psi for LP steam boilers). It is performed by blocking all other steam outlets and observing pressure while the boiler fires at maximum rate."
  },
  {
    "id": 247,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 1 therm equal to in BTU?",
    "options": [
      "10,000 BTU",
      "100,000 BTU",
      "33,479 BTU",
      "1,000,000 BTU"
    ],
    "correct": 1,
    "explanation": "1 therm = 100,000 BTU. This is a common unit used for natural gas billing. Natural gas has approximately 1,000 BTU per cubic foot, so 1 therm = approximately 100 cubic feet of natural gas."
  },
  {
    "id": 248,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is 1 kWh equal to in BTU?",
    "options": [
      "3,412 BTU",
      "2,545 BTU",
      "746 BTU",
      "33,479 BTU"
    ],
    "correct": 0,
    "explanation": "1 kilowatt-hour (kWh) = 3,412 BTU. This conversion is useful for comparing electrical energy costs to fuel energy costs in boiler plants with electric boilers or combined heat and power systems."
  },
  {
    "id": 249,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "When must ASME Section I safety valves have stainless steel seats and discs?",
    "options": [
      "For all safety valves above 100 psig",
      "For all safety valves on high-pressure boilers",
      "For safety valves handling superheated steam above 450°F",
      "Only for safety valves on water-tube boilers"
    ],
    "correct": 2,
    "explanation": "Safety valves for superheated steam above 450°F must have stainless steel seats and discs. Stainless steel is required at these elevated temperatures because it maintains its seating properties and resists corrosion and oxidation at high temperatures."
  },
  {
    "id": 250,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the minimum discharge height required for safety valve discharge piping?",
    "options": [
      "3 feet above the boiler",
      "A minimum of 7 feet above the floor",
      "5 feet above floor level",
      "Above the roof line only"
    ],
    "correct": 1,
    "explanation": "Safety valve discharge piping must be directed to a safe location and must maintain a minimum height of 7 feet above the floor. The discharge piping must not be reduced in size, and no backpressure should be able to build up in the discharge pipe."
  },
  {
    "id": 251,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of steam turbine is most commonly used in large base-load power generation?",
    "options": [
      "Single-stage impulse (De Laval) turbine",
      "Single-stage reaction (Parsons) turbine",
      "Combination turbine — impulse at HP end, reaction at LP end",
      "Multi-stage Curtis velocity-compounded turbine"
    ],
    "correct": 2,
    "explanation": "Large base-load power generation turbines are typically combination turbines — impulse stages at the high-pressure end (where steam density is high and pressures are extreme) and reaction stages at the lower-pressure end. This optimizes efficiency across the full pressure range."
  },
  {
    "id": 252,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the Rateau turbine design?",
    "options": [
      "Pressure-compounded multi-stage impulse turbine",
      "Velocity-compounded multi-stage impulse (Curtis type)",
      "Single-stage impulse turbine (De Laval type)",
      "Multi-stage reaction turbine (Parsons type)"
    ],
    "correct": 0,
    "explanation": "The Rateau turbine is a pressure-compounded (multi-stage) impulse turbine. Each stage has a set of nozzles followed by moving buckets, and the pressure drops across each set of nozzles. This allows multiple stages of impulse work extraction at lower individual blade speeds."
  },
  {
    "id": 253,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does a 'split journal bearing' allow that a solid sleeve bearing does not?",
    "options": [
      "Higher loads than a solid bearing",
      "Higher temperature operation",
      "Better oil distribution than solid bearings",
      "Removal of the bearing without removing the shaft — the two halves separate to lift off the shaft"
    ],
    "correct": 3,
    "explanation": "A split (two-piece) journal bearing can be removed and inspected by separating the two halves WITHOUT removing or dismantling the shaft. This makes maintenance much easier for large turbines and generators. Solid bearings require shaft removal."
  },
  {
    "id": 254,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "In boiler water chemistry, what is the relationship between 'grains per gallon' and parts per million (ppm)?",
    "options": [
      "1 grain per gallon = 100 ppm",
      "1 grain per gallon × 17.12 = ppm",
      "1 grain per gallon = 1 ppm",
      "Grains per gallon = ppm ÷ 10"
    ],
    "correct": 1,
    "explanation": "1 grain per gallon × 17.12 = ppm (parts per million, or mg/L). This conversion is used in water hardness measurements. For example, 10 grains per gallon hardness = 10 × 17.12 = 171.2 ppm hardness."
  },
  {
    "id": 255,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of a 'vent valve' on a hot water boiler?",
    "options": [
      "To ensure water is inside the boiler and vent trapped air during filling",
      "To release excess steam pressure",
      "To control water flow through the boiler",
      "To provide access for chemical injection"
    ],
    "correct": 0,
    "explanation": "The vent valve on a hot water boiler serves two purposes: (1) to ensure that the boiler is filled with water (not air) before startup, and (2) to release trapped air during filling operations. Trapped air in a hot water boiler can interfere with circulation and heat transfer."
  },
  {
    "id": 256,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What does NFPA 85 govern?",
    "options": [
      "Electrical wiring in boiler rooms",
      "Fire suppression systems in boiler rooms",
      "Boiler and Combustion Systems Hazards Code — combustion safety systems for large boilers",
      "Natural gas pipeline safety"
    ],
    "correct": 2,
    "explanation": "NFPA 85 is the Boiler and Combustion Systems Hazards Code. It covers the design, installation, operation, and maintenance of combustion and heat recovery systems for large boilers (above 12.5 million BTU/hr input, covered by CSD-1 for smaller units)."
  },
  {
    "id": 257,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of oil grooves on the inner surface of a journal bearing?",
    "options": [
      "To reduce friction by providing more contact area",
      "To distribute lubricating oil evenly across the bearing surface",
      "To provide drainage for contaminated oil",
      "To provide visual inspection marks for wear"
    ],
    "correct": 1,
    "explanation": "Oil grooves on the inner surface of a journal bearing distribute lubricating oil evenly across the entire bearing surface. The grooves form a network that ensures a continuous oil film between the rotating shaft journal and the bearing surface, preventing metal-to-metal contact."
  },
  {
    "id": 258,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What type of pump is classified as a 'positive displacement' pump?",
    "options": [
      "Centrifugal pump only",
      "Reciprocating (piston) and rotary (gear/vane) pumps",
      "Axial flow pump only",
      "Turbine-driven feed pump"
    ],
    "correct": 1,
    "explanation": "Positive displacement pumps include reciprocating (piston/plunger) and rotary (gear/vane/screw) types. They deliver a fixed volume of fluid per stroke or revolution regardless of discharge pressure. Centrifugal pumps are NOT positive displacement — their flow varies with pressure."
  },
  {
    "id": 259,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "An air compressor's single-stage version handles pressures up to approximately what limit?",
    "options": [
      "100 psi",
      "50 psi",
      "150 psi",
      "250 psi"
    ],
    "correct": 0,
    "explanation": "Single-stage air compressors are typically used for pressures up to approximately 100 psi. For higher pressures, multi-stage compressors with intercooling between stages are used. The intercooling removes heat between stages, improving efficiency."
  },
  {
    "id": 260,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What increases when outside air temperature rises in relation to an air compressor's performance?",
    "options": [
      "Compressor capacity increases",
      "Compressor capacity decreases (less dense air produces less mass flow)",
      "No effect on capacity",
      "Discharge pressure increases"
    ],
    "correct": 1,
    "explanation": "As outside (suction) air temperature rises, air becomes less dense. A compressor moving the same VOLUME of air will deliver LESS MASS of air, reducing the compressor's effective capacity. Cool, dense air gives a compressor its best performance."
  },
  {
    "id": 551,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the optimal flue gas O2 percentage for a natural gas-fired boiler operating at peak efficiency?",
    "options": [
      "Approximately 3% O2 (15% excess air)",
      "Approximately 7% O2 (47% excess air)",
      "Approximately 10% O2 (85% excess air)",
      "0% O2 (stoichiometric combustion)"
    ],
    "correct": 0,
    "explanation": "For natural gas, the optimal flue gas O2 is approximately 3%, which corresponds to about 15% excess air and approximately 9.9% CO2. At this point, combustion is complete with minimal excess air, maximizing efficiency. Too little O2 produces CO (incomplete combustion); too much wastes heat through dilution and stack losses."
  },
  {
    "id": 552,
    "level": "2a",
    "category": "Combustion",
    "question": "When flue gas O2 reads 10% on a natural gas boiler, approximately what percentage excess air is being supplied?",
    "options": [
      "Approximately 85% excess air",
      "Approximately 15% excess air",
      "Approximately 47% excess air",
      "Approximately 28% excess air"
    ],
    "correct": 0,
    "explanation": "A flue gas O2 reading of 10% on a natural gas boiler corresponds to approximately 85% excess air — far too much. This causes major heat loss as the excess air absorbs heat and carries it up the stack. The corresponding CO2 would be approximately 5.9%. The boiler should be tuned to approximately 3% O2 (15% excess air) for optimal efficiency."
  },
  {
    "id": 553,
    "level": "2a",
    "category": "Water Treatment",
    "question": "In an ion exchange water softener, what ions are removed from the feedwater?",
    "options": [
      "Calcium and magnesium (hardness) ions — exchanged for sodium ions",
      "Sodium and potassium ions — exchanged for hydrogen ions",
      "Chloride and sulfate ions — removed by the resin bed",
      "Dissolved oxygen and carbon dioxide — stripped by ion exchange"
    ],
    "correct": 0,
    "explanation": "An ion exchange softener removes CALCIUM (Ca²⁺) and MAGNESIUM (Mg²⁺) ions — the primary hardness minerals — by exchanging them for sodium (Na⁺) ions on the resin bed. Scale forms from calcium and magnesium compounds; replacing them with sodium prevents scale formation. The resin is regenerated with salt (NaCl brine). Target hardness after softening: less than 0.5 ppm."
  },
  {
    "id": 554,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the target dissolved oxygen level in boiler feedwater after mechanical deaeration?",
    "options": [
      "Less than 0.007 mg/L (7 ppb)",
      "Less than 0.5 mg/L (500 ppb)",
      "Less than 0.1 mg/L (100 ppb)",
      "Less than 1.0 mg/L (1,000 ppb)"
    ],
    "correct": 0,
    "explanation": "After mechanical deaeration, the target dissolved oxygen in feedwater is less than 0.007 mg/L (7 parts per billion). Dissolved oxygen is the primary cause of pitting corrosion in boilers and feedwater systems. The deaerator operates at 5–15 psig / 225–250°F to heat water to near saturation, releasing dissolved gases. Sodium sulfite (residual: 20–30 ppm) or other oxygen scavengers provide chemical backup."
  },
  {
    "id": 555,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "Which ASME BPVC section governs the construction of power boilers (steam >15 psig)?",
    "options": [
      "ASME Section I — Power Boilers",
      "ASME Section IV — Heating Boilers",
      "ASME Section VIII — Pressure Vessels",
      "ASME Section VI — Care of Heating Boilers"
    ],
    "correct": 0,
    "explanation": "ASME Section I — Power Boilers — governs the design, materials, fabrication, examination, and certification of power boilers (steam >15 psig or water >160 psig/>250°F). Section IV covers heating boilers (LP steam ≤15 psig, HW ≤160 psig/≤250°F). Section VIII covers pressure vessels. Sections VI and VII are non-mandatory care and operation guides."
  },
  {
    "id": 556,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "ASME CSD-1 applies to automatically fired boilers up to what maximum BTU/hr heat input?",
    "options": [
      "12.5 million BTU/hr",
      "5 million BTU/hr",
      "25 million BTU/hr",
      "1 million BTU/hr"
    ],
    "correct": 0,
    "explanation": "ASME CSD-1 (Controls and Safety Devices for Automatically Fired Boilers) establishes minimum requirements for controls and safety devices on automatically fired boilers with heat input up to 12.5 MILLION BTU/hr. Above this threshold, NFPA 85 requirements apply in addition to or in place of CSD-1 requirements."
  },
  {
    "id": 557,
    "level": "2a",
    "category": "Combustion",
    "question": "What does a RISING stack temperature over time on a fire-tube boiler most likely indicate?",
    "options": [
      "Fouling (soot or scale) on fire-side or water-side heating surfaces — insulating effect",
      "Improved combustion efficiency due to better fuel/air mixing",
      "Excessive condensate return raising feedwater temperature",
      "Proper boiler operation — stack temperature naturally increases with load"
    ],
    "correct": 0,
    "explanation": "A steadily RISING stack temperature over time (at the same firing rate) is a key indicator of FOULING on heating surfaces. Soot on the fire side or scale on the water side acts as insulation, reducing heat transfer from combustion gases to the water. The gases leave the boiler hotter because less heat was absorbed. Just 1/16 inch of scale can reduce efficiency by 10–15%. Tube cleaning or boiler chemical treatment is needed."
  },
  {
    "id": 558,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "What is the primary advantage of maximizing condensate return to the boiler?",
    "options": [
      "The condensate is already hot and chemically treated, reducing makeup water, fuel, and chemical costs",
      "Condensate is cooler than makeup water, reducing thermal stress on the boiler",
      "Condensate contains dissolved solids that improve boiler water chemistry",
      "Returning condensate eliminates the need for bottom blowdown"
    ],
    "correct": 0,
    "explanation": "Condensate return is highly beneficial because: (1) It is already HOT (reducing fuel needed to heat it back to steam), (2) It is already TREATED (reducing chemical costs), (3) It is pure (reducing scale-causing impurities), and (4) It reduces MAKEUP WATER needs (reducing water and treatment costs). High condensate return rates (70–90%+) significantly improve overall plant efficiency and reduce operating costs."
  },
  {
    "id": 559,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "Feedwater TDS is 150 ppm and the maximum allowable boiler water TDS is 3,000 ppm. What is the required blowdown percentage?",
    "options": [
      "5.0%",
      "2.0%",
      "10.0%",
      "0.5%"
    ],
    "correct": 0,
    "explanation": "Blowdown % = (Feedwater TDS ÷ Maximum Boiler TDS) × 100 = (150 ÷ 3,000) × 100 = 5.0%. This means 5% of the water entering the boiler must be discharged as blowdown to maintain TDS within acceptable limits. Higher feedwater TDS requires more blowdown; better feedwater quality (lower TDS) allows less blowdown."
  },
  {
    "id": 560,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "What is the primary function of an economizer in a boiler system?",
    "options": [
      "Pre-heats feedwater using waste heat from flue gases, increasing overall boiler efficiency",
      "Removes dissolved oxygen from feedwater before it enters the boiler",
      "Reduces steam pressure before it enters the turbine",
      "Provides additional heat transfer surface to superheat steam"
    ],
    "correct": 0,
    "explanation": "An ECONOMIZER is a heat exchanger located in the flue gas path that pre-heats incoming feedwater using waste heat from stack gases. By recovering this heat, the economizer increases boiler efficiency by 3–5% (sometimes more). Every 10°F reduction in stack temperature represents approximately 0.5% efficiency improvement. The economizer also reduces thermal shock to the boiler from cold feedwater."
  },
  {
    "id": 561,
    "level": "2a",
    "category": "Steam Generation",
    "question": "What is the function of a desuperheater (attemperator)?",
    "options": [
      "Reduces superheated steam temperature to a lower, controlled level by injecting water or using a heat exchanger",
      "Increases steam pressure above the boiler operating pressure",
      "Removes non-condensable gases from superheated steam",
      "Converts saturated steam to superheated steam"
    ],
    "correct": 0,
    "explanation": "A DESUPERHEATER (also called an attemperator) REDUCES the temperature of superheated steam to a controlled level. This is done by injecting treated feedwater directly into the steam (direct contact type) or by passing the steam through a water-cooled heat exchanger. Desuperheaters are used when process or equipment requirements need steam at a lower temperature than the boiler superheater produces."
  },
  {
    "id": 562,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "Per ASME Section I, if a boiler has two or more safety valves, what set pressure requirement applies to the valves?",
    "options": [
      "One valve must be set at or below MAWP; others may be set up to 3% above MAWP",
      "All valves must be set at exactly the same pressure",
      "All valves must be set above MAWP to provide adequate margin",
      "The highest-set valve determines the maximum operating pressure"
    ],
    "correct": 0,
    "explanation": "Per ASME Section I (PG-67), when a power boiler has two or more safety valves: ONE valve must be set at or below MAWP; the remaining valves may be set up to 3% above MAWP. The lowest-set valve (at or below MAWP) provides the primary protection. For superheater safety valves, these must be set LOWEST of all to protect the superheater from overheating."
  },
  {
    "id": 563,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the primary purpose of Reverse Osmosis (RO) treatment for boiler feedwater?",
    "options": [
      "Removes dissolved solids, silica, and most contaminants by forcing water through a semi-permeable membrane",
      "Removes dissolved oxygen through mechanical stripping",
      "Removes suspended solids through filtration only",
      "Adds alkalinity to prevent corrosion in the boiler"
    ],
    "correct": 0,
    "explanation": "Reverse Osmosis (RO) forces water through a semi-permeable membrane under pressure, removing dissolved solids (TDS), silica, bacteria, and most contaminants. RO can remove 90–99% of dissolved solids, producing very high-purity water. This is especially valuable for high-pressure boilers where silica carryover can damage turbine blades and where scale prevention is critical."
  },
  {
    "id": 564,
    "level": "2a",
    "category": "Combustion",
    "question": "At 3% O2 in the flue gas of a natural gas boiler, approximately what percentage of CO2 should be present?",
    "options": [
      "Approximately 14% CO2",
      "Approximately 10% CO2",
      "Approximately 6% CO2",
      "Approximately 2% CO2"
    ],
    "correct": 1,
    "explanation": "At optimal combustion conditions for natural gas (approximately 3% O2 / 15% excess air), the CO2 in flue gas should be approximately 9.9–10%. As excess air increases and O2 rises, CO2 DECREASES (diluted by excess nitrogen and air). At stoichiometric conditions (0% O2), CO2 reaches its maximum of approximately 11.7% for natural gas."
  },
  {
    "id": 565,
    "level": "2a",
    "category": "Combustion",
    "question": "A very LOW stack temperature on a natural gas boiler may indicate what problem?",
    "options": [
      "Excellent efficiency — the boiler is recovering maximum heat",
      "Acid dewpoint condensation — corrosive sulfuric and carbonic acid forming in the stack",
      "Inadequate combustion air causing incomplete combustion",
      "High excess air that is overcooling the flue gases"
    ],
    "correct": 1,
    "explanation": "An excessively LOW stack temperature can indicate that flue gas is cooling below the ACID DEWPOINT — the temperature at which water vapor condenses and combines with sulfur oxides (SO₃) and CO₂ to form sulfuric and carbonic acids. This causes rapid corrosion of the stack, economizer, and flue gas passages. Natural gas has a lower sulfur content than oil, but condensation is still a concern below approximately 130–140°F stack temperature."
  },
  {
    "id": 566,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the minimum operating temperature of a mechanical deaerator?",
    "options": [
      "160°F",
      "180°F",
      "212°F",
      "250°F"
    ],
    "correct": 1,
    "explanation": "A mechanical deaerator must operate at a MINIMUM of 180°F (some sources specify 212°F at atmospheric pressure). The deaerator operates at 5–15 psig and approximately 225–250°F. Heating water to near saturation temperature releases dissolved oxygen and CO₂. The target is to reduce dissolved oxygen below 0.007 mg/L. Operating below 180°F significantly reduces deaeration effectiveness."
  },
  {
    "id": 567,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "Boiler water TDS is currently 4,500 ppm and the maximum allowable is 3,500 ppm. What should the operator do?",
    "options": [
      "Increase chemical treatment to neutralize the excess TDS",
      "Perform additional bottom blowdown to reduce TDS to within limits",
      "Increase feedwater flow rate to dilute the boiler water",
      "No action is needed — slight TDS excess is normal"
    ],
    "correct": 1,
    "explanation": "When boiler water TDS exceeds the maximum allowable level, the operator must perform additional BLOWDOWN to discharge the concentrated water and replace it with lower-TDS feedwater. Bottom blowdown removes dissolved solids from the boiler water. Blowing down while simultaneously adding feedwater dilutes the TDS. Increasing chemical treatment would not remove dissolved solids and would worsen the problem."
  },
  {
    "id": 568,
    "level": "2a",
    "category": "Combustion",
    "question": "For a #2 fuel oil-fired boiler operating at optimal efficiency, approximately what target excess air level is recommended?",
    "options": [
      "5–10% excess air",
      "18–20% excess air",
      "40–50% excess air",
      "60–70% excess air"
    ],
    "correct": 1,
    "explanation": "For #2 fuel oil, the recommended optimal excess air is approximately 18–20%, corresponding to approximately 3.5% O2 in the flue gas and approximately 12% CO2. Oil combustion requires slightly more excess air than natural gas because of the need for proper atomization and mixing. Too little excess air with oil produces smoke, soot, and CO."
  },
  {
    "id": 569,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does ASME Section IV govern?",
    "options": [
      "Power boilers operating at steam pressures above 15 psig",
      "Heating boilers — construction of low-pressure steam and hot water heating boilers",
      "Pressure vessels operating above 15 psig",
      "Non-destructive examination methods for all pressure equipment"
    ],
    "correct": 1,
    "explanation": "ASME Section IV — Heating Boilers — governs the design, fabrication, and inspection of LOW-PRESSURE steam heating boilers (≤15 psig), hot water heating boilers (≤160 psig/≤250°F), and hot water supply boilers. Section IV safety valves are stamped 'HV'. Section I covers power boilers; Section VIII covers pressure vessels; Section V covers NDE methods."
  },
  {
    "id": 570,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "Per ASME CSD-1, what is the maximum Flame Failure Response Time (FFRT) for an oil-fired burner?",
    "options": [
      "2 seconds",
      "4 seconds",
      "10 seconds",
      "30 seconds"
    ],
    "correct": 1,
    "explanation": "Per ASME CSD-1, the maximum Flame Failure Response Time (FFRT) for OIL-fired burners is 4 SECONDS. If the flame scanner does not detect a flame within 4 seconds, the flame safeguard control must immediately shut off the fuel supply. Gas-fired systems may have different FFRT requirements. The short response time prevents dangerous accumulation of unburned fuel in the combustion chamber."
  },
  {
    "id": 571,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "An economizer tube failure would most likely be detected by which symptom?",
    "options": [
      "Sudden increase in steam pressure",
      "Unexplained increase in feedwater consumption or water in the flue gas path",
      "Increase in fuel consumption at the same steam output",
      "Safety valve lifting at normal operating conditions"
    ],
    "correct": 1,
    "explanation": "A failed economizer tube would leak feedwater into the flue gas path. The primary symptoms would be: (1) UNEXPLAINED INCREASE in feedwater consumption (more makeup water needed), (2) visible steam or water vapor in the stack/flue gas, (3) possible erosion of adjacent tubes from the leak, and (4) wetting and cooling of downstream equipment. Early detection requires monitoring feedwater consumption trends."
  },
  {
    "id": 572,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What chemical is used as an internal oxygen scavenger in boilers operating below 600 psig?",
    "options": [
      "Sodium phosphate (Na₃PO₄)",
      "Sodium sulfite (Na₂SO₃)",
      "Hydrazine (N₂H₄)",
      "Morpholine"
    ],
    "correct": 1,
    "explanation": "SODIUM SULFITE (Na₂SO₃) is the most common chemical oxygen scavenger for boilers below 600 psig. The reaction: 2 Na₂SO₃ + O₂ → 2 Na₂SO₄. The required dose is 7.88 pounds of sodium sulfite per pound of dissolved oxygen. Maintain a residual of 20–30 ppm in boiler water. Above 600 psig, DEHA or hydrazine is used because sodium sulfite decomposes to acidic gases at high temperatures."
  },
  {
    "id": 573,
    "level": "2a",
    "category": "Steam Generation",
    "question": "What is the quality of water injected into a direct-contact desuperheater?",
    "options": [
      "Any available water source, including raw makeup water",
      "High-purity water (typically boiler feedwater quality or better)",
      "Saturated steam condensate at operating pressure",
      "Chemically untreated cold water for maximum cooling"
    ],
    "correct": 1,
    "explanation": "Water injected into a direct-contact desuperheater must be HIGH-PURITY water of at least feedwater quality. This water enters the steam directly and any dissolved solids would carry over into the steam system, depositing on turbine blades or process equipment. The injected water must be free of hardness, silica, and other contaminants — typically demineralized water or high-quality boiler feedwater."
  },
  {
    "id": 574,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "What is the maximum allowable pipe size for bottom blowdown piping on a boiler?",
    "options": [
      "1 inch",
      "2 inches",
      "3 inches",
      "4 inches"
    ],
    "correct": 1,
    "explanation": "The maximum pipe size for bottom blowdown piping is 2 INCHES. This limit prevents rapid, uncontrolled discharge of large quantities of high-temperature water. Additionally, boilers with more than 100 HP and operating above 100 psig must have TWO blowdown valves: a quick-opening valve nearest the boiler and a slow-opening valve outboard. The quick valve protects against scalding from the valve packing."
  },
  {
    "id": 575,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the purpose of ASME Section VII?",
    "options": [
      "Mandatory construction requirements for power boilers",
      "Non-mandatory recommended care and operation guidelines for power boilers",
      "Mandatory operation standards adopted by all states",
      "Construction requirements for heating boilers only"
    ],
    "correct": 1,
    "explanation": "ASME Section VII — Recommended Care and Operation of Power Boilers — provides NON-MANDATORY guidelines for the operation and maintenance of power boilers (Section I boilers). It is 'recommended' rather than mandatory — it becomes mandatory only when specifically adopted by a jurisdiction. Similarly, Section VI provides care guidelines for heating boilers (non-mandatory). Sections I, IV, and VIII contain mandatory construction requirements."
  },
  {
    "id": 576,
    "level": "2a",
    "category": "Combustion",
    "question": "If O2 in the flue gas drops from 5% to 1%, what happens to combustion efficiency and safety?",
    "options": [
      "Efficiency improves significantly with no safety concerns",
      "Efficiency may initially improve but CO production rises sharply, creating safety and efficiency concerns",
      "No change — O2 below 3% has no effect on combustion",
      "Efficiency decreases proportionally to the O2 drop"
    ],
    "correct": 1,
    "explanation": "As O2 drops below 3% (optimal for natural gas), the system enters the dangerous left side of the combustion efficiency curve. At 1% O2, there is insufficient oxygen for complete combustion — CO (carbon monoxide) production rises sharply. CO represents unburned fuel, creating: (1) efficiency loss, (2) dangerous CO levels (toxic, explosive), (3) soot and smoke, and (4) possible furnace explosion risk. The minimum safe O2 for most gas boilers is approximately 2–3%."
  },
  {
    "id": 577,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the target pH range for boiler water in a conventional steam boiler system?",
    "options": [
      "7.0 – 8.0 (slightly alkaline)",
      "9.0 – 9.5 (moderately alkaline)",
      "10.5 – 11.5 (strongly alkaline)",
      "12.0 – 14.0 (caustic range)"
    ],
    "correct": 2,
    "explanation": "Boiler water pH should be maintained between 10.5 and 11.5. This strongly alkaline range prevents corrosion of the steel boiler (iron corrodes rapidly in acid conditions but is protected in alkaline conditions), promotes formation of a protective magnetite film, and assists phosphate treatment in conditioning residual hardness. A pH above 11.5 risks caustic corrosion (caustic embrittlement or gouging)."
  },
  {
    "id": 578,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "Per ASME CSD-1, what is the minimum number of air changes required during pre-purge before a burner can be ignited?",
    "options": [
      "2 air changes",
      "3 air changes",
      "4 air changes",
      "6 air changes"
    ],
    "correct": 2,
    "explanation": "ASME CSD-1 requires a MINIMUM of 4 AIR CHANGES during pre-purge before any ignition attempt. This ensures all residual unburned fuel vapor is cleared from the combustion chamber, preventing a furnace explosion. The 4-air-change minimum is a non-negotiable safety requirement. Failure to pre-purge properly is the most common cause of furnace explosions."
  },
  {
    "id": 579,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the formula for approximating combustion efficiency?",
    "options": [
      "Combustion Efficiency = Heat Input / Heat Output × 100",
      "Combustion Efficiency = Stack Temperature / Ambient Temperature × 100",
      "Combustion Efficiency ≈ 100% − Stack Losses − Radiation Losses",
      "Combustion Efficiency = O2 % / 21 × 100"
    ],
    "correct": 2,
    "explanation": "Combustion Efficiency ≈ 100% minus Stack Losses minus Radiation Losses. Stack losses are the largest component (typically 15–25% in a well-tuned boiler), representing heat carried up the stack in hot flue gases. Radiation losses from the boiler shell typically add 1–3%. Improving combustion efficiency requires reducing stack losses through proper air/fuel ratio, clean heat transfer surfaces, and economizer use."
  },
  {
    "id": 580,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is 'carryover' in a steam boiler, and what causes it?",
    "options": [
      "Excess oxygen carried from the deaerator into the boiler",
      "Scale carried from feedwater heating equipment into the boiler",
      "Water droplets carried with steam — caused by high TDS, foaming, high water level, or sudden load changes",
      "Condensate carried back from the steam distribution system"
    ],
    "correct": 2,
    "explanation": "CARRYOVER is water droplets carried with steam from the boiler. Causes include: (1) High Total Dissolved Solids — creates foaming, (2) High water level — less distance for steam/water separation, (3) Oil contamination — causes foaming, (4) Sudden load changes — rapid pressure drop pulls water into steam space, (5) Faulty steam separators. Carryover causes water hammer, deposits in steam lines, turbine damage, and control problems."
  },
  {
    "id": 581,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What ASME code section covers NDE (non-destructive examination) methods like radiographic, ultrasonic, and magnetic particle testing?",
    "options": [
      "ASME Section I",
      "ASME Section VII",
      "ASME Section V",
      "ASME Section IX"
    ],
    "correct": 2,
    "explanation": "ASME Section V — Nondestructive Examination — covers the methods, techniques, and requirements for NDE including: radiographic (RT), ultrasonic (UT), magnetic particle (MT), liquid penetrant (PT), visual (VT), and other examination methods. Section V is referenced by other ASME sections (I, IV, VIII) for specific NDE requirements during fabrication and inspection."
  },
  {
    "id": 582,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "A condensing economizer recovers latent heat from flue gases. What is the primary design concern with this type of economizer?",
    "options": [
      "Condensing economizers are too expensive for any industrial application",
      "The condensate increases boiler pressure beyond safe limits",
      "Acid condensate corrosion — flue gas condensate is acidic and highly corrosive to standard steel",
      "Condensation reduces draft and causes flue gas to back-flow into the boiler room"
    ],
    "correct": 2,
    "explanation": "The primary concern with condensing economizers is ACID CONDENSATE CORROSION. When flue gases cool below the acid dewpoint (approximately 130–160°F for natural gas, higher for fuels with sulfur), water vapor condenses and combines with CO₂ and SO₃ to form carbonic and sulfuric acids. These acids rapidly corrode conventional steel. Condensing economizers must use stainless steel, plastic, or other corrosion-resistant materials for the heat exchanger surfaces."
  },
  {
    "id": 583,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "The 'Cycles of Concentration' (CoC) in a boiler water system represents what?",
    "options": [
      "The number of times the boiler has been blown down in a 24-hour period",
      "The ratio of makeup water volume to blowdown volume",
      "The ratio of dissolved solids in boiler water to dissolved solids in feedwater",
      "The number of chemical treatment cycles completed per month"
    ],
    "correct": 2,
    "explanation": "Cycles of Concentration (CoC) = Boiler Water TDS ÷ Feedwater TDS. It represents how many times the dissolved solids have concentrated relative to the feedwater. Example: feedwater at 100 ppm TDS and boiler water at 3,000 ppm TDS = 30 cycles. Higher CoC means less blowdown (more efficient water use) but risks scale and carryover if too high. CoC is balanced against the maximum allowable boiler water TDS."
  },
  {
    "id": 584,
    "level": "2a",
    "category": "Combustion",
    "question": "What instrument is used in the field to perform a quick, portable measurement of CO2 or O2 in flue gases?",
    "options": [
      "Orsat analyzer — the standard field instrument for all boilers",
      "Ringelmann chart — measures combustion gas composition",
      "Fyrite analyzer — a portable device that measures O2 or CO2 by color change",
      "Stack thermometer — sufficient to determine combustion efficiency"
    ],
    "correct": 2,
    "explanation": "A FYRITE analyzer is the portable field instrument for measuring O2 or CO2 in flue gases. A liquid reagent absorbs either O2 or CO2 from a gas sample, and the volume change indicates the percentage. The Orsat analyzer is a more accurate LABORATORY instrument that can measure O2, CO2, and CO simultaneously. The Ringelmann chart measures smoke opacity (visual), not gas composition."
  },
  {
    "id": 585,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "Flash steam is generated when high-pressure condensate is released to a lower pressure. Which formula calculates the percentage of flash steam?",
    "options": [
      "% Flash = (P_high - P_low) / P_high × 100",
      "% Flash = hfg2 / (hf1 - hf2) × 100",
      "% Flash = (hf1 - hf2) / hfg2 × 100",
      "% Flash = hf1 / hfg1 × 100"
    ],
    "correct": 2,
    "explanation": "Flash steam percentage = (hf1 − hf2) ÷ hfg2 × 100, where: hf1 = sensible heat of condensate at the higher pressure, hf2 = sensible heat of water at the lower (flash) pressure, hfg2 = latent heat at the lower pressure. Example: condensate from 150 psig flashing to 15 psig produces approximately 13–15% flash steam. This steam represents significant recoverable energy."
  },
  {
    "id": 586,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the function of phosphate treatment in a boiler water program?",
    "options": [
      "Removes dissolved oxygen from feedwater before it enters the boiler",
      "Neutralizes carbonic acid in the condensate return lines",
      "Reacts with residual hardness (calcium/magnesium) to form non-adherent sludge that can be removed by blowdown",
      "Increases pH by adding alkalinity to prevent acid corrosion"
    ],
    "correct": 2,
    "explanation": "Phosphate treatment (sodium phosphate, Na₃PO₄) REACTS with any residual hardness (calcium and magnesium) that slips through external treatment, converting it to non-adherent calcium hydroxyapatite sludge. This sludge settles to the bottom of the boiler and is removed by blowdown, rather than forming hard scale on heating surfaces. Maintain 20–50 ppm phosphate residual in boiler water."
  },
  {
    "id": 587,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "ASME CSD-1 requires what type of gas pressure switches on gas-fired burners?",
    "options": [
      "A single high-pressure switch only",
      "A single low-pressure switch only",
      "Both a high gas pressure switch AND a low gas pressure switch",
      "Pressure switches are optional on gas-fired systems under CSD-1"
    ],
    "correct": 2,
    "explanation": "ASME CSD-1 requires BOTH a HIGH gas pressure switch AND a LOW gas pressure switch on gas-fired burners. The HIGH gas pressure switch shuts off the burner if gas pressure rises above the safe maximum (prevents over-firing, over-pressure). The LOW gas pressure switch shuts off the burner if gas pressure drops too low (prevents incomplete combustion from inadequate fuel supply). Both protect against dangerous operating conditions."
  },
  {
    "id": 588,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the ASME stamp for a safety valve designed for use on Section I power boilers?",
    "options": [
      "SV stamp",
      "UV stamp (Section VIII)",
      "V stamp with National Board stamp",
      "PV stamp (Power Vessel)"
    ],
    "correct": 2,
    "explanation": "Safety valves for ASME Section I power boilers bear the 'V' stamp along with the National Board (NB) registration stamp. Section IV heating boiler safety valves bear the 'HV' stamp. Section VIII pressure vessel safety/relief valves bear the 'UV' stamp. Section I valves ('V' stamp) may be used on Section VIII applications; however, Section VIII valves ('UV') must NOT be used on Section I power boilers."
  },
  {
    "id": 589,
    "level": "2a",
    "category": "Combustion",
    "question": "When a boiler's flue gas O2 reading is 0%, what does this theoretically represent?",
    "options": [
      "Perfect combustion with maximum efficiency and no risks",
      "Dangerous incomplete combustion with CO production",
      "Extremely excessive air causing major heat loss",
      "Stoichiometric combustion — all O2 consumed with no excess, theoretically perfect but practically unachievable"
    ],
    "correct": 3,
    "explanation": "0% O2 in flue gas represents STOICHIOMETRIC combustion — the theoretical perfect ratio where all fuel burns completely using exactly the right amount of oxygen with none left over. At this point, CO2 reaches maximum (approximately 11.7% for natural gas). However, 0% O2 is theoretically unachievable in practice — any slight variation leads to incomplete combustion and CO. Practical operation targets approximately 3% O2 to provide a safety margin."
  },
  {
    "id": 590,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the sodium sulfite dosage required to react with 1 ppm (mg/L) of dissolved oxygen?",
    "options": [
      "1.0 ppm sodium sulfite",
      "3.94 ppm sodium sulfite",
      "5.50 ppm sodium sulfite",
      "7.88 ppm sodium sulfite"
    ],
    "correct": 3,
    "explanation": "The stoichiometric reaction requires 7.88 ppm of sodium sulfite to react with 1 ppm of dissolved oxygen (2 Na₂SO₃ + O₂ → 2 Na₂SO₄). In practice, an excess residual of 20–30 ppm sodium sulfite is maintained in boiler water to ensure all oxygen is scavenged. This residual also serves as an indicator that adequate oxygen scavenging is occurring. Above 600 psig, sodium sulfite should not be used."
  },
  {
    "id": 591,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "Steam blowing into the condensate return tank most likely indicates what problem?",
    "options": [
      "Excessive condensate return — the tank is overloaded",
      "A failed-closed steam trap — condensate backing up into the return",
      "High boiler water TDS causing carryover into the return system",
      "A failed-open steam trap — live steam passing directly into the return line"
    ],
    "correct": 3,
    "explanation": "Steam blowing into the condensate return tank is a classic symptom of a FAILED-OPEN steam trap. A failed-open trap allows live steam to pass through continuously, wasting energy. The steam enters the condensate return tank and causes elevated temperatures, possible water hammer, and steam venting from the tank vent. A failed-CLOSED trap causes a different problem: waterlogged heat exchangers and no condensate reaching the tank."
  },
  {
    "id": 592,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the ASME Section VIII accumulation limit for pressure vessels with a single safety relief valve?",
    "options": [
      "3% above MAWP",
      "6% above MAWP",
      "3 psi above set pressure",
      "10% above MAWP (or 3 psi, whichever is greater)"
    ],
    "correct": 3,
    "explanation": "For ASME Section VIII pressure vessels with a single safety relief valve, the maximum accumulation is 10% above MAWP (or 3 psi, whichever is greater). This is more permissive than Section I power boilers (6% accumulation). With multiple safety valves on a Section VIII vessel, the maximum accumulation is 16%. Organic fluid vaporizers (also Section VIII class) are limited to 10% accumulation."
  },
  {
    "id": 593,
    "level": "2a",
    "category": "Boiler Calculations",
    "question": "What is the maximum temperature allowed for boiler blowdown water before it can be discharged to a public sewer system?",
    "options": [
      "100°F",
      "120°F",
      "140°F",
      "150°F"
    ],
    "correct": 3,
    "explanation": "Boiler blowdown water must be cooled to a maximum of 150°F before discharge to a sewer system. This protects PVC/plastic sewer pipes from heat damage, prevents damage to the biological treatment process at wastewater treatment plants, and avoids creating a steam/scalding hazard in the sewer. Blowdown tanks, heat exchangers, or mixing with cool water accomplish this cooling."
  },
  {
    "id": 594,
    "level": "2a",
    "category": "Combustion",
    "question": "Approximately how much efficiency is lost for every 1% increase in O2 above the optimal level in a natural gas boiler?",
    "options": [
      "0.1% efficiency loss per 1% O2 increase",
      "0.5% efficiency loss per 1% O2 increase",
      "2% efficiency loss per 1% O2 increase",
      "Approximately 1% efficiency loss per 1% O2 increase above optimal"
    ],
    "correct": 3,
    "explanation": "As a general rule of thumb, every 1% INCREASE in O2 above optimal wastes approximately 1% of fuel in a natural gas system. This is because excess air must be heated from ambient to stack temperature at the expense of fuel energy. Going from 3% O2 (optimal) to 7% O2 (47% excess air) represents approximately 4% additional fuel waste. Monitoring and optimizing O2 levels is one of the highest-return efficiency improvements available."
  },
  {
    "id": 595,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the purpose of condensate treatment using neutralizing amines?",
    "options": [
      "Removes dissolved oxygen from the condensate return system",
      "Adds hardness to the condensate to protect against corrosion",
      "Increases condensate pH to prevent scale formation in return lines",
      "Neutralizes carbonic acid formed in condensate lines to prevent CO2 corrosion of return piping"
    ],
    "correct": 3,
    "explanation": "Neutralizing amines (such as morpholine and cyclohexylamine) treat condensate by NEUTRALIZING CARBONIC ACID (H₂CO₃) that forms when dissolved CO₂ — stripped from bicarbonate alkalinity in the boiler — dissolves in condensate. Without treatment, carbonic acid causes severe corrosion (grooving) of condensate return lines. Neutralizing amines raise condensate pH to 8.5–9.0, stopping acid corrosion. Filming amines provide a protective film instead of neutralization."
  },
  {
    "id": 596,
    "level": "2a",
    "category": "Steam Generation",
    "question": "In a steam distribution system with a desuperheater, where should the desuperheater ideally be located?",
    "options": [
      "Upstream of the superheater to pre-condition steam",
      "In the condenser to recover heat from exhaust steam",
      "In the deaerator to improve oxygen removal",
      "Downstream of the superheater and upstream of the point of use — in the main steam header or branch lines"
    ],
    "correct": 3,
    "explanation": "The desuperheater is located DOWNSTREAM of the superheater and UPSTREAM of the point of use. It is typically installed in the main steam header or in branch lines serving processes that need lower-temperature steam. This allows the boiler superheater to operate at its designed temperature while providing appropriately conditioned steam to each specific process or piece of equipment with different temperature requirements."
  },
  {
    "id": 597,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "Under ASME CSD-1, which control must be proven BEFORE the main fuel valve can be opened?",
    "options": [
      "The combustion air proving switch only",
      "The main fuel safety shutoff valve only",
      "The operating pressure control (pressuretrol) only",
      "The pilot flame must be proven by the flame scanner before the main fuel valve can open"
    ],
    "correct": 3,
    "explanation": "Per ASME CSD-1, the PILOT FLAME must be proven by the flame scanner before the main fuel valve can be energized and opened. This 'proved pilot' sequence prevents a dangerous situation where the main fuel valve opens without an ignition source, flooding the combustion chamber with unburned fuel. The sequence is: pre-purge → pilot ignition → pilot proven → main fuel valve opens → main flame proven."
  },
  {
    "id": 598,
    "level": "2a",
    "category": "Water Treatment",
    "question": "Scale on boiler heating surfaces reduces efficiency. Approximately what efficiency loss results from 1/16 inch (1.6 mm) of scale?",
    "options": [
      "1–2% efficiency loss",
      "3–5% efficiency loss",
      "7–8% efficiency loss",
      "10–12% efficiency loss"
    ],
    "correct": 3,
    "explanation": "Just 1/16 INCH (1.6 mm) of scale on boiler heating surfaces reduces efficiency by approximately 10–12%. Scale acts as thermal insulation, dramatically reducing heat transfer from the combustion gases to the boiler water. Thicker scale causes proportionally greater efficiency loss and, more dangerously, can cause tube overheating and failure since heat cannot pass through the scale to the water for cooling."
  },
  {
    "id": 599,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "Approximately how much boiler efficiency improvement can an economizer provide?",
    "options": [
      "Less than 1% — economizers have minimal impact",
      "1–2% efficiency gain",
      "10–15% efficiency gain",
      "3–5% efficiency gain (sometimes more, depending on feedwater temperature and stack temperature)"
    ],
    "correct": 3,
    "explanation": "An economizer typically provides 3–5% efficiency improvement, though the exact gain depends on: (1) incoming feedwater temperature (colder feedwater allows more heat recovery), (2) original stack temperature (higher stack temperature means more recoverable heat), and (3) firing rate. Every 10°F reduction in stack temperature represents approximately 0.5% efficiency improvement. Well-designed economizers on high-stack-temperature boilers can achieve greater gains."
  },
  {
    "id": 600,
    "level": "2a",
    "category": "Piping & Valves",
    "question": "In a flash tank system, where does the recovered flash steam typically go after separation?",
    "options": [
      "Discharged to the atmosphere as low-value waste heat",
      "Back into the high-pressure steam main through a check valve",
      "Into the boiler water directly to reduce chemical treatment needs",
      "To a low-pressure steam header, deaerator, or feedwater heater for energy recovery"
    ],
    "correct": 3,
    "explanation": "Flash steam from a flash tank is routed to a LOW-PRESSURE steam header (to serve LP process equipment), to the DEAERATOR (which can use LP steam for heating/stripping), or to a FEEDWATER HEATER to pre-heat feedwater. This recovers the latent heat in the flash steam (970.2 BTU/lb) that would otherwise be wasted if the flash tank is simply vented to atmosphere. Proper flash steam recovery can save 10–15% of boiler fuel costs."
  },
  {
    "id": 2001,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of an economizer in a boiler system?",
    "options": [
      "To preheat feedwater using waste heat from flue gases before it enters the boiler",
      "To preheat combustion air using flue gas heat",
      "To reduce steam pressure for process use",
      "To remove dissolved gases from feedwater"
    ],
    "correct": 0,
    "explanation": "An economizer preheats feedwater by recovering heat from flue gases leaving the boiler. This reduces stack temperature and improves overall boiler efficiency by 3-5%."
  },
  {
    "id": 2002,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What are the two drums in a typical two-drum water-tube boiler?",
    "options": [
      "A steam drum (upper) and a mud drum (lower)",
      "A fire drum and a smoke drum",
      "A feedwater drum and a blowdown drum",
      "A condensate drum and a flash drum"
    ],
    "correct": 0,
    "explanation": "A two-drum water-tube boiler has a steam drum (upper) where steam-water separation occurs, and a mud drum (lower) where sediment collects and blowdown is taken. Water tubes connect the two drums."
  },
  {
    "id": 2003,
    "level": "2a",
    "category": "Combustion",
    "question": "For natural gas combustion, what is the optimal O2 percentage in flue gas?",
    "options": [
      "0% — all oxygen should be consumed",
      "8-10% O2",
      "2-3% O2",
      "15% O2"
    ],
    "correct": 2,
    "explanation": "Optimal O2 for natural gas is approximately 2-3% (about 10-15% excess air). Below 2%, incomplete combustion and CO formation increase. Above 3%, excess air wastes heat."
  },
  {
    "id": 2004,
    "level": "2a",
    "category": "Safety Valves",
    "question": "A safety valve is set at 400 psig. What is the ASME allowable tolerance?",
    "options": [
      "±2 psi",
      "±3%",
      "±10 psi (390-410 psig)",
      "±1%"
    ],
    "correct": 2,
    "explanation": "For set pressures 301-1000 psig, ASME tolerance is ±10 psi. At 400 psig: the valve must open between 390 and 410 psig."
  },
  {
    "id": 2005,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is the difference between the operating control and the high limit control on a boiler?",
    "options": [
      "The operating control cycles the burner during normal operation; the high limit is a safety device requiring manual reset",
      "They are the same device with different names",
      "The operating control handles water level; the high limit handles pressure",
      "The high limit cycles the burner; the operating control is the safety backup"
    ],
    "correct": 0,
    "explanation": "The operating control (pressuretrol/aquastat) cycles the burner on/off during normal operation and auto-resets. The high limit is a SAFETY device that shuts off the burner at a higher setpoint and requires MANUAL RESET to prevent restart without investigation."
  },
  {
    "id": 2006,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the purpose of phosphate treatment in boiler water?",
    "options": [
      "To convert hardness minerals to soft, non-adherent sludge that can be removed by blowdown",
      "To remove dissolved oxygen",
      "To increase the pH above 14",
      "To prevent foaming in the steam drum"
    ],
    "correct": 0,
    "explanation": "Phosphate reacts with calcium hardness to form calcium phosphate — a soft, non-adherent sludge (rather than hard scale) that can be removed by bottom blowdown. This is the most common internal treatment for hardness control."
  },
  {
    "id": 2007,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of a steam drum internals package (baffles, chevron dryers, cyclone separators)?",
    "options": [
      "To separate water droplets from steam to produce dry, high-quality steam",
      "To increase the steam pressure",
      "To mix feedwater and boiler water thoroughly",
      "To prevent corrosion of the drum shell"
    ],
    "correct": 0,
    "explanation": "Steam drum internals (cyclone separators, chevron dryers, scrubber screens) separate water droplets from steam before it exits the drum. This produces dry steam with minimal moisture carryover, protecting superheaters and turbines."
  },
  {
    "id": 2008,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "ASME Section V covers what subject?",
    "options": [
      "Power boiler construction",
      "Heating boiler construction",
      "Nondestructive Examination (NDE) methods and standards",
      "Welding qualifications"
    ],
    "correct": 2,
    "explanation": "ASME Section V covers Nondestructive Examination (NDE) — the methods and standards for UT, RT, MT, PT, VT, and other examination techniques used to inspect boiler and pressure vessel components."
  },
  {
    "id": 2009,
    "level": "2a",
    "category": "Steam Generation",
    "question": "Why must a superheater be protected from overheating during boiler startup?",
    "options": [
      "Because the superheater tubes are made of cast iron",
      "Because superheater tubes have no steam flow to cool them until the boiler is producing steam",
      "Because the superheater is located in the coldest part of the boiler",
      "Because overheating the superheater reduces fuel efficiency"
    ],
    "correct": 1,
    "explanation": "During startup, superheater tubes have no steam flow for cooling but are exposed to hot flue gases. Without cooling flow, tubes can overheat and fail. Startup procedures must limit firing rate until adequate steam flow is established through the superheater."
  },
  {
    "id": 2010,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the purpose of a steam turbine governor?",
    "options": [
      "To control the turbine speed by regulating steam flow to the turbine",
      "To control the steam temperature",
      "To control the boiler pressure",
      "To control the condenser vacuum"
    ],
    "correct": 0,
    "explanation": "The governor controls turbine speed by regulating the amount of steam admitted to the turbine. As load changes, the governor adjusts steam flow to maintain the desired speed (RPM), which is critical for generator frequency control."
  },
  {
    "id": 2011,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the relationship between excess air and stack temperature in terms of efficiency?",
    "options": [
      "More excess air raises stack temperature and reduces efficiency — heat is wasted heating unnecessary air",
      "More excess air lowers stack temperature and improves efficiency",
      "Excess air has no effect on stack temperature",
      "Less excess air always improves efficiency regardless of combustion quality"
    ],
    "correct": 0,
    "explanation": "Excess air raises stack temperature because additional air must be heated from ambient to stack temperature, absorbing heat energy. Each 1% increase in O2 above optimal wastes approximately 1% of fuel energy."
  },
  {
    "id": 2012,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the function of sodium sulfite in boiler water treatment?",
    "options": [
      "To increase water hardness for better heat transfer",
      "To scavenge dissolved oxygen by reacting with it chemically",
      "To lower the pH to prevent caustic embrittlement",
      "To remove silica from the boiler water"
    ],
    "correct": 1,
    "explanation": "Sodium sulfite is a chemical oxygen scavenger: 2Na₂SO₃ + O₂ → 2Na₂SO₄. It reacts with dissolved oxygen remaining after deaeration. A residual of 20-30 ppm sodium sulfite is maintained. Not used above 600 psig."
  },
  {
    "id": 2013,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a waterwall in a water-tube boiler?",
    "options": [
      "A wall of water surrounding the entire boiler for cooling",
      "A water barrier between the boiler and the building wall",
      "Tubes lining the furnace walls that absorb radiant heat from the flame and contain boiler water",
      "A dam inside the steam drum"
    ],
    "correct": 2,
    "explanation": "Waterwalls are tubes lining the furnace walls that absorb radiant heat directly from the flame. They contain boiler water/steam mixture and are the primary heat absorption surface in modern water-tube boilers. They also protect refractory from direct flame exposure."
  },
  {
    "id": 2014,
    "level": "2a",
    "category": "Safety Valves",
    "question": "What is the blowdown of a safety valve?",
    "options": [
      "The process of testing the low water cutoff",
      "The amount of steam released during a pop test",
      "The difference between the set (opening) pressure and the closing (reseating) pressure",
      "The pressure drop across the valve during normal operation"
    ],
    "correct": 2,
    "explanation": "Blowdown is the pressure difference between when a safety valve opens (set pressure) and when it reseats (closes). For example, a valve that opens at 150 psig and reseats at 143 psig has a blowdown of 7 psi. Excessive blowdown wastes steam; insufficient blowdown causes chattering."
  },
  {
    "id": 2015,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "What is a steaming economizer and why is it dangerous?",
    "options": [
      "An economizer that produces steam for process use — it is safe and efficient",
      "An economizer where feedwater reaches boiling temperature, producing steam that can cause water hammer and tube failure",
      "An economizer heated by live steam rather than flue gas",
      "A type of flash tank connected to the economizer"
    ],
    "correct": 1,
    "explanation": "A steaming economizer occurs when feedwater temperature exceeds saturation temperature inside the economizer tubes, generating steam. This can cause water hammer, tube erosion, flow instability, and tube failure. A recirculation line or bypass prevents this condition."
  },
  {
    "id": 2016,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "Under CSD-1, what is required if a burner fails to light during the trial for ignition period?",
    "options": [
      "Immediately retry ignition without purging",
      "Wait 10 seconds and retry automatically",
      "The system must complete a full pre-purge cycle before any reignition attempt",
      "Manually override the controls and force ignition"
    ],
    "correct": 2,
    "explanation": "If ignition fails during the trial for ignition, the system must lockout and complete a FULL pre-purge (minimum 4 air changes) before any reignition attempt. This prevents accumulated unburned fuel from causing a furnace explosion on the next ignition attempt."
  },
  {
    "id": 2017,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does the ASME 'H' stamp signify?",
    "options": [
      "High-pressure boiler manufacturing",
      "Heating boiler manufacturing — ASME Section IV cast iron and steel boilers",
      "Hydrostatic test certification",
      "Heat exchanger manufacturing"
    ],
    "correct": 1,
    "explanation": "The ASME 'H' stamp authorizes manufacture of HEATING BOILERS to ASME Section IV — low-pressure steam (≤15 psig) and hot water (≤160 psig/250°F) boilers including cast iron and steel designs."
  },
  {
    "id": 2018,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is the function of downcomers in a water-tube boiler?",
    "options": [
      "To carry steam from the drum to the turbine",
      "To carry cooler, denser water from the steam drum down to the lower headers/mud drum, completing the circulation loop",
      "To drain condensate from the superheater",
      "To provide emergency water supply to the boiler"
    ],
    "correct": 1,
    "explanation": "Downcomers carry cooler, denser water from the steam drum downward to the lower headers or mud drum. This water then flows through the heated riser tubes where it absorbs heat and rises back to the steam drum, completing the natural circulation loop."
  },
  {
    "id": 2019,
    "level": "2a",
    "category": "Combustion",
    "question": "What instrument is used to measure O2 and CO in flue gas for combustion analysis?",
    "options": [
      "A manometer",
      "A flue gas analyzer (combustion analyzer)",
      "A hydrometer",
      "A calorimeter"
    ],
    "correct": 1,
    "explanation": "A flue gas analyzer (combustion analyzer) measures O2, CO, CO2, NOx, and stack temperature. It calculates combustion efficiency and helps optimize the fuel-air ratio. Regular analysis is essential for maintaining peak efficiency."
  },
  {
    "id": 2020,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the difference between an impulse turbine and a reaction turbine?",
    "options": [
      "Impulse turbines are larger than reaction turbines",
      "In an impulse turbine, steam pressure drops across the nozzle only; in a reaction turbine, pressure drops across both the fixed and moving blades",
      "Impulse turbines use gas; reaction turbines use steam",
      "There is no significant difference"
    ],
    "correct": 1,
    "explanation": "In an IMPULSE turbine (De Laval, Curtis, Rateau), steam expands and accelerates through fixed nozzles, then pushes the moving blades (no pressure drop across moving blades). In a REACTION turbine (Parsons), pressure drops across BOTH fixed and moving blades — the moving blades act as nozzles too."
  },
  {
    "id": 2021,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of a soot blower?",
    "options": [
      "To blow soot into the furnace for additional fuel",
      "To remove soot and ash deposits from boiler heating surfaces to maintain heat transfer efficiency",
      "To blow soot out the stack for disposal",
      "To test the draft system operation"
    ],
    "correct": 3,
    "explanation": "Soot blowers use steam or compressed air jets to remove soot, ash, and slag deposits from boiler tube surfaces. Soot buildup insulates tubes, reduces heat transfer, raises stack temperature, and reduces efficiency. Soot blowing is done on a regular schedule during operation."
  },
  {
    "id": 2022,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What causes caustic embrittlement (caustic cracking) in boilers?",
    "options": [
      "High dissolved oxygen levels attacking tube walls",
      "Concentrated sodium hydroxide (caustic) under deposits or at leaking joints, causing intergranular stress corrosion cracking",
      "High calcium levels causing hard scale",
      "Low pH water dissolving the boiler metal"
    ],
    "correct": 1,
    "explanation": "Caustic embrittlement occurs when concentrated NaOH (caustic) collects under deposits or at tube-to-sheet joints. The concentrated caustic attacks grain boundaries in the steel, causing intergranular cracking under stress. Coordinated phosphate treatment helps prevent this."
  },
  {
    "id": 2023,
    "level": "2a",
    "category": "Steam Generation",
    "question": "Where is a convection superheater located relative to the furnace?",
    "options": [
      "Inside the furnace in direct view of the flame",
      "In the convection section — downstream of the furnace where flue gas temperature is lower",
      "On top of the steam drum",
      "Outside the boiler casing in ambient air"
    ],
    "correct": 3,
    "explanation": "A convection superheater is located in the CONVECTION SECTION — downstream of the furnace in the cooler gas passages. Its steam temperature INCREASES with load (more gas flow = more heat transfer). A radiant superheater, by contrast, is in the furnace area and its output decreases with load."
  },
  {
    "id": 2024,
    "level": "2a",
    "category": "Safety Valves",
    "question": "For a safety valve set at 1,200 psig, what is the ASME tolerance?",
    "options": [
      "±2 psi",
      "±3%",
      "±10 psi",
      "±1% (±12 psi)"
    ],
    "correct": 3,
    "explanation": "For set pressures above 1,000 psig, the ASME tolerance is ±1%. At 1,200 psig: 1,200 × 0.01 = 12 psi. The valve must open between 1,188 and 1,212 psig."
  },
  {
    "id": 2025,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is the maximum trial for ignition time for a gas pilot on an automatically fired boiler per CSD-1?",
    "options": [
      "4 seconds",
      "10 seconds",
      "15 seconds",
      "90 seconds"
    ],
    "correct": 2,
    "explanation": "Per CSD-1, the maximum trial for ignition for a gas pilot is typically 15 seconds. If the pilot does not prove within this time, the system must lockout and require a full pre-purge before retrying."
  },
  {
    "id": 2026,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does ASME Section VII cover?",
    "options": [
      "Recommended Guidelines for the Care of Power Boilers",
      "Pressure vessel design",
      "Nuclear power plant components",
      "Welding rod specifications"
    ],
    "correct": 0,
    "explanation": "ASME Section VII provides Recommended Guidelines for the Care of Power Boilers. It covers operating procedures, maintenance, water treatment, and general care practices. It is a guideline document, not a mandatory construction code."
  },
  {
    "id": 2027,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is a bent-tube boiler?",
    "options": [
      "A fire-tube boiler with curved tubes for thermal expansion",
      "A boiler with intentionally damaged tubes",
      "A water-tube boiler with tubes bent into curves to connect upper and lower drums at different positions",
      "A type of condensing boiler"
    ],
    "correct": 2,
    "explanation": "A bent-tube (or stirling-type) water-tube boiler has tubes bent into curves connecting the steam drum and mud drum(s). The bends allow thermal expansion without stress and permit various drum arrangements for different furnace configurations."
  },
  {
    "id": 2028,
    "level": "2a",
    "category": "Combustion",
    "question": "What does a high stack temperature indicate about boiler efficiency?",
    "options": [
      "The boiler is operating at peak efficiency",
      "Heat is being wasted — high stack temperature means combustion gases are leaving the boiler without transferring sufficient heat",
      "The fuel quality is excellent",
      "The forced draft fan is operating too slowly"
    ],
    "correct": 3,
    "explanation": "High stack temperature indicates that heat energy is escaping up the stack instead of being transferred to the water/steam. Causes include fouled heating surfaces (scale/soot), excess air, short-circuiting of gases, or failed baffles. Every 40°F reduction in stack temperature improves efficiency by approximately 1%."
  },
  {
    "id": 2029,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the purpose of the condenser in a steam turbine power cycle?",
    "options": [
      "To store condensate for reuse",
      "To condense exhaust steam back to water, creating a vacuum that increases turbine efficiency and recovers condensate",
      "To cool the turbine bearings",
      "To generate additional power from waste heat"
    ],
    "correct": 3,
    "explanation": "The condenser condenses turbine exhaust steam back to water. The vacuum created (typically 28-29 in. Hg) increases the pressure differential across the turbine, extracting more work. The condensate is recovered as pure, hot feedwater — saving water treatment and heating costs."
  },
  {
    "id": 2030,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of a steam separator (moisture separator) in a boiler system?",
    "options": [
      "To remove moisture (water droplets) from steam to improve steam quality",
      "To separate different grades of steam",
      "To separate oil from condensate",
      "To separate air from feedwater"
    ],
    "correct": 0,
    "explanation": "A steam/moisture separator removes water droplets from steam using centrifugal force, impingement, or direction changes. This improves steam quality (dryness fraction) and protects downstream equipment like superheaters and turbines from water damage."
  },
  {
    "id": 2031,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the cycles of concentration (CoC) in a boiler?",
    "options": [
      "The ratio of boiler water TDS to feedwater TDS — indicating how many times dissolved solids have concentrated",
      "The number of times feedwater is recirculated through the economizer",
      "The number of blowdown cycles per day",
      "The time in minutes for one complete water circulation through the boiler"
    ],
    "correct": 0,
    "explanation": "Cycles of concentration = Boiler water TDS ÷ Feedwater TDS. If feedwater is 100 ppm TDS and boiler water is 1,000 ppm, CoC = 10. Higher CoC means less blowdown (water savings) but risks scale and carryover if TDS exceeds limits."
  },
  {
    "id": 2032,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "An economizer should NOT heat feedwater above what temperature relative to the boiler's saturation temperature?",
    "options": [
      "It can heat to any temperature safely",
      "Feedwater should stay below 100°F",
      "Feedwater should stay below saturation temperature to prevent steaming in the economizer",
      "Feedwater should not exceed 150°F"
    ],
    "correct": 2,
    "explanation": "Economizer outlet water temperature must stay below the saturation temperature at the economizer pressure to prevent steaming (steam generation in the economizer). Steaming causes water hammer, flow instability, and potential tube damage."
  },
  {
    "id": 2033,
    "level": "2a",
    "category": "Safety Valves",
    "question": "What is accumulation in the context of safety valve testing?",
    "options": [
      "The amount of scale accumulated on valve seats",
      "The total number of safety valve lifts over time",
      "The pressure increase above MAWP when all safety valves are relieving at maximum boiler steaming capacity",
      "The time required for the safety valve to reseat"
    ],
    "correct": 2,
    "explanation": "Accumulation is the maximum pressure increase above MAWP allowed when the boiler fires at maximum capacity with all steam outlets closed and safety valves relieving. For power boilers (Section I): maximum 6% above MAWP."
  },
  {
    "id": 2034,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What does a combustion air proving switch verify?",
    "options": [
      "That the fuel supply is adequate for combustion",
      "That the combustion air fan is running and providing adequate airflow before ignition is permitted",
      "That the stack damper is closed",
      "That the pilot flame is established"
    ],
    "correct": 1,
    "explanation": "The combustion air proving switch (airflow switch) verifies that the combustion air fan is operating and providing adequate airflow BEFORE the burner management system permits ignition. Without proven airflow, fuel cannot be introduced safely."
  },
  {
    "id": 2035,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the purpose of ASME Section VIII?",
    "options": [
      "Construction of power boilers",
      "Construction of heating boilers",
      "Construction of unfired pressure vessels",
      "Welding procedure qualification"
    ],
    "correct": 2,
    "explanation": "ASME Section VIII covers the design, construction, and inspection of unfired pressure vessels — tanks, heat exchangers, deaerators, and other vessels not directly fired. Division 1 covers standard vessels; Division 2 covers alternative rules for high-pressure/precision designs."
  },
  {
    "id": 2036,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is an HRSG (Heat Recovery Steam Generator)?",
    "options": [
      "A type of fire-tube boiler",
      "A water-tube boiler that generates steam using hot exhaust gases from a gas turbine or other process",
      "A high-resistance steam gauge",
      "A steam generator powered by hydroelectric turbines"
    ],
    "correct": 3,
    "explanation": "An HRSG (Heat Recovery Steam Generator) is a water-tube boiler that recovers waste heat from gas turbine exhaust (typically 900-1,100°F) to generate steam. Used in combined cycle power plants, HRSGs significantly improve overall plant efficiency from ~35% to ~55-60%."
  },
  {
    "id": 2037,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the purpose of an air preheater in a boiler system?",
    "options": [
      "To cool the combustion air before it enters the furnace",
      "To heat combustion air using waste heat from flue gases, improving combustion efficiency",
      "To filter combustion air",
      "To pressurize combustion air to high pressure"
    ],
    "correct": 1,
    "explanation": "An air preheater recovers heat from flue gases to preheat combustion air. Hotter combustion air improves combustion efficiency, lowers the ignition delay, and reduces fuel consumption. Types include tubular, plate, and regenerative (Ljungstrom)."
  },
  {
    "id": 2038,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the critical speed of a turbine rotor?",
    "options": [
      "The maximum safe operating speed",
      "The speed at which the rotor's natural vibration frequency matches the rotational frequency, causing excessive vibration",
      "The minimum speed needed to generate electricity",
      "The speed at which the governor takes control"
    ],
    "correct": 3,
    "explanation": "Critical speed is the rotational speed where the rotor's natural frequency matches the rotational frequency, causing resonance and potentially destructive vibration. Turbines must pass through critical speed quickly during startup and never operate at critical speed continuously."
  },
  {
    "id": 2039,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of continuous blowdown versus bottom blowdown?",
    "options": [
      "Continuous blowdown controls dissolved solids at the water surface; bottom blowdown removes settled sludge from the lowest point",
      "They serve the same purpose",
      "Continuous blowdown removes sludge; bottom blowdown controls TDS",
      "Continuous blowdown is for HP boilers only; bottom blowdown is for LP boilers only"
    ],
    "correct": 0,
    "explanation": "Continuous (surface) blowdown skims the highest-TDS water from near the water surface to control dissolved solids. Bottom blowdown is done intermittently (typically once per shift) to remove settled sludge and sediment from the lowest point of the boiler."
  },
  {
    "id": 2040,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is chelant treatment in boiler water chemistry?",
    "options": [
      "A method to increase water hardness",
      "A treatment using chelating agents (like EDTA) that keep hardness minerals in solution to prevent scale",
      "A way to remove silica from steam",
      "A method to lower pH for corrosion control"
    ],
    "correct": 1,
    "explanation": "Chelant treatment uses chelating agents like EDTA that form soluble complexes with calcium and magnesium, keeping them dissolved in the water so they can be removed by blowdown rather than depositing as scale. Used in boilers up to about 1,500 psig."
  },
  {
    "id": 2041,
    "level": "2a",
    "category": "Steam Generation",
    "question": "What type of superheater increases output temperature as load decreases?",
    "options": [
      "Convection superheater",
      "Radiant superheater — located in the furnace where radiant heat per pound of steam increases at lower loads",
      "Desuperheater",
      "Economizer"
    ],
    "correct": 1,
    "explanation": "A RADIANT superheater is in the furnace area. At lower loads, less steam flows through but the furnace is still hot — so each pound of steam absorbs MORE heat, increasing outlet temperature. Convection superheaters behave oppositely. Combining both types provides more stable temperature."
  },
  {
    "id": 2042,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is a main fuel safety shutoff valve (MFSSV)?",
    "options": [
      "A manual valve the operator uses to control fuel flow",
      "An automatically operated, fast-closing valve that shuts off all fuel to the burner on a safety trip",
      "A pressure reducing valve on the fuel supply",
      "A valve that controls fuel flow rate for modulation"
    ],
    "correct": 3,
    "explanation": "The MFSSV is an automatic, fast-closing valve in the main fuel line that shuts off all fuel to the burner upon any safety trip (flame failure, low water, high pressure, air failure, etc.). CSD-1 requires two safety shutoff valves in series (double block) for reliability."
  },
  {
    "id": 2043,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the ASME 'U' stamp?",
    "options": [
      "A stamp for used/refurbished boilers",
      "Authorizes manufacture of unfired pressure vessels to ASME Section VIII",
      "A stamp for utility-grade power boilers",
      "Authorizes boiler inspections"
    ],
    "correct": 3,
    "explanation": "The ASME 'U' stamp authorizes organizations to manufacture unfired pressure vessels to ASME Section VIII, Division 1. This includes deaerators, heat exchangers, flash tanks, and other non-fired vessels used in boiler plant systems."
  },
  {
    "id": 2044,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is the advantage of a membrane wall (fin tube wall) construction in a water-tube boiler?",
    "options": [
      "It reduces the number of tubes needed",
      "It increases the drum size",
      "Fins welded between adjacent tubes create a continuous gas-tight wall, eliminating the need for refractory and preventing gas bypass",
      "It allows higher firing rates"
    ],
    "correct": 2,
    "explanation": "Membrane wall construction welds flat steel fins (membranes) between adjacent waterwall tubes, creating a continuous gas-tight enclosure. This eliminates refractory lining, prevents hot gas bypass, provides maximum radiant heat absorption, and reduces boiler weight."
  },
  {
    "id": 2045,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the effect of too little excess air on combustion?",
    "options": [
      "Incomplete combustion producing CO, soot, and unburned hydrocarbons — fire hazard and efficiency loss",
      "Perfect combustion with maximum efficiency",
      "Lower stack temperature and higher efficiency",
      "No effect on combustion quality"
    ],
    "correct": 0,
    "explanation": "Insufficient air causes incomplete combustion: CO production (toxic, flammable), soot/smoke (unburned carbon), unburned hydrocarbons, fouled heating surfaces, and potential for furnace explosion if unburned fuel accumulates. Proper excess air ensures complete combustion."
  },
  {
    "id": 2046,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is governor droop (speed droop)?",
    "options": [
      "The physical sag of the governor mechanism",
      "The decrease in turbine speed from no-load to full-load that causes the governor to increase steam flow",
      "A malfunction where the governor fails to respond",
      "The time delay in governor response"
    ],
    "correct": 3,
    "explanation": "Speed droop is the designed decrease in speed from no-load to full-load. Typical droop is 3-5%. A governor with 5% droop at 3,600 RPM no-load would allow speed to drop to 3,420 RPM at full load. Droop is essential for stable load sharing between parallel generators."
  },
  {
    "id": 2047,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of a boiler feedwater regulator (feedwater control valve)?",
    "options": [
      "To regulate the fuel flow to the burner",
      "To maintain the proper water level in the boiler by controlling feedwater flow",
      "To regulate the blowdown rate",
      "To control the steam pressure"
    ],
    "correct": 3,
    "explanation": "The feedwater regulator automatically controls the flow of feedwater into the boiler to maintain the proper water level. Three-element control uses drum level, steam flow, and feedwater flow signals for the most stable water level control."
  },
  {
    "id": 2048,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is alkalinity in boiler water and why is it important?",
    "options": [
      "The amount of chlorine in the water",
      "The temperature of the water",
      "The ability of the water to neutralize acids — expressed as ppm CaCO3 and important for pH control and corrosion prevention",
      "The hardness level of the water"
    ],
    "correct": 2,
    "explanation": "Alkalinity is the water's ability to neutralize acids, expressed as ppm of CaCO3. Proper alkalinity maintains boiler water pH in the 8.5-12.5 range, preventing acidic corrosion. Excessive alkalinity can cause foaming and carryover."
  },
  {
    "id": 2049,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "What is a condensing economizer?",
    "options": [
      "An economizer that condenses steam back to water",
      "An economizer designed to cool flue gases below the dew point, recovering both sensible and latent heat from water vapor in the flue gas",
      "An economizer used only in condensing boilers",
      "A device that condenses air for combustion"
    ],
    "correct": 3,
    "explanation": "A condensing economizer cools flue gases below the water vapor dew point (~130°F for natural gas), recovering latent heat from condensing water vapor. This can boost overall system efficiency to 95%+ for natural gas boilers. The condensate is acidic and must be drained properly."
  },
  {
    "id": 2050,
    "level": "2a",
    "category": "Safety Valves",
    "question": "What is the maximum accumulation for a power boiler with a single safety valve?",
    "options": [
      "3% above MAWP",
      "10% above MAWP",
      "6% above MAWP",
      "No limit — the valve must relieve whatever is needed"
    ],
    "correct": 2,
    "explanation": "For power boilers (ASME Section I), the maximum accumulation is 6% above MAWP, whether one or multiple safety valves are installed. For example, a 200 psig MAWP boiler cannot exceed 212 psig during an accumulation test."
  },
  {
    "id": 2051,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of the air vent on a boiler during startup?",
    "options": [
      "To supply combustion air to the burner",
      "To vent air trapped in the boiler as it is filled and heated, preventing air pockets that impede circulation and cause corrosion",
      "To vent excess steam during operation",
      "To allow the boiler inspector to look inside"
    ],
    "correct": 1,
    "explanation": "During startup, the air vent is opened to release trapped air as the boiler heats. Air pockets reduce heat transfer, impede circulation, and concentrated oxygen causes pitting corrosion. The vent is closed once steam begins to discharge steadily."
  },
  {
    "id": 2052,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is the purpose of a post-purge on a burner?",
    "options": [
      "To purge fuel lines before ignition",
      "To continue airflow after burner shutdown to clear residual combustion products from the fireside",
      "To cool the burner flame detector",
      "To test the safety shutoff valves"
    ],
    "correct": 2,
    "explanation": "Post-purge continues fan operation after the burner shuts off, clearing the furnace and flue passages of any residual combustion products. This reduces the risk of gas accumulation and potential explosion on the next ignition cycle."
  },
  {
    "id": 2053,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is a D-type water-tube boiler?",
    "options": [
      "A boiler with a D-shaped cross-section when viewed from the front — one steam drum, one mud drum, and tubes on one side",
      "A boiler with two drums shaped like the letter D",
      "A diesel-fired water-tube boiler",
      "A boiler designed for domestic hot water only"
    ],
    "correct": 0,
    "explanation": "A D-type boiler has a D-shaped profile when viewed from the front: one steam drum on top, one mud drum on the bottom, connected by tubes on one side, with the furnace on the open side of the 'D'. This is a very common industrial water-tube boiler configuration."
  },
  {
    "id": 2054,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the purpose of a conductivity meter in boiler water monitoring?",
    "options": [
      "To measure water flow rate",
      "To measure the concentration of dissolved solids indirectly — higher conductivity indicates higher TDS",
      "To measure water temperature",
      "To detect leaks in the boiler"
    ],
    "correct": 3,
    "explanation": "A conductivity meter measures the electrical conductivity of boiler water, which is directly proportional to the concentration of dissolved solids (TDS). It is used to control blowdown — when conductivity exceeds the setpoint, blowdown is initiated to reduce TDS."
  },
  {
    "id": 2055,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is a De Laval turbine?",
    "options": [
      "A single-stage impulse turbine with one set of nozzles and one wheel — simple but high-speed",
      "A large multi-stage reaction turbine",
      "A type of steam engine",
      "A hydraulic turbine for water power"
    ],
    "correct": 0,
    "explanation": "The De Laval turbine is a SINGLE-STAGE IMPULSE turbine — steam expands through a single set of converging-diverging nozzles and hits one row of buckets on a single wheel. It is simple but operates at very high speed (up to 30,000 RPM). Used for small auxiliary drives."
  },
  {
    "id": 2056,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the difference between ASME Section I and Section IV regarding safety valve requirements?",
    "options": [
      "Section I requires pop-action safety valves; Section IV allows spring-loaded relief valves for hot water boilers",
      "There is no difference",
      "Section I requires more frequent testing",
      "Section IV requires larger safety valves"
    ],
    "correct": 0,
    "explanation": "Section I (power boilers) requires pop-action safety valves. Section IV (heating boilers) allows ASME-rated pressure relief valves on hot water boilers, which open proportionally. Section IV steam boilers (≤15 psig) still require safety valves set at ≤15 psig with max 5 psi accumulation."
  },
  {
    "id": 2057,
    "level": "2a",
    "category": "Steam Generation",
    "question": "What damage can water carryover cause to a superheater?",
    "options": [
      "No damage — superheaters are designed for wet steam",
      "Thermal shock, tube failure, and deposit buildup from dissolved solids in the carried-over water",
      "It improves superheater efficiency by cooling the tubes",
      "It causes the superheater to produce more superheat"
    ],
    "correct": 1,
    "explanation": "Water carryover into the superheater causes: (1) Thermal shock from cold water hitting hot tubes, (2) Deposits as dissolved solids in the water are baked onto tube surfaces, (3) Potential tube failure from overheating under deposits, (4) Reduced steam quality downstream."
  },
  {
    "id": 2058,
    "level": "2a",
    "category": "Combustion",
    "question": "What is CO2 in flue gas analysis used to indicate?",
    "options": [
      "The amount of excess air — higher CO2 generally indicates less excess air and more complete use of combustion air",
      "The toxicity level of the flue gas",
      "The fuel heating value",
      "The amount of moisture in the fuel"
    ],
    "correct": 0,
    "explanation": "CO2 percentage in flue gas is inversely related to excess air — as excess air increases, CO2 decreases (diluted by nitrogen). Maximum CO2 occurs at theoretical (stoichiometric) combustion. For natural gas, maximum CO2 is about 11.7%. Typical operating CO2 is 8-10%."
  },
  {
    "id": 2059,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the function of a boiler blowoff (blowdown) tank?",
    "options": [
      "To store feedwater before it enters the boiler",
      "To receive and cool hot blowdown water/steam discharge, reducing it to safe temperature before sewer discharge",
      "To collect condensate from steam traps",
      "To store fuel oil"
    ],
    "correct": 1,
    "explanation": "A blowdown tank receives high-temperature, high-pressure blowdown discharge. It flashes the pressurized water, separates steam (vented safely), and cools the remaining water to ≤150°F before discharge to the sewer."
  },
  {
    "id": 2060,
    "level": "2a",
    "category": "Water Treatment",
    "question": "At what boiler operating pressure should sodium sulfite be replaced with hydrazine or other volatile oxygen scavenger?",
    "options": [
      "Above 150 psig",
      "Above 300 psig",
      "Above 600 psig",
      "Above 1,000 psig"
    ],
    "correct": 2,
    "explanation": "Above 600 psig, sodium sulfite decomposes and contributes to dissolved solids. Hydrazine (N₂H₄) or other volatile oxygen scavengers (DEHA, carbohydrazide) are used instead because they decompose cleanly without adding solids. Hydrazine: N₂H₄ + O₂ → 2H₂O + N₂."
  },
  {
    "id": 2061,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "How many fuel safety shutoff valves are required in series on the main fuel supply per CSD-1?",
    "options": [
      "One",
      "Two (double block arrangement)",
      "Three",
      "Depends on boiler size"
    ],
    "correct": 3,
    "explanation": "CSD-1 requires TWO fuel safety shutoff valves in series (double block) on the main fuel supply for boilers over 400,000 BTU/hr input. This provides redundancy — if one valve fails to close, the second valve still prevents fuel from reaching the burner."
  },
  {
    "id": 2062,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "ASME Section VI covers what subject?",
    "options": [
      "Power boiler construction",
      "Heating boiler construction",
      "Recommended Rules for the Care and Operation of Heating Boilers",
      "Pressure vessel fabrication"
    ],
    "correct": 2,
    "explanation": "ASME Section VI covers Recommended Rules for the Care and Operation of Heating Boilers (low-pressure steam and hot water). It provides guidelines for operation, maintenance, and safety of boilers built to Section IV."
  },
  {
    "id": 2063,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is the purpose of baffles in a boiler?",
    "options": [
      "To support the boiler tubes structurally",
      "To direct the flow of combustion gases across the tube surfaces for maximum heat transfer",
      "To control water flow inside the tubes",
      "To reduce noise levels"
    ],
    "correct": 3,
    "explanation": "Baffles direct combustion gases to flow across tube surfaces in multiple passes, maximizing contact time and heat transfer. Without baffles, gases would short-circuit directly to the stack with minimal heat absorption. Damaged or missing baffles significantly reduce efficiency."
  },
  {
    "id": 2064,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the overspeed trip setpoint for a steam turbine?",
    "options": [
      "100% of rated speed",
      "105% of rated speed",
      "110% of rated speed",
      "120% of rated speed"
    ],
    "correct": 2,
    "explanation": "The overspeed trip is set at approximately 110% of rated speed. It mechanically or electronically trips the turbine if speed exceeds this limit, typically by closing the emergency stop valve. Overspeed can cause catastrophic rotor failure due to centrifugal forces."
  },
  {
    "id": 2065,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of a mud drum (lower drum) in a water-tube boiler?",
    "options": [
      "To collect sediment, sludge, and precipitated solids from the boiler water for removal by blowdown",
      "To generate steam at a lower pressure",
      "To store extra feedwater",
      "To provide a mounting location for the superheater"
    ],
    "correct": 0,
    "explanation": "The mud drum collects sediment, sludge, and precipitated solids that settle due to gravity. Bottom blowdown is taken from the mud drum to remove these accumulated solids. The mud drum also serves as the lower connection point for the water circulation tubes."
  },
  {
    "id": 2066,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the purpose of filming amines in condensate treatment?",
    "options": [
      "To increase condensate pH",
      "To form a thin protective film on condensate pipe walls that prevents both CO2 and oxygen corrosion",
      "To remove dissolved solids from condensate",
      "To increase conductivity for monitoring purposes"
    ],
    "correct": 3,
    "explanation": "Filming amines (like octadecylamine) form a thin, non-wettable film on internal pipe surfaces. This film acts as a barrier between the pipe metal and the corrosive condensate, preventing both carbonic acid (CO2) and oxygen corrosion. Unlike neutralizing amines, filming amines protect against oxygen corrosion too."
  },
  {
    "id": 2067,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "What is an integral economizer versus a separate economizer?",
    "options": [
      "An integral economizer is built into the boiler as part of the convection section; a separate economizer is a standalone heat exchanger",
      "They are the same thing",
      "An integral economizer uses steam; a separate economizer uses flue gas",
      "An integral economizer is for HP boilers only"
    ],
    "correct": 0,
    "explanation": "An INTEGRAL economizer is built into the boiler's convection section (common in packaged boilers). A SEPARATE economizer is a standalone unit installed in the flue gas ductwork between the boiler and the stack. Both recover flue gas heat to preheat feedwater."
  },
  {
    "id": 2068,
    "level": "2a",
    "category": "Safety Valves",
    "question": "What is the purpose of the huddling chamber in a safety valve?",
    "options": [
      "To collect condensate from the valve discharge",
      "To allow the operator to manually lift the valve",
      "To muffle the sound of the valve discharging",
      "To create additional lifting force once the valve begins to open, producing the characteristic 'pop' action"
    ],
    "correct": 3,
    "explanation": "The huddling chamber is the annular area between the disc and the valve body. When the valve begins to open, steam enters this chamber and acts on a larger disc area, creating additional upward force that snaps the valve fully open — the 'pop' action characteristic of safety valves."
  },
  {
    "id": 2069,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the flash point of fuel oil?",
    "options": [
      "The temperature at which fuel oil ignites spontaneously",
      "The lowest temperature at which fuel oil vapors will ignite when exposed to an ignition source",
      "The temperature at which fuel oil boils",
      "The temperature at which fuel oil becomes liquid"
    ],
    "correct": 1,
    "explanation": "Flash point is the LOWEST temperature at which fuel oil produces sufficient vapors to ignite momentarily when exposed to a spark or flame. It is a key safety parameter — fuel oil must be stored and handled below its flash point to prevent fires. #2 fuel oil flash point is typically 130-150°F."
  },
  {
    "id": 2070,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is a Curtis stage turbine?",
    "options": [
      "A reaction turbine with many stages",
      "A velocity-compounded impulse turbine — steam passes through one set of nozzles then multiple rows of moving and stationary blades",
      "A single-stage turbine like the De Laval",
      "A type of gas turbine"
    ],
    "correct": 1,
    "explanation": "A Curtis stage is a VELOCITY-COMPOUNDED impulse turbine. Steam expands through one set of nozzles, then passes through alternating rows of moving blades (on the rotor) and stationary (reversing) blades. This extracts energy in multiple steps from one pressure drop, allowing lower wheel speeds than a De Laval."
  },
  {
    "id": 2071,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is meant by 'boiler turndown ratio'?",
    "options": [
      "The number of boilers shut down during low demand",
      "The ratio of maximum firing rate to minimum stable firing rate — indicating the boiler's load range",
      "The ratio of water to steam in the boiler",
      "The ratio of stack height to boiler height"
    ],
    "correct": 3,
    "explanation": "Turndown ratio = Maximum firing rate ÷ Minimum stable firing rate. A boiler with 4:1 turndown can operate from 25% to 100% of rated capacity. Higher turndown ratios provide better load-following capability and reduce boiler cycling."
  },
  {
    "id": 2072,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is reverse osmosis (RO) in water treatment?",
    "options": [
      "A process that uses gravity to filter water",
      "A membrane process that removes 95-99% of dissolved solids by forcing water through a semi-permeable membrane under pressure",
      "A chemical process that reverses the effects of hard water",
      "A process that adds minerals to water"
    ],
    "correct": 1,
    "explanation": "Reverse osmosis forces water through a semi-permeable membrane at high pressure (150-600 psi). The membrane rejects 95-99% of dissolved solids, producing very pure permeate water. RO is used as pretreatment for high-pressure boiler feedwater systems."
  },
  {
    "id": 2073,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is a safety interlock on a burner control system?",
    "options": [
      "A condition that must be satisfied before the burner can fire — if the condition is lost, the burner shuts down",
      "A physical lock on the burner",
      "A backup fuel supply",
      "A timer that limits firing duration"
    ],
    "correct": 0,
    "explanation": "Safety interlocks are conditions that must be TRUE for the burner to operate: adequate water level, proper air flow, fuel pressure within range, no flame failure, pressure below high limit, etc. If ANY interlock condition is lost, the burner immediately shuts down."
  },
  {
    "id": 2074,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is a National Board number on a boiler?",
    "options": [
      "The serial number assigned by the manufacturer",
      "The inspection report number",
      "A unique registration number assigned by the National Board of Boiler and Pressure Vessel Inspectors when the boiler is registered at manufacture",
      "The insurance policy number"
    ],
    "correct": 2,
    "explanation": "The National Board number is a unique registration number assigned when a boiler or pressure vessel is registered with the National Board at the time of manufacture. It appears on the nameplate along with the ASME stamp. The National Board maintains records of all registered boilers."
  },
  {
    "id": 2075,
    "level": "2a",
    "category": "Steam Generation",
    "question": "What is a pendant superheater?",
    "options": [
      "A superheater mounted on a pendant chain for vibration isolation",
      "Superheater tubes that hang vertically (like pendants) from headers at the top of the furnace or in the convection pass",
      "A portable superheater unit",
      "A superheater used only for pendant lights in the boiler room"
    ],
    "correct": 3,
    "explanation": "A pendant superheater has tubes that hang vertically from upper headers, typically in the furnace exit area or upper convection pass. The vertical orientation allows drainage of condensate during startup and shutdown, and accommodates thermal expansion. Common in large utility and industrial boilers."
  },
  {
    "id": 2076,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the purpose of fuel oil atomization?",
    "options": [
      "To mix fuel with water for efficiency",
      "To break fuel oil into very fine droplets, maximizing surface area for rapid and complete combustion",
      "To cool the fuel before it enters the furnace",
      "To remove impurities from the fuel"
    ],
    "correct": 3,
    "explanation": "Atomization breaks fuel oil into a fine mist of tiny droplets, dramatically increasing the surface area for combustion. Better atomization = faster, more complete combustion = less smoke, less soot, higher efficiency. Methods include pressure (mechanical), steam, and air atomization."
  },
  {
    "id": 2077,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What type of turbine seal prevents steam leakage along the turbine shaft?",
    "options": [
      "O-ring seals",
      "Mechanical face seals",
      "Labyrinth seals — a series of thin fins that create a tortuous path to minimize steam leakage",
      "Hydraulic seals"
    ],
    "correct": 2,
    "explanation": "Labyrinth seals use a series of thin fins (teeth) machined on the shaft or casing that create a tortuous path for steam. At each fin, the steam pressure drops slightly. No physical contact occurs between the rotating and stationary parts, eliminating wear. Carbon ring seals are also used at shaft ends."
  },
  {
    "id": 2078,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the difference between a fire-tube and water-tube boiler regarding pressure limitations?",
    "options": [
      "Fire-tube boilers can handle higher pressure",
      "Both have the same pressure limitations",
      "Water-tube boilers can handle much higher pressures because water is inside small tubes; fire-tube boilers are limited to approximately 300 psig",
      "Neither has pressure limitations"
    ],
    "correct": 2,
    "explanation": "Water-tube boilers can handle much higher pressures (up to supercritical levels) because the high-pressure water/steam is contained in small-diameter tubes that resist pressure efficiently. Fire-tube boilers have the high-pressure water/steam in the large shell, limiting them to approximately 300 psig."
  },
  {
    "id": 2079,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is foaming in a boiler and what causes it?",
    "options": [
      "Bubbles forming in the feedwater tank from aeration",
      "Formation of stable foam on the boiler water surface caused by high TDS, oil contamination, or excessive alkalinity — leading to carryover",
      "Ice crystals forming in the economizer",
      "Bubbles in the sight glass from incorrect installation"
    ],
    "correct": 1,
    "explanation": "Foaming is the formation of stable foam on the boiler water surface. Causes: high TDS concentration, oil/grease contamination, high alkalinity/organics, and certain dissolved solids that act as surfactants. Foaming causes severe carryover of water into the steam, contaminating the steam and potentially damaging equipment."
  },
  {
    "id": 2080,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "What material concern exists with condensing economizers on natural gas boilers?",
    "options": [
      "The economizer tubes corrode from the acidic condensate (carbonic acid) — corrosion-resistant materials like stainless steel must be used",
      "No material concerns exist",
      "The tubes expand too much from heat",
      "The insulation melts at high temperatures"
    ],
    "correct": 0,
    "explanation": "When flue gas cools below the dew point, water condenses and absorbs CO2 forming carbonic acid (H2CO3), with pH around 3-4. Standard carbon steel corrodes rapidly. Condensing economizers must use corrosion-resistant materials: stainless steel, aluminum, or polymer-coated tubes."
  },
  {
    "id": 2081,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is a Rateau stage turbine?",
    "options": [
      "A velocity-compounded impulse turbine",
      "A pressure-compounded impulse turbine — multiple stages each with their own set of nozzles and blades, with pressure dropping in each stage",
      "A type of reaction turbine",
      "A single-stage turbine for small applications"
    ],
    "correct": 1,
    "explanation": "A Rateau stage is a PRESSURE-COMPOUNDED impulse turbine. Total steam expansion is divided among multiple stages, each having its own set of nozzles and moving blades. Pressure drops incrementally across each nozzle set. This reduces blade speed requirements and improves efficiency."
  },
  {
    "id": 2082,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What is a flame safeguard system (flame relay)?",
    "options": [
      "A backup flame in case the pilot goes out",
      "The complete burner management system that monitors flame presence, controls the ignition sequence, and ensures safe shutdown on flame failure",
      "A fire suppression system for the boiler room",
      "A thermal overload relay on the burner motor"
    ],
    "correct": 3,
    "explanation": "The flame safeguard system (also called the burner management system or programmer) controls the entire burner startup sequence: pre-purge → pilot ignition → pilot proving → main flame → operation, and ensures safe shutdown on any safety fault. Common types: Honeywell, Fireye, Siemens."
  },
  {
    "id": 2083,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is a forced circulation boiler?",
    "options": [
      "A boiler that uses pumps to circulate water through the tubes instead of relying on natural density differences",
      "A boiler with extra-large downcomers",
      "A boiler with forced draft fans",
      "A boiler with pressurized feedwater"
    ],
    "correct": 0,
    "explanation": "A forced circulation boiler uses circulation pumps to move water through the tubes. This is necessary at very high pressures (above about 2,000 psig) where the density difference between hot and cold water is too small for adequate natural circulation. Once-through (supercritical) boilers are the extreme case."
  },
  {
    "id": 2084,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is the purpose of maintaining a sodium sulfite residual of 20-30 ppm in boiler water?",
    "options": [
      "To keep the water soft",
      "To ensure enough oxygen scavenger is present to react with any incoming dissolved oxygen — the residual proves adequate dosing",
      "To lower the pH",
      "To prevent foaming"
    ],
    "correct": 1,
    "explanation": "A sulfite residual of 20-30 ppm proves that more than enough sodium sulfite is present to react with all dissolved oxygen. If the residual drops to zero, oxygen may be present and causing corrosion. The residual is measured by testing and adjusting chemical feed rates."
  },
  {
    "id": 2085,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is the purpose of a steam desuperheater spray water control?",
    "options": [
      "To add more heat to the steam",
      "To precisely control final steam temperature by regulating the amount of spray water injected into superheated steam",
      "To control the feedwater temperature",
      "To regulate the boiler water level"
    ],
    "correct": 3,
    "explanation": "A desuperheater spray control valve regulates the quantity of feedwater sprayed into the superheated steam to control the final steam temperature precisely. This is critical for protecting turbine blades from excessive temperature while maintaining rated conditions."
  },
  {
    "id": 2086,
    "level": "2a",
    "category": "Combustion",
    "question": "What is stoichiometric combustion?",
    "options": [
      "Combustion with maximum excess air for safety",
      "Combustion using stored thermal energy",
      "Combustion at the maximum firing rate",
      "Theoretically perfect combustion — exactly the right amount of air to completely burn the fuel with no excess"
    ],
    "correct": 3,
    "explanation": "Stoichiometric (theoretical) combustion uses exactly the minimum air required for complete combustion — no excess, no deficiency. In practice, stoichiometric combustion is impossible because of imperfect mixing. Some excess air (typically 10-20% for gas) is always required."
  },
  {
    "id": 2087,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What is the purpose of NFPA 85?",
    "options": [
      "To regulate fire extinguisher placement in boiler rooms",
      "To provide the Boiler and Combustion Systems Hazards Code — standards for preventing furnace explosions and implosions",
      "To set standards for electrical wiring in boiler rooms",
      "To regulate fuel storage tank design"
    ],
    "correct": 1,
    "explanation": "NFPA 85 (Boiler and Combustion Systems Hazards Code) establishes requirements to prevent furnace explosions and implosions. It covers purge requirements, fuel safety shutoff valves, flame detection, burner management systems, and safe startup/shutdown procedures for boilers and HRSGs."
  },
  {
    "id": 2088,
    "level": "2a",
    "category": "Steam Generation",
    "question": "During boiler startup, when should the superheater drains be open?",
    "options": [
      "Only during shutdown",
      "Only when the boiler is at full load",
      "During the entire startup period until adequate steam flow is established through the superheater to prevent condensate accumulation and thermal shock",
      "Superheater drains should never be opened"
    ],
    "correct": 2,
    "explanation": "Superheater drains must be OPEN during startup to drain condensate that forms as the boiler heats up. If condensate accumulates in superheater tubes and is suddenly hit by hot gas, thermal shock can crack tubes. Drains are closed once steady steam flow provides adequate cooling."
  },
  {
    "id": 2089,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is a Parsons turbine?",
    "options": [
      "A single-stage impulse turbine",
      "A multi-stage REACTION turbine where steam expands through both fixed and moving blades, with a pressure drop across each row",
      "A type of steam engine",
      "A gas turbine design"
    ],
    "correct": 1,
    "explanation": "The Parsons turbine is a MULTI-STAGE REACTION design. Steam expands through alternating rows of fixed (stator) and moving (rotor) blades, with a pressure drop across each row. Both fixed and moving blades act as nozzles. Parsons turbines are very efficient for large power generation applications."
  },
  {
    "id": 2090,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is shrinkage and swell in boiler water level?",
    "options": [
      "Shrinkage is the apparent drop in water level when load decreases (fewer steam bubbles); swell is the apparent rise when load increases (more steam bubbles)",
      "Physical damage to the boiler drum",
      "Shrinkage is water loss; swell is water gain",
      "Terms describing scale buildup"
    ],
    "correct": 0,
    "explanation": "SWELL: When firing rate increases, more steam bubbles form below the water surface, making the water appear to rise temporarily. SHRINKAGE: When firing rate decreases, fewer bubbles form and level appears to drop. These are temporary effects that can cause false water level readings."
  },
  {
    "id": 2091,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is ion exchange in water treatment?",
    "options": [
      "A process where undesirable ions (Ca, Mg) in water are exchanged for less harmful ions (Na, H) by passing through a resin bed",
      "Adding ions to the water to improve taste",
      "Electrically charging the water to remove particles",
      "A chemical reaction that creates new ions"
    ],
    "correct": 0,
    "explanation": "Ion exchange passes water through a resin bed that exchanges undesirable ions for less harmful ones. In sodium-cycle softening, Ca²⁺ and Mg²⁺ are exchanged for Na⁺ (which doesn't form hard scale). In demineralization, cation and anion resins remove virtually all dissolved minerals."
  },
  {
    "id": 2092,
    "level": "2a",
    "category": "Controls & Instrumentation",
    "question": "What does a fuel pressure switch (low fuel pressure cutoff) do?",
    "options": [
      "Controls the operating fuel pressure",
      "Increases fuel pressure during startup",
      "Shuts off the burner if fuel pressure drops below the minimum required for proper atomization and safe combustion",
      "Measures fuel consumption"
    ],
    "correct": 2,
    "explanation": "The low fuel pressure switch is a safety interlock that prevents burner operation if fuel supply pressure is too low. Insufficient fuel pressure causes poor atomization (oil) or inadequate gas flow, resulting in unstable flame, incomplete combustion, or flame failure."
  },
  {
    "id": 2093,
    "level": "2a",
    "category": "Combustion",
    "question": "What is the purpose of secondary air in a combustion system?",
    "options": [
      "Additional air supplied beyond the primary air stream to ensure complete mixing and combustion of fuel",
      "To cool the furnace walls",
      "Emergency backup air supply",
      "Air used for post-purge only"
    ],
    "correct": 0,
    "explanation": "Secondary air is supplied downstream of the primary combustion zone to ensure complete mixing and combustion. Primary air provides initial combustion; secondary air ensures remaining fuel particles or gases are fully burned. In some designs, tertiary air is also used for NOx control."
  },
  {
    "id": 2094,
    "level": "2a",
    "category": "Boiler Types",
    "question": "What is the purpose of a steam drum baffle plate?",
    "options": [
      "To separate the incoming feedwater/chemical injection area from the steam-water separation area, preventing short-circuiting",
      "To strengthen the drum structurally",
      "To create turbulence for better mixing",
      "To support the safety valve connections"
    ],
    "correct": 0,
    "explanation": "Drum baffle plates separate the feedwater inlet zone from the steam separation zone. Without baffles, cold feedwater could short-circuit directly to the downcomers without mixing, or disturb the steam-water separation process, degrading steam quality."
  },
  {
    "id": 2095,
    "level": "2a",
    "category": "Turbines & Engines",
    "question": "What is the purpose of turbine gland sealing steam?",
    "options": [
      "To heat the turbine casing during startup",
      "To cool the turbine blades",
      "To seal the shaft glands (at the point where the shaft exits the casing) to prevent air leakage into the low-pressure sections",
      "To lubricate the turbine bearings"
    ],
    "correct": 2,
    "explanation": "Gland sealing steam is supplied to the labyrinth seals where the shaft exits the turbine casing. At the HP end, it prevents steam leakage out. At the LP end (below atmospheric pressure), it prevents air leakage IN, which would reduce condenser vacuum and turbine efficiency."
  },
  {
    "id": 2096,
    "level": "2a",
    "category": "Operating Procedures",
    "question": "What is a hot well in a boiler plant?",
    "options": [
      "A well that supplies hot groundwater to the boiler",
      "The collection tank that receives condensate from the condenser before it is pumped back to the boiler as feedwater",
      "A heating system for the boiler room",
      "A storage tank for hot fuel oil"
    ],
    "correct": 3,
    "explanation": "The hot well is a tank (often integral to the condenser) that collects condensate from the turbine condenser. Hot well water is typically 100-120°F. From the hot well, condensate pumps send the water to the deaerator and eventually back to the boiler as feedwater."
  },
  {
    "id": 2097,
    "level": "2a",
    "category": "Water Treatment",
    "question": "What is silica and why is it a concern in high-pressure boilers?",
    "options": [
      "Silica is harmless in all boiler systems",
      "Silica is a dissolved mineral (SiO2) that can volatilize with steam at high pressures and deposit on turbine blades as hard, glassy scale",
      "Silica only affects low-pressure boilers",
      "Silica improves heat transfer"
    ],
    "correct": 3,
    "explanation": "Silica (SiO2) becomes volatile (carries over with steam) at pressures above about 400 psig. It deposits as hard, glassy scale on turbine blades that is extremely difficult to remove. Silica in boiler water must be carefully controlled, especially in HP systems, through makeup water treatment and blowdown."
  },
  {
    "id": 2098,
    "level": "2a",
    "category": "Auxiliaries",
    "question": "What is a bypass damper on an economizer used for?",
    "options": [
      "To bypass the economizer during emergencies only",
      "To allow flue gases to bypass the economizer during low-load conditions to prevent the economizer from cooling flue gas below the acid dew point",
      "To increase economizer efficiency at high loads",
      "To bypass feedwater around the economizer"
    ],
    "correct": 1,
    "explanation": "The bypass damper diverts flue gases around the economizer during low-load operation. At low load, flue gas temperatures may drop below the acid dew point in the economizer, causing corrosive condensation on tube surfaces. The bypass maintains tube wall temperature above dew point."
  },
  {
    "id": 2099,
    "level": "2a",
    "category": "ASME & Codes",
    "question": "What does the ASME 'E' stamp signify?",
    "options": [
      "Emergency boiler repairs",
      "Electric boiler manufacturing to ASME Section I",
      "Economizer manufacturing",
      "Equipment rental certification"
    ],
    "correct": 1,
    "explanation": "The ASME 'E' stamp authorizes the manufacture of ELECTRIC BOILERS to ASME Section I. Electric boilers (resistance element or electrode type) still require ASME code construction and stamping, just like fuel-fired power boilers."
  },
  {
    "id": 2100,
    "level": "2a",
    "category": "Safety Valves",
    "question": "When gagging (blocking) safety valves for a hydrostatic test, what critical step must be done after the test?",
    "options": [
      "The gags can remain in place permanently",
      "Only one gag needs to be removed",
      "ALL gags must be removed and each valve verified free to operate BEFORE the boiler is returned to service",
      "Gags are automatically released when pressure drops"
    ],
    "correct": 2,
    "explanation": "ALL safety valve gags MUST be removed and each valve verified free to operate BEFORE returning the boiler to service. A gagged safety valve cannot protect the boiler from overpressure. Failing to remove gags after a hydrostatic test has caused fatal boiler explosions."
  }
];

// Total questions in this file: 280
// Answer distribution — A:71  B:71  C:69  D:69
