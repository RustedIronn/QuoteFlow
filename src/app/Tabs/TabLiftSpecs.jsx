import Input from "../components/Input";

export default function TabLiftSpecs({ form, update }) {
  return (
    <div className="tab-content">
      <Input label="Quantity & Type" value={form.quantityType} onChange={(v) => update("quantityType", v)} />
      <Input label="Capacity" value={form.capacity} onChange={(v) => update("capacity", v)} />
      <Input label="Speed" value={form.speed} onChange={(v) => update("speed", v)} />
      <Input label="Travel Height" value={form.travelHeight} onChange={(v) => update("travelHeight", v)} />
      <Input label="No. of Floors" value={form.numFloors} onChange={(v) => update("numFloors", v)} />
      <Input label="No. of Landings" value={form.numLandings} onChange={(v) => update("numLandings", v)} />
      <Input label="Shaft Measurement" value={form.shaftMeasurement} onChange={(v) => update("shaftMeasurement", v)} className="full" />
      <Input label="Car Size" value={form.carSize} onChange={(v) => update("carSize", v)} />
      <Input label="Entrance Door Frame" value={form.entranceDoorFrame} onChange={(v) => update("entranceDoorFrame", v)} />
      <Input label="Car Type" value={form.carType} onChange={(v) => update("carType", v)} />
      <Input label="Car Protection" value={form.carProtection} onChange={(v) => update("carProtection", v)} />
      <Input label="Landing Protection" value={form.landingProtection} onChange={(v) => update("landingProtection", v)} />
      <Input label="Cabin Cutting" value={form.cabinCutting} onChange={(v) => update("cabinCutting", v)} />
      <Input label="Cabin Opening" value={form.cabinOpening} onChange={(v) => update("cabinOpening", v)} />
      <Input label="Power Supply (Machine Room)" value={form.powerSupplyMachineRoom} onChange={(v) => update("powerSupplyMachineRoom", v)} />
      <Input label="Power Supply (Lift Well)" value={form.powerSupplyLiftWell} onChange={(v) => update("powerSupplyLiftWell", v)} />
    </div>
  );
}
