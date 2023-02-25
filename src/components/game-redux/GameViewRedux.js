import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, updateOptions } from "../../features/gameViewSlice";
import { HealthBar } from "./StyledComponents";


const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

function GameViewRedux() {
  let interval;
  const {
    textOptions,
    selectedTextOptions,
    speedOptions,
    selectedSpeedOption,
    spawnRate,
    hardcore,
    animatingOut,
  } = useSelector((state) => state.startView);

  const {options, optionsPlaying, gameTime, intSpeed, health} = useSelector((state)=> state.gameView)

  const dispatch = useDispatch()


//   dispatch(updateOptions(selectedTextOptions))

  const randomIntInRange = (min, max) => {
    return Math.floor(Math.random()*(max-min)) + min
  }


  const generateNewItem = () => {
    if(options.length > 0){
      const index = randomIntInRange(0, options.length)
      let item = {
        character: options[index],
        xPosition: randomIntInRange(5,95),
        yPosition: -20,
        active: true,
        hitHealth: false,
        remove: false
      }
      dispatch(addNewItem(item))
    }
  }

const gameInterval = () => {
    if(gameTime % intSpeed === 0 ){
    dispatch(addNewItem())
    }
}

const gameOver = ()=> {
    clearInterval(interval)
}

//   console.log(options)
//   console.log(optionsPlaying)

//   generateNewItem()

let targets = optionsPlaying.map((val, i)=> {
    const style = {
      position: "absolute",
      left: `${Math.round(val.xPosition)}vw`,
      top: 0,
      fontSize: "2rem",
      border: "2px solid black",
      padding: ".5rem",
      transform: `translate(-50%,${val.yPosition}vh)`,
      transition: `${intSpeed}ms`,
      fontColor: 'black'
    }
    if (!val.active) {
      style.transform = `translate(-50%,${val.yPosition}vh) scale(2) rotate(360deg)`;
      style.opacity = 0;
      style.transition = "500ms";
    }
    if (val.hitHealth) {
      style.color = "#F30A13";
    }
    return (
      <h3 style={style} key={i}>
          {val.character}
      </h3>
    )
  })

  let containerStyles = {
    padding: "0 1rem",
    height: "100vw",
    overflow: "hidden",
    position: "relative",
    animation: "slide-in forwards .5s",
    transition: ".5s",
    width: '70vw'
  };

  containerStyles.top = animatingOut ? "150vh" : "0";
  containerStyles.background = animatingOut ? "#F46652" : "white";
  useEffect(()=>{
    dispatch(updateOptions(selectedTextOptions))
    interval = setInterval(gameInterval, 5000)
  },[])

  return (
    <div
        style={containerStyles}
        onClick={() => {
          document.querySelector("input").focus();
        }}
      >
        {/* <h1>Score: {score}</h1> */}
        <input
          type="text"
          autoFocus
        //   onChange={handleUserKeyInput}
          style={{ opacity: 0, fontSize: "20px" }}
        />
        {targets}
        <HealthBar width={health} />
    </div>
  );
}

export default GameViewRedux;
