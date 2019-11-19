import React from "react";

export const OperatorButton = (props) => {
  console.log("OperatorButton", props);
  

  return (
    <button
      onClick={() =>props.setOperatorValue(props.id)}
      className="opr-btn"
      >
      {props.id}
    </button>
  );
};
