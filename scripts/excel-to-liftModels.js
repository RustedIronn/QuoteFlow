import fs from "fs";
import xlsx from "xlsx";

// CHANGE THIS PATH IF NEEDED
const EXCEL_PATH = "C:\\Quote-Gen\\Quote-Gen\\scripts\\lift models.xlsx";

// 1️⃣ Read Excel
const workbook = xlsx.readFile(EXCEL_PATH);
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// 2️⃣ Read sheet as raw rows (array-of-arrays)
const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

// 3️⃣ Skip header row
const dataRows = rows.slice(1);

const models = {};

dataRows.forEach((row) => {
  const id = row[0];
  if (!id) return;

  const typeOfLift = row[2] || "";
  const speed = row[3] || "";
  const carProtection = row[4] || "";
  const doorFrame = row[5] || "";
  const landingProtection = row[12] || carProtection;

  models[id] = {
    label: typeOfLift || `Model ${id}`,

    quantityType:
      `1 No Altis Lift – ${typeOfLift}`.trim(),

    speed: speed,

    entranceDoorFrame: doorFrame,

    carType: "SS Cabin",

    carProtection: carProtection,

    landingProtection: landingProtection,

    powerSupplyMachineRoom: "M/C ROOM",

    powerSupplyLiftWell:
      "3 Phases, 420 VOLTS, 50 CYCLES AC\n1 Phase, 230 VOLTS, 50 CYCLES AC",

    additionalSafety:
      "Emergency Alarm, Emergency STOP, & floor indication, UP & DOWN arrows",

    facePlate:
      "Stainless steel push box covers with button"
  };
});

// 4️⃣ Write output file
const output = `export const LIFT_MODELS = ${JSON.stringify(
  models,
  null,
  2
)};`;

fs.writeFileSync("src/data/liftModels.js", output);

console.log(
  `✅ Generated ${Object.keys(models).length} lift models`
);
