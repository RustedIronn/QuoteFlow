import { StyleSheet } from "@react-pdf/renderer";

export const pdfStyles = StyleSheet.create({
  page: {
    paddingTop: 45,          // premium document margins
    paddingBottom: 45,
    paddingHorizontal: 30,
    fontSize: 10,
    lineHeight: 1.5          // better reading flow for justified text
  },

  // Global text justification for regular paragraphs
  justifyText: {
    textAlign: "justify"
  },

  bold: { fontWeight: "bold" },
  underline: { textDecoration: "underline" },
  center: { textAlign: "center" },

  section: {
    marginBottom: 12        // slightly more breathing room between sections
  },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  mb10: { marginBottom: 10 },

  headerCompanyName: {
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 4
  },
  headerSubtitle: {
    fontSize: 9,
    textAlign: "center",
    marginBottom: 12
  },

  footerLine: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 9
  },
});
