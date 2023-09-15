"use client";

import "@styles/skills.sass";
import React, {
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import Page from "@components/page";
import { gsap } from "gsap";
import Title from "@components/reusable/title/Title";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
} from "react-icons/di";

const Skills = () => {
  const boxRef = useRef();
  useLayoutEffect(() => {
    const spinner = document.querySelector(".spinner");
    const circles = document.querySelectorAll(".circle");
    const blur = document.querySelector("spinner-blur");

    let mm = gsap.matchMedia();

    mm.add("(max-width: 600px)", () => {
      gsap.set(spinner, {
        scale: 0.6,
      });
    })
    gsap
      .timeline()
      .to(spinner.children[1], {
        y: -130,
        x: 0,
        duration: 0.8,
      })
      .to(spinner.children[2], {
        y: -30,
        x: 130,
        duration: 0.8,
      })
      .to(spinner.children[3], {
        y: 120,
        x: 80,
        duration: 0.8,
      })
      .to(spinner.children[4], {
        y: 120,
        x: -80,
        duration: 0.8,
      })
      .to(spinner.children[5], {
        y: -30,
        x: -130,
        duration: 0.8,
      });

    gsap.to(spinner, {
      rotate: '-=360',
      duration: 10
    },0)
    gsap.to(spinner.children,{
      rotate: 360,
      duration: 10
    })
  });

  return (
    <Page>
      <section id="skills">
        <Title title="tech stack" />
        <div className="skills-wrapper">
          <div className="skills-icon">
            <div className="spinner" ref={boxRef}>
              <div className="spinner-blur"></div>
              <div className="circle">
                {" "}
                <DiReact className="tech-icon" alt="tech icon" />
              </div>
              <div className="circle">
                {" "}
                <DiJavascript1 className="tech-icon" alt="tech icon" />
              </div>
              <div className="circle">
                {" "}
                <DiHtml5 className="tech-icon" alt="tech icon" />
              </div>
              <div className="circle">
                {" "}
                <DiCss3 className="tech-icon" alt="tech icon" />
              </div>
              <div className="circle">
                {" "}
                <DiSass className="tech-icon" alt="tech icon" />
              </div>
            </div>
          </div>
          <div className="skills-content">
            <p>
              These skills collectively empower me to create modern and
              user-centric web solutions. I am dedicated to staying updated with
              the latest trends and best practices in these technologies to
              deliver high-quality results consistently.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Skills;
