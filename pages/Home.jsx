'use client'
import ContactButton from "@components/reusable/button/ContactButton";
import "@styles/home.sass";
import "animate.css";

import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect } from "react";

const Home = () => {
  // useEffect(()=>{
  //   gsap.to("#home", {
  //     yPercent: -100,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".scroll-test",
  //       // start: "top bottom", // the default values
  //       // end: "bottom top",
  //       scrub: true
  //     }, 
  //   });
  // },[])
  return (
    <section id="home">
      <div className="container">
        <div className="my-name">
          {/* <p>Hi, my name is</p> */}
          <h1>
            Hi, I am <span>Paweł Bornikowski</span> a{" "}
            <span className="glowing-txt">
              <span
                className="faulty-letter"
                style={{
                  "--glow-color": "hsl(186 100% 69%)",
                }}
              >
                F
              </span>
              ront-
              <span
                className="faulty-letter"
                style={{
                  "--glow-color": "hsl(297.79, 100%, 52.16%)",
                }}
              >
                e
              </span>
              nd
            </span>
            <span>&nbsp;Developer</span>
          </h1>

          <p className="front-note">
            Aspiring pixel perfect craftsman honing my JS, React & CSS skills to
            build interfaces that delight.
          </p>
          <ContactButton/>
        </div>
      </div>
      <div className="socials">
        <Link href="https://github.com/BorPawel" target="_blank">
          <BsGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/pbornikowski/" target="_blank">
          <BsLinkedin />
        </Link>
      </div>
     
    </section>
  );
};
export default Home;
