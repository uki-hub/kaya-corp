import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React from "react";

const RadioGroupField = ({ ref, icon, label }) => {
  return (
    <div className="row">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            style={{
              margin: "0px !important",
            }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default RadioGroupField;
