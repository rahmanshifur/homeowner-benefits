import { Box, TextField } from "@mui/material";

const CustomInput = ({
  placeholder,
  name,
  multiline,
  rows,
  onChange,
  value,
  required,
  type
}) => {
  return (
    <Box width={"100%"}>
      <TextField
        type={type}
        multiline={multiline}
        rows={rows}
        fullWidth
        size="small"
        placeholder={placeholder}
        name={name}
        required={required}
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: "40px",
            ".MuiOutlinedInput-notchedOutline":{
              borderColor:'black'
            },
            
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "black", 
            },
          },
          "& .MuiOutlinedInput-input": {
            "::placeholder":{fontSize:'16px'},
            fontSize: { xs: "12px", sm: "14px" },
            padding:'.5rem 1rem'
          },
        }}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default CustomInput;
