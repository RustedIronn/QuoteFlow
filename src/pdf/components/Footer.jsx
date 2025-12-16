import { View, Text } from "@react-pdf/renderer";
import { pdfStyles } from "../styles/pdfStyles";

export default function Footer({ data }) {
  return (
    <View style={pdfStyles.footerLine}>
      <Text>Date: {data.footerDate || ""}</Text>
      <Text>Executive: {data.executiveName || ""}</Text>
      <Text>Customer: {data.customerName || ""}</Text>
    </View>
  );
}
