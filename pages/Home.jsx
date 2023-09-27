"use client";
import "@styles/home/home.sass";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from "react";
import Image from "next/image";
import bgImage from "@assets/images/bg.jpg";
const Home = () => {
  const containerRef = useRef();
  useEffect(() => {
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
    </section>
  );
};
export default Home;
