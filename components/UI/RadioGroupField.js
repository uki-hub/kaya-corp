import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useImperativeHandle, useState } from "react";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const RadioGroupField = React.forwardRef(function _(
  { data, icon, label, defaultValue },
  ref
) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useImperativeHandle(ref, () => {
    return {
      value: selectedValue,
    };
  });

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
            className="m-0"
          >
            {label}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={selectedValue}
            name="radio-buttons-group"
            row
          >
            {data.map((d) => (
              <FormControlLabel
                key={d.id}
                value={d.id}
                label={d.value}
                onClick={() => setSelectedValue(d.id)}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
});

export default RadioGroupField;
