import React from "react";

export const NumberButton = (props) => {
 console.log("NumberButton", props)
  return (
    <button
    onClick={() => props.setSelectedNumber(props.id)}
      className="num-btn"
      id = {props.id}
    >
      {props.id}
    </button>
  );
};
