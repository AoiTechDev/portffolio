"use client";
import React, { useEffect } from "react";
import "@styles/skills/gallery/gallery.sass";
import Layout from "@components/layout/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
  DiScrum,
} from "react-icons/di";
import {
  learning_content,
  technologies_content,
  tools_content,
  tools_content_one,
  tools_content_two,
} from "../data/data";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  SiExpress,
  SiJira,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiLogoFigma } from "react-icons/bi";
gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  useEffect(() => {
    const left_panels = gsap.utils.toArray(".gallery__left_inner");
    const right_panels = document.querySelectorAll(".gallery__right_container");
    const right_inner = document.querySelectorAll(
      ".gallery__right_inner .gallery__right_inner_container"
    );

    left_panels.forEach((panel, index) => {
      const content = panel.querySelectorAll("*");

      right_inner.forEach((el, index) => {
      
            gsap.set(el.children, {
              y: 0,
              opacity: 0,
            });
       
      });
      content.forEach((el, index) => {
       
       
          gsap.set(el, {
            y: 0,
            opacity: 0,
          });
       
      });

     
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "bottom top",

        onEnter: () => {
          gsap.fromTo(
            right_inner[index].children,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05 }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            right_inner[index].children,
            { y: 0, opacity: 1 },
            { y: -80, opacity: 0, stagger: 0.05 }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(
            right_inner[index].children,
            { y: 0, opacity: 1 },
            { y: -80, opacity: 0, stagger: 0.05 }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            right_inner[index].children,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05 }
          );
        },
      });

      ScrollTrigger.create({
        trigger: panel,
        markers: true,
        start: "top top",
        end: "bottom top",
        pin: index === left_panels.length - 1 ? false : content,
        pinSpacer: false,
        onEnter: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            content,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05 }
          );

          ////to  zajebisty pomysl essunia
        },
        onLeave: () => {
          gsap.fromTo(
            content,
            { y: 0, opacity: 1 },
            { y: -80, opacity: 0, stagger: 0.05 }
          );
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            content,
            { y: 0, opacity: 1 },
            { y: -80, opacity: 0, stagger: 0.05 }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            content,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05 }
          );
        },
      });
    });

    right_panels.forEach((panel, i) => {
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".gallery__right",
          scrub: 1,
          pin: ".gallery__right",
          start: "top top",

          end: `bottom+=955`,
        },
      });

      tl.from(panel.children[1], {
        y: -panel.offsetWidth,
      }).from(panel.children[2], {
        y: -panel.offsetWidth,
      });
    });
  }, []);
  return (
    <Layout>
      <div className="gallery">
        <div className="gallery__left">
          <div className="gallery__left_container">
            <div className="gallery__left_inner" style={{ "--clr": "red" }}>
              <p>{technologies_content}</p>
            </div>
            <div className="gallery__left_inner" style={{ "--clr": "black" }}>
              <p>{tools_content}</p>
            </div>
            <div className="gallery__left_inner" style={{ "--clr": "purple" }}>
              <p>{learning_content}</p>
            </div>
          </div>
        </div>
        <div className="gallery__right">
          <div className="gallery__right_container">
            <div className="gallery__right_inner" style={{ "--clr": "red" }}>
              <div className="gallery__right_inner_container">
                <div className="skill-icon">
                  {" "}
                  <DiReact
                    className="tech-icon"
                    alt="tech icon"
                    color="#5ed3f3"
                  />
                </div>
                <div className="skill-icon">
                  {" "}
                  <DiJavascript1
                    className="tech-icon"
                    alt="tech icon"
                    color="#efd81d"
                  />
                </div>
                <div className="skill-icon">
                  <DiHtml5
                    className="tech-icon"
                    alt="tech icon"
                    color="#dd4b25"
                  />
                </div>
                <div className="skill-icon">
                  {" "}
                  <DiCss3
                    className="tech-icon"
                    alt="tech icon"
                    color="#3594cf"
                  />
                </div>
                <div className="skill-icon">
                  <DiSass
                    className="tech-icon"
                    alt="tech icon"
                    color="#c76494"
                  />
                </div>
              </div>
            </div>
            <div className="gallery__right_inner" style={{ "--clr": "black" }}>
              <div className="gallery__right_inner_container">
                <div className="skill-icon">
                  <BsGit className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <BsGithub className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiPostman className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiJira className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <TbApi className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <DiScrum className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <BiLogoFigma className="tech-icon" />
                </div>
              </div>
            </div>
            <div className="gallery__right_inner" style={{ "--clr": "purple" }}>
              <div className="gallery__right_inner_container">
                <div className="skill-icon">
                  <SiTypescript className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiNextdotjs className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiMongodb className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiJquery className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiNodedotjs className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiExpress className="tech-icon" />
                </div>
                <div className="skill-icon">
                  <SiRedux className="tech-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Gallery;
