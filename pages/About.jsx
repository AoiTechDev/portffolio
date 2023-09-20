"use client";
import "@styles/about.sass";
import { useEffect } from "react";
import Qualities from "@components/about/Qualities";
import Whoami from "@components/about/Whoami";
import Education from "@components/about/Education";
import FunFacts from "@components/about/funfacts/FunFacts";
import { gsap } from "gsap";
import Title from "@components/reusable/title/Title";
import { ScrollTrigger, ScrollToPlugin } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useEffect(() => {
    // const title = document.querySelectorAll(".title-wrapper");

    // gsap
    //   .timeline({
    //     paused: true,
    //     scrollTrigger: {
    //       trigger: "#about",
    //       start: "top center",
    //       end: "top center",
 
         
    //     },
    //   })
    //   .to(title, {
    //     opacity: 1,
    //     y: 100,
    //     duration: 0.5,
    //   });
  });

  return (
    <section id="about">
      <Title title="who am i?" />
      <Whoami />
      <Title title="education" />
      <Education />
      <Title title="my qualities" />
      <Qualities />
      <Title title="fun facts" />
      <FunFacts />
    </section>
  );
};
export default About;
