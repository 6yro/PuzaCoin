import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const value = useSelector((state) => state.puzaCoinSlice.value);
  const clickStrength = useSelector(
    (state) => state.puzaCoinSlice.clickStrength
  );

  return (
    <div className="header">
      <h1 className="header__title">
        <span>PUZACOIN CLICKER</span>
      </h1>
      <p className="header__scoreValue">
        У вас <span>{value}</span> PuzaCoin!
      </p>
      <p className="header__clickStrength">
        Настоящия сила клика: <span>{clickStrength}</span>
      </p>
    </div>
  );
};
