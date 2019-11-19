import React from "react";
import { NumberButton } from './NumberButton.js'

export const Numbers = (props) => {
  console.log("Numbers", props);
  return(
    <div>
        <div className="numbersBox">
        { props.numberState.map((number, index)=> {
            return(
                <NumberButton
                  key = {index}
                  id ={number}
                  setSelectedNumber={props.setSelectedNumber}
                />
              );
          })}
      </div>
    </div>  
  );
};
