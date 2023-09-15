import React from "react";

import Image from "next/image";
import logo from "@assets/icons/nobg-logo.png";
import Link from "next/link";
import "@styles/_navbar.sass";
const Nav = ({ menuOpenHandler }) => {
  return (
    <nav>
      <div className="navbar-wrapper">
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
        <div className="nav-items">
          <div className="nav-item">
            <Link href="/About">About me</Link>
          </div>
          <div className="nav-item">
            <Link href="/Skills">Skills</Link>
          </div>
          <div className="nav-item">
            <Link href="/Projects">Projects</Link>
          </div>
          <div className="nav-item">
            <Link href="/Contact">Contact</Link>
          </div>
        </div>
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
