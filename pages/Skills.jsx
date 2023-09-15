"use client";

import "@styles/skills.sass";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/hash-navigation";
import { HardSkills, SoftSkills } from "@components/skills/SkillsComponent";
import { useInView } from "react-intersection-observer";
//import 'swiper/swiper.min.css'
import Link from "next/link";
import React, {
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import Page from "@components/page";
import { gsap, Power1  } from "gsap";
import { TimelineLite } from "gsap";

function RotatingBox({boxID}) {

  const parentRef = useRef();

  const animate = () => {
    const timeline = gsap.timeline({
      context: gsap.utils.selector(parentRef.current)
    });
    
    timeline.to(`.child-${boxID}`, 0.5, {
      rotation: 360,  
      ease: Power1.inOut 
    })
  }



  return (
    <div className="skill-container" onClick={animate} ref={parentRef}>

      <div className={`child-${boxID}`}>Child 1</div>  
      <div className={`child-${boxID}`}>Child 2</div>
      <div className={`child-${boxID}`}>Child 3</div>

    </div>
  );

}

const Skills = () => {
  const windowWidthSize = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return windowWidth;
  };

  let width = windowWidthSize();


  useEffect(() => {}, []);
  return (
    <Page>
      <section id="skills">
        {/* <HardSkills /> */}
        {/* <div className="skill-container">
          <div className="skill"></div>
        </div>
        <div className="skill-container">
          <div className="skill"></div>
        </div> */}
        <RotatingBox  boxID="1"/>
        <RotatingBox  boxID="2"/>
      </section>
    </Page>
  );
};

export default Skills;
