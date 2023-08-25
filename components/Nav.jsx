import React from "react";
import Navlist from "./navlist/Navlist";
import Image from "next/image";
import logo from "@assets/icons/nobg-logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="navbar-wrapper">
        <Image src={logo} width={200} height={50} className="logo"/>

        <Navlist />
      </div>
    </nav>
  );
};

export default Nav;
