import React from "react";

export const OperatorButton = (props) => {
  
  return (
    <button
    onClick={() => props.handleClick(props.children)}
      className="opr-btn"
      >
      {props.children}
    </button>
  );
};
