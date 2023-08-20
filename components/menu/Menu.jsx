import React from "react";
import "animate.css";
import Navlist from "@components/navlist/Navlist";
import CloseMenu from "./CloseMenu";

const Menu = ({ menuOpenHandler}) => {
  return (
    <div className="menu animate__animated animate__fadeInRight">
      <CloseMenu onClick={menuOpenHandler}/>
      <Navlist menuOpenHandler={menuOpenHandler}/>
    </div>
  );
};

export default Menu;
