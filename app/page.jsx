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
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";
import code_img from "@assets/images/code-img.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  const whoamiText = 'WHO AM I?';
  const split = whoamiText.split('').map((char, index) => <div key={index}>{char}</div>)


  

  useEffect(()=>{
  


    gsap.set(".whoami-header", { perspective: 400 });
    const tl = gsap.timeline({ scrollTrigger: {
      trigger: ".whoami-animated-container",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true,
      pin: true,
    }})

    tl.from('.whoami-header div', {
      // opacity: 0,
      duration: 2,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.2
    })
    .to('.whoami-header div', {
      height: 0,
     
      duration: 1
    })
  
  },[])
  return (
    <>
      {/* <Nav /> 
    <Menu />  */}
      <Home /> 
      <div className="whoami-animated-container">
        <div className="growing-container">
          <div className="whoami-header">
            {split}
          </div>
        </div>
     
      </div>
      <About />
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer/> */}
    </>
  );
}
export default Page;
