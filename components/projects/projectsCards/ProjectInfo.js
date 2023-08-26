import React from "react";
import "animate.css";
import CloseMenu from "@components/menu/CloseMenu";
import { GithubIcon, CustomIcon } from "@components/images/icons/Icons";
import { useInView } from "react-intersection-observer";
import Line from "@components/visual_components/line/Line";
import { diploma_work } from "@components/projects/projects_data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/hash-navigation";
import { Navigation } from "swiper/modules";
import "@styles/skills.sass";

import SlideArrow from "@components/visual_components/arrows/SlideArrow";

import ProjectContent from "./project_content/ProjectContent";
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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="project-info-swiper"
        rows={1}
        fill={"row"}
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        <SwiperSlide className="project-slide">
          <ProjectContent
            projectData={projectData}
            cardId={cardId}
            title="Description"
            content="description"
            delay={0.75}
          />
          <SlideArrow />
        </SwiperSlide>
        <SwiperSlide className="project-slide">
          <ProjectContent
            projectData={projectData}
            cardId={cardId}
            title="What I did"
            content="spec"
            delay={0}
          />
        </SwiperSlide>
      </Swiper>

      <Line />

      <div className="side-technologies">
        <h4
          className={inView && "scroll-down"}
          ref={ref}
          style={{
            animationDelay: "1.5s",
          }}
        >
          Technologies
        </h4>
        <div className="side-icons-wrapper">
          {projectData.map(
            (project) =>
              project.id === cardId &&
              project.tech.map((tech, index) => {
                let del = (3 + index) / 2;
                return (
                  <CustomIcon
                    key={index}
                    src={tech}
                    className={inView ? "icon scroll-left" : "icon"}
                    ref={ref}
                    delay={del + "s"}
                  />
                );
              })
          )}
        </div>
      </div>
      <div className="github-link">
        <GithubIcon
          className={inView ? "icon scroll-left" : "icon"}
          ref={ref}
          animationDelay={"4s"}
        />
        {projectData.map((project) => project.id === cardId && (
          <a
            href={project.github}
            className={inView ? "icon scroll-right" : "icon"}
            ref={ref}
            style={{
              animationDelay: "4s",
            }}
            data-text="Github"
            target="_blank"
          >
            Github
          </a>
        ))}
      </div>
    </div>
  );
};
export default ProjectInfo;
