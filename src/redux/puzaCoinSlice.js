import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const puzaCoinSlice = createSlice({
  name: "puzaCoin",
  initialState,
  reducers: {
    onClickCoin: (state) => {
      state.value += 1;
      localStorage.setItem("value", state.value);
    },
    setCoinValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { onClickCoin, setCoinValue } = puzaCoinSlice.actions;

export default puzaCoinSlice.reducer;
