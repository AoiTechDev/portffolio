'use client'
import React, { useEffect } from "react";

import { BsGit, BsGithub } from "react-icons/bs";
import { SiPostman, SiJira } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { BiLogoFigma } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { tools_content_one, tools_content_two } from "../data/data";
import Layout from "@components/layout/Layout";
import Title from "@components/reusable/title/Title";

gsap.registerPlugin(ScrollTrigger);
const Tools = () => {
  useEffect(() => {
    const icons = gsap.utils.toArray(".tools-icons-wrapper .skill-icon");
    const panelsContainer = document.querySelector(".tools-icons-wrapper");
    const tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".tools-icons-wrapper",

          start: "top 60%",
          end: "bottom 20%",
        },
      })
      .staggerFrom(
        icons,
        0.4,
        { y: 100, opacity: 0, ease: "power1.InOut" },
        "0.2",
        "-=0.5"
      )

      gsap.from('.tools-left-content .tools-content', {
        scrollTrigger:{
          trigger:'.skills-left-content',
          start:'top 60%',
          end:'bottom 20%',
        },
        y:100,
        opacity:0,
        duration:1,
        
      })
      gsap.from('.tools-right-content .tools-content', {
        scrollTrigger:{
          trigger:'.tools-right-content',
          start:'top 60%',
          end:'bottom 20%',
        },
        y:100,
        opacity:0,
        duration:1,
        
      })
  });
  return (
      <Layout>
         <Title title="tools" />
      <div className="tools-left-content">
        <div className="tools-content">
          <p>
           {tools_content_one}
          </p>
        </div>
      </div>
      <div className="tools-icons-wrapper">
        <div className="skill-icon">
          <BsGit />
        </div>
        <div className="skill-icon">
          <BsGithub />
        </div>
        <div className="skill-icon">
          <SiPostman />
        </div>
        <div className="skill-icon">
          <SiJira />
        </div>
        <div className="skill-icon">
          <TbApi />
        </div>
        <div className="skill-icon">
          <DiScrum />
        </div>
        <div className="skill-icon">
          <BiLogoFigma />
        </div>
      </div>
      <div className="tools-right-content">
        <div className="tools-content">
          <p>
            {tools_content_two}
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Tools;
