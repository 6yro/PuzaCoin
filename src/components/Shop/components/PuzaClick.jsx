import React from "react";
import { useDispatch } from "react-redux";
import { buyPuzaClick } from "../../../redux/puzaCoinSlice";

export const PuzaClick = ({ value }) => {
  const dispatch = useDispatch();

  const price = 100;
  const isDisable = value >= price;

  const handleClick = () => {
    dispatch(buyPuzaClick(price));
  };

  return (
    <button disabled={!isDisable} onClick={handleClick} className="puzaClick">
      <h1>Puza Click</h1>
      <p>Добавляет к вашему клику 1 ед. мощности!</p>
      <p>Цена: {price} PuzaCoin</p>
    </button>
  );
};
