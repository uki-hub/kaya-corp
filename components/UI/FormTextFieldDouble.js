import { TextField, Container, InputAdornment } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

const FormTextFieldDouble = React.forwardRef(function _(
  { icon, label1, label2, type1, type2, initializeValue1, initializeValue2 },
  ref
) {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();

  const textFieldRef1 = useRef();
  const textFieldRef2 = useRef();

  const textFieldChangeHandler1 = (e) => setValue1(e.target.value);
  const textFieldChangeHandler2 = (e) => setValue2(e.target.value);

  useImperativeHandle(ref, () => {
    return {
      value1: value1,
      value2: value2,
      focus1: textFieldRef1.current.focus,
      focus2: textFieldRef2.current.focus,
    };
  });

  useEffect(() => {
    setValue1(initializeValue1);
    setValue2(initializeValue2);
  }, [initializeValue1, initializeValue2]);

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
          value={value1}
          id="outlined-basic"
          label={label1}
          variant="outlined"
          fullWidth
          placeholder="12345678"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+62</InputAdornment>
            ),
          }}
          onChange={textFieldChangeHandler1}
        />
      </div>
      <div className="col pl-1">
        <TextField
          inputRef={textFieldRef2}
          type={type2}
          value={value2}
          id="outlined-basic"
          label={label2}
          variant="outlined"
          fullWidth
          placeholder="12345678"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+62</InputAdornment>
            ),
          }}
          onChange={textFieldChangeHandler2}
        />
      </div>
    </div>
  );
});

export default FormTextFieldDouble;
