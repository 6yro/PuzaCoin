import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  clickStrength: 1,
};

export const puzaCoinSlice = createSlice({
  name: "puzaCoin",
  initialState,
  reducers: {
    setCoinValue: (state) => {
      state.value = +localStorage.getItem("value");
    },
    setClickStrength: (state) => {
      state.clickStrength = +localStorage.getItem("clickStrength");
    },
    clearResult: (state) => {
      state.value = 0;
      state.clickStrength = 1;
      localStorage.setItem("value", state.value);
      localStorage.setItem("clickStrength", state.clickStrength);
    },
    onClickCoin: (state) => {
      state.value += state.clickStrength;
      localStorage.setItem("value", state.value);
    },
    buyPuzaClick: (state, action) => {
      state.value -= action.payload;
      localStorage.setItem("value", state.value);
      state.clickStrength += 1;
      localStorage.setItem("clickStrength", state.clickStrength);
    },
  },
});

export const {
  onClickCoin,
  setCoinValue,
  buyPuzaClick,
  setClickStrength,
  clearResult,
} = puzaCoinSlice.actions;

export default puzaCoinSlice.reducer;
