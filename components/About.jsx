"use client";
import "../styles/about.sass";
import { useState } from "react";
import photo from "../assets/images/myphoto.png";
import MyImage from "./images/MyImage";

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
  return (
    <section id="about">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="left-side-img">
        <MyImage src={photo} alt={"my image"} width={400} height={600} />
      </div>
      <div className="right-side-info">
        <h2>About me</h2>
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
                className="info-btn active"
                onClick={infoSectionHandler}
                data-text="Introducion"
                style={{
                  "--clr": "#0C4A60",
                }}
              >
                Introducion
              </li>
              <li
                className="hobbies-btn"
                onClick={infoSectionHandler}
                data-text="Hobbies"
                style={{
                  "--clr": "#EF6C33",
                }}
              >
                Hobbies
              </li>
            </ul>
          </div>
          <div className="info-content">
            {infoSection === "introduction" && (
              <div className="introduction">
                intro Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </div>
            )}
            {infoSection === "hobbies" && (
              <div className="hobbies">
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
    </section>
  );
};
export default About;
