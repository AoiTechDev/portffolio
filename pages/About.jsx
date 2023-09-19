"use client";
import "@styles/about.sass";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/effect-cube";
import { useInView } from "react-intersection-observer";


import Qualities from "@components/about/Qualities";
import Whoami from "@components/about/Whoami";
import Education from "@components/about/Education";
import FunFacts from "@components/about/funfacts/FunFacts";

import Title from "@components/reusable/title/Title";

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
 
      <section id="about">
      <Title title="who am i?" />
        <Whoami/>
        <Title title="education" />
        <Education/>
        <Title title="my qualities" />
       <Qualities/>
       <Title title="fun facts" />
       <FunFacts />
      </section>
   
  );
};
export default About;
