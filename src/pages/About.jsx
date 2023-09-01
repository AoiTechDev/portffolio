"use client";
import "@styles/about.sass";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Arrows from "../../components/visual_components/arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";

import { EffectCube } from "swiper/modules";
import Blob from "../../components/visual_components/blob/Blob";
import {myData} from '@components/aboutme/aboutMeData'

const About = () => {
  const [contentId, setContentId] = useState("");
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  const getSlideId = (e) => {
    setContentId(e.currentTarget.id);
  };

  return (
    <section id="about">
      <div className="cube-wrapper">
        <div className="about-heading-text">
          <h3 ref={ref} className={inView && "scroll-left"}>
            MyCube
          </h3>
          <h5 ref={ref} className={inView && "scroll-right"}>
            Swipe and click to know be better!
          </h5>
        </div>

        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
         
          modules={[EffectCube]}
          className={inView && "scroll-typing"}
          id="mycube"
        >
          <SwiperSlide onClick={getSlideId} id="whoami">
            <Blob text="Who am I?" />
          </SwiperSlide>
          <SwiperSlide onClick={getSlideId} id="education">
            <Blob text="Education" />
          </SwiperSlide>
          <SwiperSlide onClick={getSlideId} id="hobbies">
            <Blob text="Hobbies" />
          </SwiperSlide>
        </Swiper>
      </div>
      {myData.map((data) => data.id === contentId && (
         <div  className="aboutme-content"> 
          <h4>{data.title}</h4>
          <div className='content-wrapper'>{data.content}</div>
         </div>
        ))}
    </section>
  );
};
export default About;
