import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
export const Card2 = () => {
  const boxRef = useRef();
  //let tl = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let button2 = document.querySelector(".button2");
      let reverse2 = document.querySelector(".reverse2");
      button2.addEventListener("click", (e) => {
        animation.play();
      });
      reverse2.addEventListener("click", (e) => {
        animation.reverse2();
      });
      //arrow2 rotation
      let animation = gsap
        .timeline({ paused: true, reversed: true })
        .to(".button2 .arrow2", {
          ease: "power1.inOut",
          rotate: 90,
        })
        //arrow2 hide
        .to(".button2 .arrow2", {
          ease: "power1.inOut",
          duration: 0.2,
          y: -10,
          opacity: 0,
        })
        //arrow2 y move
        .to(".button2", {
          ease: "power1.inOut",
          yPercent: 114,
        })
        //image heigh scale
        .to(
          ".top2",
          {
            ease: "power1.inOut",
            height: 380,
          },
          0.6
        )
        .to(
          ".top2 img",
          {
            ease: "power1.inOut",
            scale: 1.2,
            yPercent: 40,
          },
          0.8
        )
        //FETCHING
        .to(
          ".button2",
          {
            ease: "power1.inOut",
            yPercent: 166,
            borderRadius: 0,
            scaleX: 10,
            scaleY: 2.6,
          },
          1.1
        )
        .from(".loading2", {
          ease: "power1.inOut",
          opacity: 0,
          y: 50,
        })
        .to(".loading2", {
          ease: "power1.inOut",
          opacity: 0,
          x: 200,
          delay: 0.5,
        })
        .from(".next-screen2", {
          ease: "power1.inOut",
          yPercent: 100,
          duration: 0.5,
        })
        //next screen top2 arrow2 duration
        .from(".reverse2", {
          ease: "power1.inOut",
          xPercent: -250,
          duration: 0.5,
        })
        //next screen heading duraiton
        .from(".next-screen2 h5", {
          ease: "power1.inOut",
          scale: 0,
          opacity: 0,
          duration: 0.3,
        })
        .from(".header2", {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .from(".next-screen2 p", {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .to(".container2", {
          ease: "power1.inOut",
          backgroundColor: "#101010",
          duration: 0.1,
        })
        .to(".next-screen2", {
          ease: "power1.inOut",
          yPercent: -10,
          duration: 1,
        })
        .to(".next-screen2", {
          ease: "power1.inOut",
          yPercent: 0,
          duration: 1,
        });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="container2" ref={boxRef}>
      <div className="next-screen2">
        <div className="reverse2">
          <LiaAngleLeftSolid className="arrow2" />
        </div>

        <h5>
          <span>Fun Fact 2</span>
        </h5>
        <div className="header2"></div>
        <p>
         I have blue hair for 7 years already and changed back to my natural only for 3 months.
        </p>
      </div>

      <div className="screen-12">
        <div className="top2">
          <h5>
            <span>Fun Fact 2</span>
          </h5>
        </div>
        <div className="button2">
          <LiaAngleRightSolid className="arrow2" />
        </div>
        <div className="loading2">Fun fact incoming!</div>
      </div>
    </div>
  );
};
export default Card2;
