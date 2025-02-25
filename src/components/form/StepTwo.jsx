import React, { useState } from 'react';
import { RadioGroup, Box } from '@mui/material';
import Heading from '../ui/Heading';
import CustomRadio from '../ui/CustomRadio';
import PrimaryBtn from '../ui/PrimaryBtn';

const StepTwo = ({ onNext, onBack, onUpdate, formData }) => {
  const [value, setValue] = useState(formData.electricityBill || '');
  const isButtonDisabled = value === '';

  return (
    <div>
      <Heading text={'Is your monthly electricity bills over $99? *'} size='large' />
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)} >
        <CustomRadio value={'yes'} label="Yes" />
        <CustomRadio value={'no'} label="No" />
      </RadioGroup>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3, mb:2 }}>
        <PrimaryBtn text={'Back'} onClick={()=>{ onBack()}} smButton />
        <PrimaryBtn text={'Next'} onClick={() => {
          if (!isButtonDisabled) {
            onUpdate({ electricityBill: value });
            onNext();
          }
        }
        }
        />
      </Box>

    </div>
  );
};

export default StepTwo;
