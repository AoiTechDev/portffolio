import React, { useEffect } from "react";
import '@styles/title/title.sass'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ title }) => {

  useEffect(()=>{
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
     
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
           
          },
        }
      );
    });
  }, [])
  return (
    <div className="title-wrapper">
      <div className="title-line"></div>
      <span className="title">{title}</span>
    </div>
  );
};
export default Title;
