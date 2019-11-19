import React, { useState } from "react";
import { Numbers } from './components/ButtonComponents/NumberButtons/Numbers.js';
import { Operators } from './components/ButtonComponents/OperatorButtons/Operators.js';
import { Specials } from './components/ButtonComponents/SpecialButtons/Specials.js';
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display"
import { numbers, operators, specials } from "./data.js"

import "./index.css";
import "./App.css";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [numberState, setNumberState] = useState(numbers);
  const [selectedNumber, setSelectedNumber] = useState(numberState[""]);
  const [operatorState, setOperatorState] = useState(operators);
  const [operatorValue, setOperatorValue] = useState(operatorState[0]);
  const [specialState, setSpecialState] = useState(specials);
  const [display, displayState] = useState("")

  function hadleClick (event){
let value = event.target.value;
displayState(display +value);

  }
  return (
    <div className="container">
      <div className="logo-div">
      <Logo />
      </div>
      <div className="display-box">
         <Display
         display={display}
         dispState={displayState} 
         selectedNumber={selectedNumber}
         setSelectedNumber={setSelectedNumber}
         operatorState={operatorState}
         setOperatorState={setOperatorState}
         />
      </div>
      <div className="App">
      <div className="bigBox">
       <div className="firstBox">
       <Specials
       specialState ={specialState}
       setSpecialState ={setSpecialState}
       />
        <Numbers
        numberState ={numberState} 
        setNumberState={setNumberState}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        display={display}
        dispState={displayState} 
        />
       
        </div>
        <div className="secondBox" >
        < Operators
        operatorState={operatorState}
        setOperatorState={setOperatorState}
        display={display}
        dispState={displayState} 
        operatorValue ={operatorValue}
        setOperatorValue ={setOperatorValue}
        />
        </div>
        </div>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
