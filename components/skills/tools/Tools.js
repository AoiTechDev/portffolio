import React, { useEffect } from "react";
import "@styles/skills/tools.sass";
import { BsGit, BsGithub } from "react-icons/bs";
import { SiPostman, SiJira } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { BiLogoFigma } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/dist/ScrollTrigger";

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

      gsap.from('.skills-left-content .tools-content', {
        scrollTrigger:{
          trigger:'.skills-left-content',
          start:'top 60%',
          end:'bottom 20%',
        },
        y:100,
        opacity:0,
        duration:1,
        
      })
      gsap.from('.skills-right-content .tools-content', {
        scrollTrigger:{
          trigger:'.skills-right-content',
          start:'top 60%',
          end:'bottom 20%',
        },
        y:100,
        opacity:0,
        duration:1,
        
      })
  });
  return (
    <div className="tools-wrapper">
      <div className="skills-left-content">
        <div className="tools-content">
          <p>
            In my projects and professional experience, I use industry-standard
            tools and concepts to deliver high-quality results. Git and GitHub
            for version control and collaboration, along with Postman for
            thorough API testing, are integral to my efficient workflow.
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
      <div className="skills-right-content">
        <div className="tools-content">
          <p>
            I have experience working with tools like Jira, Figma, and Scrum
            frameworks to plan sprints, create mocks, and ship responsive web
            designs focused on the user experience. I also apply REST APIs and
            RWD to ensure seamless cross-platform integration. While I'm eager
            to learn new technologies, I rely on these proven tools for building
            secure, scalable products.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tools;
