import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onClickCoin, setCoinValue } from "../redux/puzaCoinSlice";
import { Shop } from "../components/Shop";

export const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.puzaCoinSlice.value);

  React.useEffect(() => {
    if (localStorage.getItem("value")) {
      dispatch(setCoinValue(+localStorage.getItem("value")));
    }
  }, []);

  const addPuzaCoin = () => {
    dispatch(onClickCoin(value + 1));
  };

  const clearResult = () => {
    localStorage.clear("value");
    window.location.reload();
  };

  return (
    <div>
      <div className="clickArea">
        <p className="textValue">У Вас {value} PuzaCoin!</p>
        <button onClick={addPuzaCoin} className="iconButton"></button>
        <button onClick={clearResult}>Очистить результат</button>
      </div>
      <Shop />
    </div>
  );
};
