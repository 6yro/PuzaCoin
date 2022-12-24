import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cheatCoins } from "../redux/slice";

export const Header = () => {
  const dispatch = useDispatch();

  const { coinsValue, coinsPerSecond } = useSelector((state) => state.slice);

  const secretClick = () => {
    dispatch(cheatCoins(+prompt()));
  };

  return (
    <div className="header">
      <h1 className="header__title">
        <span>PUZACOIN CLICKER</span>
      </h1>
      <p className="header__scoreValue">
        У вас <span>{coinsValue}</span> PuzaCoin!
      </p>
      <p className="header__scoreValue">
        PuzaCoin в с
        <span className="secret" onClick={secretClick}>
          е
        </span>
        кунду: <span>{coinsPerSecond}</span>
      </p>
    </div>
  );
};
