'use client'
import React, { useEffect } from "react";
import '@styles/title/title.sass'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ title }) => {

  const split = title.split('').map((char, index) => <div key={index}>{char}</div>)

  useEffect(()=>{
    const sections = document.querySelectorAll(".title-wrapper");
    gsap.set(".title-wrapper", { perspective: 400 });
    sections.forEach((section) => {
   
      gsap.fromTo(section.children[0], {
            x: "-=100",
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
             
            }
           })
          gsap.fromTo(section.children[1].children, {
            scale: 0,
            opacity: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 0% 0",
          }, {
            duration: 0.5,
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            transformOrigin: "0% 50% -50",
            
            ease: "back",
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
             
            }
          })
      // gsap.fromTo(
      //   section,
      //   {
      //     x: "-=100",
      //     opacity: 0,
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
     
      //     duration: 1,
      //     ease: "power1.inOut",
      //     scrollTrigger: {
      //       trigger: section,
      //       start: "top 90%",
           
      //     },
      //   }
      // )

    });
  }, [])
  return (
    <div className="title-wrapper">
      <div className="title-line"></div>
      <div className="title">{split}</div>
    </div>
  );
};
export default Title;
