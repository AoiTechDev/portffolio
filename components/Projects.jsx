"use client";
import React, {useState} from "react";
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
import myApp from '../assets/images/my_app.jpg'
import ProjectInfo from "./projectsCards/ProjectInfo";
const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(false)
  const projectInfoHandler = () => {
    setProjectInfo(prev => !prev)
  }

  return (
    <section id="projects" >
      {projectInfo && <ProjectInfo projectInfoHandler={projectInfoHandler} />}
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
          <SwiperSlide onClick={projectInfoHandler}>
            <ProjectCard title={'My diploma work'} img={diplomaWork}/>
          </SwiperSlide>
          <SwiperSlide >
            <ProjectCard title={'My personal portfolio website'} img={myApp}/>
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
