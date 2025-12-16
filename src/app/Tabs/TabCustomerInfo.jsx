import Input from "../components/Input";

export default function TabCustomerInfo({ form, update }) {
  return (
    <div className="tab-content">
      <Input label="Reference Number" value={form.refNo} onChange={(v) => update("refNo", v)} />
      <Input label="Reference Date" value={form.refDate} onChange={(v) => update("refDate", v)} />
      <Input label="Customer Street" value={form.customerStreet} onChange={(v) => update("customerStreet", v)} className="full" />
      <Input label="Area" value={form.customerArea} onChange={(v) => update("customerArea", v)} />
      <Input label="City" value={form.customerCity} onChange={(v) => update("customerCity", v)} />
      <Input label="Attention (Name)" value={form.attention} onChange={(v) => update("attention", v)} />
      <Input label="Subject" value={form.subject} onChange={(v) => update("subject", v)} className="full" />
      <Input label="Executive Name" value={form.executiveName} onChange={(v) => update("executiveName", v)} />
      <Input label="Footer Date" value={form.footerDate} onChange={(v) => update("footerDate", v)} />
      <Input label="Customer Name" value={form.customerName} onChange={(v) => update("customerName", v)} className="full" />
    </div>
  );
}
