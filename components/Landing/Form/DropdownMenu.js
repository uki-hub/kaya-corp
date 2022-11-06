import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

const DropdownMenu = ({ ref, icon, label }) => {
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
          <Select ref={ref} labelId="demo-simple-select-label" label={label}>
            <MenuItem value={1}>S</MenuItem>
            <MenuItem value={2}>M</MenuItem>
            <MenuItem value={3}>L</MenuItem>
            <MenuItem value={4}>XL</MenuItem>
            <MenuItem value={5}>XXL</MenuItem>
            <MenuItem value={6}>XXXL</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default DropdownMenu;
