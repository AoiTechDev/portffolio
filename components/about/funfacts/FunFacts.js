import React, { useRef, useEffect, forwardRef } from "react";
import "@styles/about/funfacts/funfacts.sass";
import Card  from "./card/Card";
const Hobbies = () => {
  return (
    <div className="funfacts-wrapper">
      <Card id='1'/>
      <Card id="2"/>
      <Card id="3"/> 
      
    </div>
  );
};
export default Hobbies;
