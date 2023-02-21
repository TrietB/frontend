import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOptions } from "../../features/gameViewSlice";


const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

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

  const {options} = useSelector((state)=> state.gameView)

  const dispatch = useDispatch()


  dispatch(updateOptions(selectedTextOptions))

  const randomIntInRange = (min, max) => {
    return Math.floor(Math.random()*(max-min)) + min
  }


  const generateNewItem = () => {
    if(options.length > 0){
      const index = randomIntInRange(0, options.length)
      let item = {
        character: options[index]
      }
    }
  }

  console.log(options)

  return <div>game screen</div>;
}

export default GameViewRedux;
