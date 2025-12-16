import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import QuotationPDF from "../../pdf/QuotationPDF.jsx";

export default function TabReview({ form }) {
  return (
    <div className="tab-content center" style={{ flexDirection: "column", gap: 20 }}>
      <h3>Review & Download</h3>

      <PDFViewer style={{ width: "100%", height: "600px", borderRadius: "10px" }}>
        <QuotationPDF data={form} />
      </PDFViewer>

      <PDFDownloadLink document={<QuotationPDF data={form} />} fileName="Quotation.pdf">
        {({ loading }) =>
          <button className="btn">{loading ? "Generating..." : "Download PDF"}</button>
        }
      </PDFDownloadLink>
    </div>
  );
}
