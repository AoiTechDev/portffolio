import React from "react";
import Link from "next/link";
import "@styles/arrows/arrows.sass";

const Arrows = ({section, headingText, position, bottom}) => {
  return (
    <div className="introducer" style={{
      left: position,
      bottom: bottom
    }}>
      <h4>{headingText}</h4>

      <Link href={section} className="arrow-container">
        <span className="arrow a1"></span>
        <span className="arrow a2"></span>
        <span className="arrow a3"></span>
      </Link>
    </div>
  );
};
export default Arrows;
