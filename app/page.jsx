'use client'
import BurgerMenu from "../components/menu/BurgerMenu";
import Menu from "../components/menu/Menu";


import Nav from "@components/nav/Nav";
import Home from "@pages/Home";
import About from "@pages/about";
import Skills from "@pages/Skills";
import Projects from "@pages/Projects";
import Contact from "@pages/contact";
import Footer from "@components/Footer";
import '@styles/styles.sass'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect } from "react";
import code_img from "@assets/images/code-img.jpg";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

function Page() {
 
  return (
    <>
      <Nav /> 
    <Menu /> 
      <Home /> 
    
      <About /> 
      <Skills />
     
      <Contact />
      <Footer/>
    </>
  );
}
export default Page;
