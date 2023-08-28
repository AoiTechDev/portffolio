import React from "react";
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
  techArray,
  CustomIcon,
  toolsArray,
  learningArray,
  workedwithArray,
  softArray,
} from "../images/icons/Icons";
import "@styles/about.sass";
import { useInView } from "react-intersection-observer";

export const HardSkills = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <div className="hard-skills">
      <h2
        className={
          inView ? "hard-first-letter scroll-left" : "hard-first-letter"
        }
        ref={ref}
      >
        Hard Skills
      </h2>
      <div className="skills-wrapper">
        <div className="technologies icons-row">
          <h4 className={inView && "scroll-down"} ref={ref}>
            Technologies
          </h4>
          <div className="icons-wrapper">
            {techArray.map((tech, index) => (
              <CustomIcon
                key={index}
                className={inView ? "icon scroll-left" : "icon"}
                ref={ref}
                src={tech}
                delay={index / 2 + "s"}
              />
            ))}
          </div>
        </div>
        <div className="workedwith icons-row">
          <h4 className={inView && "scroll-down"} ref={ref}>
            I also worked with
          </h4>
          <div className="icons-wrapper">
            {workedwithArray.map((work, index) => (
              <CustomIcon
                key={index}
                className={inView ? "icon scroll-left" : "icon"}
                ref={ref}
                src={work}
                delay={index  / 2 - (0.08*index) + "s"}
              />
            ))}
          </div>
        </div>
        <div className="tools icons-row">
          <h4 className={inView && "scroll-down"} ref={ref}>
            Tools
          </h4>
          <div className="icons-wrapper">
            {toolsArray.map((tools, index) => (
              <CustomIcon
                key={index}
                className={inView ? "icon scroll-left" : "icon"}
                ref={ref}
                src={tools}
                delay={index / 2 + "s"}
              />
            ))}
          </div>
        </div>
        <div className="learning icons-row">
          <h4 className={inView && "scroll-down"} ref={ref}>
            In process of learning
          </h4>
          <div className="icons-wrapper">
            {learningArray.map((learn, index) => (
              <CustomIcon
                key={index}
                className={inView ? "icon scroll-left" : "icon"}
                ref={ref}
                src={learn}
                delay={index / 2 + "s"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SoftSkills = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  return (
    <div className="soft-skills">
      <h2
        className={
          inView ? "soft-first-letter scroll-down" : "soft-first-letter"
        }
        ref={ref}
      >
        Soft Skills
      </h2>
      <div className="skills-wrapper">
        {softArray.map((skill, index) =>
          index % 2 === 0 ? (
            <div className="soft-skill">
              <CustomIcon
                key={index}
                src={skill.icon}
                className={inView ? "icon scroll-left" : "icon"}
                ref={ref}
                delay={index / 2 + "s"}
              />
              <h4
                className={inView && "soft-skill scroll-right"}
                ref={ref}
                style={{
                  animationDelay: index / 2 + "s",
                }}
              >
                {skill.text}
              </h4>
            </div>
          ) : (
            <div className="soft-skill">
              <h4
                className={inView && "soft-skill scroll-left"}
                ref={ref}
                style={{
                  animationDelay: index / 2 + "s",
                }}
              >
                {skill.text}
              </h4>
              <CustomIcon
                key={index}
                src={skill.icon}
                className={inView ? "icon scroll-right" : "icon"}
                ref={ref}
                delay={index / 2 + "s"}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
