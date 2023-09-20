'use client'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
const Card = ({id, title, context}) => {
  const boxRef = useRef();
  //let tl = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let button = document.querySelector(`.button${id}`);
      let reverse = document.querySelector(`.reverse${id}`);
      button.addEventListener("click", (e) => {
        animation.play();
      });
      reverse.addEventListener("click", (e) => {
        animation.reverse();
      });

      
      //arrow rotation
      let animation = gsap
        .timeline({ paused: true, reversed: true })
        .to(`.button${id} .arrow${id}`, {
          ease: "power1.inOut",
          rotate: 90,
        })
        //arrow hide
        .to(`.button${id} .arrow${id}`, {
          ease: "power1.inOut",
          duration: 0.2,
          y: -10,
          opacity: 0,
        })
        //arrow y move
        .to(`.button${id}`, {
          ease: "power1.inOut",
          yPercent: 114,
        })
        //image heigh scale
        .to(
          `.top${id}`,
          {
            ease: "power1.inOut",
            height: 380,
          },
          0.6
        )
        .to(
          `.top${id} img`,
          {
            ease: "power1.inOut",
            scale: 1.2,
            yPercent: 40,
          },
          0.8
        )
        //FETCHING
        .to(
          `.button${id}`,
          {
            ease: "power1.inOut",
            yPercent: 166,
            borderRadius: 0,
            scaleX: 10,
            scaleY: 2.6,
          },
          1.1
        )
        .from(`.loading${id}`, {
          ease: "power1.inOut",
          opacity: 0,
          y: 50,
        })
        .to(`.loading${id}`, {
          ease: "power1.inOut",
          opacity: 0,
          x: 200,
          delay: 0.5,
        })
        .from(`.next-screen${id}`, {
          ease: "power1.inOut",
          yPercent: 100,
          duration: 0.5,
        })
        //next screen top arrow duration
        .from(`.reverse${id}`, {
          ease: "power1.inOut",
          xPercent: -250,
          duration: 0.5,
        })
        //next screen heading duraiton
        .from(`.next-screen${id} h5`, {
          ease: "power1.inOut",
          scale: 0,
          opacity: 0,
          duration: 0.3,
        })
        .from(`.header${id}`, {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .from(`.next-screen${id} p`, {
          ease: "power1.inOut",
          opacity: 0,
          scale: 0,
          duration: 0.3,
        })
        .to(`.container${id}`, {
          ease: "power1.inOut",
          backgroundColor: "#101010",
          duration: 0.1,
        })
        .to(`.next-screen${id}`, {
          ease: "power1.inOut",
          yPercent: -10,
          duration: 1,
        })
        .to(`.next-screen${id}`, {
          ease: "power1.inOut",
          yPercent: 0,
          duration: 1,
        });
    }, boxRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className={`container${id}`} ref={boxRef}>
      <div className={`next-screen${id}`}>
        <div className={`reverse${id}`}>
          <LiaAngleLeftSolid className={`arrow${id}`}/>
        </div>

        <h5>
          <span>{title}</span>
        </h5>
        <div className={`header${id}`}></div>
        <p>
         {context}
        </p>
      </div>

      <div className={`screen-1${id}`}>
        <div className={`top${id}`}>
          <h5>
            <span>{title}</span>
          </h5>
        </div>
        <div className={`button${id}`}>
          <LiaAngleRightSolid className={`arrow${id}`} />
        </div>
        <div className={`loading${id}`}>Fun fact incoming!</div>
      </div>
    </div>
  );
};
export default Card;
