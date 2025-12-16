import { Text, View } from "@react-pdf/renderer";
import PDFPage from "../components/PDFPage";
import { pdfStyles } from "../styles/pdfStyles";

export default function Page5_Material({ d }) {
  // 12 Material rows (label + chosen option)
  const materialRows = [
    ["Micro Processor Controller", d.controller],
    ["Cabin Type", d.cabin],
    ["Door Type", d.doorType],
    ["Flooring", d.flooring],
    ["Rope", d.rope],
    ["LOP/COP", d.lopCop],
    ["Lighting", d.lighting],
    ["Indicators", d.indicators],
    ["Safety", d.safety],
    ["Motor", d.motor],
    ["Guide Rails", d.guideRails],
    ["Auto Rescue Device", d.rescueDevice],
  ];

  return (
    <PDFPage>
      {/* Title */}
      <View style={pdfStyles.section}>
        <Text style={[pdfStyles.bold, pdfStyles.underline]}>
          MATERIAL USED BY ALTIS ELEVATORS
        </Text>
      </View>

      {/* Dynamic Material Selections */}
      <View style={pdfStyles.section}>
        {materialRows.map(([label, value], i) => (
          <Text key={i} style={{ fontSize: 10, marginBottom: 3 }}>
            {`${i + 1}. ${label}: `}
            <Text style={{ fontWeight: 600 }}>
              {value ? value : "Not Selected"}
            </Text>
          </Text>
        ))}
      </View>

      {/* Shared Footer */}
      <View style={pdfStyles.footerSpace} />
    </PDFPage>
  );
}
