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
import { ScrollTrigger, ScrollToPlugin } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  useEffect(() => {
    const sections = document.querySelectorAll(".title-wrapper");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          x: "-=100",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 0.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
           
          
          },
        }
      );
    });
  });
  return (
    <>
      <Nav />
      <Menu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
export default Page;
