import { TextField, Container } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const FormTextField = React.forwardRef(function _(
  { type, icon, label, style },
  ref
) {
  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const textFieldRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      value: textFieldRef.current.value,
      focus: textFieldRef.current.focus,
    };
  });
 

  return (
    <div className="row mb-3 align-items-center" style={style}>
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <TextField
          inputRef={textFieldRef}
          type={type}
          label={label}
          variant="outlined"
          fullWidth
          onBlur={_f}
        />
      </div>
    </div>
  );
});

export default FormTextField;
