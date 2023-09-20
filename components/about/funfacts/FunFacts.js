'use client'
import React, { useEffect } from "react";
import "@styles/about/funfacts/funfacts.sass";
import Card from "./card/Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hobbies = () => {
  useEffect(() => {

    gsap.from(".funfacts-wrapper .card", {
      scrollTrigger: {
        trigger: ".funfacts-wrapper",
        start: "top 60%",
        end: "bottom 20%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  },[])
  return (
    <div className="funfacts-wrapper">
      <Card
        id="1"
        title="Fun Fact 1"
        context="I challenge myself to code and make commits to my GitHub. My current milestone is 100 days. You can follow my progress on my profile :)"
      />
      <Card id="2" title="Fun Fact 2" context="" />
      <Card id="3" title="Fun Fact 3" context="" />
    </div>
  );
};
export default Hobbies;
