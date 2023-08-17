import React from "react";
import Link from "next/link";
import "@styles/arrows/arrows.sass";

const Arrows = ({section, headingText}) => {
  return (
    <div className="introducer">
      <h2>{headingText}</h2>

      <Link href={section} className="arrow-container">
        <span className="arrow a1"></span>
        <span className="arrow a2"></span>
        <span className="arrow a3"></span>
      </Link>
    </div>
  );
};
export default Arrows;
