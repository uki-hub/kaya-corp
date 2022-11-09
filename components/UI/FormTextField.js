import { TextField, Container } from "@mui/material";
import React, { useImperativeHandle, useRef } from "react";

const FormTextField = React.forwardRef(function _(
  { type, icon, label, style },
  ref
) {
  const textFieldRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      value: textFieldRef.current.value,
      focus: textFieldRef.current.focus,
    };
  });

  return (
    <div className="row mb-3" style={style}>
      <div className="col-1-sm" style={{ alignSelf: "center" }}>
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <TextField
          ref={textFieldRef}
          id="outlined-basic"
          type={type}
          label={label}
          variant="outlined"
          fullWidth
        />
      </div>
    </div>
  );
});

export default FormTextField;
