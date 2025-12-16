import { Page, View, Image } from "@react-pdf/renderer";
import { pdfStyles } from "../styles/pdfStyles";

export default function PDFPage({ children }) {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <View
        style={{
          position: "absolute",
          top: "30%",
          left: "25%",
          width: "50%",
          opacity: 0.25,
          zIndex: -1,
        }}
      >
        <Image src="/watermark.png?test=123" style={{ width: "100%" }} />
      </View>

      {children}
    </Page>
  );
}
