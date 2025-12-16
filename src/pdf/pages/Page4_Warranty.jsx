import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "../styles/pdfStyles";
import Footer from "../components/Footer";
import PDFPage from "../components/PDFPage";

export default function Page4_Warranty({ d }) {
  return (
    <PDFPage>
      <View style={pdfStyles.section}>
        <Text style={[pdfStyles.bold, pdfStyles.underline]}>WARRANTY</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>1) Guarantee</Text>
        <Text>
          One-year guarantee or 15 months from dispatch, covering repair/replacement
          except vandalism, water damage, rats, high voltage, or storms.
        </Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>2) Free Service</Text>
        <Text>Free service every 45 days for the first 12 months.</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>Cancellation of Contract</Text>
        <Text>A) 10% before GA drawings</Text>
        <Text>B) 25% within 1 month of GA approval</Text>
        <Text>C) 40% after 4 months</Text>
        <Text>D) 90% after material delivered</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>Termination</Text>
        <Text>Rules for delay less than 75 weeks, revised offers, refusal penalties.</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.bold}>Title to Property</Text>
        <Text>All material remains company property until full payment.</Text>
      </View>

      <Footer data={d} />
    </PDFPage>
  );
}
