import React from "react";
import { useDispatch } from "react-redux";
import { onClickCoin } from "../redux/puzaCoinSlice";

export const ClickArea = () => {
  const dispatch = useDispatch();

  const addPuzaCoin = () => {
    dispatch(onClickCoin());
  };

  const clearResult = () => {
    localStorage.clear("value");
    localStorage.clear("clickStrength");
    window.location.reload();
  };

  return (
    <div className="clickArea">
      <button onClick={addPuzaCoin} className="iconButton" />
      <button onClick={clearResult} className="clearResult">
        Очистить результат
      </button>
    </div>
  );
};
