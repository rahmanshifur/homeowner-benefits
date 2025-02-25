import React, { useState } from "react";
import { Box, RadioGroup, Typography } from "@mui/material";
import Heading from "../ui/Heading";
import PrimaryBtn from "../ui/PrimaryBtn";
import CustomInput from "../ui/CustomInput";
import CustomRadio from "../ui/CustomRadio";
import { useNavigate } from "react-router-dom";

const StepFive = ({ formData }) => {
  const [contact, setContact] = useState(formData.contact || "");
  const [callTime, setCallTime] = useState(formData.callTime || "");
  const [loading, setLoading] = useState(formData.loading || "");
  const [success, setSuccess] = useState(formData.callTime || "");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact && callTime) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
          setTimeout(() => {
            navigate("/thank-you");
        }, 600); 
      }, 1000); 
    }
  };

  return (
    <Box sx={{ position: "relative", padding: 3 }}>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)", 
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.3s ease-in-out",
            backdropFilter: "blur(1px)", 
          }}
        />
      )}
      <Heading text="One last Thing..." size="large" />
      <form onSubmit={handleSubmit}>
        <Box>
          <Heading text="Contact *" size="large" />
          <CustomInput
            required
            placeholder="Phone Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Box>
        <Box>
          <Heading text="Preferred time of calling? *" size="large" />
          <RadioGroup value={callTime} onChange={(e) => setCallTime(e.target.value)}>
            <CustomRadio value="9 AM - 11 AM" label="9 AM - 11 AM" />
            <CustomRadio value="6 PM - 8 PM" label="6 PM - 8 PM" />
            <CustomRadio value="I’m available to pick anytime" label="I’m available to pick anytime" />
          </RadioGroup>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3, mb: 2 }}>
          <PrimaryBtn text="Submit" type="submit" disabled={loading} />
        </Box>
        {success && (
        <Typography color="green" sx={{ mt: 2 }}>
         Form Successfully submitted! 
        </Typography>
      )}
      </form>
    </Box>
  );
};

export default StepFive;
