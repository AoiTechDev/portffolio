import React from "react";
import Image from "next/image";
import "@styles/landpage.sass";
import "animate.css";
import "@styles/arrows/arrows.sass";
import frontImg from "@assets/images/nobg-frontimg.png";
const Header = () => {
  return (
    <section id="landpage">
      <div className="landpage-content-wrapper">
        <div className="landpage-headline">
          <div className="my-name">
            <h1>Hi, Im Paweł</h1>
            <h1>Bornikowski</h1>
          </div>

          <h3>Front-end Developer</h3>
        </div>
        <Image src={frontImg} className="front-img" />
      </div>
    </section>
  );
};
export default Header;
