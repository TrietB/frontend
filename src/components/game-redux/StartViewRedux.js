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
import { selectedTextType } from "../../features/startViewSlice";


function StartViewRedux() {
  const { textOptions, animatingOut, selectedTextOptions, hardcore } = useSelector((state) => state.startView);
  const dispatch = useDispatch()
  console.log(textOptions);

  let options = textOptions.map(({option, isSelected}) => {
    let checked = false;
    console.log(selectedTextOptions, isSelected)
    if (selectedTextOptions.includes(isSelected)) {
        console.log(true)
      checked = true;
    }
    return (
      <StyledCheckbox
        key={option}
        value={option}
        checked={checked}
        tabindex="0"
        handleInput={() => {
        //   updateOptions(val); // change with dispatch
        //   onChangeAttr(val);
            dispatch(selectedTextType(isSelected))
        }}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </StyledCheckbox>
    );
  });

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
          {/* <OptionsList>{speedOptions}</OptionsList> */}
          <OptionsList>
            <StyledCheckbox
              value={"hardcore"}
              checked={hardcore}
              handleInput={() => {
                // handleHardcore();
              }}
            >
              Hardcore
            </StyledCheckbox>
          </OptionsList>
        </OptionsContainer>
        {/* <div style={{ textAlign: "right" }}>
          <Button handleClick={onGameStart} disabled={disabled}>
            Start Game
          </Button>
        </div> */}
      </InnerContainer>
    </ViewContainer>
  );
}

export default StartViewRedux;
