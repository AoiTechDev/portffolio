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
  } from "react-icons/di";
gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  useEffect(() => {
    const left_panels = gsap.utils.toArray(".gallery__left_inner");
    const right_panels = document.querySelectorAll(".gallery__right_container");

    left_panels.forEach((panel) => {
      //   const content = panel.querySelectorAll(".gallery__left_inner > *");
      //   console.log(content);
      //   content.forEach((el) => {
      //     gsap.set(el, {
      //       y: 0,
      //       opacity: 0,
      //     });
      //   });
      const content = panel.querySelectorAll("*");
      content.forEach((el) => {
        gsap.set(el, {
          y: 0,
          opacity: 0,
        });
      });
      ScrollTrigger.create({
        trigger: panel,

        start: "top-=250 top",
        markers: true,
        //snap: { snapTo: [0.5], duration: 1, delay: 0 },

        onEnter: ({ progress, direction, isActive }) => {
          gsap.fromTo(
            content,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05 }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            content,
            { y: 0, opacity: 1 },
            { y: -80, opacity: 0, stagger: 0.05 }
          );
        },
        onLeaveBack: () => {
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
          markers: true,
          end: `bottom+=955`,
        },
      });

      tl.from(panel.children[1], {
        y: panel.offsetWidth,
      }).from(panel.children[2], {
        y: panel.offsetWidth,
      });
    });
  }, []);
  return (
    <Layout>
      <div className="gallery">
        <div className="gallery__left">
          <div className="gallery__left_container">
            <div className="gallery__left_inner" style={{ "--clr": "red" }}>
              <p>
                These skills enable me to craft contemporary, user-centered web
                solutions.I'm committed to staying current with the latest
                trends and best practices in these technologies for consistent
                high-quality results.
              </p>
             
            </div>
            <div className="gallery__left_inner" style={{ "--clr": "black" }}>
              <h2>asdasdasdasdasdd</h2>
              <h2>22222222222222</h2>
            </div>
            <div className="gallery__left_inner" style={{ "--clr": "purple" }}>
              <h2>asdasdasdasd2asd</h2>
              <h2>333333333333</h2>
            </div>
          </div>
        </div>
        <div className="gallery__right">
          <div className="gallery__right_container">
            <div className="gallery__right_inner" style={{ "--clr": "red" }}>
            <DiReact className="tech-icon" alt="tech icon" color="#5ed3f3" />
            <DiJavascript1 className="tech-icon" alt="tech icon" color="#efd81d" />
            <DiHtml5 className="tech-icon" alt="tech icon" color="#dd4b25" />
            <DiCss3 className="tech-icon" alt="tech icon" color="#3594cf" />
            <DiSass className="tech-icon" alt="tech icon" color="#c76494" />
            </div>
            <div className="gallery__right_inner" style={{ "--clr": "black" }}>
              2222222222222222
            </div>
            <div className="gallery__right_inner" style={{ "--clr": "purple" }}>
              333333333333333333
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Gallery;
