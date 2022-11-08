import { TextField, Container } from "@mui/material";
import React from "react";

const FormTextField = React.forwardRef(({ type, icon, label, style }, ref) => {
  return (
    <div className="row mb-3" style={style}>
      <div className="col-1-sm" style={{ alignSelf: "center" }}>
        {React.createElement(icon, {style: { color: "grey", fontSize: "35px" }})}
      </div>
      <div className="col">
        <TextField
          ref={ref}
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
