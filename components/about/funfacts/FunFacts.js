"use client";
import React, { useRef, useEffect } from "react";
import "@styles/about/funfacts/funfacts.sass";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { gsap } from "gsap";
const Hobbies = () => {
  const boxRef = useRef();
  //let tl = useRef();

  const buttonHandleClick = () => {
    let tl = gsap.timeline({ paused: true, reversed: true });

    let ctx = gsap.context(() => {
      //arrow rotation 
      tl.current = gsap.timeline()
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
        ease: 'power1.inOut',
        yPercent: 114
      })
      //
    }, boxRef);
    return () => ctx.revert();
  };

  // useEffect(() => {
  //   let tl = gsap.timeline({ paused: true, reversed: true });
  //   let ctx = gsap.context(() => {
  //     //screen 1 arrow rotation

  //     tl.to(".button arrow", {
  //       ease: "power1.inOut",
  //       rotate: 90,
  //     });
  //   }, boxRef);

  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="funfacts-wrapper wrapper">
      <div className="container" ref={boxRef}>
        <div className="next-screen">
          <div className="reverse">
            <LiaAngleLeftSolid className="arrow" />
          </div>

          <h5>
            <span>Fun Fact 1</span>
          </h5>
          <div className="header"></div>
          <p>Quis nulla nulla aute exercitation occaecat.</p>
        </div>

        <div className="screen-1">
          <div className="top">
            <h5>
              <span>Fun Fact 1</span>
            </h5>
          </div>
          <div className="button" onClick={buttonHandleClick}>
            <LiaAngleRightSolid className="arrow" />
          </div>
          <div className="loading">Fetching data</div>
        </div>
      </div>
    </div>
  );
};
export default Hobbies;
