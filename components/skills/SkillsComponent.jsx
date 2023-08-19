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
        <div className="technologies ">
          <h3 className={inView && "scroll-down"} ref={ref}>
            Technologies
          </h3>
          <div className="icons-wrapper">
            <CssIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <ReactIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <JsIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <HtmlIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <NodeIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <SassIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
          </div>
        </div>
        <div className="tools ">
          <h3 className={inView && "scroll-down"} ref={ref}>
            Tools
          </h3>
          <div className="icons-wrapper">
            <VscodeIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <GitIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <GithubIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
          </div>
        </div>
        <div className="learning ">
          <h3 className={inView && "scroll-down"} ref={ref}>
            In process of learning
          </h3>
          <div className="icons-wrapper">
            <NextIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <TsIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
            <ReduxIcon
              className={inView ? "icon scroll-left" : "icon"}
              ref={ref}
            />
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
      <h2 className={inView ? "soft-first-letter scroll-down" : 'soft-first-letter'} ref={ref}>
        Soft Skills
      </h2>
      <div className="skills-wrapper">
        <div className="soft-skill">
          <TeamworkIcon className={inView ? "icon scroll-left" : "icon"} ref={ref} />
          <h3
            className={inView && "soft-skill scroll-left"}
            ref={ref}
            style={{
              animationDelay: "0.61s",
            }}
          >
            Teamwork
          </h3>
        </div>
        <div className="soft-skill">
          <h3
            className={inView && "soft-skill scroll-right"}
            ref={ref}
            style={{
              animationDelay: "1.22s",
            }}
          >
            Communication
          </h3>{" "}
          <CommunicationIcon
            className={inView ? "icon scroll-left" : "icon"}
            ref={ref}
          />
        </div>
        <div className="soft-skill">
          <SelfdisciplineIcon
            className={inView ? "icon scroll-left" : "icon"}
            ref={ref}
          />
          <h3
            className={inView && "soft-skill scroll-left"}
            ref={ref}
            style={{
              animationDelay: "1.83s",
            }}
          >
            Self-discipline
          </h3>
        </div>
        <div className="soft-skill">
          <h3
            className={inView && "soft-skill scroll-right"}
            ref={ref}
            style={{
              animationDelay: "2.44s",
            }}
          >
            Problem-solving
          </h3>{" "}
          <ProblemIcon className={inView ? "icon scroll-left" : "icon"} ref={ref} />
        </div>
        <div className="soft-skill">
          <CreativeIcon className={inView ? "icon scroll-left" : "icon"} ref={ref} />
          <h3
            className={inView && "scroll-left"}
            ref={ref}
            style={{
              animationDelay: "3.05s",
            }}
          >
            Creative
          </h3>
        </div>
      </div>
    </div>
  );
};
