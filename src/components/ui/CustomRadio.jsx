import React from "react";
import { Radio, FormControlLabel } from "@mui/material";


const CustomRadio  = ({ label,value, ...props }) => {
  return (
    <FormControlLabel
    sx={{color:'#000',}}
      control={<Radio {...props} sx={{padding:'3px', fontSize:'10px'}}/>}
      label={label}
      value={value}
    />
  );
};

export default CustomRadio;
