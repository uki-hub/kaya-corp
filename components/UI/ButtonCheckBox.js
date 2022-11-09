import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const ButtonCheckBox = ({ data, initSelectedValue, label }) => {
  const [selectedValue, setSelectedValue] = useState(initSelectedValue);

  const checkBoxHandler = (value) => setSelectedValue(value);

  return (
    <div className="checkbox-groups">
      <FormControl component="fieldset" variant="standard" fullWidth>
        <FormLabel component="legend">{label}</FormLabel>
        <div>
          {data.map((d) => (
            <Button
              key={d.value}
              className="mr-3"
              variant={d.value == selectedValue ? "contained" : "outlined"}
              size="medium"
              onClick={() => checkBoxHandler(d.value)}
            >
              {d.label}
            </Button>
          ))}
        </div>
      </FormControl>
    </div>
  );
};

export default ButtonCheckBox;
