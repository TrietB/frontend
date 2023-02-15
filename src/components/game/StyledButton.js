import React from "react";
import "../../assets/css/game.css";

function StyledButton(props) {
  return (
    <div className="StyledButton" onClick={props.handleClick}{...props}>
      {props.children}
    </div>
  );
}

export default StyledButton;
