import React from "react";
import "animate.css";
import Navlist from "@components/navlist/Navlist";

const Menu = ({ menuOpenHandler}) => {
  return (
    <div className="menu animate__animated animate__fadeInRight">
      <div id="burger-menu-close" onClick={menuOpenHandler}>
        <span></span>
        <span></span>
      </div>
      <Navlist menuOpenHandler={menuOpenHandler}/>
    </div>
  );
};

export default Menu;
