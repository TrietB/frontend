import React, { useEffect, useState } from 'react'
import { HealthBar } from './StyledComponents';

const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

function GameView(props) {
  let interval
  let {textOptions, spawnRate, handleGameOver, hardcore} = props
  let options =  textOptions.map(val=>{
      if(data[val]){
        return data[val]
      }else{
        return null
      }
    })
  options = [].concat.apply([], options)
  let gameTime = 0 
  let intSpeed = 50
  spawnRate = intSpeed * spawnRate
  const [selectedCategories, setSelectedCategories] = useState(textOptions)
  const [optionsPlaying, setOptionsPlaying] = useState([])
  const [speed, setSpeed] = useState(0.9)
  const [score, setScore] = useState(0)
  const [health, setHealth] = useState(100)
  const [animatingOut, setAnimatingOut] = useState(false)

  const randomIntInRange = (min, max) => {
    return Math.floor(Math.random()*(max-min))+min
  }

  const addNewItem = ()=> {
    if(options.length > 0){
      const index = randomIntInRange(0, options.length)
      let item = {
        character: options[index],
        xPosition: randomIntInRange(5, 95),
        yPosition: -20,
        active: true,
        hitHealth: false,
        remove: false
      }
      setOptionsPlaying(prevState=> {
        prevState.push(item)
        console.log(optionsPlaying)
      })
      options.splice(index, 1)
      return options
    }
  }
  
  const updatePosition = () => {
      let options = []
      optionsPlaying.forEach((val)=>{
        if(val.active){
          val.yPosition += speed
        }
        if(val.yPosition > 80 && val.active){
          val.active = false
          val.deathTimer = 0
          val.hitHealth = true
          setHealth(prevState => prevState -= 100)
        }
        if(!val.active){
          val.deathTimer++
          // console.log(val.deathTimer)
        }
        if(val.deathTimer > 20){
          val.remove = true
        }
        if(val.remove){
          options.push(val.character)
        } else{
          options.push(val)
        }
      })
      setOptionsPlaying(options)
  }
  
  const onGameOver = () => {
    clearInterval(interval)
    setAnimatingOut(true)

    setTimeout(()=>{
      handleGameOver(score)
    }, 1000)
  }
  const gameInterval = () => {
    if(health <=0){
      onGameOver()
    }else{
      if(gameTime % spawnRate === 0){
        addNewItem()
      }
      if(document.querySelector('input')){
        document.querySelector('input').focus()
      }
      updatePosition()
      gameTime += intSpeed
    }
  }

  const handleUserKeyInput = (e) => {
    console.log('user input')
    let val = e.target.value.toLowerCase()
    let found = false
    optionsPlaying.forEach((el, index)=>{
      if(val === el.character && el.active){
        found = true
        console.log('found')
        setOptionsPlaying(prevState => {
          console.log(prevState)
          prevState[index].active = false
          prevState[index].deathTimer = 0
          console.log(prevState)
          setScore(prevState=> prevState++)
        })

      }
    })
    if(!found && hardcore){
      setHealth(prevState => prevState -= 10)
    }
    e.target.value = ''
  }
  let targets = optionsPlaying.map(val=> {
    const style = {
      position: "absolute",
      left: `${Math.round(val.xPosition)}vw`,
      top: 0,
      fontSize: "2rem",
      border: "2px solid black",
      padding: ".5rem",
      transform: `translate(-50%,${val.yPosition}vh)`,
      transition: `${intSpeed}ms`
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
      <h3 style={style} key={val.character}>
          {val.character}
      </h3>
    )
  })

  let containerStyles = {
    padding: "0 1rem",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    animation: "slide-in forwards .5s",
    transition: ".5s",
    width: '100vw'
  };

  containerStyles.top = animatingOut ? "150vh" : "0";
  containerStyles.background = animatingOut ? "#F46652" : "white";

  
  useEffect(()=>{
   setInterval(gameInterval, intSpeed)
   
  },[])
  return (
    <div
        style={containerStyles}
        onClick={() => {
          document.querySelector("input").focus();
        }}
      >
        <h1>Score: {score}</h1>
        <input
          type="text"
          autoFocus
          onChange={handleUserKeyInput}
          style={{ opacity: 0, fontSize: "20px" }}
        />
        {targets}
        <HealthBar width={health} />
      </div>
  )
}

export default GameView