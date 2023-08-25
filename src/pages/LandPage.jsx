import React from "react";
import Image from "next/image";
import myphoto from "../../assets/images/myphoto.png";
import "@styles/landpage.sass";
import "animate.css";
import Link from "next/link";
import "@styles/arrows/arrows.sass";
import Arrows from "../../components/visual_components/arrows/Arrows";
import DevSVG from '@assets/icons/animation/dev_animation.svg'
const Header = () => {
  return (
    <section id="landpage">
      <div className="landpage-content-wrapper">
        <div className="my-name">
          <h1>
            <span>Paweł</span> <span>Bornikowski</span>
          </h1>
          <h3>Front-end Developer</h3>
          <p>I will code your interactive world!</p>
          {/* <div className="first-blob"></div> */}
        </div>
        {/* <div className="motiv-text ">
          <h3>The only limit is the one you set for yourself</h3>
          <div className="limit">setLimit(Null)</div>
        </div> */}
        <Image src={DevSVG} width={300} height={300}/>
      </div>

      <Arrows
        section={"#about"}
        headingText={"Let me introduce myself!"}
        
      />
    </section>
  );
};
export default Header;
