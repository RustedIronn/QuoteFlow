import Input from "../components/Input";

export default function TabPricing({ form, update }) {
  return (
    <div className="tab-content">
      <Input label="Short Capacity" value={form.capacityShort} onChange={(v) => update("capacityShort", v)} />
      <Input label="Project Location" value={form.projectLocation} onChange={(v) => update("projectLocation", v)} className="full" />
      <Input label="Price" value={form.price} onChange={(v) => update("price", v)} />
      <Input label="Taxes" value={form.taxes} onChange={(v) => update("taxes", v)} />
      <Input label="Packing/Forwarding" value={form.packingForwarding} onChange={(v) => update("packingForwarding", v)} />
      <Input label="Delivery Timeline" value={form.delivery} onChange={(v) => update("delivery", v)} />
      <Input label="Transport" value={form.transport} onChange={(v) => update("transport", v)} />
      <Input label="Guarantee" value={form.guarantee} onChange={(v) => update("guarantee", v)} />
      <Input label="Advance %" value={form.payAdvance} onChange={(v) => update("payAdvance", v)} />
      <Input label="Dispatch %" value={form.payDispatch} onChange={(v) => update("payDispatch", v)} />
      <Input label="Completion %" value={form.payCompletion} onChange={(v) => update("payCompletion", v)} />
      <Input label="Customer Acceptance Date" value={form.acceptanceDate} onChange={(v) => update("acceptanceDate", v)} className="full" />
    </div>
  );
}
