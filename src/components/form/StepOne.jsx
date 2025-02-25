import React, { useState } from 'react';
import { RadioGroup, Box } from '@mui/material';
import Heading from '../ui/Heading';
import CustomRadio from '../ui/CustomRadio';
import PrimaryBtn from '../ui/PrimaryBtn';

const StepOne = ({ onNext, onUpdate, formData }) => {
  const [value, setValue] = useState(formData.homeowner || '');
  const isButtonDisabled = value === '';

  return (
    <div>
      <Heading text={'Are you a homeowner?'} size='large' />
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)} >
        <CustomRadio value={'yes'} label="Yes" />
        <CustomRadio value={'no'} label="No" />
      </RadioGroup>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3, mb: 2 }}>
        <PrimaryBtn text={'Next'} onClick={() => {
          if (!isButtonDisabled) {
            onUpdate({ homeowner: value });
            onNext();
          }
        }
        }
        />
      </Box>
    </div>
  );
};

export default StepOne;
