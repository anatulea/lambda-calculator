import React from "react";

export const SpecialButton = (props) => {
  return (
    <button
    onClick={() => props.handleClick(props.children)}
    className="spl-btn"
    >
     {props.children}
    </button>
  );
};
