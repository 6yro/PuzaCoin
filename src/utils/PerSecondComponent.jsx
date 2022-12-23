import React from "react";
import { useDispatch } from "react-redux";
import { addEarnedCoins, saveLocalStorage } from "../redux/slice";

export const PerSecond = () => {
  const dispatch = useDispatch();
  const [time, setTime] = React.useState();

  setTimeout(() => {
    setTime(Math.random());
    dispatch(saveLocalStorage());
  }, 1000);

  dispatch(addEarnedCoins());
};
