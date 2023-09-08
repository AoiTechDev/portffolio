import React from "react";
import Image from "next/image";
import "@styles/landpage.sass";
import "animate.css";
import "@styles/arrows/arrows.sass";
import frontImg from "@assets/images/nobg-frontimg.png";

import { useElementOnScreen } from "@utills/ElementOnScreen";

const LandPage = () => {

 
  const  [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  return (
    <section id="landpage" ref={containerRef}>
      <div className="landpage-content-wrapper" >
        <div className={isVisible ? "expand-borders landpage-headline" : "hide-borders landpage-headline"} >
          <div className={isVisible ? "fade-in my-name" : 'fade-out my-name'}>
            <h1>Hi, Im Paweł</h1>
            <h1>Bornikowski</h1>
          </div>

          <h3 className={isVisible ? "fade-in" : 'fade-out' }  >Front-end Developer</h3>
        </div>
        <Image src={frontImg} className={isVisible ? "fade-in-img front-img" : 'fade-out-img front-img' } />
        
      </div>
      
    </section>
  );
};
export default LandPage;
