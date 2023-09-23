'use client'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import '@styles/introduce/who.sass'
import Scrollbar from "smooth-scrollbar";

const Who = () => {
    const whoamiText = 'WHO AM I?';
    const split = whoamiText.split(' ').map((char, index) => <div key={index}>{char}</div>)
    const scroller = useRef();
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const scroller = document.querySelector('.whoami-animated-container')
        const bodyScrollBar = Scrollbar.init(scroller);
        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
              if (arguments.length) {
                bodyScrollBar.scrollTop = value;
              }
              return bodyScrollBar.scrollTop;
            }
          });
          bodyScrollBar.addListener(ScrollTrigger.update);
      gsap.set(".whoami-header", { perspective: 400 });


      const tl = gsap.timeline({ scrollTrigger: {
        trigger: ".growing-container",
       
        scrub: true,
        pin: true,
        scroller: scroller,
       
      }})
      
      tl.to('.growing-container', {
        width: '80%',
        height: '80%',
        duration: 2
      })
      .from('.whoami-header div', {
        // opacity: 0,
        duration: 3,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.2
      })
      .to('.whoami-header div', {
        height: 0,
        duration: 1
      })
      .to('.growing-container', {
        width: 0,
        height: 0,
        duration: 1
      })

    //   if (document.querySelector(".gsap-marker-scroller-start")) {
    //     const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    //     bodyScrollBar.addListener(({ offset }) =>
    //       gsap.set(markers, { marginTop: -offset.y })
    //     );
    //   }
  
    
    },[])
    return (
        <div className="whoami-animated-container" ref={scroller}>
        <div className="growing-container">
          <div className="whoami-header">
            {split}
          </div>
        </div>
      
      </div>
    )
}
export default Who