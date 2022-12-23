import React from "react";
import { useDispatch } from "react-redux";
import { buyReinforcedFinger } from "../../../redux/slice";

export const ReinforcedFinger = ({ coinsValue, count, produce, price }) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={coinsValue < price}
      onClick={() => dispatch(buyReinforcedFinger())}
      className="shop__item"
    >
      <h6>Укрепленный пальчик</h6>
      <p>Цена: {price} PuzaCoin</p>
      <p>Добавляет {produce} PuzaCoin к вашему клику</p>
      <p>Имеется:{count}</p>
    </button>
  );
};
