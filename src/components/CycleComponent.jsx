import React from "react";
import { useDispatch } from "react-redux";
import { addEarnedCoins } from "../redux/slice";

export const CycleComponent = () => {
  const dispatch = useDispatch();
  const [time, setTime] = React.useState();

  setTimeout(() => {
    setTime(Math.random());
  }, 1000);

  dispatch(addEarnedCoins());
  console.log("rerender");
};
