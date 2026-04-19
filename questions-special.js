/*
 =============================================================
 MN BOILER OPERATOR LICENSE — PRACTICE EXAM QUESTIONS
 License Tier: Special Engineer
 =============================================================

 HOW TO ADD A NEW QUESTION
 -------------------------
 1. Find the last question in the array below (before the closing ]);)
 2. Add a comma after its closing brace }  then paste your new question
 3. Use the next sequential ID number
 4. Set "level" to "special"
 5. Set "correct" to: 0=A, 1=B, 2=C, 3=D  — VARY this! Do not always pick B or C
 6. Write a clear explanation of WHY the answer is correct

 QUESTION TEMPLATE:
 {
   "id": 9999,
   "level": "special",
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

const QUESTIONS_SPECIAL = [
  {
    "id": 1,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Which Minnesota statute requires all boiler operators to hold a valid license?",
    "options": [
      "MN Statute 326B.958",
      "MN Statute 326B.988",
      "MN Statute 326B.972",
      "MN Statute 326B.978"
    ],
    "correct": 2,
    "explanation": "MN Statute 326B.972 establishes that no person may operate a boiler, steam engine, or steam turbine without a proper grade license. It is the core licensing requirement statute."
  },
  {
    "id": 2,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Which agency is responsible for issuing boiler operator licenses in Minnesota?",
    "options": [
      "Minnesota Pollution Control Agency",
      "Minnesota Department of Health",
      "Minnesota Fire Marshal's Office",
      "Minnesota Department of Labor and Industry (DLI)"
    ],
    "correct": 3,
    "explanation": "The Minnesota Department of Labor and Industry (DLI), Construction Codes and Licensing Division (CCLD), is responsible for issuing boiler operator licenses and enforcing MN Statutes Chapter 326B."
  },
  {
    "id": 3,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A Special Engineer license allows the engineer to be in charge of a boiler plant up to what horsepower?",
    "options": [
      "25 BHP",
      "50 BHP",
      "100 BHP",
      "500 BHP"
    ],
    "correct": 1,
    "explanation": "A Special Engineer may be in charge of a low-pressure boiler plant not exceeding 50 BHP. As a shift engineer, a Special Engineer may work in low-pressure plants up to 100 BHP under a higher-class engineer. Special Engineers are limited to low-pressure (LP) plants only."
  },
  {
    "id": 4,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "How many exam questions are on the Special Engineer license examination?",
    "options": [
      "40",
      "80",
      "60",
      "50"
    ],
    "correct": 3,
    "explanation": "The Special Engineer license examination consists of 50 questions. A passing score of 70% (35 correct) is required. The time limit is 2.5 hours (150 minutes)."
  },
  {
    "id": 5,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the minimum passing score required on all Minnesota boiler operator license examinations?",
    "options": [
      "60%",
      "65%",
      "70%",
      "75%"
    ],
    "correct": 2,
    "explanation": "All Minnesota boiler operator license examinations require a minimum passing score of 70% correct answers, regardless of license class or grade."
  },
  {
    "id": 6,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the exam fee for all Minnesota boiler operator license examinations?",
    "options": [
      "$50",
      "$25",
      "$75",
      "$100"
    ],
    "correct": 0,
    "explanation": "The examination fee is $50 for all license levels in Minnesota. This fee is paid at the time of application."
  },
  {
    "id": 7,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "How long must an applicant wait before retaking a failed Minnesota boiler operator license examination?",
    "options": [
      "7 days",
      "15 days",
      "30 days",
      "60 days"
    ],
    "correct": 2,
    "explanation": "Per MN licensing rules, an applicant must wait a minimum of 30 days before retaking a failed examination."
  },
  {
    "id": 8,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "How long are Minnesota boiler operator licenses valid?",
    "options": [
      "1 year",
      "2 years",
      "3 years",
      "5 years"
    ],
    "correct": 1,
    "explanation": "All Minnesota boiler operator licenses are valid for two-year terms and must be renewed every two years."
  },
  {
    "id": 9,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the minimum age to apply for a Special Engineer license in Minnesota?",
    "options": [
      "21 years old",
      "18 years old",
      "16 with approved course",
      "No age requirement"
    ],
    "correct": 2,
    "explanation": "Applicants must generally be at least 18 years old, but a Special Engineer license may be obtained at age 16 with an approved course completion. This is the only exception to the 18-year-old rule."
  },
  {
    "id": 10,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "How far in advance must a boiler license application be received before the requested exam date?",
    "options": [
      "5 days",
      "10 days",
      "15 days",
      "30 days"
    ],
    "correct": 2,
    "explanation": "Per MN licensing rules, applications must be received at least 15 days before the requested exam date to allow for processing and scheduling."
  },
  {
    "id": 11,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Which grade of engineer license authorizes the holder to operate steam engines and turbines?",
    "options": [
      "Grade A only",
      "Grade B only",
      "Grade C only",
      "Grades A and B"
    ],
    "correct": 0,
    "explanation": "Only Grade A licenses authorize the operation of steam engines and turbines, in addition to high- and low-pressure boilers. Grade B covers boilers only; Grade C covers low-pressure boilers only."
  },
  {
    "id": 12,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What experience is required to obtain a Special Engineer license in Minnesota?",
    "options": [
      "6 months of boiler operation",
      "1 year of boiler operation",
      "Must hold a 2nd Class license first",
      "No experience required — entry level"
    ],
    "correct": 3,
    "explanation": "The Special Engineer license is an entry-level license requiring no prior operating experience. It is the only Minnesota boiler license with no experience prerequisite."
  },
  {
    "id": 13,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Statute 326B.972, which condition prohibits a person from operating a boiler?",
    "options": [
      "Operating a boiler over 100 HP",
      "Operating a fire-tube boiler",
      "Not having a logbook in the boiler room",
      "Being under the influence of illegal drugs or alcohol"
    ],
    "correct": 3,
    "explanation": "MN Statute 326B.972 explicitly states that no individual under the influence of illegal drugs or alcohol may operate a boiler, steam engine, or steam turbine, or monitor an automatic boiler."
  },
  {
    "id": 14,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "How often must boilers be inspected in Minnesota per MN Statute 326B.958?",
    "options": [
      "Every 6 months",
      "Every 3 years",
      "Every 2 years",
      "Annually"
    ],
    "correct": 3,
    "explanation": "Per MN Statute 326B.958, all boilers must be inspected at least annually. Pressure vessels (unfired) must be inspected at least every two years."
  },
  {
    "id": 15,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Which of the following is EXEMPT from Minnesota boiler laws?",
    "options": [
      "A 200-HP steam boiler in a manufacturing plant",
      "A boiler in a building with 3 residential families",
      "A high-pressure boiler in a hospital",
      "A cast iron boiler in a school"
    ],
    "correct": 1,
    "explanation": "Per MN Statute 326B.988, residential buildings with five or fewer families are exempt from Minnesota boiler statutes. The boiler in a 3-family building is therefore exempt."
  },
  {
    "id": 16,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Statute 326B.988, what is the maximum BTU/hr input for a hot water heating boiler to be exempt from Minnesota boiler law?",
    "options": [
      "750,000 BTU/hr",
      "500,000 BTU/hr",
      "200,000 BTU/hr",
      "1,000,000 BTU/hr"
    ],
    "correct": 0,
    "explanation": "Hot water heating boilers with an input of 750,000 BTU/hr or less are exempt from Minnesota boiler statutes per MN Statute 326B.988."
  },
  {
    "id": 17,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the definition of a HIGH-PRESSURE boiler under Minnesota Statute 326B.978?",
    "options": [
      "Steam pressure exceeds 25 psig",
      "Steam pressure exceeds 10 psig",
      "Steam pressure exceeds 15 psig, OR water pressure exceeds 160 psig or temperature exceeds 250°F",
      "Any boiler with over 100 BHP"
    ],
    "correct": 2,
    "explanation": "Per MN Statute 326B.978, a high-pressure boiler is defined as one where steam/vapor pressure EXCEEDS 15 psig, OR a water/liquid boiler where pressure EXCEEDS 160 psig or temperature EXCEEDS 250°F."
  },
  {
    "id": 18,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the definition of a LOW-PRESSURE boiler under Minnesota Statute 326B.978?",
    "options": [
      "Steam pressure of 10 psig or less",
      "Any boiler under 50 BHP",
      "Steam pressure of 20 psig or less",
      "Steam pressure of 15 psig or less AND water pressure of 160 psig or less and temperature of 250°F or less"
    ],
    "correct": 3,
    "explanation": "Per MN Statute 326B.978, a low-pressure boiler operates at steam/vapor pressure of 15 psig or less, AND for water/liquid boilers at 160 psig or less and 250°F or less."
  },
  {
    "id": 19,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Rule 5225.1180, how often must a high-pressure boiler plant of 0–50 HP be visually observed?",
    "options": [
      "At least once every 24 hours",
      "Every 2 hours",
      "Every 8 hours",
      "Every 1 hour"
    ],
    "correct": 0,
    "explanation": "Per MN Rule 5225.1180, a high-pressure boiler plant of 0–50 HP (with appropriate automatic controls) must be visually observed at least once every 24 hours."
  },
  {
    "id": 20,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Rule 5225.1180, a high-pressure boiler plant of 51–500 HP cannot be left unattended for more than how long?",
    "options": [
      "30 minutes",
      "1 hour",
      "4 hours",
      "2 consecutive hours"
    ],
    "correct": 3,
    "explanation": "Per MN Rule 5225.1180, a high-pressure boiler plant of 51–500 HP cannot be left unattended for more than 2 consecutive hours. The operating engineer must make visual observations every 2 hours."
  },
  {
    "id": 21,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Rule 5225.1180, the shift engineer at a plant over 200 HP must remain within what distance of the boiler room at all times?",
    "options": [
      "100 feet",
      "250 feet",
      "500 feet",
      "1,000 feet"
    ],
    "correct": 2,
    "explanation": "Per MN Rule 5225.1180, for plants over 200 HP, the shift engineer must stay within 500 feet of the boiler room at all times."
  },
  {
    "id": 22,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What must a boiler room logbook document per MN Rule 5225.1110?",
    "options": [
      "Only safety valve test results",
      "When checks were made, who made them, and what was checked",
      "Only water treatment chemical additions",
      "Monthly inspection reports only"
    ],
    "correct": 1,
    "explanation": "Per MN Rule 5225.1110, the logbook must document: when boiler checks were made, who made the checks, and what specific equipment was checked. The log must be available to the boiler inspector."
  },
  {
    "id": 23,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "For conventional boilers, how many square feet of heating surface equals 1 Boiler Horsepower (BHP)?",
    "options": [
      "5 sq ft",
      "7.5 sq ft",
      "15 sq ft",
      "10 sq ft"
    ],
    "correct": 3,
    "explanation": "Per MN Rule 5225.1000, for conventional boilers, 10 square feet of heating surface equals 1 Boiler Horsepower. For steam coil type generators, 5 sq ft = 1 BHP."
  },
  {
    "id": 24,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "For electric boilers, how many kilowatts equals 1 Boiler Horsepower?",
    "options": [
      "10 kW",
      "7.5 kW",
      "5 kW",
      "15 kW"
    ],
    "correct": 0,
    "explanation": "Per MN Rule 5225.1000, for electric boilers, 10 kilowatts equals 1 Boiler Horsepower (BHP)."
  },
  {
    "id": 25,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "One Boiler Horsepower is equivalent to evaporating how many pounds of water per hour from and at 212°F?",
    "options": [
      "10 lbs/hr",
      "20 lbs/hr",
      "50 lbs/hr",
      "34.5 lbs/hr"
    ],
    "correct": 3,
    "explanation": "1 Boiler Horsepower equals the evaporation of 34.5 pounds of water per hour from and at 212°F, which is equivalent to 33,479 BTU/hr."
  },
  {
    "id": 26,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "When calculating plant horsepower for licensing purposes, which boilers are included?",
    "options": [
      "Only boilers currently operating",
      "Only the largest boiler in the plant",
      "ALL boilers connected to the common header, whether in use or not",
      "Only boilers with valid inspection certificates"
    ],
    "correct": 2,
    "explanation": "Plant HP is calculated by summing the horsepower of ALL boilers connected to the common header, whether currently in use or not. This determines the license level required."
  },
  {
    "id": 27,
    "level": "special",
    "category": "Boiler Types",
    "question": "In a fire-tube boiler, where do the hot combustion gases flow?",
    "options": [
      "Through a firebox surrounded by steam",
      "Over the outside of tubes filled with water",
      "Through tubes surrounded by water on the outside",
      "Around the outside of the boiler shell"
    ],
    "correct": 2,
    "explanation": "In a fire-tube boiler, hot combustion gases pass THROUGH tubes that are surrounded by water on the outside. The fire/hot gases are inside the tubes; water is on the outside."
  },
  {
    "id": 28,
    "level": "special",
    "category": "Boiler Types",
    "question": "In a water-tube boiler, where does water flow?",
    "options": [
      "In the shell surrounding the tubes",
      "Inside the tubes, with hot gases on the outside",
      "Through tubes in the firebox only",
      "In the steam drum only"
    ],
    "correct": 1,
    "explanation": "In a water-tube boiler, water flows INSIDE the tubes, and hot combustion gases pass over the OUTSIDE of the tubes. This is the opposite arrangement from a fire-tube boiler."
  },
  {
    "id": 29,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the maximum steam pressure rating for a cast iron sectional boiler?",
    "options": [
      "5 psig",
      "15 psig",
      "10 psig",
      "25 psig"
    ],
    "correct": 1,
    "explanation": "Cast iron sectional boilers have a maximum steam pressure of 15 psig (low pressure only). For hot water service, they are rated at a maximum of 160 psig and 250°F."
  },
  {
    "id": 30,
    "level": "special",
    "category": "Boiler Types",
    "question": "Why is a fire-tube boiler considered more dangerous in an explosion than a water-tube boiler?",
    "options": [
      "Higher operating pressures",
      "Larger water volume that instantly flashes to steam upon failure",
      "More complex construction",
      "Less reliable safety valves"
    ],
    "correct": 1,
    "explanation": "Fire-tube boilers have a large water volume relative to steam output. In a catastrophic failure, this large volume of hot water instantly flashes to steam, causing a massive explosion. Water-tube boilers have less water volume, reducing this risk."
  },
  {
    "id": 31,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the most common industrial fire-tube boiler design?",
    "options": [
      "Horizontal Return Tubular (HRT)",
      "Locomotive type",
      "Vertical Tubular",
      "Scotch Marine"
    ],
    "correct": 3,
    "explanation": "The Scotch Marine boiler is the most common industrial fire-tube boiler design. It is compact with an integral internal furnace (firebox) and is widely used in commercial and industrial heating applications."
  },
  {
    "id": 32,
    "level": "special",
    "category": "Boiler Types",
    "question": "Can a cast iron sectional boiler be repaired by welding?",
    "options": [
      "No, damaged sections must be replaced",
      "Yes, if the pressure is below 5 psig",
      "Yes, with an R-stamp welder",
      "Yes, but only with stainless steel rod"
    ],
    "correct": 0,
    "explanation": "Cast iron cannot be welded due to its brittle nature and susceptibility to thermal shock. If a cast iron section is cracked or damaged, it must be replaced entirely. This is a critical characteristic of cast iron sectional boilers."
  },
  {
    "id": 33,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the most critical safety device on any boiler?",
    "options": [
      "Low Water Cutoff (LWCO)",
      "Pressure gauge",
      "Gauge glass",
      "Safety valve"
    ],
    "correct": 3,
    "explanation": "The safety valve is the most critical safety device on any boiler. Its purpose is to prevent the boiler from exceeding its Maximum Allowable Working Pressure (MAWP). Without a functioning safety valve, the boiler could rupture explosively."
  },
  {
    "id": 34,
    "level": "special",
    "category": "Safety Devices",
    "question": "What type of safety valve is used on steam boilers?",
    "options": [
      "Safety valve (full pop-open action)",
      "Safety Relief Valve (opens proportionally)",
      "Relief valve (opens proportionally)",
      "Gate valve"
    ],
    "correct": 0,
    "explanation": "Steam boilers use a safety valve, which opens with a full pop-open action when the set pressure is reached. Hot water boilers use a Safety Relief Valve (SRV) that opens proportionally to overpressure."
  },
  {
    "id": 35,
    "level": "special",
    "category": "Safety Devices",
    "question": "May any valve be installed between the safety valve and the boiler?",
    "options": [
      "No, no shutoff valve is permitted between the safety valve and the boiler",
      "Yes, any stop valve",
      "Yes, an OS&Y gate valve",
      "Yes, a globe valve for testing purposes"
    ],
    "correct": 0,
    "explanation": "No shutoff valve is permitted between the safety valve and the boiler. This ensures the safety valve can always open to relieve dangerous pressure. The only exception is with a proper interlock system."
  },
  {
    "id": 36,
    "level": "special",
    "category": "Safety Devices",
    "question": "How often must low-pressure steam safety valves be tested per MN rules?",
    "options": [
      "Every 90 days (quarterly)",
      "Monthly",
      "Annually",
      "Every 6 months"
    ],
    "correct": 0,
    "explanation": "Low-pressure steam safety valves must be tested every 90 days (quarterly). High-pressure steam safety valves must be tested annually. The National Board recommends testing every 90 days for all valves."
  },
  {
    "id": 37,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the minimum size required for a safety valve on a low-pressure boiler?",
    "options": [
      "1 inch",
      "2 inches",
      "4.5 inches",
      "3 inches"
    ],
    "correct": 2,
    "explanation": "The minimum safety valve size for a low-pressure boiler is 4.5 inches per ASME requirements. For miniature boilers (less than 5 cubic feet), the minimum size is ½ inch."
  },
  {
    "id": 38,
    "level": "special",
    "category": "Safety Devices",
    "question": "When do boilers with over 500 square feet of heating surface require two or more safety valves?",
    "options": [
      "Always, regardless of heating surface",
      "Only if operating above 100 psig",
      "When heating surface exceeds 500 sq ft",
      "When BHP exceeds 100"
    ],
    "correct": 2,
    "explanation": "Boilers with more than 500 square feet of heating surface must have two or more safety valves. This provides redundant overpressure protection for larger boilers."
  },
  {
    "id": 39,
    "level": "special",
    "category": "Safety Devices",
    "question": "What does 'blowback' (or 'blowdown') mean when referring to a safety valve?",
    "options": [
      "The distance the valve disc travels when open",
      "The force applied to the valve spring",
      "Steam discharged during testing",
      "The pressure difference between when the valve opens and when it reseats"
    ],
    "correct": 3,
    "explanation": "Blowback (or blowdown) is the difference in pressure between when the safety valve opens (pops) and when it reseats (closes). Proper blowdown prevents chattering and ensures the valve closes cleanly after relieving pressure."
  },
  {
    "id": 40,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the most important electrical/mechanical safety device on a boiler?",
    "options": [
      "Flame scanner",
      "Pressuretrol",
      "Air proving switch",
      "Low Water Cutoff (LWCO)"
    ],
    "correct": 3,
    "explanation": "The Low Water Cutoff (LWCO) is the most important electrical/mechanical safety device on a boiler. It automatically shuts off fuel to the burner when the water level drops to an unsafe level, preventing catastrophic overheating."
  },
  {
    "id": 41,
    "level": "special",
    "category": "Safety Devices",
    "question": "How often must a Low Water Cutoff (LWCO) be tested?",
    "options": [
      "Weekly",
      "Monthly",
      "Annually",
      "At least once daily"
    ],
    "correct": 3,
    "explanation": "The LWCO must be tested at least once daily. The best testing method is to lower the water level to the point where the LWCO should cut off the burner and verify that the burner shuts off."
  },
  {
    "id": 42,
    "level": "special",
    "category": "Safety Devices",
    "question": "How often must fusible plugs be replaced?",
    "options": [
      "Every 6 months",
      "Annually",
      "Every 2 years",
      "Only when they melt"
    ],
    "correct": 1,
    "explanation": "Fusible plugs must be replaced annually regardless of whether they have melted. Old casings should never be refilled with new tin alloy — always use new plugs."
  },
  {
    "id": 43,
    "level": "special",
    "category": "Safety Devices",
    "question": "What type of mechanism is used in a Bourdon tube pressure gauge?",
    "options": [
      "A curved, flattened metal tube that straightens under pressure",
      "A mercury column that expands with pressure",
      "A diaphragm that deflects under pressure",
      "A spring-loaded piston"
    ],
    "correct": 0,
    "explanation": "A Bourdon tube pressure gauge uses a curved, flattened metal tube that straightens out (uncurls) under internal pressure, moving a needle to indicate the pressure reading."
  },
  {
    "id": 44,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the maximum temperature that a Bourdon tube in a pressure gauge can tolerate?",
    "options": [
      "100°F",
      "150°F",
      "212°F",
      "300°F"
    ],
    "correct": 1,
    "explanation": "The maximum allowable temperature for a Bourdon tube is 150°F. A pigtail (siphon) — a coiled tube that traps condensate — is required to protect the Bourdon tube from live steam heat."
  },
  {
    "id": 45,
    "level": "special",
    "category": "Safety Devices",
    "question": "What range must the pressure gauge dial be able to read relative to the boiler's MAWP?",
    "options": [
      "1.5 to 2 times MAWP",
      "At least 1 to 1.25 times MAWP",
      "Exactly at MAWP",
      "At least 3 times MAWP"
    ],
    "correct": 0,
    "explanation": "The pressure gauge dial must be able to read 1.5 to 2 times the MAWP (preferably 2 times). This ensures the gauge does not peg at operating pressures and allows for proper observation of pressure levels."
  },
  {
    "id": 46,
    "level": "special",
    "category": "Water Level Control",
    "question": "What is the first thing an operator should check when entering a boiler room?",
    "options": [
      "Stack temperature",
      "Water level in the gauge glass",
      "Fuel pressure",
      "Burner flame color"
    ],
    "correct": 1,
    "explanation": "Maintaining proper water level is the single most important operating concern for a steam boiler operator. The first thing to check when entering a boiler room is the water level in the gauge glass."
  },
  {
    "id": 47,
    "level": "special",
    "category": "Water Level Control",
    "question": "During the gauge glass blow-through test, what should happen when you open the water cock with the drain cock closed?",
    "options": [
      "Steam should blow out",
      "Water should rise to the top of the glass",
      "Nothing should happen",
      "Water should drain to the floor"
    ],
    "correct": 1,
    "explanation": "After closing the drain cock and opening the water cock (step 5 of the blow-through procedure), water should rise to the top of the glass. When the steam cock is then opened (step 6), water drops to the true boiler water level."
  },
  {
    "id": 48,
    "level": "special",
    "category": "Water Level Control",
    "question": "During a gauge glass blow-through test, you open the water cock and no water appears. What does this indicate?",
    "options": [
      "The gauge glass is clogged and needs cleaning",
      "The boiler has too much water",
      "The water level is BELOW the water connection — it is unsafe to add feedwater",
      "The steam cock is stuck closed"
    ],
    "correct": 2,
    "explanation": "If water does not appear when the water cock is opened during the blow-through test, the water level is BELOW the water connection to the gauge glass. This is a critical unsafe condition. Shut off fuel to the burner and secure the boiler immediately — do NOT add feedwater to an overheated boiler."
  },
  {
    "id": 49,
    "level": "special",
    "category": "Water Level Control",
    "question": "What does the bottom try cock (gauge cock) release when the water level is at normal operating level?",
    "options": [
      "Steam only",
      "A mixture of steam and water",
      "Water only",
      "Air only"
    ],
    "correct": 2,
    "explanation": "Try cocks (tri-cocks) are mounted at known elevations. The bottom cock is below the normal water line, so it should release WATER. The middle cock (at normal water line) releases a steam/water mixture. The top cock (above water line) releases steam."
  },
  {
    "id": 50,
    "level": "special",
    "category": "Water Level Control",
    "question": "What is the minimum pipe size connecting the water column to the boiler?",
    "options": [
      "½ inch",
      "¾ inch",
      "1 inch",
      "1.5 inches"
    ],
    "correct": 2,
    "explanation": "The minimum pipe size connecting the water column to the boiler is 1 inch. The minimum drain size on the water column is ¾ inch."
  },
  {
    "id": 51,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the most important rule for any boiler operator?",
    "options": [
      "Maintain proper water level at all times",
      "Keep the burner running at all times",
      "Keep the steam pressure as high as possible",
      "Log every 4 hours"
    ],
    "correct": 0,
    "explanation": "Maintaining proper water level at all times is the most important rule for any boiler operator. If water is not visible in the water glass, the boiler must be shut off immediately."
  },
  {
    "id": 52,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the CORRECT action if you discover a low water condition on a steam boiler?",
    "options": [
      "Add cold water immediately to cool the boiler",
      "Shut off the fuel/burner and do NOT add water to the overheated boiler",
      "Open the safety valve to release pressure",
      "Increase the firing rate to generate more steam"
    ],
    "correct": 1,
    "explanation": "In a low water emergency, shut off the fuel/burner IMMEDIATELY and do NOT add water to an overheated boiler. Adding cold water to overheated metal can cause catastrophic thermal shock and potential explosion due to flash steam generation."
  },
  {
    "id": 53,
    "level": "special",
    "category": "Operating Procedures",
    "question": "When is a boiler MOST likely to explode?",
    "options": [
      "During steady high-load operation",
      "At light-off (startup)",
      "When the safety valve is lifting",
      "During blowdown"
    ],
    "correct": 1,
    "explanation": "A boiler is most likely to explode during light-off (startup), because unburned fuel vapors may have accumulated in the combustion chamber. This is why proper pre-purge cycles are critical. The boiler is least likely to explode during heavy load operation when the system is stable."
  },
  {
    "id": 54,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Why must the combustion chamber be purged before lighting off a boiler?",
    "options": [
      "To warm up the boiler gradually",
      "To remove accumulated fuel vapors that could cause a furnace explosion",
      "To test the draft fan",
      "To clean soot from the tubes"
    ],
    "correct": 1,
    "explanation": "Pre-purging removes accumulated fuel vapors from the combustion chamber. If unburned fuel is present during ignition, it can ignite explosively (furnace explosion). ASME CSD-1 requires a minimum pre-purge of at least 4 air changes."
  },
  {
    "id": 55,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Per MN Rule 5225.1110, what must be done if an unsafe boiler condition is found?",
    "options": [
      "Notify the owner/employer AND the chief boiler inspector immediately",
      "Only notify the plant owner",
      "Only notify the boiler inspector",
      "Document it in the logbook and monitor carefully"
    ],
    "correct": 0,
    "explanation": "Per MN Rule 5225.1110, if an unsafe condition is found, the owner/employer AND the chief boiler inspector must be notified immediately. If the boiler is not taken out of service, it must be continuously monitored 24 hours/day by a licensed engineer."
  },
  {
    "id": 56,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Where must engineer's licenses be displayed?",
    "options": [
      "In the operator's wallet at all times",
      "Only in the main office",
      "In a conspicuous place in the engine or boiler room",
      "Submitted to the DLI online system"
    ],
    "correct": 2,
    "explanation": "Per MN licensing requirements, engineer's licenses must be displayed in a conspicuous place in the engine or boiler room. If operating multiple boiler rooms, a photocopy is acceptable and required."
  },
  {
    "id": 57,
    "level": "special",
    "category": "Combustion",
    "question": "What three things are required for combustion (the Fire Triangle)?",
    "options": [
      "Pressure, temperature, and flow",
      "Natural gas, air, and electricity",
      "Carbon, hydrogen, and oxygen",
      "Fuel, oxygen, and heat (ignition)"
    ],
    "correct": 3,
    "explanation": "The three elements required for combustion — the Fire Triangle — are: Fuel, Oxygen (from air), and Heat (an ignition source). Remove any one element and combustion stops. This principle underlies all fire suppression and boiler safety systems."
  },
  {
    "id": 58,
    "level": "special",
    "category": "Combustion",
    "question": "What are the Three T's of good combustion?",
    "options": [
      "Timing, Thrust, Torque",
      "Tanks, Tubes, Thermostat",
      "Temperature, Throttle, Testing",
      "Temperature, Turbulence, Time"
    ],
    "correct": 3,
    "explanation": "The Three T's of good combustion are: Time (sufficient residence time for complete combustion), Temperature (must reach and maintain ignition temperature), and Turbulence (proper mixing of fuel and air). All three are required for efficient, complete combustion."
  },
  {
    "id": 59,
    "level": "special",
    "category": "Combustion",
    "question": "What dangerous gas is produced by incomplete combustion?",
    "options": [
      "Carbon monoxide (CO)",
      "Carbon dioxide (CO2)",
      "Nitrogen oxide (NOx)",
      "Sulfur dioxide (SO2)"
    ],
    "correct": 0,
    "explanation": "Incomplete combustion produces carbon monoxide (CO), which is a colorless, odorless, and highly toxic gas. It also represents wasted fuel energy. Complete combustion produces CO2 and water (H2O)."
  },
  {
    "id": 60,
    "level": "special",
    "category": "Combustion",
    "question": "What is the approximate heating value of natural gas (methane)?",
    "options": [
      "500 BTU/cubic foot",
      "750 BTU/cubic foot",
      "1,500 BTU/cubic foot",
      "1,000 BTU/cubic foot"
    ],
    "correct": 3,
    "explanation": "Natural gas (methane) has an approximate heating value of 1,000 BTU per cubic foot. It is the cleanest burning of all common boiler fuels and is lighter than air."
  },
  {
    "id": 61,
    "level": "special",
    "category": "Combustion",
    "question": "What does 'excess air' mean in boiler combustion?",
    "options": [
      "Air used in the pre-purge cycle only",
      "Air inside the steam drum",
      "Air supplied beyond the theoretical amount needed for complete combustion",
      "The air pressure in the combustion chamber"
    ],
    "correct": 2,
    "explanation": "Excess air is the air supplied beyond the theoretical (stoichiometric) amount needed for complete combustion. Some excess air is necessary to ensure complete burning, but too much excess air reduces efficiency by carrying away heat up the stack."
  },
  {
    "id": 62,
    "level": "special",
    "category": "Combustion",
    "question": "What is the minimum number of air changes required during the pre-purge cycle per ASME CSD-1?",
    "options": [
      "2 air changes",
      "4 air changes",
      "3 air changes",
      "5 air changes"
    ],
    "correct": 1,
    "explanation": "ASME CSD-1 requires a minimum pre-purge of 4 air changes before ignition. This ensures accumulated fuel vapors are cleared from the combustion chamber to prevent a furnace explosion."
  },
  {
    "id": 63,
    "level": "special",
    "category": "Heat Transfer",
    "question": "What type of heat transfer occurs through direct contact between materials?",
    "options": [
      "Convection",
      "Radiation",
      "Conduction",
      "Absorption"
    ],
    "correct": 2,
    "explanation": "Conduction is heat transfer through direct contact between materials (e.g., heat conducted through boiler metal tubes). Convection involves fluid movement, and radiation involves electromagnetic waves."
  },
  {
    "id": 64,
    "level": "special",
    "category": "Heat Transfer",
    "question": "What is the difference between sensible heat and latent heat?",
    "options": [
      "Sensible heat causes state changes; latent heat causes temperature changes",
      "Sensible heat applies only to gases; latent heat only to liquids",
      "Both cause temperature changes but at different rates",
      "Sensible heat causes temperature changes; latent heat causes state changes at constant temperature"
    ],
    "correct": 3,
    "explanation": "Sensible heat causes a measurable temperature change (e.g., heating water from 60°F to 200°F). Latent heat causes a change of state (e.g., water to steam) at constant temperature — it cannot be measured by a thermometer."
  },
  {
    "id": 65,
    "level": "special",
    "category": "Heat Transfer",
    "question": "How much heat (in BTU) is required to raise 1 pound of water by 1 degree Fahrenheit?",
    "options": [
      "0.5 BTU",
      "10 BTU",
      "2 BTU",
      "1 BTU"
    ],
    "correct": 3,
    "explanation": "By definition, 1 BTU (British Thermal Unit) is the amount of heat required to raise 1 pound of water by 1 degree Fahrenheit. This is the fundamental definition of the BTU unit."
  },
  {
    "id": 66,
    "level": "special",
    "category": "Heat Transfer",
    "question": "What is the latent heat of vaporization at 212°F (the heat required to convert 1 lb of water to steam at atmospheric pressure)?",
    "options": [
      "540 BTU/lb",
      "750 BTU/lb",
      "1,150 BTU/lb",
      "970.3 BTU/lb"
    ],
    "correct": 3,
    "explanation": "The latent heat of vaporization at 212°F is approximately 970.3 BTU per pound. This is the heat required to convert 1 pound of water at 212°F entirely to steam at 212°F, with no temperature change."
  },
  {
    "id": 67,
    "level": "special",
    "category": "Safety Valves",
    "question": "For a safety valve set at 50 psig, what is the allowable tolerance per ASME code?",
    "options": [
      "±1%",
      "±3%",
      "±2 psi",
      "±10 psi"
    ],
    "correct": 2,
    "explanation": "Per ASME PG-72, for safety valves set at 70 psig or less, the allowable tolerance is ±2 psi. Since 50 psig falls within this range, the valve must pop within ±2 psi of its stamped set pressure."
  },
  {
    "id": 68,
    "level": "special",
    "category": "Safety Valves",
    "question": "What is the maximum pressure accumulation allowed above MAWP for a power boiler with a single safety valve?",
    "options": [
      "3%",
      "6%",
      "5%",
      "10%"
    ],
    "correct": 1,
    "explanation": "Per ASME Section I, the maximum pressure accumulation above MAWP for power boilers is 6%. For low-pressure steam boilers (Section IV), accumulation is limited to 5 psi above the 15 psig setting (max 20 psig)."
  },
  {
    "id": 69,
    "level": "special",
    "category": "Safety Valves",
    "question": "What is the maximum accumulation pressure allowed for low-pressure steam boilers during safety valve discharge?",
    "options": [
      "3 psi above MAWP (max 18 psig)",
      "10% above MAWP",
      "6% above MAWP",
      "5 psi above MAWP (max 20 psig)"
    ],
    "correct": 3,
    "explanation": "For low-pressure steam boilers (ASME Section IV), maximum accumulation is 5 psi above the 15 psig setting, which gives a maximum pressure of 20 psig during safety valve discharge."
  },
  {
    "id": 70,
    "level": "special",
    "category": "Safety Devices",
    "question": "What must be done to safety valves during a hydrostatic test of a boiler?",
    "options": [
      "Remove them from the boiler",
      "Set them 10% higher for the test",
      "Gag (clamp) them to prevent accidental opening",
      "Open them fully during the test"
    ],
    "correct": 2,
    "explanation": "During a hydrostatic test, safety valves must be gagged (clamped with a testing device) if they remain attached to the boiler. This prevents the valve disc from being damaged by the high test pressure, which would affect the valve's future performance."
  },
  {
    "id": 71,
    "level": "special",
    "category": "Piping & Valves",
    "question": "On a boiler feedwater line, which valve is located CLOSEST to the boiler?",
    "options": [
      "Check valve",
      "Stop valve (globe valve)",
      "Gate valve",
      "Ball valve"
    ],
    "correct": 1,
    "explanation": "The stop valve (typically a globe valve) is located CLOSEST to the boiler on the feedwater line and is used for isolation. The check valve is installed on the line to prevent backflow from the boiler into the feedwater supply."
  },
  {
    "id": 72,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What is the function of a check valve on the feedwater line?",
    "options": [
      "Controls the flow rate of feedwater",
      "Reduces the feedwater pressure to boiler pressure",
      "Prevents backflow from the boiler into the feedwater supply",
      "Provides emergency shutoff"
    ],
    "correct": 2,
    "explanation": "A check valve on the feedwater line is an automatic one-directional valve that allows feedwater to flow into the boiler but prevents hot boiler water from flowing backward (backflow) into the feedwater supply when the pump is off."
  },
  {
    "id": 73,
    "level": "special",
    "category": "Piping & Valves",
    "question": "Boilers over what size (HP) must have two independent means of feeding water?",
    "options": [
      "25 HP",
      "50 HP",
      "100 HP",
      "200 HP"
    ],
    "correct": 1,
    "explanation": "Steam boilers with 50 HP or more (over 500 sq ft heating surface) must have at least two independent means of feeding water to the boiler. This provides redundancy in case one feed system fails."
  },
  {
    "id": 74,
    "level": "special",
    "category": "Water Treatment",
    "question": "Where is the bottom blowdown connection located on a boiler?",
    "options": [
      "At the lowest point of the waterside",
      "At the steam outlet",
      "At the highest point of the waterside",
      "On the steam drum only"
    ],
    "correct": 0,
    "explanation": "The bottom blowdown connection is located at the lowest point of the waterside. This allows sediment and sludge that collect at the bottom to be removed during blowdown."
  },
  {
    "id": 75,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the maximum temperature that blowdown water may have when discharged into a sanitary sewer?",
    "options": [
      "100°F",
      "120°F",
      "212°F",
      "150°F"
    ],
    "correct": 3,
    "explanation": "The maximum temperature of water that may be discharged into a sanitary sewer system is 150°F. Hot blowdown water above this temperature must be cooled in a blowdown tank before discharge to prevent damage to sewer pipes."
  },
  {
    "id": 76,
    "level": "special",
    "category": "Water Treatment",
    "question": "When two blowdown valves are installed on a boiler (required for boilers over 100 HP AND over 100 psig), which valve is located NEAREST to the boiler?",
    "options": [
      "The quick-opening valve",
      "The slow-opening valve",
      "Both are the same type",
      "An OS&Y gate valve"
    ],
    "correct": 0,
    "explanation": "When two blowdown valves are installed, the quick-opening valve is located NEAREST to the boiler. The slow-opening valve (requiring at least 5 complete turns to open) is located FARTHEST from the boiler and is used to control the blowdown rate."
  },
  {
    "id": 77,
    "level": "special",
    "category": "Piping & Valves",
    "question": "Which type of valve is BEST for throttling (flow control) on a boiler system?",
    "options": [
      "Gate valve (OS&Y)",
      "Globe valve",
      "Ball valve",
      "Butterfly valve"
    ],
    "correct": 1,
    "explanation": "The globe valve is the BEST valve for throttling (flow control) because its disc and seat design allows for graduated flow control. Gate valves should NOT be used for throttling — they are for full-open or full-closed isolation only."
  },
  {
    "id": 78,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What does 'OS&Y' stand for when referring to boiler valves?",
    "options": [
      "Open Stem and Yoke",
      "Open Seat and Yoke",
      "Outside Screw and Yoke",
      "Outboard Stem and Yield"
    ],
    "correct": 2,
    "explanation": "OS&Y stands for 'Outside Screw and Yoke.' An OS&Y gate valve has a rising stem, allowing visual confirmation of whether the valve is open (stem visible) or closed (stem not visible). Required for gate valves larger than 2 inches on boilers."
  },
  {
    "id": 79,
    "level": "special",
    "category": "Boiler Types",
    "question": "What does MAWP stand for?",
    "options": [
      "Maximum Allowable Working Pressure",
      "Minimum Allowable Water Pressure",
      "Maximum Available Water Pressure",
      "Minimum Automatic Working Pressure"
    ],
    "correct": 0,
    "explanation": "MAWP stands for Maximum Allowable Working Pressure. It is the maximum pressure at which a boiler is certified to operate, as determined by its design and construction. The safety valve must be set at or below the MAWP."
  },
  {
    "id": 80,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the relationship between absolute pressure and gauge pressure?",
    "options": [
      "Absolute pressure = Gauge pressure + 14.7 psi",
      "Absolute pressure = Gauge pressure - 14.7 psi",
      "Absolute pressure = Gauge pressure × 2",
      "They are the same"
    ],
    "correct": 0,
    "explanation": "Absolute pressure = Gauge pressure (psig) + 14.7 psi (atmospheric pressure). Gauge pressure measures pressure above atmospheric. Atmospheric pressure at sea level is approximately 14.7 psia (or 29.92 inches of mercury)."
  },
  {
    "id": 81,
    "level": "special",
    "category": "ASME & Codes",
    "question": "Every boiler for use in Minnesota must bear which stamps?",
    "options": [
      "ASME Code Symbol Stamp AND National Board registration number (or MINN. SPC.)",
      "Only a Minnesota state inspection stamp",
      "Only the manufacturer's stamp",
      "A UL listing mark and state certificate"
    ],
    "correct": 0,
    "explanation": "Per MN Rule 5225.2100, every boiler for use in Minnesota must bear the ASME Code Symbol Stamp AND the National Board registration number or Minnesota Special (MINN. SPC.) stamp. Stamping must be witnessed by an Authorized Inspector."
  },
  {
    "id": 82,
    "level": "special",
    "category": "ASME & Codes",
    "question": "Which ASME code section governs power boilers (high-pressure steam boilers)?",
    "options": [
      "ASME Section IV",
      "ASME Section I",
      "ASME Section VIII",
      "ASME Section VI"
    ],
    "correct": 1,
    "explanation": "ASME Section I covers the construction of power boilers — high-pressure steam boilers operating above 15 psig. ASME Section IV covers heating boilers (low-pressure steam ≤15 psig and hot water boilers)."
  },
  {
    "id": 83,
    "level": "special",
    "category": "ASME & Codes",
    "question": "What does the 'S' stamp on a boiler signify?",
    "options": [
      "Section VIII pressure vessel",
      "Special Minnesota boiler",
      "Section IV heating boiler",
      "Section I power boiler"
    ],
    "correct": 3,
    "explanation": "The 'S' stamp indicates a power boiler built to ASME Section I standards. 'H' is for heating boilers (Section IV), 'U' is for pressure vessels (Section VIII), and 'R' is for repairs (National Board)."
  },
  {
    "id": 84,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the primary cause of pitting corrosion in a boiler?",
    "options": [
      "High pH water",
      "Dissolved oxygen in the feedwater",
      "Excessive hardness (scale)",
      "High total dissolved solids"
    ],
    "correct": 1,
    "explanation": "Dissolved oxygen in feedwater is the primary cause of pitting corrosion in boilers. Oxygen attacks the metal surface, creating pits that can eventually penetrate through the metal. Pitting is considered the most dangerous form of boiler corrosion."
  },
  {
    "id": 85,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the target pH range for boiler water?",
    "options": [
      "10.5 to 11.5",
      "8.0 to 9.0",
      "6.5 to 7.5 (neutral)",
      "12.0 to 13.0"
    ],
    "correct": 0,
    "explanation": "The target pH range for boiler water is 10.5 to 11.5 (alkaline). This alkaline environment prevents corrosion of steel surfaces. At this pH level, a protective iron oxide layer forms on the boiler metal."
  },
  {
    "id": 86,
    "level": "special",
    "category": "Water Treatment",
    "question": "What problems does scale (calcium and magnesium deposits) cause in a boiler?",
    "options": [
      "Increases efficiency by insulating the metal",
      "Improves water chemistry by raising pH",
      "Acts as an insulator, reducing heat transfer and causing overheating of metal",
      "Has no significant effect on boiler operation"
    ],
    "correct": 2,
    "explanation": "Scale (calcium/magnesium deposits) acts as an insulator on boiler heating surfaces, severely reducing heat transfer. A scale deposit as thin as 1/16\" can increase fuel consumption by 10-15%. Scale can also cause overheating of boiler metal, leading to tube failures."
  },
  {
    "id": 87,
    "level": "special",
    "category": "Water Treatment",
    "question": "What does a deaerator do in a boiler feedwater system?",
    "options": [
      "Adds chemicals to the feedwater",
      "Removes dissolved oxygen and carbon dioxide from the feedwater",
      "Filters out suspended solids",
      "Softens the feedwater by removing hardness"
    ],
    "correct": 1,
    "explanation": "A deaerator removes dissolved oxygen (O2) and carbon dioxide (CO2) from the feedwater by heating it to near saturation temperature. This prevents the oxygen from causing pitting corrosion in the boiler and return lines."
  },
  {
    "id": 88,
    "level": "special",
    "category": "Boiler Types",
    "question": "On a hot water boiler, what device controls the starting and stopping of the burner based on water temperature?",
    "options": [
      "Aquastat",
      "Pressuretrol",
      "Safety relief valve",
      "Float switch"
    ],
    "correct": 0,
    "explanation": "An aquastat is a temperature-sensing device that controls the starting and stopping of the burner on a hot water boiler based on water temperature. A pressuretrol performs this function on steam boilers based on steam pressure."
  },
  {
    "id": 89,
    "level": "special",
    "category": "Boiler Types",
    "question": "On a steam boiler, what device controls the burner start/stop cycle based on pressure?",
    "options": [
      "Aquastat",
      "Safety valve",
      "Low Water Cutoff",
      "Pressuretrol"
    ],
    "correct": 3,
    "explanation": "A pressuretrol (pressure controller) controls the starting and stopping of the burner on a steam boiler based on steam pressure. It has a 'cut-in' setting (where the burner starts) and a 'differential' setting (the range between start and stop)."
  },
  {
    "id": 90,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the first thing to check on a hot water boiler when entering the boiler room?",
    "options": [
      "Water level in the gauge glass",
      "Stack temperature",
      "Burner flame color",
      "Temperature and pressure"
    ],
    "correct": 3,
    "explanation": "On a hot water boiler, the first things to check when entering the boiler room are temperature and pressure. (For a low-pressure steam boiler, the first check is water level.)"
  },
  {
    "id": 91,
    "level": "special",
    "category": "Draft Systems",
    "question": "Which type of draft system uses a fan to push combustion air INTO the furnace?",
    "options": [
      "Natural draft",
      "Balanced draft",
      "Induced draft",
      "Forced draft"
    ],
    "correct": 3,
    "explanation": "Forced draft uses a fan to push combustion air INTO the furnace, creating a positive pressure in the furnace. Induced draft uses a fan to pull gases OUT of the boiler, creating negative pressure."
  },
  {
    "id": 92,
    "level": "special",
    "category": "Draft Systems",
    "question": "What type of draft system creates a negative pressure (below atmospheric) in the furnace using only the chimney/stack?",
    "options": [
      "Forced draft",
      "Balanced draft",
      "Induced draft",
      "Natural draft"
    ],
    "correct": 3,
    "explanation": "Natural draft is created by the stack/chimney. Hot gases in the stack are less dense than outside air, causing them to rise and creating a negative pressure (below atmospheric) in the furnace that draws in combustion air."
  },
  {
    "id": 93,
    "level": "special",
    "category": "Controls & Instrumentation",
    "question": "What is the maximum Flame Failure Response Time (FFRT) allowed for oil burners per ASME CSD-1?",
    "options": [
      "2 seconds",
      "6 seconds",
      "4 seconds",
      "10 seconds"
    ],
    "correct": 2,
    "explanation": "ASME CSD-1 sets the maximum Flame Failure Response Time (FFRT) for oil burners at 4 seconds. If the flame scanner does not detect a flame within this time, the fuel valve must close to prevent unburned fuel buildup."
  },
  {
    "id": 94,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "If the heating surface of a boiler is unknown, how is BHP calculated?",
    "options": [
      "BTU input ÷ 33,479",
      "BTU input ÷ 67,000",
      "BTU input × 34.5",
      "BTU output ÷ 10,000"
    ],
    "correct": 1,
    "explanation": "When the heating surface is unknown, BHP = BTU rated input ÷ 67,000. This formula is used per MN Rule 5225.1000 for boilers where the heating surface cannot be easily measured."
  },
  {
    "id": 95,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Which of the following correctly describes the role of a Chief Engineer?",
    "options": [
      "The engineer responsible for only starting and stopping boilers",
      "The engineer who only inspects boilers annually",
      "The properly licensed engineer in charge of and responsible for the safe operation of a boiler plant",
      "Any engineer holding a 1st Class license"
    ],
    "correct": 2,
    "explanation": "The Chief Engineer is the properly licensed engineer in charge of and responsible for the safe operation of the entire boiler plant. The Shift Engineer is the operating engineer responsible to the Chief during a shift."
  },
  {
    "id": 96,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Who is the BEST answer for who should sign an experience affidavit for a license applicant?",
    "options": [
      "Any licensed engineer",
      "A notary public",
      "The Chief Engineer",
      "A DLI inspector"
    ],
    "correct": 2,
    "explanation": "While anyone holding a license above Special Engineer level can sign an experience affidavit, the Chief Engineer is the best exam answer for who should sign affidavits verifying operating experience for license applicants."
  },
  {
    "id": 97,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What does 'remote monitoring' mean in the context of boiler operation?",
    "options": [
      "Operating the boiler from a different room in the same building",
      "Using a computer to fully operate the boiler from any location",
      "Viewing boiler parameters from a remote location; only emergency shutdown is permitted remotely",
      "Monitoring via closed-circuit TV only"
    ],
    "correct": 2,
    "explanation": "Remote monitoring means viewing boiler parameters from a remote location. It does NOT constitute 'operation.' The only function that may be performed remotely on an automatic boiler is emergency shutdown."
  },
  {
    "id": 98,
    "level": "special",
    "category": "Boiler Types",
    "question": "Which component in a water-tube boiler collects sediment and provides a point for blowdown?",
    "options": [
      "Mud drum (lower drum)",
      "Economizer",
      "Steam drum",
      "Downcomer"
    ],
    "correct": 0,
    "explanation": "The mud drum (lower drum) in a water-tube boiler collects sediment and sludge that settles from the circulating water. It provides the connection point for the blowdown line to remove these deposits."
  },
  {
    "id": 99,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the function of the steam drum (upper drum) in a water-tube boiler?",
    "options": [
      "Separates steam from water; contains internal separators/cyclones",
      "Collects sediment and blowdown",
      "Stores fuel for combustion",
      "Pre-heats the combustion air"
    ],
    "correct": 0,
    "explanation": "The steam drum (upper drum) in a water-tube boiler is where steam separates from the steam/water mixture. It contains internal separators and cyclones to ensure dry, clean steam exits through the steam outlet."
  },
  {
    "id": 100,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the purpose of a fusible plug in a fire-tube boiler?",
    "options": [
      "To provide a last-resort warning when water level drops dangerously low",
      "To control fuel flow to the burner",
      "To prevent overpressure in the steam space",
      "To control water level automatically"
    ],
    "correct": 0,
    "explanation": "A fusible plug is a last-resort safety device. When the water level drops below the plug, the tin alloy fill melts from the heat of the fireside, allowing steam/water to escape with a whistling noise — warning the operator of a critically low water level."
  },
  {
    "id": 101,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "A boiler plant has two boilers connected to a common header: one 30 BHP and one 45 BHP. The 30 BHP boiler is shut down. What is the plant horsepower for licensing purposes?",
    "options": [
      "30 BHP (only the running boiler)",
      "75 BHP (all boilers on the header)",
      "45 BHP (only the larger boiler)",
      "15 BHP (average of both)"
    ],
    "correct": 1,
    "explanation": "Plant horsepower = sum of ALL boilers connected to the common header, whether in use or not. Therefore, 30 BHP + 45 BHP = 75 BHP total plant HP. This determines the license level required."
  },
  {
    "id": 102,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What minimum pipe size is required for a pressure gauge connection on a boiler?",
    "options": [
      "⅛ inch",
      "¼ inch",
      "½ inch",
      "¾ inch"
    ],
    "correct": 1,
    "explanation": "The minimum pipe size for a pressure gauge connection on a boiler is ¼ inch. This small line, protected by a pigtail (siphon) trap, is sufficient to sense steam pressure without allowing live steam to reach the gauge."
  },
  {
    "id": 103,
    "level": "special",
    "category": "Boiler Types",
    "question": "What are staybolts used for in a fire-tube boiler?",
    "options": [
      "To support the fire tubes in the shell",
      "To connect the steam drum to the mud drum",
      "To seal the boiler inspection openings",
      "To brace flat surfaces against implosion from external pressure"
    ],
    "correct": 3,
    "explanation": "Staybolts are braces that reinforce and support the flat surfaces of a fire-tube boiler (such as tube sheets and flat-sided areas) against the external water pressure trying to implode those surfaces. Without staybolts, flat areas would buckle inward."
  },
  {
    "id": 104,
    "level": "special",
    "category": "Safety Devices",
    "question": "The safety valve must be spring-loaded. What type of loading is NOT permitted on steam boilers?",
    "options": [
      "Coil spring loading",
      "Spring-compression loading",
      "Lever-type spring loading",
      "Dead-weight loading"
    ],
    "correct": 3,
    "explanation": "Dead-weight (gravity) loading of safety valves is NOT permitted on steam boilers. Spring-loaded safety valves are required because a spring maintains consistent set pressure regardless of valve position or steam action."
  },
  {
    "id": 105,
    "level": "special",
    "category": "Combustion",
    "question": "What three conditions are necessary for a furnace explosion?",
    "options": [
      "Accumulation of unburned fuel, oxygen (air), and an ignition source",
      "High pressure, high temperature, and low water level",
      "Flame failure, low air flow, and high pressure",
      "High fuel pressure, low draft, and heat"
    ],
    "correct": 0,
    "explanation": "Three conditions are necessary for a furnace explosion: (1) accumulation of unburned fuel (gas or oil vapor) in the combustion chamber, (2) sufficient oxygen mixed with the fuel, and (3) an ignition source. Proper purging before ignition prevents this."
  },
  {
    "id": 106,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Statute 326B.992, school districts must allow at least how many hours of annual boiler-related training for boiler licensees?",
    "options": [
      "4 hours",
      "8 hours",
      "6 hours",
      "16 hours"
    ],
    "correct": 1,
    "explanation": "Per MN Statute 326B.992, school districts must provide at least 8 hours of annual boiler-related training. Of those 8 hours, 2 hours must occur in the boiler room with demonstration of operating tasks. Training must be administered by a licensed 1st or Chief class engineer."
  },
  {
    "id": 107,
    "level": "special",
    "category": "Heat Transfer",
    "question": "Which type of heat transfer is represented by the sun warming the earth?",
    "options": [
      "Radiation",
      "Convection",
      "Conduction",
      "Absorption"
    ],
    "correct": 0,
    "explanation": "Radiation is heat transfer through electromagnetic waves that require no medium. The sun heats the earth through radiation. In a boiler furnace, radiation transfers heat from the flame directly to the furnace walls and waterwall tubes."
  },
  {
    "id": 108,
    "level": "special",
    "category": "Boiler Types",
    "question": "What type of boiler can achieve the highest operating pressures, including supercritical pressures above 3,200 psig?",
    "options": [
      "Fire-tube boiler",
      "Cast iron sectional boiler",
      "Water-tube boiler",
      "Electric resistance boiler"
    ],
    "correct": 2,
    "explanation": "Water-tube boilers can achieve much higher pressures than fire-tube boilers, including supercritical pressures above 3,200 psig. Their design — water inside small-diameter tubes — allows for much higher pressure ratings."
  },
  {
    "id": 109,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the maximum BTU/hr input for a hot water SUPPLY boiler (water heater) to be exempt from Minnesota boiler law?",
    "options": [
      "100,000 BTU/hr",
      "500,000 BTU/hr",
      "200,000 BTU/hr or ≤120 gallons",
      "750,000 BTU/hr"
    ],
    "correct": 2,
    "explanation": "Per MN Statute 326B.988, hot water supply boilers (water heaters) with an input of 200,000 BTU/hr or less, or with a capacity of 120 gallons or less, are exempt from Minnesota boiler law."
  },
  {
    "id": 110,
    "level": "special",
    "category": "Safety Devices",
    "question": "Where is the LWCO typically located relative to the Normal Operating Water Level (NOWL)?",
    "options": [
      "Above the NOWL",
      "2 to 6 inches below the NOWL",
      "At the same level as the NOWL",
      "At the very bottom of the boiler"
    ],
    "correct": 1,
    "explanation": "The LWCO is typically located 2 to 6 inches below the Normal Operating Water Level (NOWL). This positioning allows the water level to drop slightly from normal before the LWCO cuts off the burner, while still maintaining a safe margin above dangerous low water levels."
  },
  {
    "id": 111,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Rule 5225.1180, for plants over 500 HP, how often must the Chief Engineer be on premises?",
    "options": [
      "1 hour per day, 7 days per week",
      "2 hours per day, 5 days per week",
      "4 hours per day, 5 days per week",
      "8 hours per day every day"
    ],
    "correct": 2,
    "explanation": "Per MN Rule 5225.1180, plants over 500 HP must have a designated Chief Engineer on premises at least 4 hours per day, 5 days per week, with continuous licensed attendance otherwise maintained."
  },
  {
    "id": 112,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the definition of 'operation' of a boiler under MN Rules?",
    "options": [
      "The on-site act of manipulating, monitoring, and testing boilers and their appurtenances by a licensed engineer",
      "Viewing boiler parameters from any location",
      "Performing annual inspections of the boiler",
      "Repairing or altering boiler components"
    ],
    "correct": 0,
    "explanation": "Per MN Rules, 'operation' is defined as the on-site act of manipulating, monitoring, and testing of boilers and their appurtenances by a properly licensed engineer. Remote monitoring alone does NOT constitute operation."
  },
  {
    "id": 113,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the NBIC?",
    "options": [
      "National Bureau of Industrial Combustion",
      "National Board Inspection Code — standards for in-service inspection, repair, and installation of boilers",
      "North American Boiler Industry Council",
      "National Boiler Insurance Commission"
    ],
    "correct": 1,
    "explanation": "NBIC stands for National Board Inspection Code. It is a three-part technical document (Installation, Inspection, and Repairs) published by the National Board of Boiler and Pressure Vessel Inspectors. All repairs to boilers in Minnesota must follow the NBIC and be performed by an organization holding an 'R' certificate."
  },
  {
    "id": 114,
    "level": "special",
    "category": "Water Treatment",
    "question": "What chemical is commonly added to boiler water as an oxygen scavenger?",
    "options": [
      "Sodium sulfite (Na2SO3)",
      "Sodium chloride (table salt)",
      "Sodium phosphate",
      "Calcium carbonate"
    ],
    "correct": 0,
    "explanation": "Sodium sulfite (Na2SO3) is the most common oxygen scavenger added to boiler water for boilers operating below 600 psig. It reacts with dissolved oxygen to prevent pitting corrosion. A residual of 20–30 ppm should be maintained in the boiler water."
  },
  {
    "id": 115,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the purpose of a pigtail (siphon) on a pressure gauge connection?",
    "options": [
      "To reduce the pressure before it reaches the gauge",
      "To provide a quick-disconnect fitting for the gauge",
      "To increase the accuracy of the gauge reading",
      "To collect condensate that protects the Bourdon tube from live steam heat"
    ],
    "correct": 3,
    "explanation": "A pigtail (siphon) is a coiled tube that fills with condensate, forming a water seal that protects the Bourdon tube from the direct heat of live steam. The maximum temperature the Bourdon tube can tolerate is 150°F."
  },
  {
    "id": 116,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the purpose of an economizer in a boiler system?",
    "options": [
      "To pre-heat feedwater using waste flue gas heat",
      "To pre-heat combustion air using waste flue gases",
      "To recirculate steam back to the boiler",
      "To reduce the steam pressure before it enters the turbine"
    ],
    "correct": 0,
    "explanation": "An economizer pre-heats feedwater using heat recovered from waste flue gases leaving the boiler. This recovers otherwise wasted heat, increasing boiler efficiency by approximately 3–5%."
  },
  {
    "id": 117,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the definition of 'heating surface' on a boiler?",
    "options": [
      "The total exterior surface area of the boiler shell",
      "Any area that has heat on one side and water (or steam) on the other",
      "Only the fireside surfaces of the fire tubes",
      "The floor space the boiler occupies"
    ],
    "correct": 1,
    "explanation": "Heating surface is defined as any area that has heat on one side and water on the other. This includes tube surfaces, waterwall surfaces, and any other area where heat transfer to water occurs."
  },
  {
    "id": 118,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "When a boiler inspector finds an unlicensed person operating a boiler, what may the inspector allow?",
    "options": [
      "Immediate shutdown, no grace period",
      "No action — licensure is the employer's responsibility only",
      "Up to 60 days to hire a licensed engineer",
      "Up to 30 days of continued operation to find a licensed operator"
    ],
    "correct": 3,
    "explanation": "Per MN Statute 326B.958, if an inspector finds an unlicensed person operating a boiler, the operation must cease; however, the inspector may grant up to 30 days of continued operation to allow the owner time to find a licensed operator."
  },
  {
    "id": 119,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is a 'miniature boiler' under ASME code?",
    "options": [
      "Any boiler under 50 BHP",
      "Any portable boiler used for hobby purposes",
      "A boiler less than 5 cubic feet, rated ≤100 psig, with inside diameter ≤12 inches",
      "A boiler in a building with fewer than 5 families"
    ],
    "correct": 2,
    "explanation": "A miniature boiler is defined by ASME as having less than 5 cubic feet gross volume, rated at 100 psig or less, with an inside diameter of 12 inches or less. The minimum safety valve size for a miniature boiler is ½ inch."
  },
  {
    "id": 120,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A provisional license allows a 2nd Class A/B engineer to operate boilers over 500 HP. For how long is a provisional license valid?",
    "options": [
      "36 months, non-renewable",
      "24 months, renewable once",
      "12 months, non-renewable",
      "48 months, non-renewable"
    ],
    "correct": 0,
    "explanation": "A provisional license is valid for 36 months and is non-renewable. An individual may have a maximum of two provisional licenses in any four-year period. The plant must have a designated chief engineer."
  },
  {
    "id": 121,
    "level": "special",
    "category": "Combustion",
    "question": "Which fuel is LIGHTER than air and therefore less dangerous in case of leaks in enclosed spaces?",
    "options": [
      "Natural gas (methane)",
      "#6 fuel oil vapor",
      "Propane (LP gas)",
      "Diesel fuel vapor"
    ],
    "correct": 0,
    "explanation": "Natural gas (methane) is LIGHTER than air and rises and disperses in case of leaks, reducing the risk of explosive accumulation at floor level. Propane (LP gas) is HEAVIER than air and can accumulate dangerously in low areas and pits."
  },
  {
    "id": 122,
    "level": "special",
    "category": "Safety Devices",
    "question": "What does 'chattering' of a safety valve indicate?",
    "options": [
      "The valve is operating correctly under high load",
      "Improper setting or installation — the valve is opening and closing rapidly",
      "The valve needs lubrication",
      "Normal operation at near-setpoint pressure"
    ],
    "correct": 1,
    "explanation": "Chattering occurs when a safety valve rapidly opens and closes repeatedly without fully opening. This indicates an improper installation, sizing, or set pressure problem. Chattering causes rapid wear on the valve disc and seat."
  },
  {
    "id": 123,
    "level": "special",
    "category": "Boiler Types",
    "question": "What type of boiler is assembled from individual sections joined by push nipples and tie rods?",
    "options": [
      "Fire-tube (Scotch Marine)",
      "Cast iron sectional boiler",
      "Water-tube (bent tube)",
      "Electric resistance boiler"
    ],
    "correct": 1,
    "explanation": "Cast iron sectional boilers are assembled from individual cast iron sections joined together with push nipples (short tapered pipe pieces) and tie rods. Their modular nature allows capacity to be adjusted by adding or removing sections."
  },
  {
    "id": 124,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the exam time limit for all Minnesota boiler operator license examinations?",
    "options": [
      "1 hour",
      "1.5 hours",
      "2 hours",
      "2.5 hours (150 minutes)"
    ],
    "correct": 3,
    "explanation": "All Minnesota boiler operator license examinations have a time limit of 2.5 hours (150 minutes). The format is multiple-choice written examination with a 70% passing score required."
  },
  {
    "id": 125,
    "level": "special",
    "category": "Steam Generation",
    "question": "What is the destructive force in a boiler explosion?",
    "options": [
      "The instant release of energy stored in the water as heat",
      "High steam pressure alone",
      "Combustion gas pressure",
      "Electrical energy in the burner igniter"
    ],
    "correct": 0,
    "explanation": "The destructive force in a boiler explosion is the instant release of the enormous amount of thermal energy stored in the water as heat. When a boiler ruptures, the superheated water flashes explosively to steam, massively expanding in volume and causing extreme destruction."
  },
  {
    "id": 126,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the function of an ion exchange water softener in external boiler water treatment?",
    "options": [
      "Removes dissolved oxygen from the water",
      "Removes calcium and magnesium (hardness) from the water",
      "Raises the pH of the water",
      "Filters out suspended particles"
    ],
    "correct": 1,
    "explanation": "An ion exchange water softener removes calcium and magnesium ions (hardness minerals) from the water by exchanging them for sodium ions. The target is less than 1 ppm hardness in the feedwater to prevent scale formation in the boiler."
  },
  {
    "id": 127,
    "level": "special",
    "category": "Boiler Types",
    "question": "What type of boiler uses electric heating elements to heat water?",
    "options": [
      "Fire-tube boiler with electric ignition",
      "Resistance-type electric boiler",
      "Water-tube with electric supplementation",
      "Induction-heated boiler"
    ],
    "correct": 1,
    "explanation": "A resistance-type electric boiler uses electric heating elements (similar to those in an electric water heater) submerged in water. The electrode type passes electrical current directly through the water between electrodes. Both require no combustion or flue systems."
  },
  {
    "id": 128,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the maximum size of the blowdown piping on a boiler?",
    "options": [
      "1 inch",
      "1.5 inches",
      "2 inches",
      "3 inches"
    ],
    "correct": 2,
    "explanation": "Per MN Rules, the maximum blowdown pipe size is 2 inches. Boilers over 100 HP AND over 100 psig must have two valves on the blowdown line."
  },
  {
    "id": 129,
    "level": "special",
    "category": "Safety Devices",
    "question": "For steam boilers over 500 HP, per MN Rule 5225.1180, what attendance requirement exists?",
    "options": [
      "Visual check every 24 hours",
      "No more than 2 hours unattended",
      "Chief engineer on premises at least 4 hours/day, 5 days/week",
      "Fully automated — no attendance needed"
    ],
    "correct": 2,
    "explanation": "For high-pressure boiler plants over 500 HP, a designated Chief Engineer must be on premises at least 4 hours per day, 5 days per week. Continuous licensed attendance is required at all other times."
  },
  {
    "id": 130,
    "level": "special",
    "category": "Combustion",
    "question": "What is the approximate heating value per gallon for #2 fuel oil?",
    "options": [
      "140,000 BTU/gallon",
      "115,000 BTU/gallon",
      "100,000 BTU/gallon",
      "180,000 BTU/gallon"
    ],
    "correct": 0,
    "explanation": "#2 fuel oil has an approximate heating value of 140,000 BTU per gallon. It is the most common heating fuel oil, does not require preheating before combustion, and requires atomization for proper burning."
  },
  {
    "id": 501,
    "level": "special",
    "category": "Water Level Control",
    "question": "During the gauge glass blow-through procedure, what is the FIRST step?",
    "options": [
      "Close both the steam cock and water cock, then open the drain cock",
      "Open the steam cock while the drain is closed",
      "Open the water cock while the steam cock is closed",
      "Open the drain cock only and observe what comes out"
    ],
    "correct": 0,
    "explanation": "The gauge glass blow-through begins by closing BOTH the steam cock and water cock, then opening the drain cock. With both cocks closed and drain open, nothing should blow out, verifying the drain is clear. This is Step 1 of the 6-step procedure per MN boiler operating standards."
  },
  {
    "id": 502,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Which MN Rule specifically governs the Low Water Fuel Cutoff (LWCO) requirements for automatically fired boilers?",
    "options": [
      "MN Rule 5225.2500",
      "MN Rule 5225.1110",
      "MN Rule 5225.1180",
      "MN Rule 5225.4100"
    ],
    "correct": 0,
    "explanation": "MN Rule 5225.2500 specifically governs Low Water Fuel Cutoff requirements. It mandates that automatically fired boilers have a low-water fuel cutoff device. Watertube boiler plants with heat input exceeding 750,000 BTU/hr must use a flow-sensing device in the outlet piping instead of a standard LWCO."
  },
  {
    "id": 503,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN Statute 326B.988, which type of building is EXEMPT from Minnesota boiler laws?",
    "options": [
      "Residential buildings housing five or fewer families",
      "Commercial apartment buildings with fewer than 10 units",
      "Hotels with fewer than 50 rooms",
      "Small office buildings under 5,000 square feet"
    ],
    "correct": 0,
    "explanation": "Per MN Statute 326B.988, residential buildings housing FIVE (5) or fewer families are exempt from Minnesota boiler laws. Commercial buildings, hotels, and offices regardless of size must comply with all licensing and inspection requirements."
  },
  {
    "id": 504,
    "level": "special",
    "category": "Plant Management",
    "question": "According to MN Rule 5225.1110, a boiler room logbook must document what three items?",
    "options": [
      "When checks were made, who made them, and what was checked",
      "Steam pressure readings, water temperature, and fuel consumption",
      "Safety valve tests, blowdown times, and LWCO tests",
      "Operator license numbers, chemical treatments, and inspection dates"
    ],
    "correct": 0,
    "explanation": "Per MN Rule 5225.1110, the logbook must document: (1) WHEN boiler checks were made, (2) WHO made the checks, and (3) WHAT specific checks were performed. The log must be available to the boiler inspector during inspections and upon request."
  },
  {
    "id": 505,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A compressed air vessel with an inside diameter of 4 inches is subject to Minnesota boiler inspection laws.",
    "options": [
      "False — pressure vessels with inside diameter of 6 inches or less are exempt",
      "True — all compressed air vessels require inspection",
      "False — all compressed air vessels are completely exempt",
      "True — any vessel over 3 inches diameter requires inspection"
    ],
    "correct": 0,
    "explanation": "Per MN Statute 326B.988, pressure vessels with an inside diameter of 6 inches or less are EXEMPT from Minnesota boiler inspection laws. A 4-inch diameter vessel is well below this threshold and therefore exempt."
  },
  {
    "id": 506,
    "level": "special",
    "category": "Emergency Procedures",
    "question": "During a low water emergency, what is the FIRST action an operator must take?",
    "options": [
      "Immediately shut off fuel to the burner",
      "Immediately add cold feedwater to restore the level",
      "Call the chief engineer before taking any action",
      "Open the safety valve to reduce pressure"
    ],
    "correct": 0,
    "explanation": "The FIRST action in a low water emergency is to IMMEDIATELY shut off fuel to the burner. Cold water must NOT be added to an overheated boiler — this can cause a catastrophic explosion from flash steam generation. After shutting off fuel, secure the boiler and allow it to cool naturally before investigating the cause."
  },
  {
    "id": 507,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN Statute 326B.958, if a boiler inspector finds an unlicensed person operating a boiler, what may the inspector do?",
    "options": [
      "Order operation to cease; may grant up to 30 days of continued operation to find a licensed operator",
      "Issue a fine and allow operation to continue",
      "Immediately seal the boiler with no exceptions",
      "Contact the fire marshal and wait for their response"
    ],
    "correct": 0,
    "explanation": "Per MN Statute 326B.958, if an inspector finds an unlicensed person operating a boiler, operation must cease. However, the inspector may grant up to 30 days of continued operation to allow the owner time to find and hire a properly licensed operator. This grace period is at the inspector's discretion."
  },
  {
    "id": 508,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "At exactly 15 psig steam pressure, a boiler is classified as which type?",
    "options": [
      "Low pressure — the definition requires steam GREATER THAN 15 psig to be high pressure",
      "High pressure — 15 psig steam meets the high pressure threshold",
      "Medium pressure — a special category between 10 and 20 psig",
      "The classification depends on the boiler's BTU rating, not its pressure"
    ],
    "correct": 0,
    "explanation": "A boiler at EXACTLY 15 psig steam is LOW PRESSURE. The definition states that a high-pressure steam boiler operates at steam pressure in EXCESS OF (greater than) 15 psig. At exactly 15 psig, the boiler is low pressure. The threshold is strictly 'greater than 15 psig' for high pressure."
  },
  {
    "id": 509,
    "level": "special",
    "category": "Water Treatment",
    "question": "For a high-pressure steam boiler rated at 50 HP or more, how many separate feedwater supplies are required?",
    "options": [
      "Two separate and independent feedwater supply means",
      "One supply is sufficient if it has adequate capacity",
      "Three supplies — primary, secondary, and emergency",
      "The number of supplies is at the operator's discretion"
    ],
    "correct": 0,
    "explanation": "Per MN boiler rules and ASME standards, high-pressure steam boilers rated at 50 HP or more must have TWO separate and independent means of feedwater supply. This ensures that if one feedwater system fails, the boiler can continue to receive water from the backup source, preventing a dangerous low water condition."
  },
  {
    "id": 510,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What credential must a Minnesota boiler inspector hold to perform inspections of boilers and pressure vessels?",
    "options": [
      "A National Board commission and a Minnesota certificate of competency",
      "Only a Minnesota-issued engineer's license",
      "OSHA certification and a state contractor's license",
      "Any engineering degree from an accredited university"
    ],
    "correct": 0,
    "explanation": "Per MN Statute 326B.958, a boiler inspector must hold a National Board commission (having passed the National Board examination) AND a Minnesota certificate of competency. The National Board commission is the nationally recognized credential for commissioned inspectors of boilers and pressure vessels."
  },
  {
    "id": 511,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the most important action during a boiler room shift changeover?",
    "options": [
      "The relieving operator must physically verify water level and all key parameters before the departing operator leaves",
      "The departing operator should leave written notes and exit promptly to avoid confusion",
      "No formal changeover is required if the boiler is operating normally",
      "The plant owner must be present for all shift changes"
    ],
    "correct": 0,
    "explanation": "During shift changeover, the relieving operator must physically verify water level (checking the gauge glass), steam pressure, all safety device status, and any ongoing issues BEFORE the departing operator leaves. This joint verification ensures continuity of safe operation. The departing operator should brief the incoming operator on any abnormalities, recent tests performed, and maintenance issues."
  },
  {
    "id": 512,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Before entering a boiler room for the first time on a shift, what should an operator check FIRST upon entering?",
    "options": [
      "The water level in the gauge glass",
      "The steam pressure gauge reading",
      "The fuel supply status",
      "The outside air temperature for combustion efficiency"
    ],
    "correct": 0,
    "explanation": "The FIRST thing to check upon entering the boiler room is the WATER LEVEL in the gauge glass. Maintaining proper water level is the most critical concern for steam boiler safety. An adequate water level must be verified before any other checks are performed. This is a fundamental rule of boiler operation per ASME Section VI and VII."
  },
  {
    "id": 513,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN Rule 5225.1180, what is the attendance requirement for a high-pressure boiler plant rated at exactly 200 HP?",
    "options": [
      "Cannot be left unattended for more than 2 consecutive hours; shift engineer must stay within 500 feet of the boiler room",
      "Must have constant attendance at all times",
      "May be left unattended for up to 4 hours if remote monitoring is available",
      "Only requires observation once every 24 hours"
    ],
    "correct": 0,
    "explanation": "A plant rated at 200 HP falls in the 51–500 HP range (cannot be left unattended more than 2 consecutive hours) AND also triggers the >200 HP requirement that the shift engineer must stay within 500 feet of the boiler room at all times while in operation. Both requirements apply simultaneously."
  },
  {
    "id": 514,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN Rule 5225.1180, for a plant between 51 and 500 HP, visual observations must be documented in the logbook at what minimum frequency?",
    "options": [
      "At least every 8 hours",
      "At least every 2 hours",
      "At least every 4 hours",
      "At least every 30 minutes"
    ],
    "correct": 1,
    "explanation": "Per MN Rule 5225.1180, for high-pressure plants rated 51–500 HP, the operating engineer must visually observe and document conditions in the boiler room logbook at least every 2 hours. The plant cannot be left unattended for more than 2 consecutive hours."
  },
  {
    "id": 515,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A hot water boiler operating at 165 psig and 240°F is classified as which type?",
    "options": [
      "Low pressure — because temperature is below 250°F",
      "High pressure — because pressure exceeds 160 psig",
      "Medium pressure — a combination classification applies",
      "Low pressure — both pressure AND temperature must exceed limits"
    ],
    "correct": 1,
    "explanation": "This boiler is HIGH PRESSURE. The definition states a hot water boiler is high pressure if pressure EXCEEDS 160 psig OR temperature EXCEEDS 250°F. Since the pressure is 165 psig (greater than 160 psig), it qualifies as high pressure regardless of temperature. Either condition alone triggers the high-pressure classification."
  },
  {
    "id": 516,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "When must a hydrostatic test be performed and witnessed by a commissioned inspector per MN Statute 326B.958?",
    "options": [
      "Every 5 years as part of the regular inspection cycle",
      "Before a new or repaired boiler is placed into service",
      "Whenever the boiler pressure is increased above its original MAWP",
      "Only when the boiler fails an annual visual inspection"
    ],
    "correct": 1,
    "explanation": "Per MN Statute 326B.958, hydrostatic testing must be performed and witnessed by a commissioned inspector before a NEW or REPAIRED boiler is placed into service. This ensures the structural integrity of the boiler has been verified under controlled test conditions before operating with personnel present."
  },
  {
    "id": 517,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN Statute 326B.988, what is the maximum input BTU/hr for a hot water supply boiler to be exempt from Minnesota boiler law?",
    "options": [
      "500,000 BTU/hr",
      "200,000 BTU/hr",
      "750,000 BTU/hr",
      "1,000,000 BTU/hr"
    ],
    "correct": 1,
    "explanation": "Per MN Statute 326B.988, hot water supply boilers with input of 200,000 BTU/hr or less (OR 120 gallons capacity or less) are exempt from Minnesota boiler law. Additionally, hot water heating boilers with input of 750,000 BTU/hr or less are exempt."
  },
  {
    "id": 518,
    "level": "special",
    "category": "Safety Devices",
    "question": "According to MN Rule 5225.4100, a safety valve must be installed in what orientation?",
    "options": [
      "Horizontal, to allow proper steam flow",
      "Upright (vertical) position",
      "At 45 degrees for optimal drainage",
      "Any orientation that fits the piping arrangement"
    ],
    "correct": 1,
    "explanation": "Per MN Rule 5225.4100, all safety valves must stand in an UPRIGHT (vertical) position. This ensures gravity assists the valve spring in closing after pressure relief and allows proper drainage of any condensate. Installing a safety valve in any other orientation can compromise its function and is a code violation."
  },
  {
    "id": 519,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "A boiler plant has three boilers connected to a common header: 30 HP, 45 HP, and 60 HP. Only two are currently operating. What is the plant HP rating for licensing purposes?",
    "options": [
      "75 HP — only the two operating boilers count",
      "135 HP — all boilers connected to the header are counted whether in use or not",
      "60 HP — only the largest boiler counts",
      "105 HP — connected but idle boilers receive a 50% credit"
    ],
    "correct": 1,
    "explanation": "Plant HP for licensing purposes is the SUM of ALL boilers connected to the common header, whether in use or not. Therefore: 30 + 45 + 60 = 135 HP. The idle status of a boiler does not reduce its contribution to plant HP. This is per MN Rule 5225.1000."
  },
  {
    "id": 520,
    "level": "special",
    "category": "Water Level Control",
    "question": "During the gauge glass blow-through procedure, after opening and closing the water cock (Step 2), what is the NEXT step?",
    "options": [
      "Close the drain cock and observe the water level",
      "Open and close the steam cock to blow steam to the drain",
      "Open both the steam and water cocks simultaneously",
      "Replace the gauge glass if any debris was found"
    ],
    "correct": 1,
    "explanation": "After Step 2 (opening and closing the water cock to verify water flows to the drain), Step 3 is to open the steam cock (with drain still open) and verify steam blows to the drain, then close the steam cock. This confirms the steam side is clear. The full procedure: (1) close both, open drain; (2) open/close water cock; (3) open/close steam cock; (4) close drain; (5) open water cock; (6) open steam cock."
  },
  {
    "id": 521,
    "level": "special",
    "category": "Emergency Procedures",
    "question": "After shutting off the fuel during a low water emergency, what must the operator NOT do?",
    "options": [
      "Contact the chief engineer and boiler inspector",
      "Add cold feedwater to restore the water level immediately",
      "Document the event in the logbook",
      "Close the main steam stop valve"
    ],
    "correct": 1,
    "explanation": "During a low water emergency, you must NOT add cold water to an overheated boiler. If the heating surfaces are exposed and overheated, introducing relatively cool water can cause instant and violent flash steam generation, potentially resulting in a catastrophic explosion. The boiler must be allowed to cool naturally before investigation."
  },
  {
    "id": 522,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Upon entering a boiler room and finding that the gauge glass is dark (water not visible), what should the operator do?",
    "options": [
      "Quickly add feedwater and watch if the level returns",
      "Shut off the fuel immediately — water may be below the visible range",
      "Tap the gauge glass to check for air bubbles",
      "Check the pressure gauge reading before taking action"
    ],
    "correct": 1,
    "explanation": "If water is not visible in the gauge glass, the operator should IMMEDIATELY shut off the fuel/burner. The water level may be dangerously low (below the gauge glass connection). You must NEVER add feedwater to an overheated boiler. Shut off fuel, secure the boiler, and investigate the cause safely after the boiler has cooled. This is the cardinal rule of boiler safety."
  },
  {
    "id": 523,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the purpose of the fusible plug in a fire-tube boiler?",
    "options": [
      "To act as a pressure relief device when safety valves fail",
      "To warn of dangerously low water by melting and releasing a steam whistle",
      "To provide an additional water supply path during emergencies",
      "To prevent the boiler from exceeding maximum design pressure"
    ],
    "correct": 1,
    "explanation": "A fusible plug contains a low-melting-point tin alloy that melts when water drops below the plug level and heat causes it to overheat. When the tin melts, a steam/water jet (like a whistle) warns the operator. It is a LAST RESORT warning device, not a pressure relief device. Fusible plugs must be replaced annually — old casings must never be refilled."
  },
  {
    "id": 524,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What minimum experience is required to apply for a 2nd Class A engineer license in Minnesota?",
    "options": [
      "3 years of high-pressure boiler experience only",
      "1 year boiler experience (2,000 hrs) plus 1 year turbine/engine experience",
      "2 years of combined boiler and turbine experience",
      "1 year boiler experience only, with no turbine requirement"
    ],
    "correct": 1,
    "explanation": "The 2nd Class A engineer license requires: 1 year (2,000 hours) of boiler operating experience PLUS 1 year of turbine/engine experience. The 'A' grade designation requires turbine/engine experience in addition to boiler experience. A 2nd Class B requires only 1 year (2,000 hrs) of boiler experience and no turbine requirement."
  },
  {
    "id": 525,
    "level": "special",
    "category": "Plant Management",
    "question": "When must the boiler room logbook be available to a boiler inspector?",
    "options": [
      "Only during scheduled annual inspections",
      "During any inspection or upon request at any time",
      "Only when the Chief Engineer is present",
      "Logbooks are kept at the corporate office, not in the boiler room"
    ],
    "correct": 1,
    "explanation": "Per MN Rule 5225.1110, the boiler room logbook must be maintained IN THE BOILER ROOM and must be available to the boiler inspector during inspections AND upon request at any time. The logbook is a legal document and must be current, legible, and accessible."
  },
  {
    "id": 526,
    "level": "special",
    "category": "Water Treatment",
    "question": "Which two valves are required in a boiler feedwater line, per ASME requirements?",
    "options": [
      "Two stop valves — one near the boiler and one near the pump",
      "A stop valve (nearest the boiler) and a check valve",
      "A check valve and a pressure-reducing valve",
      "A gate valve and a globe valve in series"
    ],
    "correct": 1,
    "explanation": "The feedwater line must have TWO valves: (1) a STOP VALVE located nearest to the boiler (to allow manual isolation), and (2) a CHECK VALVE (to prevent backflow of boiler water into the feedwater line when the pump is off). The check valve is required to prevent a dangerous backflow condition."
  },
  {
    "id": 527,
    "level": "special",
    "category": "Water Level Control",
    "question": "After completing all steps of the gauge glass blow-through test, what should happen when the steam cock is finally opened (Step 6)?",
    "options": [
      "Water should rise to the top of the glass",
      "Steam should blow out vigorously",
      "The water level should drop to the true operating level",
      "The gauge glass should fill completely and overflow"
    ],
    "correct": 2,
    "explanation": "In Step 6 (final step) of the gauge glass blow-through, the steam cock is opened. The steam pressure above the water acts on the water in the gauge glass, causing the water level to DROP to the TRUE operating water level. In Step 5 (water cock opened, steam cock still closed), water rises to the top — but this is not the real level. Opening the steam cock (Step 6) reveals the accurate level."
  },
  {
    "id": 528,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "MN Rule 5225.1180 requires that a plant over 500 HP have a designated Chief Engineer on premises for a minimum of how many hours per week?",
    "options": [
      "8 hours per day, 7 days a week",
      "8 hours per day, 5 days a week",
      "4 hours per day, 5 days a week",
      "8 hours per day, 6 days a week"
    ],
    "correct": 2,
    "explanation": "Per MN Rule 5225.1180, plants over 500 HP must have a designated Chief Engineer on premises at least 4 hours per day, 5 days per week. This ensures expert oversight for large, high-capacity plants. The Chief Engineer must be on-site (not just reachable remotely) for these minimum hours."
  },
  {
    "id": 529,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the steam pressure threshold that separates high-pressure from low-pressure boiler classification in Minnesota?",
    "options": [
      "Steam pressure at or above 15 psig",
      "Steam pressure at or above 20 psig",
      "Steam pressure greater than (in excess of) 15 psig",
      "Steam pressure greater than 25 psig"
    ],
    "correct": 2,
    "explanation": "Per MN Statute 326B.978, a HIGH-PRESSURE boiler is one operating at steam or vapor pressure IN EXCESS OF 15 psig (i.e., greater than 15 psig, not equal to). A LOW-PRESSURE boiler operates at 15 psig or LESS. The key distinction is 'in excess of' — a boiler at exactly 15 psig is low pressure."
  },
  {
    "id": 530,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A farm boiler used exclusively for heating a grain dryer is subject to Minnesota boiler inspection laws.",
    "options": [
      "True — all boilers generating steam must be inspected",
      "True — agricultural boilers have special inspection requirements",
      "False — farm boilers used solely for agricultural or horticultural purposes are exempt",
      "False — only if the farm is a family farm of fewer than 5 members"
    ],
    "correct": 2,
    "explanation": "Per MN Statute 326B.988, farm boilers used SOLELY for agricultural or horticultural purposes are exempt from Minnesota boiler laws. A grain dryer boiler at a farm qualifies for this exemption. However, if the same boiler is also used for heating buildings or other non-agricultural purposes, the exemption may not apply."
  },
  {
    "id": 531,
    "level": "special",
    "category": "Safety Valves",
    "question": "A safety valve is stamped for a set pressure of 150 psig. Within what pressure range must it open during ASME certification testing?",
    "options": [
      "146 to 154 psig (±4 psi)",
      "148 to 152 psig (±2 psi)",
      "145.5 to 154.5 psig (±3% of 150 psig)",
      "140 to 160 psig (±10 psig)"
    ],
    "correct": 2,
    "explanation": "For set pressures between 71 and 300 psig, the allowable tolerance is ±3% of the set pressure (per ASME PG-72). 3% of 150 psig = 4.5 psi. Therefore the valve must open between 145.5 psig and 154.5 psig. Note: for pressures ≤70 psig the tolerance is ±2 psi; for 301-1,000 psig it is ±10 psi; above 1,000 psig it is ±1%."
  },
  {
    "id": 532,
    "level": "special",
    "category": "Boiler Types",
    "question": "How is 'Direct Supervision' defined under MN boiler rules when applied to an apprentice?",
    "options": [
      "The supervising engineer must be in the same building at all times",
      "The supervising engineer must be reachable by phone or radio",
      "Oversight of the apprentice's activities including attendance at the boiler plant at all times",
      "The supervising engineer must review the apprentice's logbook weekly"
    ],
    "correct": 2,
    "explanation": "'Direct Supervision' means oversight of an apprentice's boiler-related activities including ATTENDANCE AT THE BOILER PLANT AT ALL TIMES. The supervising engineer must be physically present in the boiler plant — not just reachable by phone or radio — whenever the apprentice is operating under direct supervision. This ensures immediate intervention if needed."
  },
  {
    "id": 533,
    "level": "special",
    "category": "Emergency Procedures",
    "question": "After a low water emergency, what must happen before the boiler can be returned to service?",
    "options": [
      "The safety valve must be tested and the boiler refilled with treated water",
      "The boiler must pass a pressure test and all safety devices must be verified",
      "The cause of the low water condition must be investigated and corrected, and the boiler must be inspected",
      "The operator must submit a written report and await DLI approval"
    ],
    "correct": 2,
    "explanation": "Before returning a boiler to service after a low water emergency, the cause of the low water condition MUST be investigated and corrected. A thorough inspection of the heating surfaces must be performed to check for damage (warped tubes, failed welds, etc.). Only after confirming the cause is corrected and no damage has occurred may the boiler be carefully returned to service. Documentation of the event is also required."
  },
  {
    "id": 534,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "After a boiler inspection is completed, what does the inspector attach to the boiler to indicate it has been inspected?",
    "options": [
      "A National Board registration plate",
      "An ASME Code Symbol Stamp",
      "A label or sticker indicating the month and year of inspection and the inspection agency",
      "A DLI operating permit signed by the commissioner"
    ],
    "correct": 2,
    "explanation": "Per MN Statute 326B.958, after inspection, the inspector attaches a LABEL or STICKER to the boiler indicating the month and year of inspection and the inspection agency. This certificate of inspection serves as proof that the boiler has been inspected and is authorized for continued operation. The label must be visible and legible."
  },
  {
    "id": 535,
    "level": "special",
    "category": "Safety Devices",
    "question": "Per MN Rule 5225.4100, what type of fitting or valve is strictly prohibited between the boiler and its safety valve?",
    "options": [
      "A check valve",
      "A pressure gauge tapping",
      "Any valve or shut-off device of any description",
      "A pipe union or coupling"
    ],
    "correct": 2,
    "explanation": "Per MN Rule 5225.4100, NO VALVE OF ANY DESCRIPTION may be installed between the safety valve and the boiler (or on the discharge pipe between the safety valve and the discharge point). A valve between the boiler and safety valve could be inadvertently closed, rendering the safety valve ineffective and creating an extremely dangerous overpressure condition."
  },
  {
    "id": 536,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "A steam coil type generator boiler has 100 square feet of heating surface. What is its boiler horsepower rating?",
    "options": [
      "10 BHP",
      "5 BHP",
      "20 BHP",
      "100 BHP"
    ],
    "correct": 2,
    "explanation": "For steam coil type generators (once-through steam generators), 5 square feet of heating surface equals 1 BHP. Therefore: 100 sq ft ÷ 5 = 20 BHP. This differs from conventional fire-tube and water-tube boilers where 10 sq ft = 1 BHP. The coil type uses the different ratio because of its different heat transfer characteristics."
  },
  {
    "id": 537,
    "level": "special",
    "category": "Operating Procedures",
    "question": "When must the operator's license be displayed in the boiler room?",
    "options": [
      "Only during scheduled inspections",
      "Only when a new operator starts at the plant",
      "At all times, in a conspicuous place in the engine or boiler room",
      "Licenses are kept on file at the DLI office, not displayed in the plant"
    ],
    "correct": 2,
    "explanation": "Per MN boiler licensing rules, a current engineer's license must be displayed IN A CONSPICUOUS PLACE in the engine or boiler room AT ALL TIMES. If the engineer operates multiple boiler rooms at the same location, a photocopy is acceptable and required in each additional room."
  },
  {
    "id": 538,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the minimum age to apply for a Special Engineer license in Minnesota without special provisions?",
    "options": [
      "16 years old",
      "17 years old",
      "18 years old",
      "21 years old"
    ],
    "correct": 2,
    "explanation": "The standard minimum age for a Special Engineer license is 18 years old. However, 16-year-olds may apply IF they have completed an approved boiler course. All other license classes require a minimum age of 18 years. This is per MN licensing requirements."
  },
  {
    "id": 539,
    "level": "special",
    "category": "Boiler Types",
    "question": "Which of the following BEST defines 'appurtenance' in the context of boiler operation?",
    "options": [
      "The boiler shell and pressure-containing parts only",
      "Emergency shutdown equipment required by OSHA",
      "The fuel system components including burner and controls",
      "Equipment integral to boiler operation as specified in ASME Code Sections I, IV, VI, and VII"
    ],
    "correct": 3,
    "explanation": "An 'appurtenance' is equipment integral to boiler operation as specified in ASME Code Sections I, IV, VI, and VII. This includes safety valves, gauge glasses, water columns, low water cutoffs, feedwater equipment, blowdown valves, pressure gauges, and controls. The term has a specific legal meaning under MN Rule 5225.0050."
  },
  {
    "id": 540,
    "level": "special",
    "category": "Safety Valves",
    "question": "A safety valve is stamped with a set pressure of 50 psig. Per ASME Code, within what pressure range must it open?",
    "options": [
      "47 to 53 psig (±6%)",
      "47.5 to 52.5 psig (±5%)",
      "49 to 51 psig (±2%)",
      "48 to 52 psig (±2 psi)"
    ],
    "correct": 3,
    "explanation": "For set pressures of 70 psig or less, the ASME Code allowable tolerance is ±2 psi. For a 50 psig set pressure: 50 - 2 = 48 psig minimum, 50 + 2 = 52 psig maximum. The valve must open between 48 and 52 psig. This tighter tolerance (±2 psi) applies to lower-pressure valves where a percentage tolerance would be too small to be practical."
  },
  {
    "id": 541,
    "level": "special",
    "category": "Water Level Control",
    "question": "In the gauge glass blow-through procedure, after closing the drain cock (Step 4), the water cock is opened. What should happen?",
    "options": [
      "Water should flow out of the drain if the drain cock is faulty",
      "Nothing should happen — the glass should remain empty",
      "Steam should blow out through the water cock",
      "Water should rise to the top of the gauge glass"
    ],
    "correct": 3,
    "explanation": "In Step 5 of the gauge glass blow-through, after closing the drain cock, when the water cock is opened, water should RISE TO THE TOP of the gauge glass. If no water appears when the water cock opens, the water level is BELOW the water cock connection — a dangerous low water condition. Never add feedwater; shut off fuel immediately."
  },
  {
    "id": 542,
    "level": "special",
    "category": "Emergency Procedures",
    "question": "If water is not visible in the gauge glass, what is the meaning according to the gauge glass blow-through procedure?",
    "options": [
      "The gauge glass is dirty and needs to be replaced",
      "The drain cock is open and needs to be closed",
      "The steam cock is stuck and needs to be freed",
      "The water level is BELOW the gauge glass connection — a dangerous low water condition"
    ],
    "correct": 3,
    "explanation": "If water does NOT appear in the gauge glass when the water cock is opened during the blow-through procedure, this means the actual water level is BELOW the water cock connection — a critical low water condition. Immediately shut off fuel. Do NOT add feedwater to an overheated boiler. This is one of the most dangerous situations in boiler operation."
  },
  {
    "id": 543,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A hot water boiler operates at 150 psig and 255°F. How is this boiler classified?",
    "options": [
      "Low pressure — because pressure is below 160 psig",
      "Low pressure — because temperature alone determines classification",
      "Medium pressure — a special category for hot water systems",
      "High pressure — because temperature exceeds 250°F even though pressure is below 160 psig"
    ],
    "correct": 3,
    "explanation": "This boiler is HIGH PRESSURE. For hot water boilers, high pressure is defined as EITHER pressure exceeding 160 psig OR temperature exceeding 250°F — whichever condition is met first. Since the temperature (255°F) exceeds the 250°F threshold, this is a high-pressure boiler regardless of the 150 psig pressure being below 160 psig."
  },
  {
    "id": 544,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Per MN Rule 5225.1110, if an operator discovers an unsafe boiler condition, what TWO parties must be notified immediately?",
    "options": [
      "The plant owner and OSHA",
      "The boiler inspector and OSHA",
      "The boiler manufacturer and the DLI",
      "The owner/employer AND the chief boiler inspector"
    ],
    "correct": 3,
    "explanation": "Per MN Rule 5225.1110, if an unsafe boiler condition is found, BOTH the owner/employer AND the chief boiler inspector must be notified immediately. If the boiler is not immediately taken out of service, 24-hour continuous monitoring by a licensed operating engineer is required until the DLI resolves the situation."
  },
  {
    "id": 545,
    "level": "special",
    "category": "Plant Management",
    "question": "When an operator is working in multiple boiler rooms at the same facility, what is required regarding their license display?",
    "options": [
      "The original license must be carried on their person at all times",
      "A single license displayed at the main boiler room satisfies all requirements",
      "The license must be locked in a secure location accessible to all engineers",
      "A photocopy of the license is required and acceptable in each additional boiler room"
    ],
    "correct": 3,
    "explanation": "When operating multiple boiler rooms at the same location, a PHOTOCOPY of the engineer's license is acceptable AND required in each additional boiler room. The original license must be displayed in the primary boiler room. This ensures compliance with the requirement to display licenses in a conspicuous place in the boiler room at all times."
  },
  {
    "id": 546,
    "level": "special",
    "category": "Water Treatment",
    "question": "Under ASME standards, what is the maximum temperature allowed for boiler blowdown water discharged to a sewer?",
    "options": [
      "100°F",
      "120°F",
      "140°F",
      "150°F"
    ],
    "correct": 3,
    "explanation": "Boiler blowdown water discharged to a sewer must be cooled to a maximum of 150°F before discharge. Water hotter than 150°F can damage sewer pipes (especially plastic/PVC), harm the biological treatment process at wastewater treatment plants, and create a safety hazard. Blowdown tanks, heat recovery systems, or mixing with cool water must be used to cool blowdown before sewer discharge."
  },
  {
    "id": 547,
    "level": "special",
    "category": "Safety Devices",
    "question": "A try cock (gauge cock) test confirms: top cock releases steam, middle cock releases a mixture, bottom cock releases only water. What does this indicate about water level?",
    "options": [
      "Water level is dangerously high — above all three try cocks",
      "Water level is dangerously low — below all three try cocks",
      "Water level is at the top cock — too high for safe operation",
      "Water level is normal — between the top and bottom try cocks, at or near normal operating level"
    ],
    "correct": 3,
    "explanation": "Try cock results: top = steam (water level is BELOW the top cock), middle = mixture (water level is AT OR NEAR the middle cock — normal operating water level), bottom = water (water level is ABOVE the bottom cock). This pattern — steam/mixture/water from top to bottom — indicates NORMAL water level, appropriately between the middle and bottom cocks."
  },
  {
    "id": 548,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the maximum HP that a First Class Engineer (any grade) may be 'in charge' of as chief operator?",
    "options": [
      "100 HP",
      "250 HP",
      "Unlimited HP",
      "500 HP"
    ],
    "correct": 3,
    "explanation": "A First Class Engineer (any grade — A, B, or C) may be IN CHARGE of a boiler plant up to 500 HP. As a SHIFT engineer, a First Class Engineer may work in plants of unlimited HP. To be the chief/in-charge engineer in a plant over 500 HP, a Chief Engineer license is required."
  },
  {
    "id": 549,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN boiler law, who has the responsibility to ensure a boiler is inspected annually?",
    "options": [
      "The DLI boiler inspection division — they schedule and conduct all inspections",
      "The insurance company that insures the boiler",
      "The licensed engineer operating the boiler",
      "Both the owner AND the engineer share responsibility for ensuring annual inspection"
    ],
    "correct": 3,
    "explanation": "Under Minnesota boiler law, BOTH the owner AND the engineer share responsibility for ensuring the boiler receives its required annual inspection. This dual responsibility means both parties can be held accountable if an inspection is missed. The owner must arrange access and the engineer must cooperate with and support the inspection process."
  },
  {
    "id": 550,
    "level": "special",
    "category": "Safety Valves",
    "question": "The accumulation limit for a LOW-PRESSURE steam boiler (Section IV) during a safety valve test is:",
    "options": [
      "3% above the MAWP",
      "6% above the MAWP",
      "10% above the MAWP",
      "5 psi above the 15 psig set pressure (maximum 20 psig)"
    ],
    "correct": 3,
    "explanation": "For low-pressure steam heating boilers (ASME Section IV, steam ≤15 psig), the maximum accumulation is 5 psi above the 15 psig set pressure, resulting in a maximum pressure of 20 psig during accumulation testing. Power boilers (Section I) are limited to 6% accumulation. Organic fluid vaporizers are limited to 10% accumulation."
  },
  {
    "id": 1001,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the primary purpose of a fusible plug in a fire-tube boiler?",
    "options": [
      "To regulate steam pressure automatically",
      "To warn of low water by melting and releasing steam into the furnace when water drops below a safe level",
      "To act as a backup safety valve",
      "To prevent scale buildup on heating surfaces"
    ],
    "correct": 1,
    "explanation": "A fusible plug is a last-resort low-water safety device made of a bronze shell filled with tin alloy (melting point approximately 450°F). Installed at the lowest permissible water level, it melts when exposed to excessive heat from uncovered heating surfaces, releasing steam/water into the furnace to alert the operator and extinguish the fire."
  },
  {
    "id": 1002,
    "level": "special",
    "category": "Boiler Types",
    "question": "In a fire-tube boiler, where do the hot combustion gases flow?",
    "options": [
      "Around the outside of the tubes",
      "Through the inside of the tubes, surrounded by water",
      "Through the waterwall headers only",
      "Through the mud drum and into the steam drum"
    ],
    "correct": 1,
    "explanation": "In a fire-tube boiler, hot combustion gases flow INSIDE the tubes, and water surrounds the outside of the tubes. Heat transfers from the gas through the tube wall into the water. This is the opposite of a water-tube boiler where water flows inside the tubes."
  },
  {
    "id": 1003,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the recommended pH range for boiler water in a low-pressure steam boiler?",
    "options": [
      "6.0 to 7.0 (slightly acidic)",
      "7.0 to 8.0 (neutral to slightly alkaline)",
      "8.5 to 12.5 (alkaline)",
      "13.0 to 14.0 (highly alkaline)"
    ],
    "correct": 2,
    "explanation": "Boiler water should be maintained at a pH of 8.5 to 12.5 (alkaline). This range minimizes corrosion of steel surfaces. Below 8.5, acidic corrosion accelerates. Above 12.5, caustic embrittlement and foaming become risks."
  },
  {
    "id": 1004,
    "level": "special",
    "category": "Operating Procedures",
    "question": "During a normal boiler startup from cold conditions, what should be done BEFORE lighting the burner?",
    "options": [
      "Purge the fireside with at least 4 air changes to remove any accumulated combustible gases",
      "Close all vents and dampers to conserve heat",
      "Open the main steam stop valve fully",
      "Set the firing rate to maximum for fastest startup"
    ],
    "correct": 0,
    "explanation": "Before lighting a burner, the fireside must be purged with at least 4 air changes (per CSD-1) to remove any accumulated combustible gases that could cause a furnace explosion. The fan runs with dampers open during pre-purge."
  },
  {
    "id": 1005,
    "level": "special",
    "category": "Steam Generation",
    "question": "What is the latent heat of vaporization of water at 212°F and atmospheric pressure?",
    "options": [
      "144 BTU/lb",
      "180 BTU/lb",
      "970.3 BTU/lb",
      "1,150 BTU/lb"
    ],
    "correct": 2,
    "explanation": "The latent heat of vaporization at 212°F is 970.3 BTU/lb. This is the energy required to convert one pound of water at 212°F to one pound of steam at 212°F without a temperature change."
  },
  {
    "id": 1006,
    "level": "special",
    "category": "Combustion",
    "question": "What are the three elements required for combustion (the fire triangle)?",
    "options": [
      "Nitrogen, oxygen, and carbon dioxide",
      "Water, steam, and heat",
      "Fuel, oxygen (air), and ignition (heat)",
      "Pressure, temperature, and volume"
    ],
    "correct": 2,
    "explanation": "The fire triangle requires three elements: (1) Fuel; (2) Oxygen — supplied by air (approximately 21% oxygen); (3) Ignition source/heat. Removing any one element extinguishes the fire."
  },
  {
    "id": 1007,
    "level": "special",
    "category": "Draft Systems",
    "question": "What type of draft uses a fan located between the furnace and the stack to pull combustion gases through the boiler?",
    "options": [
      "Forced draft",
      "Natural draft",
      "Induced draft",
      "Balanced draft"
    ],
    "correct": 2,
    "explanation": "Induced draft uses a fan (ID fan) located between the boiler outlet and the stack to pull combustion gases through the boiler. The furnace operates at slightly negative pressure."
  },
  {
    "id": 1008,
    "level": "special",
    "category": "Safety Valves",
    "question": "How often must safety valves on a power boiler be tested by lifting the lever (hand lift test)?",
    "options": [
      "Daily",
      "Weekly",
      "Monthly",
      "At least once per operating period and during each annual inspection"
    ],
    "correct": 3,
    "explanation": "Safety valves should be hand-lift tested at least once per operating period and are tested during each annual inspection. Only lift when boiler pressure is at least 75% of set pressure to ensure proper reseating."
  },
  {
    "id": 1009,
    "level": "special",
    "category": "Water Level Control",
    "question": "How often should a float-type low water cutoff be tested by blowdown?",
    "options": [
      "Daily — at least once per shift",
      "Weekly only",
      "Monthly during maintenance rounds",
      "Only during annual inspections"
    ],
    "correct": 0,
    "explanation": "Float-type low water cutoffs must be tested by blowdown at least daily (once per shift is best practice). The blowdown removes sediment from the float chamber and verifies the cutoff mechanism operates properly."
  },
  {
    "id": 1010,
    "level": "special",
    "category": "Heat Transfer",
    "question": "Which method of heat transfer occurs primarily in the furnace area of a boiler from the flame to the boiler surfaces?",
    "options": [
      "Radiation",
      "Conduction only",
      "Convection only",
      "Evaporation"
    ],
    "correct": 0,
    "explanation": "Radiation is the primary method of heat transfer in the furnace area. The high-temperature flame radiates heat energy directly to the boiler heating surfaces without requiring a medium."
  },
  {
    "id": 1011,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "One boiler horsepower (BHP) equals how many pounds of steam per hour from and at 212°F?",
    "options": [
      "10 lb/hr",
      "34.5 lb/hr",
      "100 lb/hr",
      "50 lb/hr"
    ],
    "correct": 1,
    "explanation": "One boiler horsepower (BHP) equals the evaporation of 34.5 pounds of water per hour from and at 212°F. This is equivalent to 33,479 BTU/hr."
  },
  {
    "id": 1012,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What MN Rules chapter governs boiler operation and licensing in Minnesota?",
    "options": [
      "MN Rules Chapter 7100",
      "MN Rules Chapter 3200",
      "MN Rules Chapter 1300",
      "MN Rules Chapter 5225"
    ],
    "correct": 3,
    "explanation": "MN Rules Chapter 5225 governs boiler operation, licensing, inspection, and installation requirements in Minnesota."
  },
  {
    "id": 1013,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What type of valve is best suited for throttling (regulating flow) in a steam system?",
    "options": [
      "Gate valve",
      "Ball valve",
      "Check valve",
      "Globe valve"
    ],
    "correct": 3,
    "explanation": "A globe valve is best suited for throttling because its disc and seat design allows precise control of flow. Gate valves should only be fully open or fully closed."
  },
  {
    "id": 1014,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the FIRST action if a low water condition is discovered during boiler operation?",
    "options": [
      "Immediately add cold feedwater to the boiler",
      "Shut off the fuel supply to the burner immediately",
      "Open the blowdown valve to lower pressure",
      "Increase the firing rate to generate more steam"
    ],
    "correct": 1,
    "explanation": "The FIRST action in a low water emergency is to shut off the fuel supply immediately. NEVER add feedwater to an overheated boiler — cold water contacting overheated metal can cause thermal shock and catastrophic failure."
  },
  {
    "id": 1015,
    "level": "special",
    "category": "Boiler Types",
    "question": "What type of boiler uses cast iron sections bolted together and is limited to low-pressure service?",
    "options": [
      "Scotch Marine boiler",
      "Water-tube boiler",
      "Cast iron sectional boiler",
      "Horizontal Return Tubular (HRT) boiler"
    ],
    "correct": 2,
    "explanation": "Cast iron sectional boilers are assembled from individual cast iron sections bolted together. They are limited to low-pressure service only (15 psig steam or 30 psig / 250°F hot water per ASME Section IV)."
  },
  {
    "id": 1016,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the purpose of a pressure gauge (steam gauge) on a boiler?",
    "options": [
      "To automatically control the burner firing rate",
      "To indicate the water level inside the boiler",
      "To indicate the steam or water pressure inside the boiler in psig",
      "To measure the temperature of the flue gases"
    ],
    "correct": 2,
    "explanation": "A pressure gauge indicates the steam or water pressure inside the boiler in psig. It must be connected to the steam space, easily readable, and marked with the MAWP."
  },
  {
    "id": 1017,
    "level": "special",
    "category": "Layup & Maintenance",
    "question": "For a wet layup of a boiler, what should be done to prevent oxygen corrosion?",
    "options": [
      "Drain the boiler completely and leave it open to air",
      "Fill the boiler completely with treated water (pH 10–11.5, oxygen scavenger) with no air space",
      "Fill the boiler halfway with untreated water",
      "Keep the boiler at 5 psig steam pressure"
    ],
    "correct": 1,
    "explanation": "Wet layup requires filling the boiler COMPLETELY with treated water — no air space allowed. The water should be treated with sodium sulfite and caustic soda to raise pH to 10–11.5."
  },
  {
    "id": 1018,
    "level": "special",
    "category": "ASME & Codes",
    "question": "ASME Section I covers the construction requirements for what type of boilers?",
    "options": [
      "Power boilers (steam boilers over 15 psig)",
      "Heating boilers (low pressure only)",
      "Pressure vessels for chemical storage",
      "Unfired hot water heaters only"
    ],
    "correct": 0,
    "explanation": "ASME Section I covers the construction of power boilers — steam boilers operating above 15 psig and high-temperature water boilers. Section IV covers heating boilers. Section VIII covers unfired pressure vessels."
  },
  {
    "id": 1019,
    "level": "special",
    "category": "Boiler Testing",
    "question": "During a hydrostatic test on a new boiler, the test pressure is set at what multiple of the MAWP?",
    "options": [
      "1.5 times the MAWP",
      "1.25 times the MAWP",
      "2.0 times the MAWP",
      "Equal to the MAWP"
    ],
    "correct": 0,
    "explanation": "For new construction, the hydrostatic test pressure is 1.5 times the MAWP. For in-service boilers, the test pressure is typically 1.25 to 1.5 times MAWP."
  },
  {
    "id": 1020,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the purpose of blowdown on a boiler?",
    "options": [
      "To increase the water level in the boiler",
      "To add chemicals to the boiler water",
      "To remove concentrated dissolved solids, sludge, and sediment from the boiler water",
      "To test the safety valve operation"
    ],
    "correct": 2,
    "explanation": "Blowdown removes concentrated dissolved solids (TDS), sludge, and sediment from the boiler water. As steam leaves the boiler, impurities concentrate in the remaining water."
  },
  {
    "id": 1021,
    "level": "special",
    "category": "Steam Generation",
    "question": "What is 'sensible heat' in the context of steam generation?",
    "options": [
      "The total heat content of superheated steam",
      "Heat that causes a change of state without changing temperature",
      "Heat that can be measured by a thermometer — it changes the temperature of a substance",
      "Heat lost up the stack"
    ],
    "correct": 2,
    "explanation": "Sensible heat is heat that changes the TEMPERATURE of a substance and can be 'sensed' by a thermometer. For water, sensible heat raises the temperature up to the boiling point."
  },
  {
    "id": 1022,
    "level": "special",
    "category": "Combustion",
    "question": "What does 'excess air' mean in combustion?",
    "options": [
      "Air remaining in the combustion chamber after all fuel is burned",
      "Air supplied above the theoretical (stoichiometric) amount needed for complete combustion",
      "Air that bypasses the burner entirely",
      "Compressed air used to atomize fuel oil"
    ],
    "correct": 1,
    "explanation": "Excess air is the amount of air supplied ABOVE the theoretical amount needed for complete combustion. Some excess air is necessary, but too much wastes heat by heating unnecessary air to stack temperature."
  },
  {
    "id": 1023,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Why must a boiler be warmed up slowly during startup?",
    "options": [
      "To save fuel during startup",
      "To allow control systems to calibrate",
      "To prevent uneven thermal expansion that can cause stress cracking and leaks",
      "To allow water treatment chemicals time to activate"
    ],
    "correct": 2,
    "explanation": "Slow warmup prevents uneven thermal expansion — thick and thin sections expand at different rates. Rapid heating creates thermal stress that can crack welds, loosen tubes, and cause leaks."
  },
  {
    "id": 1024,
    "level": "special",
    "category": "Draft Systems",
    "question": "Natural draft in a boiler depends on what primary factor?",
    "options": [
      "The speed of the forced draft fan",
      "The temperature difference between hot flue gases and cooler outside air, creating buoyancy",
      "The height of the feedwater tank",
      "The steam pressure inside the boiler"
    ],
    "correct": 1,
    "explanation": "Natural draft is created by the temperature difference between hot flue gases inside the stack and cooler outside air. Hot gases are less dense and rise, creating negative pressure that draws combustion air through the boiler."
  },
  {
    "id": 1025,
    "level": "special",
    "category": "Safety Devices",
    "question": "What does CSD-1 stand for and what does it govern?",
    "options": [
      "Controls and Safety Devices for Automatically Fired Boilers — governs burner controls and safety devices",
      "Combustion Standards Document — governs fuel quality requirements",
      "Certified System Design — governs boiler manufacturing",
      "Code for Steam Distribution — governs steam piping design"
    ],
    "correct": 0,
    "explanation": "CSD-1 stands for Controls and Safety Devices for Automatically Fired Boilers. It establishes requirements for burner management systems including pre-purge timing, flame detection, fuel safety shutoff valves, and operating/high limit controls."
  },
  {
    "id": 1026,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "How many BTU are required to raise the temperature of one pound of water by 1°F?",
    "options": [
      "1 BTU",
      "10 BTU",
      "100 BTU",
      "970 BTU"
    ],
    "correct": 0,
    "explanation": "By definition, 1 BTU is the amount of heat required to raise the temperature of one pound of water by 1°F. This is the fundamental unit of heat measurement."
  },
  {
    "id": 1027,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What type of valve allows flow in only one direction and prevents backflow?",
    "options": [
      "Gate valve",
      "Globe valve",
      "Needle valve",
      "Check valve"
    ],
    "correct": 3,
    "explanation": "A check valve allows flow in only one direction and automatically closes to prevent backflow. They are essential on feedwater lines to prevent boiler water from flowing back."
  },
  {
    "id": 1028,
    "level": "special",
    "category": "Boiler Types",
    "question": "A Scotch Marine boiler is what type of boiler design?",
    "options": [
      "Water-tube boiler",
      "Cast iron sectional boiler",
      "Fire-tube boiler with an internal furnace",
      "Electric resistance boiler"
    ],
    "correct": 2,
    "explanation": "A Scotch Marine boiler is a fire-tube design with an internal furnace (corrugated cylindrical furnace inside the shell). It is the most common type of packaged boiler."
  },
  {
    "id": 1029,
    "level": "special",
    "category": "Water Level Control",
    "question": "What are try cocks (gauge cocks) used for on a boiler?",
    "options": [
      "To drain the boiler for maintenance",
      "To sample boiler water for chemical testing",
      "To control the feedwater flow rate",
      "To manually verify the water level when the gauge glass is unreliable or broken"
    ],
    "correct": 3,
    "explanation": "Try cocks are small valves mounted on the water column at three levels. They allow manual verification of water level by opening each cock. They serve as a backup to the gauge glass."
  },
  {
    "id": 1030,
    "level": "special",
    "category": "Safety Valves",
    "question": "A safety valve differs from a safety relief valve in that a safety valve:",
    "options": [
      "Opens gradually as pressure increases",
      "Is only used on pressure vessels",
      "Can be adjusted during operation",
      "Opens with a full pop action at set pressure"
    ],
    "correct": 3,
    "explanation": "A safety valve opens with a FULL POP action at the set pressure. Safety valves are used on steam boilers. A relief valve opens gradually in proportion to pressure increase."
  },
  {
    "id": 1031,
    "level": "special",
    "category": "Heat Transfer",
    "question": "Conduction is heat transfer through:",
    "options": [
      "A solid material from molecule to molecule without movement of the material itself",
      "Fluid movement (liquid or gas circulation)",
      "Electromagnetic waves through space",
      "Evaporation of water"
    ],
    "correct": 0,
    "explanation": "Conduction is heat transfer through a solid material from molecule to molecule. In a boiler, heat conducts through the tube walls from the hot gas side to the water side."
  },
  {
    "id": 1032,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the proper procedure for securing (shutting down) a boiler for a short maintenance period?",
    "options": [
      "Turn off the fuel, close the feedwater valve, close the main steam stop valve, and allow pressure to drop naturally",
      "Open all blowdown valves immediately to depressurize quickly",
      "Add maximum cold feedwater to cool the boiler rapidly",
      "Open the safety valve manually to release all pressure instantly"
    ],
    "correct": 0,
    "explanation": "Proper shutdown: Reduce firing rate gradually, shut off fuel, close feedwater valve, close main steam stop valve, allow pressure to drop naturally. Never force-cool a boiler."
  },
  {
    "id": 1033,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "A 2nd Class engineer may be in charge of a boiler plant up to what horsepower?",
    "options": [
      "100 BHP",
      "250 BHP",
      "500 BHP",
      "50 BHP"
    ],
    "correct": 0,
    "explanation": "A 2nd Class engineer may be in charge of a boiler plant up to 100 BHP. As a shift engineer, they may work in plants up to 500 BHP."
  },
  {
    "id": 1034,
    "level": "special",
    "category": "Boiler Testing",
    "question": "During a hydrostatic test, why must all air be vented from the boiler before pressurizing?",
    "options": [
      "Air causes the pressure gauge to read incorrectly",
      "Air prevents the test pump from operating",
      "Air causes corrosion during the test",
      "Air is compressible and stores dangerous energy — if a failure occurs, compressed air causes a violent explosion"
    ],
    "correct": 3,
    "explanation": "Air must be vented because air is compressible and stores significant energy under pressure. Water is virtually incompressible — if a failure occurs with only water, pressure drops instantly with minimal energy release."
  },
  {
    "id": 1035,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is 'hardness' in boiler feedwater?",
    "options": [
      "The amount of dissolved oxygen",
      "The total amount of suspended solids",
      "The pH level of the water",
      "The presence of dissolved calcium and magnesium salts that form scale"
    ],
    "correct": 3,
    "explanation": "Water hardness is caused by dissolved calcium and magnesium salts. In a boiler, these minerals precipitate as temperature increases, forming hard scale on heating surfaces."
  },
  {
    "id": 1036,
    "level": "special",
    "category": "Combustion",
    "question": "What is the significance of the 'three T's' of combustion?",
    "options": [
      "Time, testing, and temperature",
      "Temperature, turbulence, and time — the three factors that ensure complete combustion",
      "Throttle, thermostat, and timer",
      "Temperature, thrust, and torque"
    ],
    "correct": 1,
    "explanation": "The three T's: (1) Temperature — high enough to maintain ignition; (2) Turbulence — thorough mixing of fuel and air; (3) Time — sufficient residence time for complete burning."
  },
  {
    "id": 1037,
    "level": "special",
    "category": "ASME & Codes",
    "question": "ASME Section IV covers construction requirements for what type of boilers?",
    "options": [
      "Power boilers operating above 15 psig",
      "Nuclear power boilers",
      "Heating boilers — steam boilers ≤15 psig and hot water boilers ≤160 psig / 250°F",
      "Unfired pressure vessels"
    ],
    "correct": 2,
    "explanation": "ASME Section IV covers heating boilers: steam boilers at 15 psig or less, and hot water boilers at 160 psig or less and/or 250°F or less."
  },
  {
    "id": 1038,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the minimum number of safety valves required on a power boiler with more than 500 sq ft of heating surface?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 1,
    "explanation": "ASME Section I requires a minimum of two safety valves on any power boiler with more than 500 square feet of heating surface."
  },
  {
    "id": 1039,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "What is the relationship between psig and psia?",
    "options": [
      "psia = psig + 14.696 (at sea level)",
      "psia = psig - 14.696",
      "psia = psig × 2",
      "They are the same measurement"
    ],
    "correct": 0,
    "explanation": "psia = psig + 14.696 (atmospheric pressure at sea level). Gauge pressure reads zero at atmospheric pressure. Absolute pressure includes atmospheric pressure."
  },
  {
    "id": 1040,
    "level": "special",
    "category": "Layup & Maintenance",
    "question": "Dry layup of a boiler involves:",
    "options": [
      "Draining completely, drying the interior, and placing moisture-absorbing desiccant inside",
      "Filling the boiler with hot water at 200°F",
      "Keeping the boiler at minimum firing rate",
      "Leaving the boiler full of untreated water"
    ],
    "correct": 0,
    "explanation": "Dry layup: drain completely, dry interior surfaces, place trays of desiccant (silica gel or quicklime) inside, and seal all openings. Preferred for extended out-of-service periods."
  },
  {
    "id": 1041,
    "level": "special",
    "category": "Heat Transfer",
    "question": "Convection heat transfer in a boiler occurs when:",
    "options": [
      "Heat radiates from the flame directly",
      "Heat passes through the tube wall by conduction",
      "Hot combustion gases flow over and transfer heat to tube surfaces by fluid motion",
      "Steam condenses on cool surfaces"
    ],
    "correct": 2,
    "explanation": "Convection occurs when heat is transferred by the movement of a fluid. In a boiler, hot combustion gases flowing over tube surfaces transfer heat by convection."
  },
  {
    "id": 1042,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the purpose of a boiler logbook?",
    "options": [
      "To record visitor names entering the boiler room",
      "To record operating data, maintenance, tests, and unusual conditions for regulatory compliance",
      "To track fuel deliveries only",
      "To store warranty information"
    ],
    "correct": 1,
    "explanation": "A boiler logbook records all operating data, maintenance activities, safety device tests, chemical treatments, shift changes, and unusual conditions. It is a legal requirement and critical reference."
  },
  {
    "id": 1043,
    "level": "special",
    "category": "Piping & Valves",
    "question": "An OS&Y valve stands for what, and what advantage does it provide?",
    "options": [
      "Outside Screw and Yoke — the stem position visually indicates open or closed",
      "Overhead Safety Yoke — provides seismic protection",
      "Open System Yield — measures flow rate",
      "Oil Shutoff and Yield — used on fuel oil systems only"
    ],
    "correct": 0,
    "explanation": "OS&Y stands for Outside Screw and Yoke. The rising stem provides a clear visual indication of valve position: stem up = open, stem down = closed."
  },
  {
    "id": 1044,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is the main advantage of a water-tube boiler over a fire-tube boiler?",
    "options": [
      "Water-tube boilers are less expensive",
      "Water-tube boilers are simpler to operate",
      "Water-tube boilers can operate at much higher pressures and capacities",
      "Water-tube boilers require less water treatment"
    ],
    "correct": 2,
    "explanation": "Water-tube boilers can operate at much higher pressures and larger capacities because water is inside small-diameter tubes that resist high pressure more effectively than a large shell."
  },
  {
    "id": 1045,
    "level": "special",
    "category": "Safety Devices",
    "question": "What does FFRT stand for in burner management, and what is the maximum time for oil burners?",
    "options": [
      "Fuel Flow Rate Timer — maximum 10 seconds",
      "Furnace Flame Run Time — maximum 30 seconds",
      "Flame Failure Response Time — maximum 4 seconds for oil burners",
      "Fire Flash Reaction Timing — maximum 1 second"
    ],
    "correct": 2,
    "explanation": "FFRT stands for Flame Failure Response Time — the maximum time between loss of flame signal and closing of the fuel safety shutoff valve. For oil burners: maximum 4 seconds per CSD-1."
  },
  {
    "id": 1046,
    "level": "special",
    "category": "Water Level Control",
    "question": "The evaporation (slow-drain) test for a low water cutoff verifies what?",
    "options": [
      "That the feedwater pump can keep up with steam demand",
      "That the LWCO will shut off the burner when water drops to the cutoff point under actual conditions",
      "That the boiler can produce steam at full load",
      "That the safety valve lifts at the correct pressure"
    ],
    "correct": 1,
    "explanation": "The evaporation test verifies the LWCO actually shuts off the burner when water drops to the cutoff point. Feedwater is secured while the boiler fires, causing water to evaporate. Should be performed at least weekly."
  },
  {
    "id": 1047,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "What is the head pressure exerted by a column of water one foot tall?",
    "options": [
      "0.433 psi per foot of water",
      "1.0 psi per foot of water",
      "2.31 psi per foot of water",
      "14.7 psi per foot of water"
    ],
    "correct": 0,
    "explanation": "Water exerts 0.433 psi for every foot of vertical height. Conversely, 1 psi supports a column of water 2.31 feet high."
  },
  {
    "id": 1048,
    "level": "special",
    "category": "Combustion",
    "question": "What does high CO (carbon monoxide) in the flue gas indicate?",
    "options": [
      "Too much excess air",
      "Perfect combustion efficiency",
      "Incomplete combustion — not enough air or poor fuel-air mixing",
      "The stack temperature is too low"
    ],
    "correct": 2,
    "explanation": "High CO indicates INCOMPLETE combustion — fuel is not burning completely. Causes include insufficient air, poor fuel-air mixing, low combustion temperature, or burner malfunction."
  },
  {
    "id": 1049,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under Minnesota law, what defines a high-pressure (HP) steam boiler?",
    "options": [
      "A steam boiler operating above 15 psig",
      "A steam boiler operating above 100 psig",
      "A steam boiler with more than 50 BHP capacity",
      "Any boiler connected to a turbine"
    ],
    "correct": 0,
    "explanation": "A high-pressure steam boiler is defined as one operating above 15 psig. This 15 psig threshold is the dividing line between LP and HP steam boiler classifications."
  },
  {
    "id": 1050,
    "level": "special",
    "category": "Safety Valves",
    "question": "Safety valves on a boiler must be set to open at a pressure not exceeding:",
    "options": [
      "10% above the MAWP",
      "The maximum allowable working pressure (MAWP) of the boiler",
      "10 psi above the MAWP",
      "120% of the MAWP"
    ],
    "correct": 1,
    "explanation": "At least one safety valve must be set at or below the MAWP. If multiple valves exist, the highest-set valve may be up to 3% above MAWP, but one must be at or below MAWP."
  },
  {
    "id": 1051,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is 'carryover' in a steam boiler?",
    "options": [
      "Steam condensing in lines before reaching the process",
      "Heat carried from the furnace to the economizer",
      "Chemicals carried from the feedwater tank into the boiler",
      "Water droplets or dissolved/suspended solids carried out of the boiler with the steam"
    ],
    "correct": 3,
    "explanation": "Carryover is contamination of steam with water droplets and/or dissolved/suspended solids being carried out of the boiler. Causes include high water level, high TDS, excessive firing rate, and foaming."
  },
  {
    "id": 1052,
    "level": "special",
    "category": "Operating Procedures",
    "question": "Why should the boiler room be well-ventilated?",
    "options": [
      "To keep operators cool and comfortable",
      "To supply combustion air to the burner and prevent dangerous gas accumulation",
      "To reduce noise levels from the burner",
      "To prevent condensation on the boiler shell"
    ],
    "correct": 1,
    "explanation": "Adequate ventilation provides combustion air for the burner and prevents dangerous accumulation of fuel gases from leaks."
  },
  {
    "id": 1053,
    "level": "special",
    "category": "Draft Systems",
    "question": "Balanced draft uses what combination of fans?",
    "options": [
      "Two forced draft fans in parallel",
      "A forced draft fan pushing air in and an induced draft fan pulling gases out",
      "Two induced draft fans in series",
      "No fans — relies on stack effect"
    ],
    "correct": 1,
    "explanation": "Balanced draft uses both a forced draft (FD) fan on the air inlet and an induced draft (ID) fan on the flue gas outlet, maintaining the furnace at slight negative pressure."
  },
  {
    "id": 1054,
    "level": "special",
    "category": "ASME & Codes",
    "question": "What does the NBIC (National Board Inspection Code) govern?",
    "options": [
      "New boiler construction standards only",
      "Fuel quality standards",
      "Installation, inspection, and repair of boilers and pressure vessels after initial construction",
      "Electrical codes for boiler rooms"
    ],
    "correct": 2,
    "explanation": "The NBIC governs installation (Part 1), inspection (Part 2), and repair/alteration (Part 3) of boilers and pressure vessels AFTER initial construction."
  },
  {
    "id": 1055,
    "level": "special",
    "category": "Boiler Types",
    "question": "An HRT boiler stands for what type?",
    "options": [
      "High Resistance Thermal boiler",
      "High Rate Transfer boiler",
      "Heat Recovery Turbine boiler",
      "Horizontal Return Tubular boiler"
    ],
    "correct": 3,
    "explanation": "HRT stands for Horizontal Return Tubular boiler — a fire-tube design where combustion gases pass under the shell then return through the tubes. Largely replaced by Scotch Marine types."
  },
  {
    "id": 1056,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the purpose of a flame scanner (flame detector) on an automatically fired boiler?",
    "options": [
      "To measure flame temperature for efficiency",
      "To detect flame presence or absence and initiate safety shutdown on flame failure",
      "To control the fuel-air ratio",
      "To monitor flame color for smoke readings"
    ],
    "correct": 1,
    "explanation": "A flame scanner detects whether a flame is present. If flame is lost, the scanner signals the burner management system to close fuel safety shutoff valves within the FFRT. Types include UV, IR, and flame rod detectors."
  },
  {
    "id": 1057,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "If a boiler produces 345 pounds of steam per hour from and at 212°F, what is its output in BHP?",
    "options": [
      "345 BHP",
      "3.45 BHP",
      "10 BHP",
      "34.5 BHP"
    ],
    "correct": 2,
    "explanation": "BHP = steam output ÷ 34.5 lb/hr per BHP = 345 ÷ 34.5 = 10 BHP."
  },
  {
    "id": 1058,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the purpose of a water softener in external water treatment?",
    "options": [
      "To remove dissolved oxygen",
      "To filter out suspended particles",
      "To raise the pH of the water",
      "To remove hardness minerals (calcium and magnesium) before they enter the boiler"
    ],
    "correct": 3,
    "explanation": "A water softener removes hardness minerals through ion exchange, replacing calcium and magnesium with sodium ions. This prevents scale formation."
  },
  {
    "id": 1059,
    "level": "special",
    "category": "Steam Generation",
    "question": "What is 'saturated steam'?",
    "options": [
      "Steam that contains maximum moisture",
      "Steam at atmospheric pressure only",
      "Steam heated above saturation temperature",
      "Steam at the temperature corresponding to its pressure — any heat loss causes condensation"
    ],
    "correct": 3,
    "explanation": "Saturated steam is at the exact temperature and pressure where any heat loss causes condensation. At 100 psig, saturated steam is approximately 338°F."
  },
  {
    "id": 1060,
    "level": "special",
    "category": "Operating Procedures",
    "question": "If a boiler has been out of service, what must be checked BEFORE refilling with water?",
    "options": [
      "The color of the refractory",
      "That all drains, vents, and inspection openings are closed, and the fireside is inspected",
      "That the fuel supply pressure is correct",
      "That the stack damper is fully open"
    ],
    "correct": 1,
    "explanation": "Before refilling: inspect the fireside for debris or damage; ensure all drains, blowdown valves, and inspection openings are properly closed with good gaskets."
  },
  {
    "id": 1061,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What is the purpose of a blowdown valve on a boiler?",
    "options": [
      "To control steam flow to the process",
      "To vent air during filling",
      "To regulate feedwater flow",
      "To allow controlled removal of concentrated boiler water, sludge, and sediment"
    ],
    "correct": 3,
    "explanation": "The blowdown valve is at the lowest point of the boiler. It allows controlled removal of concentrated water, sludge, and sediment. Bottom blowdown removes settled sludge; surface blowdown skims dissolved solids."
  },
  {
    "id": 1062,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is a water column on a boiler?",
    "options": [
      "A vertical pipe connected to the boiler that houses the gauge glass, try cocks, and LWCO",
      "The height of water above the boiler feed pump",
      "A column of water inside the boiler tubes",
      "A chemical treatment injection point"
    ],
    "correct": 0,
    "explanation": "A water column is a vertical chamber connected to the boiler at the steam and water spaces. It provides a calm location for mounting gauge glasses, try cocks, and the low water cutoff."
  },
  {
    "id": 1063,
    "level": "special",
    "category": "Boiler Testing",
    "question": "What is the purpose of an accumulation test on a boiler?",
    "options": [
      "To verify safety valve(s) can relieve steam fast enough to prevent pressure rising more than 6% above MAWP",
      "To test how much water the boiler can hold",
      "To determine fuel consumption rate",
      "To measure scale accumulation"
    ],
    "correct": 0,
    "explanation": "An accumulation test verifies that safety valve(s) have sufficient capacity. The boiler fires at maximum rate with the main steam stop closed. Pressure must not exceed 6% above MAWP for power boilers."
  },
  {
    "id": 1064,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "What is the renewal fee for a Minnesota boiler operator license?",
    "options": [
      "No fee",
      "$20",
      "Same as the exam fee",
      "$40"
    ],
    "correct": 3,
    "explanation": "The renewal fee is $40, payable every two years. This is separate from the initial examination fee of $50."
  },
  {
    "id": 1065,
    "level": "special",
    "category": "Combustion",
    "question": "What is the approximate percentage of oxygen in atmospheric air?",
    "options": [
      "78%",
      "50%",
      "21%",
      "10%"
    ],
    "correct": 2,
    "explanation": "Atmospheric air contains approximately 21% oxygen, 78% nitrogen, and about 1% other gases. Only the oxygen supports combustion."
  },
  {
    "id": 1066,
    "level": "special",
    "category": "Water Level Control",
    "question": "A probe-type (electrode) low water cutoff detects water level by measuring:",
    "options": [
      "The weight of water on a sensor",
      "The electrical conductivity between probes — water conducts, steam/air does not",
      "The temperature difference between probe and water",
      "Ultrasonic reflections from the water surface"
    ],
    "correct": 1,
    "explanation": "Probe-type LWCOs work on conductivity. When water drops below the probe tip, the circuit breaks, triggering the cutoff. No moving parts, but must be kept clean."
  },
  {
    "id": 1067,
    "level": "special",
    "category": "Boiler Types",
    "question": "An electric boiler generates steam or hot water using what heat source?",
    "options": [
      "Electric resistance elements or electrode immersion heating",
      "Electric spark ignition of natural gas",
      "Induction heating of the boiler shell",
      "Solar-powered electric panels"
    ],
    "correct": 0,
    "explanation": "Electric boilers use resistance elements or electrode-type heating. They produce no combustion gases, require no stack, and are 99%+ efficient at point of use."
  },
  {
    "id": 1068,
    "level": "special",
    "category": "Safety Valves",
    "question": "A safety valve set at 125 psig has what ASME tolerance range?",
    "options": [
      "±2 psi (123 to 127 psig)",
      "±5 psi (120 to 130 psig)",
      "±3% (121.25 to 128.75 psig)",
      "±10 psi (115 to 135 psig)"
    ],
    "correct": 2,
    "explanation": "For set pressures 71–300 psig, the ASME tolerance is ±3%. At 125 psig: 125 × 0.03 = 3.75 psi. The valve must open between 121.25 and 128.75 psig."
  },
  {
    "id": 1069,
    "level": "special",
    "category": "Heat Transfer",
    "question": "Scale deposits on boiler tube surfaces act as:",
    "options": [
      "Heat conductors improving efficiency",
      "Flow enhancers improving circulation",
      "Corrosion inhibitors protecting tube metal",
      "Thermal insulation that reduces heat transfer and can cause tube overheating"
    ],
    "correct": 3,
    "explanation": "Scale acts as thermal INSULATION. Even thin scale measurably reduces heat transfer. The tube metal temperature rises, potentially causing blistering, bulging, or rupture."
  },
  {
    "id": 1070,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the proper sequence for bringing an additional boiler online to a common steam header?",
    "options": [
      "Open the main steam stop valve fully, then light the burner",
      "Open the blowdown valve first, then light the burner",
      "Light the burner at maximum and immediately open the stop valve",
      "Light the burner, raise pressure to match header pressure, then slowly open the main steam stop valve"
    ],
    "correct": 3,
    "explanation": "Raise pressure to match header pressure, then slowly open the stop valve. Never open with a large pressure differential — this causes water hammer."
  },
  {
    "id": 1071,
    "level": "special",
    "category": "Piping & Valves",
    "question": "Why should a gate valve never be used for throttling?",
    "options": [
      "Gate valves are too expensive for throttling",
      "Gate valves are only rated for cold water",
      "Gate valves cannot physically be opened partially",
      "The partially open disc causes wire-drawing erosion and vibration damage"
    ],
    "correct": 3,
    "explanation": "Gate valves used partially open experience wire-drawing erosion. The disc also vibrates in the flow stream, accelerating wear. Use globe valves for throttling."
  },
  {
    "id": 1072,
    "level": "special",
    "category": "ASME & Codes",
    "question": "What information must be displayed on a boiler nameplate?",
    "options": [
      "The operator's name and license number",
      "The fuel type and burner manufacturer",
      "The MAWP, serial number, year built, manufacturer, and ASME stamp",
      "The insurance company and policy number"
    ],
    "correct": 2,
    "explanation": "A boiler nameplate must display MAWP, serial number, year built, manufacturer's name, heating surface area, ASME Code stamp, and National Board registration number."
  },
  {
    "id": 1073,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is TDS in water treatment?",
    "options": [
      "Total Dissolved Solids — concentration of all dissolved minerals and chemicals, measured in ppm",
      "Temperature-Dependent Softening",
      "Thermal Deaeration System",
      "Total Drain Sequence"
    ],
    "correct": 0,
    "explanation": "TDS stands for Total Dissolved Solids — the sum of all dissolved minerals, salts, and chemicals in water, measured in ppm. Blowdown controls TDS levels."
  },
  {
    "id": 1074,
    "level": "special",
    "category": "Steam Generation",
    "question": "What happens to the boiling point of water as pressure increases?",
    "options": [
      "The boiling point increases as pressure increases",
      "The boiling point decreases",
      "It remains at 212°F regardless of pressure",
      "Pressure has no effect on boiling point"
    ],
    "correct": 0,
    "explanation": "The boiling point increases with increasing pressure. At 0 psig: 212°F. At 100 psig: approximately 338°F. At 300 psig: approximately 421°F. This relationship is shown in steam tables."
  },
  {
    "id": 1075,
    "level": "special",
    "category": "Combustion",
    "question": "What is the product of complete combustion of natural gas (methane)?",
    "options": [
      "Carbon monoxide and hydrogen",
      "Oxygen and nitrogen",
      "Nitrogen dioxide and sulfur dioxide",
      "Carbon dioxide and water vapor"
    ],
    "correct": 3,
    "explanation": "Complete combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O. The products are carbon dioxide and water vapor. Incomplete combustion produces CO and soot."
  },
  {
    "id": 1076,
    "level": "special",
    "category": "Safety Devices",
    "question": "Per CSD-1, what is the minimum pre-purge time in air changes?",
    "options": [
      "4 air changes of the fireside volume",
      "1 air change",
      "10 air changes",
      "No minimum — only 30 seconds required"
    ],
    "correct": 0,
    "explanation": "CSD-1 requires a minimum of 4 air changes during pre-purge before any ignition attempt. This sweeps out residual combustible gases."
  },
  {
    "id": 1077,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "One BHP equals how many BTU per hour?",
    "options": [
      "10,000 BTU/hr",
      "100,000 BTU/hr",
      "33,479 BTU/hr",
      "3,412 BTU/hr"
    ],
    "correct": 2,
    "explanation": "One BHP = 33,479 BTU/hr = 34.5 lb/hr steam from and at 212°F. Do not confuse with mechanical horsepower (746 watts = 2,545 BTU/hr)."
  },
  {
    "id": 1078,
    "level": "special",
    "category": "Layup & Maintenance",
    "question": "Which type of layup is recommended for a boiler out of service less than 30 days?",
    "options": [
      "Dry layup with desiccant",
      "Nitrogen blanket layup only",
      "No layup needed for under 30 days",
      "Wet layup — filled completely with chemically treated water"
    ],
    "correct": 3,
    "explanation": "Wet layup is recommended for short-term periods (under 30 days). The boiler is filled completely with treated water. For longer periods, dry layup is preferred."
  },
  {
    "id": 1079,
    "level": "special",
    "category": "Draft Systems",
    "question": "What is the unit of measurement for draft pressure in a boiler system?",
    "options": [
      "Pounds per square inch (psi)",
      "Inches of water gauge (in. w.g.)",
      "Inches of mercury (in. Hg)",
      "Bar"
    ],
    "correct": 1,
    "explanation": "Draft pressure is measured in inches of water gauge (in. w.g.) because the pressures are very small. Typical furnace draft is -0.05 to -0.10 in. w.g."
  },
  {
    "id": 1080,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What should an operator do if the pressure gauge disagrees with the safety valve lifting pressure?",
    "options": [
      "Adjust the safety valve to match the gauge",
      "Ignore the discrepancy",
      "Assume the pressure gauge is wrong — recalibrate or replace it; never adjust a certified safety valve",
      "Increase the MAWP on the nameplate"
    ],
    "correct": 2,
    "explanation": "Safety valves are factory-set and sealed. The pressure gauge should be tested against a known-accurate test gauge and recalibrated or replaced as needed."
  },
  {
    "id": 1081,
    "level": "special",
    "category": "Boiler Types",
    "question": "What is natural circulation in a water-tube boiler?",
    "options": [
      "Water pumped through tubes by a circulation pump",
      "Water flowing by gravity from an elevated tank",
      "Steam circulated by the forced draft fan",
      "Heated water (less dense) rises while cooler water (denser) descends, creating continuous flow without a pump"
    ],
    "correct": 3,
    "explanation": "Natural circulation occurs because heated water becomes less dense and rises, while cooler denser water flows downward to replace it, creating continuous circulation without pumping."
  },
  {
    "id": 1082,
    "level": "special",
    "category": "Safety Devices",
    "question": "What pressure instrument should be compared to the boiler's operating gauge to verify accuracy?",
    "options": [
      "A test gauge (calibrated reference gauge)",
      "The safety valve nameplate pressure",
      "A thermometer reading",
      "The fuel gas pressure gauge"
    ],
    "correct": 0,
    "explanation": "A test gauge (calibrated reference gauge) should be periodically connected to verify the operating gauge's accuracy."
  },
  {
    "id": 1083,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "How many BTU are needed to raise 100 pounds of water from 60°F to 212°F?",
    "options": [
      "100 BTU",
      "21,200 BTU",
      "15,200 BTU",
      "97,030 BTU"
    ],
    "correct": 2,
    "explanation": "BTU = weight × temperature rise = 100 × (212 - 60) = 100 × 152 = 15,200 BTU of sensible heat."
  },
  {
    "id": 1084,
    "level": "special",
    "category": "Water Treatment",
    "question": "What type of corrosion is caused by dissolved oxygen in boiler water?",
    "options": [
      "Pitting corrosion — localized deep holes in the metal surface",
      "Uniform thinning of the entire shell",
      "Caustic embrittlement of welds only",
      "Galvanic corrosion between different metals"
    ],
    "correct": 0,
    "explanation": "Dissolved oxygen causes PITTING corrosion — localized deep holes. Pitting is dangerous because a small pit can penetrate the wall before damage is visually obvious. Deaeration and sodium sulfite prevent it."
  },
  {
    "id": 1085,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under Minnesota rules, the operator's license must be displayed where?",
    "options": [
      "In a conspicuous place in the boiler room where it is readily visible",
      "In the plant manager's office",
      "In the operator's personal locker",
      "Filed with the DLI — no display required"
    ],
    "correct": 0,
    "explanation": "Minnesota rules require the license to be displayed in a conspicuous place in the boiler room where it is readily visible."
  },
  {
    "id": 1086,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What is a 'non-return valve' on a boiler?",
    "options": [
      "A valve on the blowdown line preventing backflow",
      "A combination stop-check valve on the steam outlet preventing steam backflow from the header",
      "A valve on the fuel line preventing fuel backflow",
      "A vent valve on top of the boiler"
    ],
    "correct": 1,
    "explanation": "A non-return valve is a combination stop-check valve on the boiler steam outlet. It prevents steam from the header from flowing back into a lower-pressure boiler."
  },
  {
    "id": 1087,
    "level": "special",
    "category": "Boiler Testing",
    "question": "What water temperature range should be used for a hydrostatic test?",
    "options": [
      "32°F to 50°F",
      "100°F to 120°F",
      "180°F to 212°F",
      "Any temperature is acceptable"
    ],
    "correct": 1,
    "explanation": "Hydrostatic test water should be 100°F to 120°F. Too cold risks brittle fracture; too hot makes it difficult to hold steady pressure and obscures leak detection."
  },
  {
    "id": 1088,
    "level": "special",
    "category": "Heat Transfer",
    "question": "Soot deposits on the fireside of boiler tubes cause what problem?",
    "options": [
      "They improve heat transfer",
      "They have no significant effect",
      "They prevent corrosion",
      "They insulate the tubes, reducing heat transfer and increasing stack temperature"
    ],
    "correct": 3,
    "explanation": "Soot deposits insulate tubes, reducing heat transfer and causing stack temperatures to rise (wasted heat). Regular soot blowing removes these deposits."
  },
  {
    "id": 1089,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What is the danger of adding cold feedwater to an overheated boiler?",
    "options": [
      "The cold water will put out the fire",
      "Cold water on overheated metal causes instant steam generation (thermal shock), potentially causing catastrophic failure",
      "The cold water will crack the gauge glass",
      "The cold water will dilute chemicals"
    ],
    "correct": 1,
    "explanation": "Cold water contacts red-hot metal, instantly flashing to steam with approximately 1,600 times expansion. This sudden pressure spike can cause catastrophic failure of weakened metal."
  },
  {
    "id": 1090,
    "level": "special",
    "category": "ASME & Codes",
    "question": "What ASME Section covers welding qualifications and procedures?",
    "options": [
      "Section I",
      "Section IV",
      "Section V",
      "Section IX"
    ],
    "correct": 3,
    "explanation": "ASME Section IX covers Welding, Brazing, and Fusing Qualifications. All welding on code boilers must be performed by Section IX qualified welders."
  },
  {
    "id": 1091,
    "level": "special",
    "category": "Combustion",
    "question": "What is indicated by dark smoke from the stack when burning fuel oil?",
    "options": [
      "Excellent combustion",
      "Boiler overfired",
      "Stack temperature too high",
      "Incomplete combustion — insufficient air, poor atomization, or burner problems"
    ],
    "correct": 3,
    "explanation": "Dark smoke indicates incomplete combustion. Causes include insufficient air, poor atomization, low combustion temperature, or burner malfunction."
  },
  {
    "id": 1092,
    "level": "special",
    "category": "Safety Devices",
    "question": "How many gauge glasses are required on a high-pressure boiler?",
    "options": [
      "One",
      "Two (or one gauge glass plus try cocks)",
      "Three",
      "None — try cocks are sufficient"
    ],
    "correct": 1,
    "explanation": "ASME Section I requires at least two means of indicating water level. This is typically two gauge glasses, or one gauge glass plus try cocks."
  },
  {
    "id": 1093,
    "level": "special",
    "category": "Boiler Calculations",
    "question": "A boiler has a MAWP of 150 psig. What is the maximum primary safety valve set pressure?",
    "options": [
      "150 psig",
      "165 psig",
      "159 psig",
      "175 psig"
    ],
    "correct": 0,
    "explanation": "At least one safety valve must be set at or below the MAWP. The primary valve cannot exceed 150 psig."
  },
  {
    "id": 1094,
    "level": "special",
    "category": "Water Treatment",
    "question": "What is the function of a deaerator in a boiler feedwater system?",
    "options": [
      "To soften water by removing calcium",
      "To filter suspended particles",
      "To remove dissolved gases (primarily O2 and CO2) by heating to saturation temperature",
      "To add chemicals to feedwater"
    ],
    "correct": 2,
    "explanation": "A deaerator removes dissolved gases by heating water to saturation temperature, making gases insoluble so they can be vented. Most effective method of mechanical oxygen removal."
  },
  {
    "id": 1095,
    "level": "special",
    "category": "Steam Generation",
    "question": "What is 'superheat' in steam terminology?",
    "options": [
      "Steam above 500 psig",
      "The maximum temperature a boiler can achieve",
      "The heat content of water before it boils",
      "The temperature of steam ABOVE its saturation temperature at a given pressure"
    ],
    "correct": 3,
    "explanation": "Superheat is the degrees the steam temperature exceeds saturation temperature. Steam at 100 psig (338°F saturation) heated to 538°F has 200°F of superheat."
  },
  {
    "id": 1096,
    "level": "special",
    "category": "MN Statutes & Rules",
    "question": "Under MN rules, can a Special Engineer operate a high-pressure boiler?",
    "options": [
      "Yes, up to 100 psig",
      "Yes, but only as a shift engineer",
      "No — a Special Engineer is limited to low-pressure plants only",
      "Yes, but only during daytime hours"
    ],
    "correct": 2,
    "explanation": "A Special Engineer license authorizes operation of LOW-PRESSURE boiler plants only. To operate HP boilers, a minimum 2nd Class license is required."
  },
  {
    "id": 1097,
    "level": "special",
    "category": "Piping & Valves",
    "question": "What is the purpose of a steam trap?",
    "options": [
      "To trap and contain steam leaks",
      "To remove condensate and non-condensable gases while preventing live steam from escaping",
      "To regulate steam pressure",
      "To filter impurities from steam"
    ],
    "correct": 1,
    "explanation": "A steam trap removes condensate and non-condensable gases while preventing live steam from escaping. Failed traps waste significant energy."
  },
  {
    "id": 1098,
    "level": "special",
    "category": "Boiler Types",
    "question": "In a water-tube boiler, where does the water flow?",
    "options": [
      "Around the outside of the tubes",
      "Inside the tubes, with hot gases around the outside",
      "Through the shell only",
      "Through the stack"
    ],
    "correct": 1,
    "explanation": "In a water-tube boiler, water flows INSIDE the tubes and hot gases flow around the OUTSIDE. Small-diameter tubes resist high pressure effectively."
  },
  {
    "id": 1099,
    "level": "special",
    "category": "Safety Devices",
    "question": "What is the high limit control on an automatically fired boiler?",
    "options": [
      "A control limiting maximum firing rate",
      "A control limiting maximum water level",
      "A control limiting maximum water temperature",
      "A safety control that shuts off the burner if pressure exceeds a set maximum — requires manual reset"
    ],
    "correct": 3,
    "explanation": "The high limit control shuts off the burner if pressure exceeds the set maximum. Unlike the operating control, it requires MANUAL RESET so the operator investigates the cause."
  },
  {
    "id": 1100,
    "level": "special",
    "category": "Operating Procedures",
    "question": "What should be communicated during a shift change between boiler operators?",
    "options": [
      "Only the current steam pressure",
      "Status of all boilers, problems, maintenance in progress, water treatment status, and pending work",
      "Only whether the boiler is running or not",
      "The weather forecast"
    ],
    "correct": 1,
    "explanation": "A thorough shift change covers all boiler status, abnormal conditions, maintenance, water treatment, safety test results, and management instructions. Incomplete turnover is a leading cause of incidents."
  }
];

// Total questions in this file: 280
// Answer distribution — A:71  B:71  C:69  D:69
