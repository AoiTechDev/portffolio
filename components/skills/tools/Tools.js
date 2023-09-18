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
      <div className="first-row-content">
        <div className="tools-content">
          <p>
            In my projects and professional experience, I leverage a range of
            industry-standard tools and concepts to deliver high quality
            results. Version control with Git and collaboration on GitHub enable
            me to efficiently track changes and work seamlessly with teams.
            Postman allows comprehensive API testing during development.
          </p>
        </div>
      </div>
      <div className="center-icon-wrapper">
        <div className="tools-icon">
          <BsGit />
        </div>
        <div className="tools-icon">
          <BsGithub />
        </div>
        <div className="tools-icon">
          <SiPostman />
        </div>
        <div className="tools-icon">
          <SiJira />
        </div>
        <div className="tools-icon">
          <TbApi />
        </div>
        <div className="tools-icon">
          <DiScrum />
        </div>
        <div className="tools-icon">
          <BiLogoFigma />
        </div>
      </div>
      <div className="third-row-content">
        <div className="tools-content">
          <p>
            I also utilize tools like Jira, Figma, and Scrum frameworks to plan
            sprints, create mocks, and ship responsive web designs focused on
            the user experience. Concepts like REST APIs and RWD ensure my work
            integrates seamlessly across platforms. I enjoy learning new
            technologies but also rely on these proven staples to build secure,
            scalable products.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tools;
