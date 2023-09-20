'use client'
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Content = () => {
    useEffect(() => {
        gsap.from(".education-content ul li",{
          scrollTrigger: {
            trigger: ".education-content",
            start: "top 60%",
            end: "bottom 20%",
        
            //markers: true,
            //pin: true,
            //pinSpacing: false,
            //toggleActions: "restart none none none",
          },
          x: -100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
        })
        
      },[])
    
  return (
    <div className="education-content">
      <ul>
        {" "}
        <li>
          Gained broad knowledge of computer science - programming languages,
          technologies, algorithms.
        </li>{" "}
        <li>Hands-on experience through coursework labs and projects.</li>{" "}
        <li>
          Collaborated in groups to deliver projects using agile methodologies.
        </li>{" "}
        <li>
          Learned to systematically break down complex problems and apply
          algorithms.
        </li>{" "}
        <li>
          Experience with version control, integration, planning, debugging,
          tools.
        </li>{" "}
      </ul>
    </div>
  );
};
export default Content;
