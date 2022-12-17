import React from "react";
import { useSelector } from "react-redux";
import { PuzaClick } from "./components/PuzaClick";

export const Shop = () => {
  const value = useSelector((state) => state.puzaCoinSlice.value);

  return (
    <div className="shop">
      <PuzaClick value={value} />
    </div>
  );
};
