import React, { useRef } from "react";
import Image from "next/image";
import "@styles/landpage.sass";
import "animate.css";
import "@styles/arrows/arrows.sass";
import frontImg from "@assets/images/nobg-frontimg.png";
import { useInView } from "react-intersection-observer";
import { useElementOnScreen } from "@utills/ElementOnScreen";
import Link from "next/link";
import Page from "@components/page";

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
    <section id="landpage">
      {/* <div className="landpage-content-wrapper">
          <div
            // ref={ref}
            // className={
            //   inView ? "expand-borders landpage-headline" : "landpage-headline"
            // }
            className="landpage-headline"
          >
            <div
            //  ref={ref} className={inView ? "fade-in my-name" : "my-name"}
             className="my-name"
             >
              <h1>Hi, Im Paweł</h1>
              <h1>Bornikowski</h1>
            </div>

            <h3 
            // ref={ref} className={inView && "fade-in"}
          
            >
              Front-end Developer
            </h3>
          </div>
          <Image
            src={frontImg}
            // className={inView ? "fade-in-img front-img" : "front-img"}
            // ref={ref}
            className="front-img"
            alt="homepage image"
          />
        </div> */}
      <div className="container">
        <div className="my-name">
          <p>Hi, my name is</p>
          <h1>Paweł</h1>
          <h1>Bornikowski</h1>
          <h3>Front-end Developer</h3>
          <p>
            JavaScript wizard in training - striving to create web <br/>
            magic through 
            clean code and design.
          </p>
          <div className="btns-container">
            <button className="dive-into-btn front-btn">
              <Link href="/About">Dive in</Link>
            </button>
            <button className="contact-btn front-btn">
              <Link href="/Contact">Contact me</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandPage;
