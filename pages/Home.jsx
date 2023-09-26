"use client";
import ContactButton from "@components/reusable/button/ContactButton";
import "@styles/home.sass";
import "animate.css";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect, useRef } from "react";
import Image from "next/image";
import bgImage from "@assets/images/bg.jpg";
const Home = () => {
  const containerRef = useRef();
  useEffect(() => {
    //let ctx = gsap.context(() => {
    // gsap.timeline().from(".home__name", {
    //   xPercent: 700,
    //   yPercent: 600,
    //   scale: 7,
    //   duration: 0.8,
    //   ease: "Power4.InOut",
    // })
    // .from(".home__surname", {
    //   xPercent: 700,
    //   yPercent: -600,
    //   scale: 7,
    //   duration: 0.8,
    //   ease: "Power4.InOut",
    // }, '-=0.4')
    // .from(".home__front", {
    //   xPercent: -700,
    //   yPercent: 600,
    //   scale: 7,
    //   duration: 0.8,
    //   ease: "Power4.InOut",
    // }, '-=0.4')
    // .from(".home__dev", {
    //   xPercent: 700,
    //   yPercent: -600,
    //   scale: 7,
    //   duration: 0.8,
    //   ease: "Power4.InOut",
    // }, '-=0.4')

    //}, containerRef);
    //return () => ctx.revert();

    gsap.to(".name-container", {
      scrollTrigger: {
        trigger:  "#home",
        scrub: 1,

        start: "top top",
        end: "center top",
      },
      x: -500,
    });
    gsap.to(".my-title", {
      scrollTrigger: {
        trigger:  "#home",
        scrub: 1,

        start: "top top",
        end: "center top",
      },
      x: 500,
    });
    gsap.fromTo(
      ".test",
      {
        opacity: 0,
        y: -200,
      },
      {
        scrollTrigger: {
          pin: true,
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        opacity: 1,
        y: 60,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section id="home">
      <Image src={bgImage} className="bg-image" />
      <div className="container" ref={containerRef}>
        {/* <div className="my-name">
        
          <p>Hi, my name is</p>
          <h1>
           Paweł Bornikowski
          </h1>

          <p className="front-note">
            Aspiring pixel perfect craftsman honing my JS, React & CSS skills to
            build interfaces that delight.
          </p>
          <ContactButton/>
        </div> */}

        <div className="name-container">
          <h1 className="home__name">Paweł</h1>
          <h1 className="home__surname">Bornikowski</h1>
        </div>
        <div className="my-title">
          <h1 className="home__front">Front-end</h1>
          <h1 className="home__dev">Developer</h1>
        </div>
        <div className="test">
          <p>
            {" "}
            Crafting digital magic with JavaScript, React, and CSS to create
            user experiences that sparkle and shine!
          </p>
        </div>
      </div>
      {/*      
      <div className="socials">
        <Link href="https://github.com/BorPawel" target="_blank">
          <BsGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/pbornikowski/" target="_blank">
          <BsLinkedin />
        </Link>
      </div> */}
    </section>
  );
};
export default Home;
