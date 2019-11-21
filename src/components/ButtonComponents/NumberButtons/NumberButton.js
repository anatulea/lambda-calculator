import React from "react";

export const NumberButton = (props) => {
  return (
    <button
    className="num-btn"
    onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
};
