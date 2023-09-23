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
  useEffect(()=>{
  
  },[])
  return (
    <section id="home">
      <div className="container">
        <div className="my-name">
          {/* <p>Hi, my name is</p> */}
          <p>Hi, my name is</p>
          <h1>
           Paweł Bornikowski
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
