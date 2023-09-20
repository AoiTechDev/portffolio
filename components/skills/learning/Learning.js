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
          I continually enhance my skills by adopting new web development
          technologies. Currently, I'm prioritizing TypeScript, Next.js, and
          Redux to strengthen my capabilities in backend development and user
          interface design. I've also gained experience with Node.js, Express,
          MongoDB, and jQuery. Embracing new technical concepts and staying at
          the forefront of innovation drives my enthusiasm in this dynamic
          field.
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
