"use client";
import "../styles/about.sass";
import { useState, useEffect, useRef } from "react";
import photo from "../assets/images/myphoto.png";
import MyImage from "./images/MyImage";

import { useInView } from "react-intersection-observer";
import Arrows from "./arrows/Arrows";
import { Stars } from "./stars/Stars";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import Blob from "./blob/Blob";
import CloseMenu from "./menu/CloseMenu";

import HiddenContent from "./aboutme/HiddenContent";

const About = () => {
  
  const [contentId, setContentId] = useState('') 
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  const showContent = (e) => {
    const ball = document.querySelector(".bouncing-ball");
    ball.classList.add("start-bouncing");
    const content = document.querySelector(".about-content-wrapper");
    content.classList.add("expand-content");
    const hiddenContent = document.querySelector(".hidden-content");
    hiddenContent.classList.add("show-content");
    setContentId(e.currentTarget.id)
  };
  const hideContent = (e) => {
    const content = document.querySelector(".about-content-wrapper");
    content.classList.remove("expand-content");
    const hiddenContent = document.querySelector(".hidden-content");
    hiddenContent.classList.remove("show-content");
    const ball = document.querySelector(".bouncing-ball");
    ball.classList.remove("start-bouncing");
  };
  console.log(contentId)
  return (
    <section id="about">
      <div className="cube-wrapper">
        <div className="about-heading-text">
          <h2 ref={ref} className={inView && "scroll-left"}>
            MyCube
          </h2>
          <p ref={ref} className={inView && "scroll-right"}>
            Swipe and click to know be better!
          </p>
        </div>

        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className={inView && "scroll-typing"}
          id="mycube"
        >
          <SwiperSlide onClick={showContent} id="whoami">
            <Blob text="Who am I?" />
          </SwiperSlide>
          <SwiperSlide onClick={showContent} id="education">
            <Blob text="Education" />
          </SwiperSlide>
          <SwiperSlide onClick={showContent} id="hobbies">
            <Blob text="Hobbies" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bouncing-ball"></div>

      <div className="about-content-wrapper">
        <HiddenContent onClick={hideContent} contentId={contentId}/>
      </div>
      <Arrows section={'#skills'} headingText={'Allow me to present my skills :)'} bottom={'1rem'} />
    </section>
  );
};
export default About;
