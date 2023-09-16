"use client";
import "@styles/menu/menu.sass";
import "@styles/menu/nav/nav.scss";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { CustomEase } from "gsap/dist/CustomEase";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Nav from "./nav/Nav";
import Contact from "./contact/Contact";

const Menu = ({ open, menuOpenHandler }) => {
  const menuRef = useRef();
  const tl = useRef();

  return (
    <div class="nav-container">
      <Nav />
      <Contact />

      <div className="menu-close-container">
        <div class="menu-close">
          <span></span>
          <span></span>
        </div>
        <span className="menu-line"></span>
      </div>
    </div>
  );
};

export default Menu;
