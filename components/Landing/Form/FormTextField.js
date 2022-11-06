import { TextField, Container } from "@mui/material";
import React from "react";

const FormTextField = ({ ref, icon, label }) => {
  return (
    <div className="row mb-3">
      <div className="col-1-sm" style={{ alignSelf: "center" }}>
        {React.createElement(icon, {style: { color: "grey", fontSize: "35px" }})}
      </div>
      <div className="col">
        <TextField
          ref={ref}
          id="outlined-basic"
          label={label}
          variant="outlined"
          fullWidth
        />
      </div>
    </div>
  );
};

export default FormTextField;
