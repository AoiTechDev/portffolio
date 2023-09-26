'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import code_img from "@assets/images/code-img.jpg";
import art_img from "@assets/images/art-img.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { whoami_content_one, whoami_content_two, whoami_content } from "./data/data";
import '@styles/about/whoami/whoami.sass'
import Title from "@components/reusable/title/Title";
gsap.registerPlugin(ScrollTrigger);

const Whoami = () => {

    const splitFirst = whoami_content_one.split(' ').map((char, index) => <span key={index}>{char}</span>)
    const splitSecond = whoami_content_two.split(' ').map((char, index) => <span key={index}>{char}</span>)
    const split = whoami_content.split(' ').map((char, index) => <span key={index}>{char}</span>)
  
  useEffect(()=>{
   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top 20%',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: true
      }
    })
    tl.to('.left-col p span', {
      color: 'rgb(226, 226, 226)',
      stagger: 1
    })
    // .set(split, {
    //   color: 'red',
    //   stagger: 0.1
    // },0.1)
    // gsap.from(".left-col img",{
    //   scrollTrigger: {
    //     trigger: ".left-col",
    //     start: "top 60%",
    //     end: "bottom 20%",
    
    //   },
    //   x: -100,
    //   opacity: 0,
    //   duration: 1,
    // })
    // gsap.from(".left-col p",{
    //   scrollTrigger: {
    //     trigger: ".left-col",
    //     start: "top 60%",
    //     end: "bottom 20%",
    //   },
    //   x: 100,
    //   opacity: 0,
    //   duration: 1,
    // })
    // gsap.from('.left-col p span', {
    //   scrollTrigger: {
    //     trigger: ".left-col",
    //     start: "top 60%",
    //     end: "bottom 20%",
    //   },
    //   x: 50,
    //   opacity: 0,
      
      
    //   duration: 1,
    //   stagger: 0.01
    // })

    // gsap.from(".right-col img",{
    //   scrollTrigger: {
    //     trigger: ".right-col",
    //     start: "top 60%",
    //     end: "bottom 20%",
     
    //   },
    //   x: 100,
    //   opacity: 0,
    //   duration: 1,
    // })
    // gsap.from(".right-col p",{
    //   scrollTrigger: {
    //     trigger: ".right-col",
    //     start: "top 60%",
    //     end: "bottom 20%",
      
    //   },
    //   x: -100,
    //   opacity: 0,
    //   duration: 1,
    // })
    // gsap.from('.right-col p span', {
    //   scrollTrigger: {
    //     trigger: ".right-col",
    //     start: "top 60%",
    //     end: "bottom 20%",
    //   },
    //   x: -50,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.01
    // })

    
  },[])
  return (
    <div className="wrapper">
      <Title title="who am i?" />
      <div className="whoami-content-wrapper">
        {/* <div className="three-col-content"> */}
        <div className="left-col">
          {/* <Image src={code_img} className="codding-img" loading="lazy"/> */}
          <p>
           {split}
          </p>
        </div>
        {/* <div className="right-col">
          <p>
           {splitSecond}
          </p>
          <Image src={art_img} className="art-img" loading="lazy"/>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default Whoami;
