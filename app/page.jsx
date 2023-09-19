"use client";

import BurgerMenu from "../components/menu/BurgerMenu";
import Menu from "../components/menu/Menu";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Nav from "@components/nav/Nav";
import Home from "@pages/Home";
import About from "@pages/about";
import Skills from "@pages/Skills";
import Projects from "@pages/Projects";
import Contact from "@pages/contact";

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
     
     
      <Menu open={open} />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}
export default Page;
