import { useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Tabs from "./components/Tabs";
import QuotationPDF from "../pdf/QuotationPDF.jsx";

import TabCustomerInfo from "./Tabs/TabCustomerInfo.jsx";
import TabLiftSpecs from "./Tabs/TabLiftSpecs.jsx";
import TabMaterials from "./Tabs/TabMaterials.jsx";
import TabPricing from "./Tabs/TabPricing.jsx";
import TabReview from "./Tabs/TabReview.jsx";

import "../css/App.css";
import "../css/tabs.css";
import "../css/form.css";

export default function App() {
  const [tab, setTab] = useState(1);

  const [form, setForm] = useState({ /* same form state */ });

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container">
      <h1 className="title">Altis Quotation Generator</h1>

      <Tabs
        tab={tab}
        setTab={setTab}
        labels={["Customer Info", "Lift Specs", "Materials", "Pricing", "Review + PDF"]}
      />

      {tab === 1 && <TabCustomerInfo form={form} update={update} />}
      {tab === 2 && <TabLiftSpecs form={form} update={update} />}
      {tab === 3 && <TabMaterials form={form} update={update} />}
      {tab === 4 && <TabPricing form={form} update={update} />}

      {tab === 5 && (
        <div className="tab-content center">
          <PDFViewer style={{ width: "100%", height: "600px" }}>
            <QuotationPDF data={form} />
          </PDFViewer>

          <PDFDownloadLink document={<QuotationPDF data={form} />} fileName="Quotation.pdf">
            {({ loading }) =>
              <button className="btn">{loading ? "Generating..." : "Download PDF"}</button>
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
