import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "../styles/pdfStyles";
import Footer from "../components/Footer";
import PDFPage from "../components/PDFPage";

export default function Page3_Price({ d }) {
  return (
    <PDFPage>
      <View style={pdfStyles.section}>
        <Text style={[pdfStyles.bold, pdfStyles.underline]}>
          PRICE SCHEDULE
        </Text>
      </View>

      <View style={pdfStyles.section}>
        <Text>Dear Sir/Madam,</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text>
          We agree to supply ONE No “Altis Elevator” —{" "}
          {d.capacityShort || "6 Persons, 408 Kg"} for your building at{" "}
          {d.projectLocation || "Vijayawada"}.
        </Text>
      </View>

      <View style={pdfStyles.mt10}>
        <Text style={pdfStyles.bold}>Commercial Terms & Conditions:</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text>
          <Text style={pdfStyles.bold}>Price: </Text>
          {d.price || "Rs. 9,00,000/-"}
        </Text>

        <Text>
          <Text style={pdfStyles.bold}>Taxes: </Text>
          {d.taxes || "5% GST Included"}
        </Text>

        <Text>
          <Text style={pdfStyles.bold}>Packing: </Text>
          {d.packingForwarding || "4% Included"}
        </Text>

        <Text>
          <Text style={pdfStyles.bold}>Delivery: </Text>
          {d.delivery || "1 Month from PO"}
        </Text>

        <Text>
          <Text style={pdfStyles.bold}>Transport: </Text>
          {d.transport || "Included"}
        </Text>

        <Text>
          <Text style={pdfStyles.bold}>Guarantee: </Text>
          {d.guarantee || "12 Months"}
        </Text>
      </View>

      <View style={pdfStyles.mt10}>
        <Text style={pdfStyles.bold}>Terms of Payment:</Text>
      </View>

      <View style={pdfStyles.section}>
        <Text>{d.payAdvance || "35%"} Advance</Text>
        <Text>{d.payDispatch || "55%"} Against Material Ready</Text>
        <Text>{d.payCompletion || "10%"} On Completion</Text>
      </View>

      <View style={pdfStyles.mt20}>
        <Text>Accepted by:</Text>
        <Text>Name: {d.customerName}</Text>
        <Text>Date: {d.acceptanceDate}</Text>
      </View>

      <Footer data={d} />
    </PDFPage>
  );
}
