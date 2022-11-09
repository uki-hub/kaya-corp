import { TextField, Container, InputAdornment } from "@mui/material";
import React, { useImperativeHandle, useRef, useState } from "react";

const FormTextFieldDouble = React.forwardRef(function _(
  { icon, label1, label2, type1, type2 },
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
    <div className="row mb-3 align-items-center">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col pr-1">
        <TextField
          inputRef={textFieldRef1}
          type={type1}
          id="outlined-basic"
          label={label1}
          variant="outlined"
          fullWidth
          placeholder="12345678"
          InputProps={{
            startAdornment: <InputAdornment position="start">+62</InputAdornment>,
          }}
          onBlur={_f}
        />
      </div>
      <div className="col pl-1">
        <TextField
          inputRef={textFieldRef2}
          type={type2}
          id="outlined-basic"
          label={label2}
          variant="outlined"
          fullWidth
          placeholder="12345678"
          InputProps={{
            startAdornment: <InputAdornment position="start">+62</InputAdornment>,
          }}
          onBlur={_f}
        />
      </div>
    </div>
  );
});

export default FormTextFieldDouble;
