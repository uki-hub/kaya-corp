import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useImperativeHandle, useRef, useState } from "react";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const DropdownMenuField = React.forwardRef(function _(
  { data, icon, label, defaultValue, onChange },
  ref
) {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? "");

  useImperativeHandle(ref, () => {
    return {
      value: selectedValue,
    };
  });

  const onChangeHandler = (value) => {
    setSelectedValue(value);
    if (onChange) onChange(value);
  };

  // if (!data) return null;

  return (
    <div className="row mb-3 align-items-center">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label={label}
            value={selectedValue}
            disabled={data == null}
          >
            
            {data && data.map((d) => (
              <MenuItem
                key={d.id}
                value={d.id}
                onClick={() => onChangeHandler(d.id)}
              >
                {d.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
});

export default DropdownMenuField;
