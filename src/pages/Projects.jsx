"use client";
import React, { useState } from "react";
import "@styles/projects.sass";
import Arrows from "../../components/visual_components/arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "@components/projects/projectsCards/ProjectCard";
import { Navigation } from "swiper/modules";
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
      <h2>My projects</h2>
      <div className="projects-content">
        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
        >
          {project_data.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-container">
                <h4>{project.title}</h4>
                <div className="project-description">
                  <h5>Description</h5>
                  <p>{project.description}</p>
                </div>
                <div className="project-tech-stack">
                  <h5>Technologies I Used</h5>
                  <div className="tech-container">
                    
                  </div>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            {" "}
            <div className="swiper-button-next">
              <div className="swiper-arrow s-a-next"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-button-prev">
              <div className="swiper-arrow s-a-prev"></div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};
export default Projects;
