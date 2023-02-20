import React from "react";
import { useSelector } from "react-redux";

function GameViewRedux() {
  const {
    textOptions,
    selectedTextOptions,
    speedOptions,
    selectedSpeedOption,
    spawnRate,
    hardcore,
    animatingOut,
  } = useSelector((state) => state.startView);

console.log({ textOptions,
    selectedTextOptions,
    speedOptions,
    selectedSpeedOption,
    spawnRate,
    hardcore,
    animatingOut,})

  return <div>game screen</div>;
}

export default GameViewRedux;
