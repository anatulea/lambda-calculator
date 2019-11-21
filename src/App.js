import React, { useState } from "react";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import { NumberButton } from "./components/ButtonComponents/NumberButtons/NumberButton.js";
import { SpecialButton } from "./components/ButtonComponents/SpecialButtons/SpecialButton.js";
import { OperatorButton } from "./components/ButtonComponents/OperatorButtons/OperatorButton.js"
import * as math from 'mathjs';
import "./index.css";
import "./App.css";

function App() {
  const [input, setInput] =useState("");

  const handleClear = () => {
    setInput('');
  }
  const addToInput = (val)=> {
  setInput( input ==='0' ? String(val):input + val);
   };
  const inputDot  = () => {
    if(input.indexOf('.')=== -1){
      setInput(input + '.')
    }
  }
  const toggleSign = () =>{
    setInput(input.charAt(0)==='-' ? input.substr(1): '-' + input)
  }
  const inputPercent =() => {
    const value =parseFloat(input);
    setInput(String(value/100))
  }
  
   const handleEqual = () => {
     setInput(math.evaluate(input))
   }

  return (
    <div className="container">
      <div className="logo-div">
      <Logo />
      </div>
      <div className="display-box">
         <Display
       input={input}
         />
      </div>
      <div className="App">
        <div className="bigBox">
            <div className="firstBox">
              <SpecialButton handleClick={handleClear}>C</SpecialButton>
              <SpecialButton handleClick={toggleSign}>+/-</SpecialButton>
              <SpecialButton handleClick={inputPercent}>%</SpecialButton>

              <NumberButton handleClick={addToInput}>7</NumberButton>
              <NumberButton handleClick={addToInput}>8</NumberButton>
              <NumberButton handleClick={addToInput}>9</NumberButton>
              <NumberButton handleClick={addToInput}>4</NumberButton> 
              <NumberButton handleClick={addToInput}>5</NumberButton>
              <NumberButton handleClick={addToInput}>6</NumberButton>
              <NumberButton handleClick={addToInput}>1</NumberButton>
              <NumberButton handleClick={addToInput}>2</NumberButton>
              <NumberButton handleClick={addToInput}>3</NumberButton>
              <NumberButton handleClick={addToInput}>0</NumberButton>
              <NumberButton handleClick={inputDot}>.</NumberButton> 
              </div>
            <div className="secondBox" >
              <OperatorButton handleClick={addToInput}>/</OperatorButton>
              <OperatorButton handleClick={addToInput}>*</OperatorButton>
              <OperatorButton handleClick={addToInput}>-</OperatorButton>
              <OperatorButton handleClick={addToInput}>+</OperatorButton>
              <OperatorButton handleClick={handleEqual}>=</OperatorButton>
            </div>
            </div>
        </div>
    </div>
  );
}

export default App;
