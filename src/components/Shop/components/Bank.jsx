import React from "react";
import { useDispatch } from "react-redux";
import { buyBank } from "../../../redux/slice";

export const Bank = ({ coinsValue, count, produce, price }) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={coinsValue < price}
      onClick={() => dispatch(buyBank())}
      className="shop__item"
    >
      <h6>Банк</h6>
      <p>Цена: {price} PuzaCoin</p>
      <p>Добавляет {produce} PuzaCoin в секунду</p>
      <p>Имеется:{count}</p>
    </button>
  );
};
