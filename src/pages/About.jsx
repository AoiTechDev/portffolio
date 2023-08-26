"use client";
import "@styles/about.sass";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Arrows from "../../components/visual_components/arrows/Arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import Blob from "../../components/visual_components/blob/Blob";
import HiddenContent from "../../components/aboutme/HiddenContent";

const About = () => {
  const [contentId, setContentId] = useState("");
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  const showContent = (e) => {
    const ball = document.querySelector(".bouncing-ball");
    ball.classList.add("start-bouncing");
    const content = document.querySelector(".about-content-wrapper");
    content.classList.add("expand-content");
    const hiddenContent = document.querySelector(".hidden-content");
    hiddenContent.classList.add("show-content");
    setContentId(e.currentTarget.id);
  };
  const hideContent = (e) => {
    const content = document.querySelector(".about-content-wrapper");
    content.classList.remove("expand-content");
    const hiddenContent = document.querySelector(".hidden-content");
    hiddenContent.classList.remove("show-content");
    const ball = document.querySelector(".bouncing-ball");
    ball.classList.remove("start-bouncing");
  };

  return (
    <section id="about">
      <div className="cube-wrapper">
        <div className="about-heading-text">
          <h2 ref={ref} className={inView && "scroll-left"}>
            MyCube
          </h2>
          <h4 ref={ref} className={inView && "scroll-right"}>
            Swipe and click to know be better!
          </h4>
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
          pagination={true}
          modules={[EffectCube, Pagination]}
          className={inView && "scroll-typing"}
          id="mycube"
        >
          <SwiperSlide onClick={showContent} id="whoami">
            <Blob text="Who am I?" />
          </SwiperSlide>
          <SwiperSlide onClick={showContent} id="education">
            <Blob text="Education" />
          </SwiperSlide>
          <SwiperSlide onClick={showContent} id="hobbies">
            <Blob text="Hobbies" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bouncing-ball"></div>

      <div className="about-content-wrapper">
        <HiddenContent onClick={hideContent} contentId={contentId} />
      </div>
      <Arrows
        section={"#skills"}
        headingText={"Allow me to present my skills :)"}
        bottom={"1rem"}
      />
    </section>
  );
};
export default About;
