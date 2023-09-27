"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  whoami_content,
} from "./data/data";
import "@styles/about/whoami/whoami.sass";
import Title from "@components/reusable/title/Title";
gsap.registerPlugin(ScrollTrigger);

const Whoami = () => {
  const split = whoami_content
    .split(" ")
    .map((char, index) => <span key={index}>{char}</span>);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 20%",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });
    tl.to(".whoami-content p span", {
      color: "rgb(226, 226, 226)",
      stagger: 1,
    });
  }, []);
  return (
    <div className="wrapper">
      <Title title="who am i?" />
      <div className="whoami-content-wrapper">
        <div className="whoami-content">
          <p>{split}</p>
        </div>
      </div>
    </div>
  );
};
export default Whoami;
