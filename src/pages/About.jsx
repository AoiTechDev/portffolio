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
import { myData } from "@components/aboutme/aboutMeData";
import { useElementOnScreen } from "@utills/ElementOnScreen";

const About = () => {
  const [contentId, setContentId] = useState("");
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const getSlideId = (e) => {
    setContentId(e.currentTarget.id);
  };

  return (
    <section id="about" ref={containerRef}>
      <div className="cube-wrapper">
        <div className="about-heading-text">
          <h3 className={isVisible && "scroll-left"}>MyCube</h3>
          <h5 className={isVisible && "scroll-right"}>
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
          className={isVisible && "scroll-typing"}
          id="mycube"
        >
          {myData.map((data, index) => (
            <SwiperSlide key={index} id={data.id} onClick={getSlideId}>
              <Blob text={data.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {myData.map(
        (data, index) =>
          data.id === contentId && (
            <div key={index} className={isVisible ? "expand-borders aboutme-content" : "hide-borders aboutme-content"}>
              <h4 className={isVisible ? "fade-in" : "fade-out"}>{data.title}</h4>
              <div className={isVisible ? "fade-in content-wrapper" : "fade-out content-wrapper"}>{data.content}</div>
            </div>
          )
      )}
    </section>
  );
};
export default About;
