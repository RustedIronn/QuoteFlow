export default function Input({ label, value, onChange, className }) {
  return (
    <div className={`input-group ${className || ""}`}>
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
