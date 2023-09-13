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
  const qualityArray = [
    "Creative",
    "Adaptable",
    "Teamwork",
    "Self-discipline",
    "Communication",
  ];
  const qualityDescArray = [
    "Thinking outside the box comes naturally to me. I excel at bringing fresh ideas to projects.",
    'I adapt quickly to new tools, processes, and environments. Change keeps me engaged.',
    "I build positive relationships and enjoy brainstorming in groups. Teams create better outcomes together.",
    "Pushing past mental barriers allows me to persist through challenges. I cultivate a growth mindset.",
    "Understanding communication styles helps me effectively collaborate with teammates of all backgrounds.",
  ];
  return (
    <Page>
      <section id="about">
        <div className="qualities-wrapper">
          {qualityArray.map((quality, index) => (
            <div className="quality" key={index}>
              <span>{quality}</span>
              <p>{qualityDescArray[index]}</p>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
};
export default About;
