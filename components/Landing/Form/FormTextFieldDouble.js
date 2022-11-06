import { TextField, Container } from "@mui/material";
import React from "react";

const FormTextFieldDouble = ({ icon, ref1, ref2, label1, label2 }) => {
  return (
    <div className="row mb-3">
      <div className="col-1-sm" style={{ alignSelf: "center" }}>
        {React.createElement(icon, {style: { color: "grey", fontSize: "35px" }})}
      </div>
      <div className="col">
        <TextField
          ref={ref1}
          id="outlined-basic"
          label={label1}
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="col">
        <TextField
          ref={ref2}
          id="outlined-basic"
          label={label2}
          variant="outlined"
          fullWidth
        />
      </div>
    </div>
  );
};

export default FormTextFieldDouble;
