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
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
  DiGit,
  DiGithubBadge,
  DiVisualstudio,
} from "react-icons/di";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import {
  SiPostman,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
export const HardSkills = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  const stackIconArray = [
    <DiReact className="tech-icon" />,
    <DiJavascript1 className="tech-icon" />,
    <DiHtml5 className="tech-icon" />,
    <DiCss3 className="tech-icon" />,
    <DiSass className="tech-icon" />,
    <DiGit className="tech-icon" />,
    <DiGithubBadge className="tech-icon" />,
    <DiVisualstudio className="tech-icon" />,
    <TbApi className="tech-icon" />,
    <SiPostman className="tech-icon" />,
  ];
  const workedIconArray = [
    <SiNodedotjs className="tech-icon" />,
    <SiExpress className="tech-icon" />,
    <SiTailwindcss className="tech-icon" />,
    <SiMongodb className="tech-icon" />,
    <SiTypescript className="tech-icon" />,
    <SiRedux className="tech-icon" />,
    <TbBrandNextjs className="tech-icon" />,
  ];

  const stackLabelArray = [
    "React",
    "Javascript",
    "HTML5",
    "CSS3",
    "Sass",
    "Git",
    "Github",
    "VS Code",
    "REST API",
    "Postman",
  ];
  const wortkedLabelArray = [
    "NodeJS",
    "ExpressJS",
    "Tailwind",
    "MongoDB",
    "Typescript",
    "Redux",
    "NextJS",
  ];

  return (
    <div className="hard-skills">
      <h2>My Coding Toolkit</h2>
      <div className="stack-wrapper">
        <div className="heading-wrapper">
          <h5>
            Cooking up React interfaces and more using my kitchen full of dev
            tools
          </h5>
        </div>
        <div className="skills-wrapper">
          {stackIconArray.map((icon, index) => (
            <div key={index} className="icon-wrapper">
              {icon}
              <p>{stackLabelArray[index]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="worked-wrapper">
        <div className="heading-wrapper">
          <h5>I constantly adding new spices and flavors to my recipe list</h5>
        </div>
        <div className="worked-skills-wrapper">
          {workedIconArray.map((icon, index) => (
            <div key={index} className="icon-wrapper">
              {icon}
              <p>{wortkedLabelArray[index]}</p>
            </div>
          ))}
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
