import React from "react";
import Image from "next/image";
import myphoto from "../../assets/images/myphoto.png";
import "@styles/landpage.sass";
import "animate.css";
import Link from "next/link";
import "@styles/arrows/arrows.sass";
import Arrows from "../../components/visual_components/arrows/Arrows";
import DevSVG from "@assets/icons/animation/dev_animation.svg";
import frontImg from "@assets/images/nobg-frontimg.png";
const Header = () => {
  return (
    <section id="landpage">
      <div className="landpage-content-wrapper">
        <div className="landpage-headline">
          <div className="my-name">
            <h1>Hi, my name is</h1>
            <h1>Paweł Bornikowski</h1>
          </div>

          <h3>Front-end Developer</h3>

          {/* <div className="first-blob"></div> */}
        </div>
        <Image src={frontImg} className="front-img" />
      </div>
    </section>
  );
};
export default Header;
