import React, { useState } from 'react';
import { Box } from '@mui/material';
import Heading from '../ui/Heading';
import PrimaryBtn from '../ui/PrimaryBtn';
import CustomInput from '../ui/CustomInput';

const StepFour = ({ onNext, onBack, onUpdate, formData }) => {
  const [name, setName] = useState(formData.fullName || '');
  const [state, setState] = useState(formData.state || '');
  const [city, setCity] = useState(formData.city || '');
  const [zip, setZip] = useState(formData.zip || '');
  const [streetAddress, setStreetAddress] = useState(formData.streetAddress || '');

  const isButtonDisabled = !name || !state || !city || !zip || !streetAddress;

  return (
    <Box>
      <Box>
        <Heading text={'Your Name *'} size='large' />
        <CustomInput
          required
          placeholder={'Type Your Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box>
        <Heading text={'Address *'} size='large' />
        <CustomInput
          required
          placeholder={'State'}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <CustomInput
          required
          placeholder={'City'}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <CustomInput
          required
          type={'number'}
          placeholder={'Zip Code'}
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <CustomInput
          required
          placeholder={'Street Address'}
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3, mb: 2 }}>
        <PrimaryBtn text={'Back'} onClick={() => { onBack() }} smButton />
        <PrimaryBtn
          text={'Next'}
          onClick={() => {
            if (!isButtonDisabled) {
              onUpdate({ fullName: name, state: state, city: city, zip: zip, streetAddress: streetAddress });
              onNext();
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default StepFour;
