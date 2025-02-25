import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep, updateFormData } from '../../store/slices/formSlice';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import StepTwo from '../form/StepTwo';
import StepThree from '../form/StepThree';
import StepFour from '../form/StepFour';
import StepFive from '../form/StepFive';
import StepOne from '../form/StepOne';


const RightSideContent = () => {
  const dispatch = useDispatch();
  const { step, formData, completedSteps } = useSelector((state) => state.form);

  const handleNext = () => dispatch(nextStep());
  const handleBack = () => dispatch(prevStep());
  const handleUpdateFormData = (data) => dispatch(updateFormData(data));

  return (
    <Box bgcolor={'#FFF'} padding={'30px'} borderRadius={'24px'}>
      <Box>
        <Typography fontSize={'20px'} fontWeight={500} color='#000'>
          Complete the steps to unlock your solar potential
        </Typography>
      </Box>
      <Box>
        <Stepper activeStep={step} alternativeLabel sx={{ display: "flex", justifyContent: "center" }}>
          {steps.map((label, index) => (
            <Step key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
              <StepLabel
                StepIconComponent={() => (
                  <CustomStepIcon active={index === step} completed={completedSteps.includes(index)}>
                    {index + 1}
                  </CustomStepIcon>
                )}
              >
                <Typography
                  fontSize={'10px'}
                  marginTop={index === step ? '-13px' : '-7px'}
                  fontWeight={index === step ? 'bold' : 'normal'}
                  color={completedSteps.includes(index) ? "blue" : 'black'}
                >
                  {label}
                </Typography>
              </StepLabel>

              {index < steps.length - 1 && (
                <Box
                  sx={{
                    flex: completedSteps.includes(index) ? 0 : 1,
                    height: "2px",
                    background: completedSteps.includes(index) ? "blue" : "grey",
                    transition: "flex 0.3s ease-in-out",
                    width: "100%",
                    mt: 1,
                  }}
                />
              )}
            </Step>
          ))}
        </Stepper>

        {step === 0 && <StepOne onNext={handleNext} onUpdate={handleUpdateFormData} formData={formData} />}
        {step === 1 && <StepTwo onNext={handleNext} onBack={handleBack} onUpdate={handleUpdateFormData} formData={formData} />}
        {step === 2 && <StepThree onNext={handleNext} onBack={handleBack} onUpdate={handleUpdateFormData} formData={formData} />}
        {step === 3 && <StepFour onNext={handleNext} onBack={handleBack} onUpdate={handleUpdateFormData} formData={formData} />}
        {step === 4 && <StepFive formData={formData} />}

      </Box>
    </Box>
  )
}

export default RightSideContent


const steps = ["Next", "Next", "Next", "Next", "Last Page"];

const CustomStepIcon = styled("div")(({ active, completed }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: `1px solid ${active ? "green" : completed ? "blue" : "black"}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  color: active ? "black" : 'blue' && completed ? "blue" : "black",
  marginBottom: '0px',
}));
