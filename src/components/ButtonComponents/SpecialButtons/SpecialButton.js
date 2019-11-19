import React from "react";


export const SpecialButton = (props) => {
  console.log(props);
  return (
    <button
    onClick={() => {}}
    className="spl-btn"
    >
     {props.id}
    </button>
  );
};
