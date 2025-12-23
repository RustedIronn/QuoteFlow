import Input from "../components/Input";
import { LIFT_MODELS } from "../../data/liftModels";

export default function TabLiftSpecs({ form, update }) {
  const model = LIFT_MODELS[form.modelId];

  return (
    <div className="tab-content">

      {/* ===================== */}
      {/* MODEL SELECT */}
      {/* ===================== */}
      <div className="input-group">
        <label>Lift Model</label>
        <select
          value={form.modelId || ""}
          onChange={(e) => {
            const id = e.target.value;
            update("modelId", id);

            // COMPANY STANDARD DEFAULTS
            update("capacity", "6 Persons – Maximum Load- 408 Kgs");
            update("travelHeight", "G + 4");
            update(
              "numFloors",
              "Ground + 4 Upper landings – 5 Stops"
            );
            update(
              "numLandings",
              "Ground + 4 Upper landings – 5 Stops"
            );
            update(
              "cabinCutting",
              "CNC Cutting, Designing Fall Ceiling, With Blower Cutting"
            );
          }}
        >
          <option value="">Select a model</option>
          {Object.entries(LIFT_MODELS).map(([id, m]) => (
            <option key={id} value={id}>
              {m.label || `Model ${id}`}
            </option>
          ))}
        </select>
      </div>

      {/* ===================== */}
      {/* MODEL-LOCKED FIELDS */}
      {/* ===================== */}
      <Input label="Quantity & Type" value={model?.quantityType || ""} disabled />
      <Input label="Speed" value={model?.speed || ""} disabled />
      <Input label="Entrance Door Frame" value={model?.entranceDoorFrame || ""} disabled />
      <Input label="Car Type" value={model?.carType || ""} disabled />
      <Input label="Car Protection" value={model?.carProtection || ""} disabled />
      <Input label="Landing Protection" value={model?.landingProtection || ""} disabled />
      <Input label="Power Supply (Machine Room)" value={model?.powerSupplyMachineRoom || ""} disabled />
      <Input label="Power Supply (Lift Well)" value={model?.powerSupplyLiftWell || ""} disabled />

      {/* ===================== */}
      {/* USER-EDITABLE FIELDS */}
      {/* ===================== */}
      <Input label="Capacity" value={form.capacity || ""} onChange={(v) => update("capacity", v)} />
      <Input label="Travel Height" value={form.travelHeight || ""} onChange={(v) => update("travelHeight", v)} />
      <Input label="No. of Floors" value={form.numFloors || ""} onChange={(v) => update("numFloors", v)} />
      <Input label="No. of Landings" value={form.numLandings || ""} onChange={(v) => update("numLandings", v)} />
      <Input label="Shaft Measurement" value={form.shaftMeasurement || ""} onChange={(v) => update("shaftMeasurement", v)} className="full" />
      <Input label="Car Size" value={form.carSize || ""} onChange={(v) => update("carSize", v)} />
      <Input label="Cabin Opening" value={form.cabinOpening || ""} onChange={(v) => update("cabinOpening", v)} />
      <Input label="Cabin Cutting" value={form.cabinCutting || ""} onChange={(v) => update("cabinCutting", v)} />
    </div>
  );
}
