import React from "react";
import "@styles/skills/tools.sass";
import { BsGit, BsGithub } from "react-icons/bs";
import { SiPostman, SiJira } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import { BiLogoFigma } from "react-icons/bi";

const Tools = () => {
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
      <div className="skills-icon-wrapper">
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
