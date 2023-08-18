import React from 'react'
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
  CommunicationIcon,
  CreativeIcon,
  ProblemIcon,
  SelfdisciplineIcon,
  TeamworkIcon,
} from "../images/icons/Icons";

export const HardSkills = () => {
  
  return (
    <div className="hard-skills">
    <h2 className="hard-first-letter">Hard Skills</h2>
    <div className="skills-wrapper">
      <div className="technologies ">
        <h3>Technologies</h3>
        <div className="icons-wrapper">
          <CssIcon/>
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
  )
}

export const SoftSkills = () => {
  return (
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
            </div>
  )
}
