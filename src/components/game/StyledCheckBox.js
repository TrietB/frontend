import React from "react";

function StyledCheckBox(props) {
  let disabled = false
  let spanStyles = {
    opacity: 1
  }
  if(props.disabled === true) {
    disabled = true;
    spanStyles.opacity = 0.75;
  }


  return (
    <label className="block-label">
      <input
        type="checkbox"
        disabled={disabled}
        value={props.value}
        checked={props.checked}
        onChange={props.handleInput}
      />
      <span style={spanStyles}>{props.children}</span>
    </label>
  );
}

export default StyledCheckBox;
