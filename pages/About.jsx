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
import Link from "next/link";
import Qualities from "@components/about/Qualities";
import Whoami from "@components/about/Whoami";
import Education from "@components/about/Education";
import Hobbies from "@components/about/Hobbies";
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
        
        <Whoami/>
        <Education/>
       <Qualities/>
       <Hobbies/>
      </section>
    </Page>
  );
};
export default About;
