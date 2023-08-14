"use client";
import "../styles/about.sass";
import { useState, useEffect } from "react";
import photo from "../assets/images/myphoto.png";
import MyImage from "./images/MyImage";
import useElementOnScreen from "./hooks/elementOnScreen";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [infoSection, setInfoSection] = useState("introduction");
  const infoSectionHandler = (e) => {
    const list = document.querySelectorAll(".info-navigator ul li");
    list.forEach((element) => {
      element.classList.remove("active");
    });
    setInfoSection(() => {
      e.target.classList.remove("active");
      if (e.target.className === "info-btn") {
        e.target.classList.add("active");
        return "introduction";
      }
      if (e.target.className === "hobbies-btn") {
        e.target.classList.add("active");
        return "hobbies";
      }
    });
  };

 
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    triggerOnce: true,
  });
  //console.log(entry);

  return (
    <section id="about" >
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <inView as='div' onChange={(inView, entry) => console.log('inView', inView)} className="in-view">
        <div className="left-side-img">
          <MyImage
            src={photo}
            alt={"my image"}
            width={400}
            height={600}
            //containerRef={ref}
            isVisible={inView}
          />
        </div>
        <div className="right-side-info">
          <h2 ref={ref} className={inView && 'scroll-down'}>About me</h2>
          <div className="info-container">
            <div className="info-navigator">
              {/* <button className="info-btn" onClick={infoSectionHandler}>
              Introducion
            </button>
            <button className="hobbies-btn" onClick={infoSectionHandler}>
              Hobbies
            </button> */}
              <ul>
                <li
                  className={inView ? "info-btn active scroll-left" : "info-btn active"}
                  onClick={infoSectionHandler}
                  data-text="Introducion"
                  style={{
                    "--clr": "#0C4A60",
                  }}
                  ref={ref} 
                >
                  Introducion
                </li>
                <li
                   className={inView ? "hobbies-btn scroll-right" : "hobbies-btn"}
                  onClick={infoSectionHandler}
                  data-text="Hobbies"
                  style={{
                    "--clr": "#EF6C33",
                  }}
                  ref={ref}
                >
                  Hobbies
                </li>
              </ul>
            </div>
            <div className="info-content">
              {infoSection === "introduction" && (
                <div ref={ref} className={inView ? "introduction scroll-typing" : "introduction"}>
                  intro Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              )}
              {infoSection === "hobbies" && (
                <div className="hobbies" ref={ref}>
                  hobbies Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              )}
            </div>
          </div>
        </div>
      </inView>
    </section>
  );
};
export default About;
