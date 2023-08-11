"use client";
//import "@styles/globals.css";
import { useState } from "react";

const Nav = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <nav>
      <div className="">
        {/* <div
          id="burger-menu"
          className={isActive ? "open" : ""}
          onClick={() => {toggleMenu();props.openMenuHandler();}}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>

      <ul className="nav-list">
        <li><a data-text="&nbsp;About" style={{
          "--clr": "#0C4A60"
        }}>&nbsp;About&nbsp;</a></li>
        <li><a data-text="&nbsp;Technologies" style={{
          "--clr": "#EF6C33"
        }}>&nbsp;Technologies&nbsp;</a></li>
        <li><a data-text="&nbsp;Projects" style={{
          "--clr": "#0C4A60"
        }}>&nbsp;Projects&nbsp;</a></li>
        <li><a data-text="&nbsp;Contact" style={{
          "--clr": "#EF6C33"
        }}>&nbsp;Contact&nbsp;</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
