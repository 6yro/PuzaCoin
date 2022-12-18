import React from "react";
import { useDispatch } from "react-redux";
import { onClickCoin } from "../redux/puzaCoinSlice";

export const ClickArea = () => {
  const dispatch = useDispatch();

  const addPuzaCoin = () => {
    dispatch(onClickCoin());
  };

  return (
    <section className="clickArea">
      <button onClick={addPuzaCoin} className="clickArea__btn" />
    </section>
  );
};
