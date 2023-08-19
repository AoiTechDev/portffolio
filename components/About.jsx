"use client";
import "../styles/about.sass";
import { useState, useEffect } from "react";
import photo from "../assets/images/myphoto.png";
import MyImage from "./images/MyImage";

import { useInView } from "react-intersection-observer";
import Arrows from "./arrows/Arrows";

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
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <inView
        as="div"
        onChange={(inView, entry) => console.log("inView", inView)}
        className="in-view"
      >
        <div className="wrapper">
          <div className="left-side-img">
            <MyImage
              src={photo}
              alt={"my image"}
              width={400}
              height={600}
              //containerRef={ref}
              isVisible={inView}
            />
          </div>
          <div className="right-side-info">
            <h2 ref={ref} className={inView && "scroll-down"}>
              About me
            </h2>
            <div className="info-container">
              <div className="info-navigator">
                {/* <button className="info-btn" onClick={infoSectionHandler}>
              Introducion
            </button>
            <button className="hobbies-btn" onClick={infoSectionHandler}>
              Hobbies
            </button> */}
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

        
      </inView>
    </section>
  );
};
export default About;
