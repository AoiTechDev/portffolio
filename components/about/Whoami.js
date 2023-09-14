import Image from "next/image";
import React from "react";
import code_img from "@assets/images/code-img.jpg";
import art_img from "@assets/images/art-img.jpg";
import Title from "./title/Title";
const Whoami = () => {
  return (
    <div className="wrapper">
     
      <div className="whoami-content-wrapper">
        {/* <div className="three-col-content"> */}
        <div className="left-col">
          <Image src={code_img} className="codding-img" />
          <p>
            Frontend development intersects my passions for art and coding. As a
            recent grad and frontend enthusiast, I want to create visually
            impressive digital experiences. With my background in painting and
            drawing, I see code as a new form of creative expression. I'm
            fascinated by combining design and development skills.
          </p>
        </div>
        <div className="right-col">
          <p>
            My goal is to craft not just functional programs, but truly engaging
            interfaces that provide real value to users. I strive to evolve as a
            UI/UX designer who can imagine creative solutions to problems and
            turn them into intuitive, user-centric designs. I also want to grow
            as a frontend engineer who can bring those visions to life with
            clean, well-architected code.
          </p>
          <Image src={art_img} className="art-img" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Whoami;
