import { TextField, Container } from "@mui/material";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import DaScroll, { scrollTo } from "../../lib/DaScroll";

const FormTextField = React.forwardRef(function _(
  { type, icon, label, style, initializeValue },
  ref
) {
  const [value, setValue] = useState(initializeValue);

  const textFieldRef = useRef();

  const textFieldChangeHandler = (e) => {
    setValue(e.target.value);
  };

  useImperativeHandle(ref, () => {
    return {
      value: value,
      focus: () => {
        DaScroll(textFieldRef?.current?.id, () =>
          textFieldRef?.current?.focus()
        );
      },
    };
  });

  useEffect(() => {
    setValue(initializeValue);
  }, [initializeValue]);

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
          value={value}
          type={type}
          label={label}
          variant="outlined"
          fullWidth
          onChange={textFieldChangeHandler}
        />
      </div>
    </div>
  );
});

export default FormTextField;
