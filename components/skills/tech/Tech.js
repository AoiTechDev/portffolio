"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import Title from "@components/reusable/title/Title";
import Layout from "@components/layout/Layout";
import { Spinner } from "@chakra-ui/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Tech({ technologies_content }) {
  useEffect(() => {
    gsap.from("main .skills-wrapper .skills-content", {
      scrollTrigger: {
        trigger: ".skills-wrapper",
        start: "top 60%",
        end: "bottom 20%",
      },
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "ease-in",
    });
  }, []);
  return (
    <Layout>
      <Title title="technologies" />
      <div className="skills-wrapper">
        <div className="skills-icon">
          <Spinner />
        </div>
        <div className="skills-content">
          <p>{technologies_content}</p>
        </div>
      </div>
    </Layout>
  );
}
