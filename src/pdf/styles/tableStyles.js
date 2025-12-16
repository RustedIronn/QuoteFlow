import { StyleSheet } from "@react-pdf/renderer";

export const tableStyles = StyleSheet.create({
  table: {
    display: "flex",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    flexDirection: "column",
    marginTop: 10
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid"
  },
  rowNoBorderBottom: {
    flexDirection: "row"
  },
  cellLabel: {
    width: "35%",
    borderRightWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    padding: 4,
    fontWeight: "bold"
  },
  cellValue: {
    width: "65%",
    padding: 4
  },
  tableSingleRowLabel: {
    width: "20%",
    borderRightWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    padding: 4,
    fontWeight: "bold"
  },
  tableSingleRowValue: {
    width: "80%",
    padding: 4
  }
});
