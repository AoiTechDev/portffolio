import React from "react";
import "@styles/skills.sass";
import Arrows from "./arrows/Arrows";

import {
  CssIcon,
  ReactIcon,
  JsIcon,
  HtmlIcon,
  NodeIcon,
  SassIcon,
  VscodeIcon,
  GitIcon,
  GithubIcon,
  NextIcon,
  TsIcon,
  ReduxIcon,
} from "./images/icons/Icons";

const Skills = () => {
  return (
    <section id="skills">
      <div className="wrapper">
        <div className="hard-skills">
          <h2>Hard Skills</h2>
          <div className="technologies ">
            <h3>Technologies</h3>
            <div className="icons-wrapper">
              <CssIcon />
              <ReactIcon />
              <JsIcon />
              <HtmlIcon />
              <NodeIcon />
              <SassIcon />

              {/* <div className="technologies-icons icons"></div>
                <div className="technologies-icons icons"></div>
                <div className="technologies-icons icons"></div>
                <div className="technologies-icons icons"></div>
                <div className="technologies-icons icons"></div> */}
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
        <div className="soft-skills">
          <h2>Soft Skills</h2>
        </div>
      </div>
      <Arrows section={"#projects"} headingText={"Next one are my projects!"} />
    </section>
  );
};
export default Skills;
