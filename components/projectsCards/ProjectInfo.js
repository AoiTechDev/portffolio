import React from "react";
import "animate.css";
import CloseMenu from "@components/menu/CloseMenu";
import {
  CssIcon,
  ReactIcon,
  JsIcon,
  HtmlIcon,
  NodeIcon,
  GithubIcon,
} from "../images/icons/Icons";
import { useInView } from "react-intersection-observer";
import Line from "@components/line/Line";
import { diploma_work } from "../../projects_data/data";

const ProjectInfo = ({ projectInfoHandler, projectData, cardId }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  return (
    <div className="side-menu animate__animated animate__fadeInLeft">
      <CloseMenu
        onClick={projectInfoHandler}
        style={{
          background: "#E1DDDB",
        }}
      />
      
      {projectData.map(
        (project) =>
          project.id === cardId && (
            <h3 className={inView && "scroll-down"} ref={ref}>
              {project.title}
            </h3>
          )
      )}
      <Line />
      <div className="project-description">
        <h4 className={inView && "scroll-down"} ref={ref}>
          Description
        </h4>
        {projectData.map(
          (project) =>
            project.id === cardId && (
              <p className={inView && "scroll-left"} ref={ref}>
                {project.description}
              </p>
            )
        )}
      </div>
      <Line />
      <div className="side-technologies">
        <h4 className={inView && "scroll-down"} ref={ref}>
          Technologies
        </h4>
        <div className="side-icons-wrapper">
          <CssIcon className={inView ? "icon scroll-left" : "icon"} ref={ref} />
          <ReactIcon
            className={inView ? "icon scroll-left" : "icon"}
            ref={ref}
          />
          <JsIcon className={inView ? "icon scroll-left" : "icon"} ref={ref} />
          <HtmlIcon
            className={inView ? "icon scroll-left" : "icon"}
            ref={ref}
          />
          <NodeIcon
            className={inView ? "icon scroll-left" : "icon"}
            ref={ref}
          />
        </div>
      </div>
      <div className="github-link">
        <GithubIcon
          className={inView ? "icon scroll-left" : "icon"}
          ref={ref}
          animationDelay={"3s"}
        />
        <a
          href={diploma_work.github}
          className={inView ? "icon scroll-right" : "icon"}
          ref={ref}
          style={{
            animationDelay: "3s",
          }}
          data-text="Github"
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};
export default ProjectInfo;
