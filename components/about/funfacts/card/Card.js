import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
const Card = () => {
  const boxRef = useRef();
  //let tl = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let button = document.querySelector(".button");
      let reverse = document.querySelector(".reverse");
      button.addEventListener("click", (e) => {
        animation.play();
      });
      reverse.addEventListener("click", (e) => {
        animation.reverse();
      });
      //arrow rotation
      let animation = gsap
        .timeline({ paused: true, reversed: true })
        .to(".button .arrow", {
          ease: "power1.inOut",
          rotate: 90,
        })
        //arrow hide
        .to(".button .arrow", {
          ease: "power1.inOut",
          duration: 0.2,
          y: -10,
          opacity: 0,
        })
        //arrow y move
        .to(".button", {
          ease: "power1.inOut",
          yPercent: 114,
        })
        //image heigh scale
        .to(
          ".top",
          {
            ease: "power1.inOut",
            height: 380,
          },
          0.6
        )
        .to(
          ".top img",
          {
            ease: "power1.inOut",
            scale: 1.2,
            yPercent: 40,
          },
          0.8
        )
        //FETCHING
        .to(
          ".button",
          {
            ease: "power1.inOut",
            yPercent: 166,
            borderRadius: 0,
            scaleX: 10,
            scaleY: 2.6,
          },
          1.1
        )
        .from(".loading", {
          ease: "power1.inOut",
          opacity: 0,
          y: 50,
        })
        .to(".loading", {
          ease: "power1.inOut",
          opacity: 0,
          x: 200,
          delay: 0.5,
        })
        .from(".next-screen", {
          ease: "power1.inOut",
          yPercent: 100,
          duration: 0.5,
        })
        //next screen top arrow duration
        .from(".reverse", {
          ease: "power1.inOut",
          xPercent: -250,
          duration: 0.5,
        })
        //next screen heading duraiton
        .from(".next-screen h5", {
          ease: "power1.inOut",
          scale: 0,
          opacity: 0,
          duration: 0.3,
        })
        .from(".header", {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .from(".next-screen p", {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .to(".container", {
          ease: "power1.inOut",
          backgroundColor: "#101010",
          duration: 0.1,
        })
        .to(".next-screen", {
          ease: "power1.inOut",
          yPercent: -10,
          duration: 1,
        })
        .to(".next-screen", {
          ease: "power1.inOut",
          yPercent: 0,
          duration: 1,
        });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="container" ref={boxRef}>
      <div className="next-screen">
        <div className="reverse">
          <LiaAngleLeftSolid className="arrow" />
        </div>

        <h5>
          <span>Fun Fact 1</span>
        </h5>
        <div className="header"></div>
        <p>
          I challenged myself to work and make commits to my projects on github
          every single day!
        </p>
      </div>

      <div className="screen-1">
        <div className="top">
          <h5>
            <span>Fun Fact 1</span>
          </h5>
        </div>
        <div className="button">
          <LiaAngleRightSolid className="arrow" />
        </div>
        <div className="loading">Fun fact incoming!</div>
      </div>
    </div>
  );
};
export default Card;
