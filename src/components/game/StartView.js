import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleChecked } from "../../features/gameSlice";
import {
  AnimatedHeader,
  Button,
  InnerContainer,
  OptionsContainer,
  OptionsList,
  StyledCheckbox,
  ViewContainer,
} from "./StyledComponents";

function StartView(props) {
  let {
    textOptions,
    selectedTextOptions,
    spawnRate,
    hardcore,
    handleGameStart,
  } = props;
  const [animatingOut, setAnimatingOut] = useState(false);
  const [hardcoreMode, setHardcoreMode] = useState(hardcore);
  const [isChecked, setIsChecked] = useState(false);
  const [rate, setRate] = useState(spawnRate)
//   const [speedOptions, setSpeedOptions] = useState()




  const disabled = selectedTextOptions.length >= 1 ? false : true;

  const updateOptions = (val) => {
    if (!selectedTextOptions.includes(val)) {
      selectedTextOptions.push(val);
      return selectedTextOptions;
    } else {
      const index = selectedTextOptions.indexOf(val);
      selectedTextOptions.splice(index, 1);
      return selectedTextOptions;
    }
  };

  const handleSpeedUpdate = (val) => {
    setRate(val)
    // const rate = val;
    // spawnRate = rate;
    // return spawnRate;
  };
  const handleHardcore = () => {
    setHardcoreMode((prevState) => !prevState);
  };

  const onGameStart = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      if (selectedTextOptions.length >= 1) {
        handleGameStart(selectedTextOptions, spawnRate, hardcoreMode);
      }
    }, 1000);
  };

  const onChangeAttr = (val) => {
    setIsChecked(prev=> !prev);
  };

  let options = textOptions.map((val) => {
    let checked = false;
    if (selectedTextOptions.includes(val)) {
      checked = true;
    }
    return (
      <StyledCheckbox
        key={val}
        value={val}
        checked={checked}
        tabindex="0"
        handleInput={() => {
          updateOptions(val);
          onChangeAttr(val)
        //   console.log(selectedTextOptions);
        }}
      >
        {val.charAt(0).toUpperCase() + val.slice(1)}
      </StyledCheckbox>
    );
  });

  const speedOptions = [
    "Faster",
    "Fast",
    "Normal",
    "Slow",
    "Slower"
  ].map(
    (el, i) => {
      let checked = false;
      let value = 10 + i * 5;
      if (rate === value) {
        checked = true;
      }
      return (
        <StyledCheckbox
          key={value}
          value={value}
          checked={checked}
          handleInput={() => {
            handleSpeedUpdate(value)
          }}
        >
          {el}
        </StyledCheckbox>
      );
    }
  );

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
          <OptionsList>{speedOptions}</OptionsList>
          <OptionsList>
            <StyledCheckbox
              value={"hardcore"}
              checked={hardcoreMode}
              handleInput={() => {
                handleHardcore();
              }}
            >
              Hardcore
            </StyledCheckbox>
          </OptionsList>
        </OptionsContainer>
        <div style={{ textAlign: "right" }}>
          <Button handleClick={onGameStart} disabled={disabled}>
            Start Game
          </Button>
        </div>
      </InnerContainer>
    </ViewContainer>
  );
}

export default StartView;
