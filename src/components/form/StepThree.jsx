import React, { useState } from "react";
import { RadioGroup, Box } from "@mui/material";
import Heading from "../ui/Heading";
import CustomRadio from "../ui/CustomRadio";
import PrimaryBtn from "../ui/PrimaryBtn";

const StepThree = ({ onNext, onBack, onUpdate, formData }) => {
  const [value, setValue] = useState(formData.creditScore || "");
  const isButtonDisabled = value === "";

  return (
    <div>
      <Heading text={"Your estimated credit score? *"} size="large" />
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <CustomRadio value={"excellent"} label="More Than 740 ( Excellent )" />
        <CustomRadio value={"good"} label="680 - 739 ( Good )" />
        <CustomRadio value={"proo"} label="Less than 569 ( Poor )" />
        <CustomRadio value={"not-sure"} label="I'm not sure" />
      </RadioGroup>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mb: 2,
        }}
      >
        <PrimaryBtn
          text={"Back"}
          onClick={() => {
            onBack();
          }}
          smButton
        />
        <PrimaryBtn
          text={"Next"}
          onClick={() => {
            if (!isButtonDisabled) {
              onUpdate({ creditScore: value });
              onNext();
            }
          }}
        />
      </Box>
    </div>
  );
};

export default StepThree;
