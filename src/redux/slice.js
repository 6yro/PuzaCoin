import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinsValue: 0,
  coinsPerSecond: 0,
  reinforcedFinger: { count: 1, produce: 1, price: 15 },
  videoCard: { count: 0, produce: 1, price: 20 },
  miningFarm: { count: 0, produce: 4, price: 100 },
  bank: { count: 0, produce: 10, price: 300 },
};

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setState: (state) => {
      state.coinsValue = +localStorage.getItem("coinsValue");
      state.coinsPerSecond = +localStorage.getItem("coinsPerSecond");
      state.reinforcedFinger.count = +localStorage.getItem(
        "reinforcedFingerCount"
      );
      state.reinforcedFinger.price = +localStorage.getItem(
        "reinforcedFingerPrice"
      );
      state.videoCard.count = +localStorage.getItem("videoCardCount");
      state.videoCard.price = +localStorage.getItem("videoCardPrice");
      state.miningFarm.count = +localStorage.getItem("miningFarmCount");
      state.miningFarm.price = +localStorage.getItem("miningFarmPrice");
      state.bank.count = +localStorage.getItem("bankCount");
      state.bank.price = +localStorage.getItem("bankPrice");
    },
    saveLocalStorage: (state) => {
      localStorage.setItem("coinsValue", state.coinsValue);
      localStorage.setItem("coinsPerSecond", state.coinsPerSecond);
      localStorage.setItem(
        "reinforcedFingerCount",
        state.reinforcedFinger.count
      );
      localStorage.setItem(
        "reinforcedFingerPrice",
        state.reinforcedFinger.price
      );
      localStorage.setItem("videoCardCount", state.videoCard.count);
      localStorage.setItem("videoCardPrice", state.videoCard.price);
      localStorage.setItem("miningFarmCount", state.miningFarm.count);
      localStorage.setItem("miningFarmPrice", state.miningFarm.price);
      localStorage.setItem("bankCount", state.bank.count);
      localStorage.setItem("bankPrice", state.bank.price);
    },
    clearLocalStorage: () => {
      localStorage.clear();
      return initialState;
    },
    onClickCoin: (state) => {
      state.coinsValue +=
        state.reinforcedFinger.count * state.reinforcedFinger.produce;
    },
    buyReinforcedFinger: (state) => {
      state.coinsValue -= state.reinforcedFinger.price;
      state.reinforcedFinger.count += 1;
      state.reinforcedFinger.price = Math.round(
        state.reinforcedFinger.price * 1.3
      );
    },
    buyVideoCard: (state) => {
      state.coinsValue -= state.videoCard.price;
      state.coinsPerSecond += state.videoCard.produce;
      state.videoCard.count += 1;
      state.videoCard.price = Math.round(state.videoCard.price * 1.3);
    },
    buyMiningFarm: (state) => {
      state.coinsValue -= state.miningFarm.price;
      state.coinsPerSecond += state.miningFarm.produce;
      state.miningFarm.count += 1;
      state.miningFarm.price = Math.round(state.miningFarm.price * 1.3);
    },
    buyBank: (state) => {
      state.coinsValue -= state.bank.price;
      state.coinsPerSecond += state.bank.produce;
      state.bank.count += 1;
      state.bank.price = Math.round(state.bank.price * 1.3);
    },
    addEarnedCoins: (state) => {
      state.coinsValue += state.miningFarm.count * state.miningFarm.produce;
      state.coinsValue += state.bank.count * state.bank.produce;
      state.coinsValue += state.videoCard.count * state.videoCard.produce;
    },
  },
});

export const {
  onClickCoin,
  saveLocalStorage,
  clearLocalStorage,
  buyReinforcedFinger,
  setState,
  buyVideoCard,
  buyMiningFarm,
  buyBank,
  addEarnedCoins,
} = slice.actions;

export default slice.reducer;
