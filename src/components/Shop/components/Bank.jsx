import React from "react";
import { useDispatch } from "react-redux";
import { buyMiningFarm } from "../../../redux/slice";

export const MiningFarm = ({ coinsValue, count, produce, price }) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={coinsValue < price}
      onClick={() => dispatch(buyMiningFarm())}
      className="shop__item"
    >
      <h6>Майнинг ферма</h6>
      <p>Цена: {price} PuzaCoin</p>
      <p>Добавляет {produce} PuzaCoin к вашему клику</p>
      <p>Имеется:{count}</p>
    </button>
  );
};
