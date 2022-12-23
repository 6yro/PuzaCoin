import React from "react";
import { useDispatch } from "react-redux";
import { onClickCoin } from "../redux/slice";

export const ClickArea = () => {
  const dispatch = useDispatch();

  return (
    <section className="clickArea">
      <button
        onClick={() => dispatch(onClickCoin())}
        className="clickArea__btn"
      />
    </section>
  );
};
