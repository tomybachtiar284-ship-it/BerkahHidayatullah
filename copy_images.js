const fs = require('fs');
const path = require('path');

const sourceDir = "C:\\Users\\MyBook Hype AMD\\.gemini\\antigravity\\brain\\8de5b220-efdb-4aa0-a46c-c817e12d7461";
const destDir = path.join(__dirname, 'public');

const filesToCopy = [
  // f1
  { src: "engine_overhaul_1778237829622.png", dest: "engine_overhaul.png" },
  { src: "hydraulic_repair_1778237852605.png", dest: "hydraulic_repair.png" },
  { src: "undercarriage_repair_1778237871179.png", dest: "undercarriage_repair.png" },
  { src: "preventive_maintenance_1778237892355.png", dest: "preventive_maintenance.png" },
  { src: "electrical_troubleshooting_1778237909322.png", dest: "electrical_troubleshooting.png" },
  { src: "transmission_overhaul_1778237928878.png", dest: "transmission_overhaul.png" },
  { src: "welding_fabrication_1778237949374.png", dest: "welding_fabrication.png" },
  { src: "ac_cabin_service_1778237976301.png", dest: "ac_cabin_service.png" },
  { src: "general_inspection_1778237996653.png", dest: "general_inspection.png" },
  { src: "emergency_breakdown_1778238017790.png", dest: "emergency_breakdown.png" },
  // f2
  { src: "bahan_bangunan_1778238753279.png", dest: "bahan_bangunan.png" },
  { src: "atk_1778238773251.png", dest: "atk.png" },
  { src: "epurchasing_1778238792549.png", dest: "epurchasing.png" },
  { src: "supply_chain_1778238814624.png", dest: "supply_chain.png" },
  { src: "medical_devices_1778238838037.png", dest: "medical_devices.png" },
  { src: "industrial_spareparts_1778238858341.png", dest: "industrial_spareparts.png" },
  { src: "agricultural_tools_1778238878385.png", dest: "agricultural_tools.png" }
];

filesToCopy.forEach(file => {
  const sourcePath = path.join(sourceDir, file.src);
  const destPath = path.join(destDir, file.dest);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied: ${file.dest}`);
  } else {
    console.error(`Not found: ${sourcePath}`);
  }
});

console.log("Image copying complete!");
