"use client";

import BurgerMenu from "./menu/BurgerMenu";
import Menu from "./menu/Menu";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Nav from "@components/nav/Nav";

function Page({ children }) {
  const [open, setOpen] = useState(false);
 
  const menuOpenHandler = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
   
  });
  return (
    <>
      <Nav/>
     
      {/* {open && <Menu open={open} ref={menuRef}/>} */}
      <Menu open={open} />
      <main>{children}</main>
    </>
  );
}
export default Page;
