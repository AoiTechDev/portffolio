import React from "react";

import Image from "next/image";
import logo from "@assets/icons/nobg-logo.png";
import Link from "next/link";
import "@styles/_navbar.sass";
import BurgerMenu from "@components/menu/BurgerMenu";
const Nav = () => {
  return (
    <div className="navbar">
      
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              width={200}
              height={50}
              className="logo"
              alt="logo"
            />
          </Link>
        </div>
        <BurgerMenu/>
  
    </div>
  );
};

export default Nav;
