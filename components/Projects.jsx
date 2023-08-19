"use client";
import React from "react";
import "@styles/projects.sass";
import Arrows from "./arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ProjectCard from "./projectsCards/ProjectCard";
import { useInView } from "react-intersection-observer";
import '@styles/about.sass'
import diplomaWork from '../assets/images/first_loaded.png'
const Projects = () => {
 
  return (
    <section id="projects">
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
          <SwiperSlide>
            <ProjectCard title={'My diploma work'} img={diplomaWork}/>
          </SwiperSlide>
          <SwiperSlide >
            <ProjectCard title={'My personal portfolio website'}/>
          </SwiperSlide>
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
