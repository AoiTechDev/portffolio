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

const About = () => {
  const [infoSection, setInfoSection] = useState("introduction");
  const infoSectionHandler = (e) => {
    const list = document.querySelectorAll(".info-navigator ul li");
    list.forEach((element) => {
      element.classList.remove("active");
    });
    setInfoSection(() => {
      e.target.classList.remove("active");

      if (e.target.className.includes("info-btn")) {
        e.target.classList.add("active");
        return "introduction";
      }
      if (e.target.className.includes("hobbies-btn")) {
        e.target.classList.add("active");
        return "hobbies";
      }
    });
  };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  return (
    <section id="about">
      {/* <Stars/> */}
      {/* <inView
        as="div"
        onChange={(inView, entry) => console.log("inView", inView)}
        className="in-view"
      >
        <div className="wrapper">
          
          <div className="right-side-info">
            <h2 ref={ref} className={inView && "scroll-down"}>
              About me
            </h2>
            <div className="info-container">
              <div className="info-navigator">
            
                <ul>
                  <li
                    className={
                      inView ? "active info-btn scroll-left" : "active info-btn"
                    }
                    onClick={infoSectionHandler}
                    data-text="Introducion"
                    style={{
                      "--clr": "#0C4A60",
                    }}
                    ref={ref}
                  >
                    Introducion
                  </li>
                  <li
                    className={
                      inView ? "hobbies-btn scroll-right" : "hobbies-btn"
                    }
                    onClick={infoSectionHandler}
                    data-text="Hobbies"
                    style={{
                      "--clr": "#EF6C33",
                    }}
                    ref={ref}
                  >
                    Hobbies
                  </li>
                </ul>
              </div>
              <div className="info-content">
                {infoSection === "introduction" && (
                  <div
                    ref={ref}
                    className={
                      inView ? "introduction scroll-fade-in" : "introduction"
                    }
                  >
                    I am a computer science graduate with a passion for
                    front-end. Creating modern, functional interfaces is my
                    goal. Much of my knowledge is self- taught. I want to
                    develop and create unique solutions
                  </div>
                )}
                {infoSection === "hobbies" && (
                  <div
                    className={inView ? "hobbies scroll-fade-in" : "hobbies"}
                    ref={ref}
                  >
                    My current interests include programming, developing
                    front-end skills, and regular physical training at the gym.
                    I believe I have found my true calling in these areas. In
                    addition, I am passionate about computer games and would
                    like to develop in the area of creating and mixing music.
                  </div>
                )}
              </div>
            </div>
            <Arrows section={'#skills'} headingText={'Allow me to present my skills :)'} bottom={'0px'}/>
          </div>
        </div>

        
      </inView> */}
      <div className="cube-wrapper">
        <div className="about-heading-text">
          <h2>MyCube</h2>
          <p>Swipe and click to know be better!</p>
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Blob text="Who am I?"/>
          </SwiperSlide>
          <SwiperSlide>
          <Blob text="Education"/>
          </SwiperSlide>
          <SwiperSlide>
          <Blob text="Hobbies"/>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
};
export default About;
