import React, {
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
} from "react-icons/di";
import { gsap } from "gsap";
export const Spinner = () => {
  const boxRef = useRef();
  useLayoutEffect(() => {
    const spinner = document.querySelector(".spinner");
    const circles = document.querySelectorAll(".circle");
    const blur = document.querySelector("spinner-blur");

    let mm = gsap.matchMedia();

    mm.add("(max-width: 900px)", () => {
      gsap.set(spinner, {
        scale: 0.6,
      });
    });
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

    let spinnerTween = gsap.fromTo(
      spinner,
      {
        rotation: 0,
      },
      {
        rotation: '-=360',
        duration: 10,
        repeat: -1,
        ease: "linear",
      }
    );

    gsap.fromTo(spinnerTween, { timeScale: 3 }, { timeScale: 1, duration: 1 });

    let icons = gsap.fromTo(
      spinner.children,
      {
        rotation: 0,
      },
      {
        rotation: 360,    
        duration: 10,
        repeat: -1,
        ease: "linear",
      }
    );

    gsap.fromTo(icons, { timeScale: 3 }, { timeScale: 1, duration: 1 });
    gsap.fromTo(spinner.children, {
      scale: 0
    },{
      scale: 1,
      duration: 3,
    }
    )
  });
  return (
    <div className="spinner" ref={boxRef}>
      <div className="spinner-blur">
        <h4>
          My Main
          <br />
          Tech Stack
        </h4>
      </div>
      <div
        className="circle"
        style={{
          "--clr": "rgba(94,211,243,0.1)",
        }}
      >
        {" "}
        <DiReact className="tech-icon" alt="tech icon" color="#5ed3f3" />
      </div>
      <div
        className="circle"
        style={{
          "--clr": "rgba(239,216,29, 0.1)",
        }}
      >
        {" "}
        <DiJavascript1 className="tech-icon" alt="tech icon" color="#efd81d" />
      </div>
      <div
        className="circle"
        style={{
          "--clr": "rgba(221,75,37,0.1)",
        }}
      >
        {" "}
        <DiHtml5 className="tech-icon" alt="tech icon" color="#dd4b25" />
      </div>
      <div
        className="circle"
        style={{
          "--clr": "rgba(53,148,207,0.1)",
        }}
      >
        {" "}
        <DiCss3 className="tech-icon" alt="tech icon" color="#3594cf" />
      </div>
      <div
        className="circle"
        style={{
          "--clr": "rgba(199,100,148,0.1)",
        }}
      >
        {" "}
        <DiSass className="tech-icon" alt="tech icon" color="#c76494" />
      </div>
    </div>
  );
};
export default Spinner;
