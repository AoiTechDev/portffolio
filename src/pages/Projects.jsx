"use client";
import React, { useState } from "react";
import "@styles/projects.sass";
import Arrows from "../../components/visual_components/arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ProjectCard from "@components/projects/projectsCards/ProjectCard";

import "@styles/about.sass";
import ProjectInfo from "@components/projects/projectsCards/ProjectInfo";
import { project_data } from "@components/projects/projects_data/data";
const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(false);
  const [cardId, setCardId] = useState("diploma");
  const projectInfoHandler = (e) => {
    setProjectInfo((prev) => !prev);
    setCardId(e.currentTarget.id);
    
  };

  return (
    <section id="projects">
      {projectInfo && (
        <ProjectInfo
          projectInfoHandler={projectInfoHandler}
          projectData={project_data}
          cardId={cardId}
        />
      )}
      <div className="card-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {project_data.map((project, index) => (
            <SwiperSlide onClick={projectInfoHandler} key={index} id={project.id}>
              <ProjectCard name={project.name}  />
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
      <Arrows
        section={"#contact"}
        headingText={"You can contact me down there"}
      />
    </section>
  );
};
export default Projects;