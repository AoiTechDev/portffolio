import React, { useRef } from "react";
import Image from "next/image";
import "@styles/home.sass";
import "animate.css";

import frontImg from "@assets/images/nobg-frontimg.png";
import { useInView } from "react-intersection-observer";
import { useElementOnScreen } from "@utills/ElementOnScreen";
import Link from "next/link";
import Page from "@app/page";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  // const  [containerRef, isVisible] = useElementOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1
  // })
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
              Aspiring pixel perfect craftsman honing my JS, React & CSS skills
              to build interfaces that delight.
            </p>

          </div>
        </div>
        <div className="socials">
          <Link href="https://github.com/BorPawel" target="_blank">
            <BsGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pbornikowski/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </div>
      </section>
   
  );
};
export default Home;
