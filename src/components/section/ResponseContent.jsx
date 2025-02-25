import { Box } from "@mui/material";
import React from "react";
import Heading from "../ui/Heading";
import PrimaryBtn from "../ui/PrimaryBtn";
import { useNavigate } from "react-router-dom";

function ResponseContent() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <Box bgcolor={"#FFF"} padding={"30px"} borderRadius={"24px"}>
      <Heading
        text={"Thank you for your response"}
        size="xl"
        sx={{ textAlign: "center", lineHeight: "1.3em" }}
      />
      <hr style={{ margin: "20px 0px" }} />
      <Box padding={"0px 15px"}>
        <Heading
          text={"You're about to save estimated 18,000 USD."}
          sx={{ fontSize: { xs: "16px" } }}
        />
        <Heading
          text={"We’ll contact with you soon with proper credentials."}
          sx={{ fontSize: { xs: "16px" } }}
        />
        <Box mt={4} display={"flex"} justifyContent={"center"}>
          <PrimaryBtn
            sx={{ padding: "12px 50px", textAlign: "center" }}
            text="Back To Home"
            onClick={handleClick}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ResponseContent;
