import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useImperativeHandle, useRef, useState } from "react";

// data: [{
//     value: 'p',
//     label: 'Pria'
// }]
const DropdownMenuField = React.forwardRef(function _(
  { data, icon, label, defaultSelectedValue },
  ref
) {
  const [selectedValue, setSelectedValue] = useState(
    defaultSelectedValue ?? ""
  );

  useImperativeHandle(ref, () => {
    return {
      value: selectedValue,
    };
  });

  if (!data) return null;

  return (
    <div className="row mb-3">
      <div className="col-1-sm">
        {React.createElement(icon, {
          style: { color: "grey", fontSize: "35px" },
        })}
      </div>
      <div className="col">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            value={selectedValue}
            labelId="demo-simple-select-label"
            label={label}
          >
            {data.map((d) => (
              <MenuItem
                key={d.id}
                value={d.id}
                onClick={() => setSelectedValue(d.id)}
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
