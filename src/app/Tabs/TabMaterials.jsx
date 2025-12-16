import MaterialSelect from "../components/MaterialSelect";
import { materialOptions } from "../../data/materialOptions";

export default function TabMaterials({ form, update }) {
  return (
    <div className="tab-content">
      {materialOptions.map((item) => (
        <MaterialSelect
          key={item.field}
          label={item.label}
          value={form[item.field]}
          onChange={(v) => update(item.field, v)}
          options={item.options}
        />
      ))}
    </div>
  );
}
