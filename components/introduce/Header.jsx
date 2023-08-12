import React from "react";
import Image from "next/image";
import myphoto from "../../assets/images/myphoto.png";
import "animate.css";

const Header = () => {
  return (
    <div className="header">
      <div className="main-left-container">
        <div className="my-name">
          <h1>
            <span>Paweł</span> <span>Bornikowski</span>
          </h1>
          <h3>Front-end Developer</h3>
        </div>
        <div className="introducer">
          <h2>Let me introduce myself!</h2>
          <div className="arrow-container">
            <span className="arrow a1"></span>
            <span className="arrow a2"></span>
            <span className="arrow a3"></span>
          </div>
        </div>
      </div>

      <div className="motiv-text ">
        <h3>The only limit is the one you set for yourself</h3>
        <span>setLimit(Null)</span>
      </div>
    </div>
  );
};
export default Header;
