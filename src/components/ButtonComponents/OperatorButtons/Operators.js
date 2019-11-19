import React from "react";
import { OperatorButton } from './OperatorButton.js';

export const Operators = (props) => {

  return (
    <div className="operatorBox" >
      {props.operatorState.map(operator => (
      <OperatorButton 
        id={operator.value}
        key={operator.value}
        setOperatorValue={props.setOperatorValue}
        
      />
  ))}
    </div>
  );
};
