import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
export const Card3 = () => {
  const boxRef = useRef();
  //let tl = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let button3 = document.querySelector(".button3");
      let reverse3 = document.querySelector(".reverse3");
      button3.addEventListener("click", (e) => {
        animation.play();
      });
      reverse3.addEventListener("click", (e) => {
        animation.reverse3();
      });
      //arrow3 rotation
      let animation = gsap
        .timeline({ paused: true, reversed: true })
        .to(".button3 .arrow3", {
          ease: "power1.inOut",
          rotate: 90,
        })
        //arrow3 hide
        .to(".button3 .arrow3", {
          ease: "power1.inOut",
          duration: 0.2,
          y: -10,
          opacity: 0,
        })
        //arrow3 y move
        .to(".button3", {
          ease: "power1.inOut",
          yPercent: 114,
        })
        //image heigh scale
        .to(
          ".top3",
          {
            ease: "power1.inOut",
            height: 380,
          },
          0.6
        )
        .to(
          ".top3 img",
          {
            ease: "power1.inOut",
            scale: 1.2,
            yPercent: 40,
          },
          0.8
        )
        //FETCHING
        .to(
          ".button3",
          {
            ease: "power1.inOut",
            yPercent: 166,
            borderRadius: 0,
            scaleX: 10,
            scaleY: 2.6,
          },
          1.1
        )
        .from(".loading3", {
          ease: "power1.inOut",
          opacity: 0,
          y: 50,
        })
        .to(".loading3", {
          ease: "power1.inOut",
          opacity: 0,
          x: 200,
          delay: 0.5,
        })
        .from(".next-screen3", {
          ease: "power1.inOut",
          yPercent: 100,
          duration: 0.5,
        })
        //next screen top3 arrow3 duration
        .from(".reverse3", {
          ease: "power1.inOut",
          xPercent: -250,
          duration: 0.5,
        })
        //next screen heading duraiton
        .from(".next-screen3 h5", {
          ease: "power1.inOut",
          scale: 0,
          opacity: 0,
          duration: 0.3,
        })
        .from(".header3", {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .from(".next-screen3 p", {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .to(".container3", {
          ease: "power1.inOut",
          backgroundColor: "#101010",
          duration: 0.1,
        })
        .to(".next-screen3", {
          ease: "power1.inOut",
          yPercent: -10,
          duration: 1,
        })
        .to(".next-screen3", {
          ease: "power1.inOut",
          yPercent: 0,
          duration: 1,
        });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="container3" ref={boxRef}>
      <div className="next-screen3">
        <div className="reverse3">
          <LiaAngleLeftSolid className="arrow3" />
        </div>

        <h5>
          <span>Fun Fact 3</span>
        </h5>
        <div className="header3"></div>
        <p>
          I got from my parents T-shirt with Einstein skull head. Instead of
          eyes has atoms signatures, but it looks like 1:1 React icon ;)
        </p>
      </div>

      <div className="screen-13">
        <div className="top3">
          <h5>
            <span>Fun Fact 3</span>
          </h5>
        </div>
        <div className="button3">
          <LiaAngleRightSolid className="arrow3" />
        </div>
        <div className="loading3">Fun fact incoming!</div>
      </div>
    </div>
  );
};
export default Card3;
