import "./styles.css";

function Size({ onChange, label, value }) {
  return (
    <div className="container-size-input">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e, label)} />
    </div>
  );
}

export default Size;
