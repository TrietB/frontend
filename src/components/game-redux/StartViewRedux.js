import React from "react";
//styled component
import {
  AnimatedHeader,
  Button,
  InnerContainer,
  OptionsContainer,
  OptionsList,
  StyledCheckbox,
  ViewContainer,
} from "./StyledComponents";

import { useDispatch, useSelector } from "react-redux";
import { selectedSpawnRate, selectedTextType, setAnimation, toggleChecked, toggleHardcoreMode, toggleSpeedChecked } from "../../features/startViewSlice";


function StartViewRedux({handleGameStart}) {
  const { textOptions, animatingOut, selectedTextOptions, hardcore, speedOptions, selectedSpeedOption, spawnRate } = useSelector((state) => state.startView);
  const dispatch = useDispatch()
  // console.log(textOptions);

  const onGameStart = () => {
    dispatch(setAnimation())
    setTimeout(()=>{
      if(selectedTextOptions.length >= 1){
        handleGameStart()
      }
    }, 1000)
  }

  let options = textOptions.map(({option, isSelected}) => {
    console.log(selectedTextOptions)
    return (
      <StyledCheckbox
        key={option}
        value={option}
        checked={isSelected}
        tabindex="0"
        handleInput={() => {
            dispatch(toggleChecked({option, isSelected}))
            dispatch(selectedTextType(option))
        }}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </StyledCheckbox>
    );
  });

  let speed = speedOptions.map((speed, i)=>{
    let value = 10 + i * 5
    return (
      <StyledCheckbox
          key={speed}
          value={value}
          checked={speed === selectedSpeedOption}
          handleInput={() => {
            dispatch(toggleSpeedChecked(speed))
            dispatch(selectedSpawnRate(value))
          }}
        >
          {speed}
        </StyledCheckbox>
    )
  })
  console.log(spawnRate)


  return (
    <ViewContainer>
      <InnerContainer
        style={animatingOut ? { opacity: "1", top: "-150vh" } : {}}
      >
        <AnimatedHeader>Type Fall</AnimatedHeader>
        <p>
          Select the types of characters you would like to practice, the rate
          and whether you are penalized for mistakes(Hardcore).
        </p>
        <OptionsContainer>
          <OptionsList>{options}</OptionsList>
          <OptionsList>{speed}</OptionsList>
          <OptionsList>
            <StyledCheckbox
              value={"hardcore"}
              checked={hardcore}
              handleInput={() => {
                // handleHardcore();
                dispatch(toggleHardcoreMode())
              }}
            >
              Hardcore
            </StyledCheckbox>
          </OptionsList>
        </OptionsContainer>
        <div style={{ textAlign: "right" }}>
          <Button handleClick={onGameStart} disabled={false}>
            Start Game
          </Button>
        </div>
      </InnerContainer>
    </ViewContainer>
  );
}

export default StartViewRedux;
