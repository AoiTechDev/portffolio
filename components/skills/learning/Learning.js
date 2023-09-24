'use client'
import React, { useEffect } from "react";
import "@styles/skills/learning.sass";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { learning_content } from "../data/data";

gsap.registerPlugin(ScrollTrigger);
const Learning = () => {
  useEffect(() => {
    const icons = gsap.utils.toArray(".learning-icons-wrapper .skill-icon");
    gsap.from(".learning-wrapper .skills-left-content", {
      scrollTrigger: {
        trigger: ".learning-wrapper",
        start: "top 60%",
        end: "bottom 20%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
 
    gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".learning-icons-wrapper",

          start: "top 60%",
          end: "bottom 20%",
        },
      })
      .staggerFrom(
        icons,
        0.4,
        { y: 100, opacity: 0, ease: "power1.InOut" },
        "0.2",
        "-=0.5"
      )
  })
  return (
    <div className="learning-wrapper">
      <div className="skills-left-content">
        <p>
       {learning_content}
        </p>
      </div>
      <div className="learning-icons-wrapper">
        <div className="skill-icon">
          <SiTypescript />
        </div>
        <div className="skill-icon">
          <SiNextdotjs />
        </div>
        <div className="skill-icon">
          <SiMongodb />
        </div>
        <div className="skill-icon">
          <SiJquery />
        </div>
        <div className="skill-icon">
          <SiNodedotjs />
        </div>
        <div className="skill-icon">
          <SiExpress />
        </div>
        <div className="skill-icon">
          <SiRedux />
        </div>
      </div>
    </div>
  );
};
export default Learning;
