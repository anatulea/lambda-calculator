import React from "react";
import { SpecialButton } from './SpecialButton.js';

export const Specials = (props) => {
  const specialButtons = props.specialState.map(special => (
    <SpecialButton 
      id={special}
      key={special}
      />
  ));
  return (
    <div>
      {specialButtons}
    </div>
  );
};
