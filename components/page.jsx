"use client";
import Nav from "@components/Nav";
import BurgerMenu from "./menu/BurgerMenu";
import Menu from "./menu/Menu";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Page({ children }) {
  const [open, setOpen] = useState(false);
 
  const menuOpenHandler = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {});
  return (
    <>
      {/* <Nav/> */}
      <BurgerMenu menuOpenHandler={menuOpenHandler}/>
      {/* {open && <Menu open={open} ref={menuRef}/>} */}
      <Menu open={open} />
      <main>{children}</main>
    </>
  );
}
export default Page;
