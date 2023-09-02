"use client";

import "@styles/skills.sass";
import Arrows from "../../components/visual_components/arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/hash-navigation";
import { HardSkills, SoftSkills } from "../../components/skills/SkillsComponent";
import { useInView } from "react-intersection-observer";
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

  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <section id="skills">
      
     
        {/* {width < 950 ? (
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
            
            <SoftSkills  />
          </>
        )} */}
        <HardSkills  />

    
    </section>
  );
};

export default Skills;
