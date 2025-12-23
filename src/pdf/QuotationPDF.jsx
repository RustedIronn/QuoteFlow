import { Document } from "@react-pdf/renderer";
import Page1_Cover from "./pages/Page1_Cover";
import Page2_Installation from "./pages/Page2_Installation";
import Page3_Price from "./pages/Page3_Price";
import Page4_Warranty from "./pages/Page4_Warranty";
import Page5_Material from "./pages/Page5_Material";
import Page6_Obligations from "./pages/Page6_Obligations";
import { resolveLiftData } from "../data/resolveLiftData";

export default function QuotationPDF({ data }) {
  const raw = data || {};

  const d = raw.modelId
    ? resolveLiftData(raw.modelId, raw)
    : raw;

  return (
    <Document>
      <Page1_Cover d={d} />
      <Page2_Installation d={d} />
      <Page3_Price d={d} />
      <Page4_Warranty d={d} />
      <Page5_Material d={d} />
      <Page6_Obligations d={d} />
    </Document>
  );
}
