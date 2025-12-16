export default function Tabs({ tab, setTab, labels }) {
  return (
    <div className="tabs">
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => setTab(i + 1)}
          className={tab === i + 1 ? "active" : ""}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
