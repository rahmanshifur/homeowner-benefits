import React from "react";
import { Box, Typography } from "@mui/material";
const Header = () => {
  return (
    <Box sx={{ backgroundColor: "transparent", color: "#fff" }}>
      <Typography
        fontSize={{ xs: "16px", sm: "24px" }}
        marginBottom={{ xs: 3 }}
      >
        Homeowners <br /> Benefit
      </Typography>
    </Box>
  );
};

export default Header;
