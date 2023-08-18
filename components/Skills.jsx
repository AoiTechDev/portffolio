"use client";

import "@styles/skills.sass";
import Arrows from "./arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/hash-navigation";
import { HardSkills, SoftSkills } from "./skills/SkillsComponent";
//import 'swiper/swiper.min.css'

import React, { useLayoutEffect, useState, useRef } from "react";

const Skills = () => {
  const windowWidthSize = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return windowWidth;
  };

  let width = windowWidthSize();
  
  return (
    <section id="skills">
      <div className="wrapper">
        {width < 950 ? (
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="slider-wrapper"
            rows={1}
            fill={"row"}
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            <SwiperSlide className="left">
              <HardSkills />
              <div className="swiper-button-next">
                <div className="swiper-arrow s-a-next"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="right">
              <div className="swiper-button-prev">
                <div className="swiper-arrow s-a-prev"></div>
              </div>
              <SoftSkills />
            </SwiperSlide>
          </Swiper>
        ) : (
          <>
           
            <HardSkills />
            <SoftSkills />
          </>
        )}
      </div>
      <Arrows section={"#projects"} headingText={"Next one are my projects!"} />
    </section>
  );
};
export default Skills;
