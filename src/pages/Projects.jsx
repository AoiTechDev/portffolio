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
          <SwiperSlide>
            <ProjectInfo projectID="diploma" />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectInfo projectID="portfolio" />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </section>
  );
};
export default Projects;
