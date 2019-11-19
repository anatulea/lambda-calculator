import React from "react";
//gets the props from the parent compnetnt which is App.js

const Display = (props) => {
  console.log("Display", props)
  return(
    <div className="display" >
      {props.selectedNumber}
      {props.operatorValue}
    </div>
  )
};
export default Display;
