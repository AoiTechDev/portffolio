'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import '@styles/about/qualities/qualities.sass';
import {description, quality} from './data/data'
gsap.registerPlugin(ScrollTrigger);

const Qualities = () => {
  useEffect(() => {
    gsap.from('.quality-wrapper .quality', {
      scrollTrigger: {
        trigger: ".quality-wrapper",
       
        start: "top 60%",
        end: "bottom 20%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
  },[])
  

  return (
    <div className="wrapper quality-wrapper">
     {/* <Title title="My qualities"/> */}
      {quality.map((quality, index) => (
        <div className="quality" key={index}>
          <span>{quality}</span>
          <p>{description[index]}</p>
        </div>
      ))}
    </div>
  );
};
export default Qualities;
