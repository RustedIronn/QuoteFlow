import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "../styles/pdfStyles";
import { tableStyles } from "../styles/tableStyles";
import Footer from "../components/Footer";
import PDFPage from "../components/PDFPage";

export default function Page2_Installation({ d }) {
  return (
    <PDFPage>
      <View>
        <Text style={[pdfStyles.bold, pdfStyles.center, pdfStyles.underline]}>
          NEW ELEVATOR INSTALLATION
        </Text>
      </View>

      <View style={tableStyles.table}>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Quantity & Type:</Text>
          <Text style={tableStyles.cellValue}>
            {d.quantityType || "1 No Altis Lift – SS Small Vision Power Operated Door Lift"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Capacity:</Text>
          <Text style={tableStyles.cellValue}>
            {d.capacity || "6 Persons – Maximum Load – 408 Kgs"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Speed:</Text>
          <Text style={tableStyles.cellValue}>{d.speed || "0.80 mtr/sec"}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Travel Height:</Text>
          <Text style={tableStyles.cellValue}>{d.travelHeight || "G + 4"}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>No of Floors:</Text>
          <Text style={tableStyles.cellValue}>
            {d.numFloors || "Ground + 4 Upper landings – 5 Stops"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>No of Landings:</Text>
          <Text style={tableStyles.cellValue}>
            {d.numLandings || "Ground + 4 Upper landings – 5 Stops"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Shaft Measurement</Text>
          <Text style={tableStyles.cellValue}>{d.shaftMeasurement || ""}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Car Size</Text>
          <Text style={tableStyles.cellValue}>{d.carSize || ""}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Entrance door frame</Text>
          <Text style={tableStyles.cellValue}>{d.entranceDoorFrame || "SS Doorframes"}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Type & Design of Car</Text>
          <Text style={tableStyles.cellValue}>{d.carType || "SS Cabin"}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Type of Car protection</Text>
          <Text style={tableStyles.cellValue}>
            {d.carProtection || "SS Small Vision Power Operated Door"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Type of Landing protection</Text>
          <Text style={tableStyles.cellValue}>
            {d.landingProtection || "SS Small Vision Power Operated Door"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Cabin Cutting</Text>
          <Text style={tableStyles.cellValue}>
            {d.cabinCutting || "CNC Cutting, Fall Ceiling, Blower Cutting"}
          </Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Cabin opening</Text>
          <Text style={tableStyles.cellValue}>{d.cabinOpening || ""}</Text>
        </View>

        <View style={tableStyles.row}>
          <Text style={tableStyles.cellLabel}>Power Supply (M/C Room)</Text>
          <Text style={tableStyles.cellValue}>
            {d.powerSupplyMachineRoom || "3 Phase, 420V, 50Hz"}
          </Text>
        </View>

        <View style={tableStyles.rowNoBorderBottom}>
          <Text style={tableStyles.cellLabel}>LIFT WELL</Text>
          <Text style={tableStyles.cellValue}>
            {d.powerSupplyLiftWell || "1 Phase, 230V, 50Hz"}
          </Text>
        </View>
      </View>

      {/* Additional Features */}
      <View style={[pdfStyles.mt20]}>
        <Text style={pdfStyles.bold}>ADDITIONAL FEATURES AS PER SITE REQUIREMENT:</Text>
      </View>

      <View style={tableStyles.table}>
        <View style={tableStyles.row}>
          <Text style={tableStyles.tableSingleRowLabel}>Safety</Text>
          <Text style={tableStyles.tableSingleRowValue}>
            Emergency Alarm, STOP, Floor Indication, Up & Down Arrows
          </Text>
        </View>

        <View style={tableStyles.rowNoBorderBottom}>
          <Text style={tableStyles.tableSingleRowLabel}>Face Plate</Text>
          <Text style={tableStyles.tableSingleRowValue}>
            Stainless Steel Push Box Covers with Button
          </Text>
        </View>
      </View>

      <Footer data={d} />
    </PDFPage>
  );
}
