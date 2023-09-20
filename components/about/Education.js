'use client'
import React, { useEffect } from "react";  
import Image from "next/image";
import study_img from "@assets/images/study-img.jpg";
import { MdLocationPin, MdCalendarMonth } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
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
    gsap.to(".img-icons-wrapper .study-img",{
      scrollTrigger: {
        trigger: ".img-icons-wrapper",
        start: "top 60%",
        end: "bottom 20%",
    
        //markers: true,
        //pin: true,
        //pinSpacing: false,
        //toggleActions: "restart none none none",
      },
      clipPath: 'polygon(0 0, 100% 0, 100% 20%, 50% 20%, 50% 40%, 100% 40%, 100% 60%, 50% 59%, 50% 80%, 100% 80%, 100% 100%, 0 100%)',
      duration: 1,
    })
    gsap.from(".img-icons-wrapper .education-info", {
      scrollTrigger: {
        trigger: '.img-icons-wrapper',
        start: 'top 40%',
        end: 'bottom 20%'
      },
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      x: -100
    })

  },[])

  return (
    <div className="wrapper">
     
      <div className="education-wrapper ">
        <div className="img-icons-wrapper">
          <Image src={study_img} className="study-img" />
        
          <div className="education-info">
            <MdCalendarMonth className="edu-icon" />
            <p>10.2018 - 07.2023</p>
          </div>
          <div className="education-info">
            <MdLocationPin className="edu-icon" />
            <p>ZUT, Szczecin</p>
          </div>
          <div className="education-info">
            <BsFillMortarboardFill className="edu-icon" />
            <p>
              Bachelor of
              <br />
              Engineering
            </p>
          </div>
        </div>
        <div className="education-content">
          <ul>
            {" "}
            <li>
              Gained broad knowledge of computer science - programming
              languages, technologies, algorithms.
            </li>{" "}
            <li>Hands-on experience through coursework labs and projects.</li>{" "}
            <li>
              Collaborated in groups to deliver projects using agile
              methodologies.
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
      </div>
    </div>
  );
};
export default Education;
 