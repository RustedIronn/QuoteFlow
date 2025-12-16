import { Text, View, Image } from "@react-pdf/renderer";
import PDFPage from "../components/PDFPage";

export default function Page1_Cover({ d }) {
  return (
    <PDFPage>
      {/* LEFT GREEN SIDEBAR */}
      <View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 20,
          backgroundColor: "#1b5e20",
        }}
      />

      {/* LEFT LOGO PLACEHOLDER (BIG CIRCLE LOGO LIKE ORIGINAL) */}
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 85,
          height: 85,
        }}
      >
        <Image src="/logo.svg" style={{ width: 90, height: 90 }} />
      </View>

      {/* ISO TOP-RIGHT */}
      <Text
        style={{
          position: "absolute",
          top: 25,
          right: 25,
          fontSize: 8,
        }}
      >
        ISO 9001: 2015 CERTIFIED COMPANY
      </Text>

      {/* MAIN CONTENT AREA */}
      <View style={{ marginTop: 150, marginHorizontal: 60 }}>
        {/* REF + DATE */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Ref: </Text>
            {d.refNo || "AE/QUO/XXXX/YYYY"}
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Date: </Text>
            {d.refDate || "__.__.____"}
          </Text>
        </View>

        {/* ADDRESS BLOCK */}
        <View style={{ marginTop: 12 }}>
          <Text>{d.customerStreet}</Text>
          <Text>{d.customerArea}</Text>
          <Text>{d.customerCity}</Text>
        </View>

        {/* KIND ATTENTION */}
        <View style={{ marginTop: 12, textAlign: "center" }}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Kind Attention: </Text>
            {d.attention}
          </Text>
        </View>

        {/* SUBJECT */}
        <View style={{ marginTop: 12 }}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Sub: </Text>
            {d.subject}
          </Text>
        </View>

        {/* BODY TEXT */}
        <View style={{ marginTop: 15, fontSize: 11, lineHeight: 1.4 }}>
          <Text>Dear Sir,</Text>

          <Text style={{ marginTop: 8 }}>
            As discussed with you, we trust our offer will receive your favorable
            consideration and acceptance. In this connection we wish to inform you
            that the lift we have offered is completely of indigenous make.
          </Text>

          <Text style={{ marginTop: 8 }}>
            We have trained and experienced personnel capable of giving satisfactory
            after sales service. Further, we keep a reasonable good stock of spare
            parts, which will be of considerable assistance to us in rendering
            prompt service to our lifts when required.
          </Text>

          <Text style={{ marginTop: 8 }}>
            We trust you will find our offer quite competitive and in case you
            require any further clarification, please do communicate with us.
          </Text>

          <Text style={{ marginTop: 8 }}>
            We assure you for fulfillment of best service.
          </Text>

          <Text style={{ marginTop: 15 }}>Thanking You,</Text>

          <Text style={{ marginTop: 12 }}>Yours Faithfully,</Text>
          <Text style={{ marginTop: 5 }}>For ALTIS ELEVATORS</Text>

          <Text style={{ marginTop: 25 }}>Authorized Signatory</Text>
        </View>
      </View>

      {/* FOOTER GRID (FULL-WIDTH YELLOW STRIP) */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 20, // RIGHT beside green bar
          right: 0,
          height: 75,
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#000",
        }}
      >
        {/* BOX 1 */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffcc00",
            padding: 6,
            borderRightWidth: 1,
            borderColor: "#000",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 8 }}># 5-247/4/1</Text>
          <Text style={{ fontSize: 8 }}>Jinkalwada,</Text>
          <Text style={{ fontSize: 8 }}>IDA Balanagar,</Text>
          <Text style={{ fontSize: 8 }}>Hyderabad- 500 037</Text>
          <Text style={{ fontSize: 8 }}>Telangana</Text>
        </View>

        {/* BOX 2 */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffcc00",
            padding: 6,
            borderRightWidth: 1,
            borderColor: "#000",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 8 }}>#54-16-1/22, Plot No. 44</Text>
          <Text style={{ fontSize: 8 }}>Road No. 1, Central Excise Colony,</Text>
          <Text style={{ fontSize: 8 }}>Near Vinayaka Theatre,</Text>
          <Text style={{ fontSize: 8 }}>Vijayawada – 520 008. A.P., India.</Text>
          <Text style={{ fontSize: 8 }}>Ph.: 0866 - 2452022</Text>
        </View>

        {/* BOX 3 */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffcc00",
            padding: 6,
            borderRightWidth: 1,
            borderColor: "#000",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 8 }}># D. No. 4-4-169,</Text>
          <Text style={{ fontSize: 8 }}>Chandramouli Nagar, 5/2,</Text>
          <Text style={{ fontSize: 8 }}>Opp. Sakkubai Complex,</Text>
          <Text style={{ fontSize: 8 }}>Guntur - 522007</Text>
        </View>

        {/* BOX 4 */}
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffcc00",
            padding: 6,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 8 }}>+91 99590 11234</Text>
          <Text style={{ fontSize: 8 }}>Info.altiselevators@gmail.com</Text>
          <Text style={{ fontSize: 8 }}>www.altiselevators.com</Text>
          <Text style={{ fontSize: 8 }}>Toll Free: 1800 833 2345</Text>
        </View>
      </View>
    </PDFPage>
  );
}
