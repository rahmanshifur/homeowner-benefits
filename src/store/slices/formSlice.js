import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  completedSteps:[0],
  loading:false,
  success:false,
  formData: {
    homeowner: "",
    electricityBill: "",
    creditScore: "",
    fullName: "",
    state: "",
    zipCode: "",
    city: "",
    streetAddress: "",
    contact: "",
    callTime: "",
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 0) state.step -= 1;
    },
    // resetStep: (state) => state.step=initialState.step,
  },
});

export const { updateFormData, nextStep, prevStep, resetStep } = formSlice.actions;
export default formSlice.reducer;
