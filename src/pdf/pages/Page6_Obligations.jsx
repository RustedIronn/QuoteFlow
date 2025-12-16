import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "../styles/pdfStyles";
import Footer from "../components/Footer";
import PDFPage from "../components/PDFPage";

export default function Page6_Obligations({ d }) {
  return (
    <PDFPage>
      <View style={pdfStyles.section}>
        <Text style={[pdfStyles.bold, pdfStyles.underline]}>
          CUSTOMER CONTRACT OBLIGATIONS
        </Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>OURS:</Text>
        <Text>• Supply, erection & commissioning of lift</Text>
        <Text>• Provide GA Drawings & Maintenance Manual</Text>
        <Text>• Regular communication</Text>
        <Text>• Periodic inspection/service</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>CUSTOMER:</Text>
        <Text>• Complete civil works (shaft, machine room, pit etc.)</Text>
        <Text>• Provide storage space & technician conditions</Text>
        <Text>• Ensure site cleanliness & lighting</Text>
        <Text>• Handle electricity & local fees</Text>
        <Text>• Provide hoisting beams/hooks</Text>
        <Text>• Cover openings safely</Text>
        <Text>• Co-operate for smooth completion</Text>
      </View>

      <Footer data={d} />
    </PDFPage>
  );
}
