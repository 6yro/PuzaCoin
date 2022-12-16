import { configureStore } from "@reduxjs/toolkit";
import puzaCoinSlice from "./puzaCoinSlice";

export const store = configureStore({
  reducer: { puzaCoinSlice },
});
