import React from "react";
import styled from "styled-components";
//redux
import { toggleChecked } from "../../features/gameSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import StartView from "./StartView";

const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

function Game() {
  const [currentView, setCurrentView] = useState("StartView");
  const [selectedTextOptions, setSelectedTextOptions] = useState([]);
  const [textOptions, setTextOptions] = useState(
    ["letters", "numbers", "symbols"],
  );
  const [spawnRate, setSpawnRate] = useState(20);
  const [hardcore, setHardcore] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleGameStart = (textOptions, spawnRate, hardcore) => {
    setCurrentView("GameView");
    setSelectedTextOptions(textOptions);
    setSpawnRate(spawnRate);
    setHardcore(hardcore);
  };

  const handleGameOver = (score) => {
    setCurrentView("GameOverView");
    setScore(score);
    if (score > highScore) setHighScore(score);
  };

  const handleGameRestart = () => {
    setCurrentView("StartView");
  };

  return (
    <>
      <StartView 
        textOptions={textOptions}
        selectedTextOptions = {selectedTextOptions}
        spawnRate={spawnRate}
        onGameStart={handleGameStart}
        hardcore={hardcore}
        />
    </>
  );
}

export default Game;
