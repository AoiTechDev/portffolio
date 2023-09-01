import React from "react";
import Navlist from "./navlist/Navlist";
import Image from "next/image";
import logo from "@assets/icons/nobg-logo.png";

const Nav = ({menuOpenHandler}) => {
  return (
    <nav>
      <div className="navbar-wrapper">
        <Image src={logo} width={200} height={50} className="logo" />

        {/* <Navlist /> */}
        {/* <div id="burger-menu-open" onClick={menuOpenHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
