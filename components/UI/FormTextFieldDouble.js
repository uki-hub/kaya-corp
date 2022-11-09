import { TextField, Container } from "@mui/material";
import React, { useImperativeHandle, useRef, useState } from "react";

const FormTextFieldDouble = React.forwardRef(function _(
  { icon, label1, label2 },
  ref
) {
  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const textFieldRef1 = useRef();
  const textFieldRef2 = useRef();

  useImperativeHandle(ref, () => {
    return {
      value1: textFieldRef1.current.value,
      value2: textFieldRef2.current.value,
      focus1: textFieldRef1.current.focus,
      focus2: textFieldRef2.current.focus,
    };
  });

  return (
    <div className="row mb-3">
      <div className="col-1-sm" style={{ alignSelf: "center" }}>
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <TextField
          inputRef={textFieldRef1}
          id="outlined-basic"
          label={label1}
          variant="outlined"
          fullWidth
          onBlur={_f}
        />
      </div>
      <div className="col">
        <TextField
          inputRef={textFieldRef2}
          id="outlined-basic"
          label={label2}
          variant="outlined"
          fullWidth
          onBlur={_f}
        />
      </div>
    </div>
  );
});

export default FormTextFieldDouble;
