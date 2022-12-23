import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinsValue: 0,
  reinforcedFinger: { count: 1, produce: 1, price: 15 },
  miningFarm: { count: 0, produce: 4, price: 100 },
  bank: { count: 0, produce: 10, price: 300 },
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setLocalStorage: (state) => {
      if (state.coinsValue !== 0) {
        state.value = +localStorage.getItem("coinsValue");
      }
      if (state.reinforcedFinger.count !== 1) {
        state.reinforcedFinger.count = +localStorage.getItem(
          "reinforcedFingerCount"
        );
        state.reinforcedFinger.price = +localStorage.getItem(
          "reinforcedFingerPrice"
        );
      }
      if (state.miningFarm.count !== 0) {
        state.miningFarm.count = +localStorage.getItem("miningFarmCount");
        state.miningFarm.price = +localStorage.getItem("miningFarmPrice");
      }
    },
    clearLocalStorage: () => {
      localStorage.clear();
      return initialState;
    },
    onClickCoin: (state) => {
      state.coinsValue +=
        state.reinforcedFinger.count * state.reinforcedFinger.produce;
      // localStorage.setItem("value", state.value);
    },
    buyReinforcedFinger: (state) => {
      state.coinsValue -= state.reinforcedFinger.price;
      state.reinforcedFinger.count += 1;
      state.reinforcedFinger.price = Math.round(
        state.reinforcedFinger.price * 1.3
      );
    },
    buyMiningFarm: (state) => {
      state.coinsValue -= state.miningFarm.price;
      state.miningFarm.count += 1;
      state.miningFarm.price = Math.round(state.miningFarm.price * 1.3);
    },
    buyBank: (state) => {
      state.coinsValue -= state.bank.price;
      state.bank.count += 1;
      state.bank.price = Math.round(state.bank.price * 1.3);
    },
    addEarnedCoins: (state) => {
      state.coinsValue += state.miningFarm.count * state.miningFarm.produce;
      state.coinsValue += state.bank.count * state.bank.produce;
    },
  },
});

export const {
  onClickCoin,
  clearLocalStorage,
  buyReinforcedFinger,
  setLocalStorage,
  buyMiningFarm,
  buyBank,
  addEarnedCoins,
} = slice.actions;

export default slice.reducer;
