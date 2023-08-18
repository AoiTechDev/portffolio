"use client";

import "@styles/skills.sass";
import Arrows from "./arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HardSkills, SoftSkills } from "./skills/SkillsComponent";
//import 'swiper/swiper.min.css'

import React, { useLayoutEffect, useState } from "react";

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
  console.log(width);
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
          >
            <SwiperSlide className="left"><HardSkills/></SwiperSlide>
            <SwiperSlide className="right"><SoftSkills/></SwiperSlide>
          </Swiper>
        ) : (
          <>
            {/* <div className="hard-skills">
              <h2 className="hard-first-letter">Hard Skills</h2>
              <div className="skills-wrapper">
                <div className="technologies ">
                  <h3>Technologies</h3>
                  <div className="icons-wrapper">
                    <CssIcon />
                    <ReactIcon />
                    <JsIcon />
                    <HtmlIcon />
                    <NodeIcon />
                    <SassIcon />
                  </div>
                </div>
                <div className="tools ">
                  <h3>Tools</h3>
                  <div className="icons-wrapper">
                    <VscodeIcon />
                    <GitIcon />
                    <GithubIcon />
                  </div>
                </div>
                <div className="learning ">
                  <h3>In process of learning</h3>
                  <div className="icons-wrapper">
                    <NextIcon />
                    <TsIcon />
                    <ReduxIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="soft-skills">
              <h2 className="soft-first-letter">Soft Skills</h2>
              <div className="skills-wrapper">
                <div className="soft-skill">
                  <TeamworkIcon />
                  <h3>Teamwork</h3>
                </div>
                <div className="soft-skill">
                  <h3>Communication</h3> <CommunicationIcon />
                </div>
                <div className="soft-skill">
                  <SelfdisciplineIcon />
                  <h3>Self-discipline</h3>
                </div>
                <div className="soft-skill">
                  <h3>Problem-solving</h3> <ProblemIcon />
                </div>
                <div className="soft-skill">
                  <CreativeIcon />
                  <h3>Creative</h3>
                </div>
              </div>
            </div> */}
            <HardSkills/>
            <SoftSkills/>
          </>
        )}
      </div>
      <Arrows section={"#projects"} headingText={"Next one are my projects!"} />
    </section>
  );
};
export default Skills;
