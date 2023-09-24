'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import code_img from "@assets/images/code-img.jpg";
import art_img from "@assets/images/art-img.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { whoami_content_one, whoami_content_two } from "./data/data";
gsap.registerPlugin(ScrollTrigger);

const Whoami = () => {

    const splitFirst = whoami_content_one.split(' ').map((char, index) => <span key={index}>{char}</span>)
    const splitSecond = whoami_content_two.split(' ').map((char, index) => <span key={index}>{char}</span>)
  useEffect(()=>{
   
  
    // const tl = gsap.timeline({ scrollTrigger: {
    //   trigger: ".whoami-content-wrapper",
    //   // start: "top bottom", // the default values
    //   // end: "bottom top",
    //   scrub: true,
     
    // }})
    // tl.from('.left-col p',{
    //   duration: 3,
    //   opacity: 0,
    //   stagger: 0.1
    // })


    gsap.from(".left-col img",{
      scrollTrigger: {
        trigger: ".left-col",
        start: "top 60%",
        end: "bottom 20%",
    
        //markers: true,
        //pin: true,
        //pinSpacing: false,
        //toggleActions: "restart none none none",
      },
      x: -100,
      opacity: 0,
      duration: 1,
    })
    gsap.from(".left-col p",{
      scrollTrigger: {
        trigger: ".left-col",
        start: "top 60%",
        end: "bottom 20%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
    })
    gsap.from('.left-col p span', {
      scrollTrigger: {
        trigger: ".left-col",
        start: "top 60%",
        end: "bottom 20%",
      },
      x: 50,
      opacity: 0,
      
      
      duration: 1,
      stagger: 0.01
    })

    gsap.from(".right-col img",{
      scrollTrigger: {
        trigger: ".right-col",
        start: "top 60%",
        end: "bottom 20%",
       
        //markers: true,
        //pin: true,
        //pinSpacing: false,
        //toggleActions: "restart none none none",
      },
      x: 100,
      opacity: 0,
      duration: 1,
    })
    gsap.from(".right-col p",{
      scrollTrigger: {
        trigger: ".right-col",
        start: "top 60%",
        end: "bottom 20%",
       
        //markers: true,
        //pin: true,
        //pinSpacing: false,
        //toggleActions: "restart none none none",
      },
      x: -100,
      opacity: 0,
      duration: 1,
    })
    gsap.from('.right-col p span', {
      scrollTrigger: {
        trigger: ".right-col",
        start: "top 60%",
        end: "bottom 20%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.01
    })

  },[])
  return (
    <div className="wrapper">
     
      <div className="whoami-content-wrapper">
        {/* <div className="three-col-content"> */}
        <div className="left-col">
          <Image src={code_img} className="codding-img" loading="lazy"/>
          <p>
           {splitFirst}
          </p>
        </div>
        <div className="right-col">
          <p>
           {splitSecond}
          </p>
          <Image src={art_img} className="art-img" loading="lazy"/>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Whoami;
