import React from "react";
import { useDispatch } from "react-redux";
import { buyVideoCard } from "../../../redux/slice";

export const VideoCard = ({ coinsValue, count, produce, price }) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={coinsValue < price}
      onClick={() => dispatch(buyVideoCard())}
      className="shop__item"
    >
      <h6>Видеокарта</h6>
      <p>Цена: {price} PuzaCoin</p>
      <p>Добавляет {produce} PuzaCoin в секунду</p>
      <p>Имеется:{count}</p>
    </button>
  );
};
