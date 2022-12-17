import React from "react";
import { useDispatch } from "react-redux";
import { onClickCoin, setCoinValue } from "../redux/puzaCoinSlice";

export const ClickArea = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("value")) {
      dispatch(setCoinValue(+localStorage.getItem("value")));
    }
  }, []);

  const addPuzaCoin = () => {
    dispatch(onClickCoin());
  };

  const clearResult = () => {
    localStorage.clear("value");
    window.location.reload();
  };

  return (
    <div className="clickArea">
      <button onClick={addPuzaCoin} className="iconButton" />
      {/* <button onClick={clearResult} className="clearResult">
        Очистить результат
      </button> */}
      {/* <Shop /> */}
    </div>
  );
};
