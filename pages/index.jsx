import React, { useRef } from "react";
import Image from "next/image";
import "@styles/landpage.sass";
import "animate.css";

import frontImg from "@assets/images/nobg-frontimg.png";
import { useInView } from "react-intersection-observer";
import { useElementOnScreen } from "@utills/ElementOnScreen";
import Link from "next/link";
import Page from "@components/page";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const LandPage = () => {
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
    <Page>
      <section id="landpage">
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
            {/* <h1>Paweł</h1>
            <h1>Bornikowski</h1>
            <h3 className="frontend-text">Front-end Developer</h3> */}
            <p className="front-note">
              Aspiring pixel perfect craftsman honing my JS, React & CSS skills
              to build interfaces that delight.
            </p>
            {/* <div className="btns-container">
              <Link href="/About">
                <button className="glowing-btn" style={{'--glow-color':'hsl(186 100% 69%)'}}>
                  <span className="glowing-txt">DI<span className="faulty-letter">V</span>E IN</span>
                 
                  </button>
              </Link>

              <Link href="/Contact"> 
                {" "}
                <button className="glowing-btn" style={{'--glow-color':'hsl(297.79, 100%, 52.16%)'}}>
                  <span className="glowing-txt">CON<span className="faulty-letter">T</span>ACT ME</span>
                 
                  </button>
              </Link>
            </div> */}
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
    </Page>
  );
};
export default LandPage;
