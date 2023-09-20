"use client";

import Image from "next/image";
import study_img from "@assets/images/study-img.jpg";
import { MdLocationPin, MdCalendarMonth } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";

import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Icons = () => {
  useEffect(() => {
    gsap.to(".img-icons-wrapper .study-img", {
      scrollTrigger: {
        trigger: ".img-icons-wrapper",
        start: "top 60%",
        end: "bottom 20%",

       
      },
      clipPath:
        "polygon(0 0, 100% 0, 100% 20%, 50% 20%, 50% 40%, 100% 40%, 100% 60%, 50% 59%, 50% 80%, 100% 80%, 100% 100%, 0 100%)",
      duration: 1,
    });
    gsap.from(".img-icons-wrapper .education-info", {
      scrollTrigger: {
        trigger: ".img-icons-wrapper",
        start: "top 40%",
        end: "bottom 20%",
      },
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      x: -100,
    });
  });
  return (
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
  );
};
export default Icons;
