import React, { useRef, useEffect, forwardRef } from "react";
import "@styles/about/funfacts/funfacts.sass";
import Card  from "./card/Card";
import Card2 from "./card/Card2";
import Card3 from "./card/Card3";

const Hobbies = () => {
  return (
    <div className="funfacts-wrapper">
      <Card />
      <Card2 />
      <Card3 />
    </div>
  );
};
export default Hobbies;
