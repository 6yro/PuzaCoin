import React from "react";
import { useDispatch } from "react-redux";
import { saveLocalStorage } from "../redux/slice";

export const PerMinute = () => {
  const dispatch = useDispatch();
  const [time, setTime] = React.useState();

  setTimeout(() => {
    setTime(Math.random());
    dispatch(saveLocalStorage());
  }, 60000);
};
