import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const { coinsValue, coinsPerSecond } = useSelector((state) => state.slice);

  return (
    <div className="header">
      <h1 className="header__title">
        <span>PUZACOIN CLICKER</span>
      </h1>
      <p className="header__scoreValue">
        У вас <span>{coinsValue}</span> PuzaCoin!
      </p>
      <p className="header__scoreValue">
        PuzaCoin в секунду: <span>{coinsPerSecond}</span>
      </p>
    </div>
  );
};
