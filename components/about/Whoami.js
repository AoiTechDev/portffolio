import Image from "next/image";
import React from "react";
import code_img from "@assets/images/code-img.jpg";
import art_img from "@assets/images/art-img.jpg";
const Whoami = () => {
  return (
    <div className="whoami-wrapper">
      <div className="title-wrapper">
        <div className="title-line"></div>
        <span className="title">WHO AM I?</span>
      </div>
      <div className="whoami-content-wrapper">
        <div className="three-col-content">
          <div className="left-col">
            
              <p>
                Frontend development intersects my passions for art and coding.
                As a recent grad and frontend enthusiast, I want to create
                visually impressive digital experiences. With my background in
                painting and drawing, I see code as a new form of creative
                expression. I'm fascinated by combining design and development
                skills.
              </p>
           

            <Image src={code_img} className="about-img" />
          </div>
          <div className="right-col">
          <Image src={art_img} className="about-img art-img" />
            <p>
              My goal is to craft not just functional programs, but engaging
              interfaces that provide real value. I want to evolve as a UI/UX
              designer and frontend engineer who turns imagination into
              intuitive, aesthetically elevated products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whoami;
