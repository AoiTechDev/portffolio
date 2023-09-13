"use client";
import "@styles/about.sass";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { useInView } from "react-intersection-observer";
import { EffectCube } from "swiper/modules";
import Blob from "@components/visual_components/blob/Blob";
import { myData } from "@components/aboutme/aboutMeData";
import { useElementOnScreen } from "@utills/ElementOnScreen";
import Page from "@components/page";
import Link from 'next/link'
const About = () => {
  const [contentId, setContentId] = useState("whoami");
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  const getSlideId = (e) => {
    setContentId(e.currentTarget.id);
  };

  return (
    <Page>
      <section id="about">
        <div className="cube-wrapper">
          <div className="about-heading-text">
            <h3
            // ref={ref} className={inView ? "fade-in-left" : "fade-out-up"}
            >
              MyCube
            </h3>
            <h5
            // ref={ref} className={inView ? "fade-in-right" : "fade-out-up"}
            >
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
            // className={inView ? "fade-in-left" : "fade-out-left"}
            id="mycube"
            ref={ref}
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
              <div
                key={index}
                ref={ref}
               
                className="aboutme-content"
              >
                <h4
               
                >
                  {data.title}
                </h4>
                <div
                  ref={ref}
               
                  className="content-wrapper"
                >
                  {data.content}
                </div>
              </div>
            )
        )}
       
      </section>
    </Page>
  );
};
export default About;
