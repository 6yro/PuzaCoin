import React from "react";
import { useDispatch } from "react-redux";
import { addEarnedCoins } from "../redux/slice";

export const PerSecond = () => {
  const dispatch = useDispatch();
  const [time, setTime] = React.useState();

  setTimeout(() => {
    setTime(Math.random());
    dispatch(addEarnedCoins());
  }, 1000);
};
