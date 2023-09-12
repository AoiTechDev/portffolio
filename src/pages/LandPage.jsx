import React, {useRef} from "react";
import Image from "next/image";
import "@styles/landpage.sass";
import "animate.css";
import "@styles/arrows/arrows.sass";
import frontImg from "@assets/images/nobg-frontimg.png";
import { useInView } from 'react-intersection-observer';
import { useElementOnScreen } from "@utills/ElementOnScreen";

const LandPage = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  // const  [containerRef, isVisible] = useElementOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1
  // })
  return (
    <section id="landpage" >
      <div className="landpage-content-wrapper" >
        <div ref={ref} className={inView ? "expand-borders landpage-headline" : "landpage-headline"} >
          <div className={inView ? "fade-in my-name" : 'fade-out my-name'}>
            <h1>Hi, Im Paweł</h1>
            <h1>Bornikowski</h1>
          </div>

          <h3 className={inView ? "fade-in" : 'fade-out' }  >Front-end Developer</h3>
        </div>
        <Image src={frontImg} className={inView ? "fade-in-img front-img" : 'fade-out-img front-img' } />
        
      </div>  
      
    </section>
  );
};
export default LandPage;
