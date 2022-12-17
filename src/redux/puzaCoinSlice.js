import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  clickStrength: 1,
};

export const puzaCoinSlice = createSlice({
  name: "puzaCoin",
  initialState,
  reducers: {
    setCoinValue: (state, action) => {
      state.value = +localStorage.getItem("value");
    },
    setClickStrength: (state) => {
      state.clickStrength = +localStorage.getItem("clickStrength");
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

export const { onClickCoin, setCoinValue, buyPuzaClick, setClickStrength } =
  puzaCoinSlice.actions;

export default puzaCoinSlice.reducer;
