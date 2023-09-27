import React from "react";

import Image from "next/image";

import Link from "next/link";
import "@styles/_navbar.sass";
import BurgerMenu from "@components/menu/burger_menu/BurgerMenu";
import Logo from "@components/reusable/logo/Logo";
const Nav = () => {
  return (
    <div className="navbar">
      <Logo />
      <BurgerMenu />
    </div>
  );
};

export default Nav;
