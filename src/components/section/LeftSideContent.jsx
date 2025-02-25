import { Box, List, Typography } from "@mui/material";
import React from "react";

function LeftSideContent() {
  const benefits = [
    "Experience Lower Electricity Bills with Solar Power",
    "Clean Energy Independence. Invest in a Greener Future",
    "Transform Your Roof into a Revenue Stream. Monetize Surplus Solar Energy Through Grid Export",
  ];
  return (
    <Box>
      <Typography
        component="h2"
        fontSize={{ xs: "28px", sm: "59px" }}
        sx={{ fontWeight: "700", mb: 5 }}
        lineHeight={"1.3em"}
      >
        Power Your Home. Empower Your Future. Switch to Solar Today!
      </Typography>
      <Box sx={{ textAlign: "left", mb: 8 }}>
        {benefits.map((benefit, index) => (
          <Typography
            component={"li"}
            key={index}
            fontSize={{ xs: "13px", sm: "16px" }}
          >
            {benefit}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default LeftSideContent;
