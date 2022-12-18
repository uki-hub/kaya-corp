const LabelForm = ({
  label,
  text,
  labelWidth,
  labelStyle,
  textStyle,
  style,
}) => {
  return (
    <div style={{ display: "flex", width: "100%", ...style }}>
      <div style={{ display: "flex", width: labelWidth ?? "20%" }}>
        <label
          style={{
            fontWeight: "bold",
            color: "#888",
            userSelect: "none",
            ...labelStyle,
          }}
        >
          {label}
        </label>
        <label
          style={{
            marginLeft: "auto",
            marginRight: "5px",
            fontWeight: "bold",
            color: "#888",
            userSelect: "none",
          }}
        >
          :
        </label>
      </div>
      <div>
        <label style={{ color: "#888888", ...textStyle }}>{text}</label>
      </div>
    </div>
  );
};

export default LabelForm;
