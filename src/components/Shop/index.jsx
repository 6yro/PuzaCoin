import React from "react";
import { useSelector } from "react-redux";

import { ReinforcedFinger } from "./components/ReinforcedFinger";
import { MiningFarm } from "./components/MiningFarm";
import { Bank } from "./components/Bank";

export const Shop = () => {
  const { coinsValue, reinforcedFinger, miningFarm, bank } = useSelector(
    (state) => state.slice
  );

  return (
    <div className="shop">
      <ReinforcedFinger coinsValue={coinsValue} {...reinforcedFinger} />
      <MiningFarm coinsValue={coinsValue} {...miningFarm} />
      <Bank coinsValue={coinsValue} {...bank} />
    </div>
  );
};
