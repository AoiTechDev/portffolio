"use client";
import About from "@src/pages/About";
import Contact from "@src/pages/Contact";
import Footer from "@components/Footer";
import Projects from "@src/pages/Projects";
import Skills from "@src/pages/Skills";
import Landpage from "@src/pages/LandPage";

import Menu from "@components/menu/Menu";
import Nav from "@components/Nav";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

import "@styles/styles.sass";

// import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  let labels = ["Home", "About", "Skills", "Projects", "Contact"];

  const windowWidthSize = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useLayoutEffect(() => {
      const updateWidth = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", updateWidth);
      updateWidth();
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return windowWidth;
  };

  let width = windowWidthSize();
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const prev = document.querySelector(".swiper-button-prev");
    const next = document.querySelector(".swiper-button-next");

    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });

      if (event.clientX < window.innerWidth / 8) {
        prev.style.left = mousePos.x - 10 + "px";
        prev.style.top = mousePos.y + "px";
      } else if (
        event.clientX > window.innerWidth / 8 &&
        event.clientX < window.innerWidth - window.innerWidth / 8
      ) {
        prev.style.left = "10px";
        prev.style.top = "50%";
        next.style.left = window.innerWidth - 35 + "px";
        next.style.top = "50%";
      } else {
        next.style.left = mousePos.x - 10 + "px";
        next.style.top = mousePos.y + "px";
      }
    };

    const handleMouseLeave = (event) => {
      if (
        event.clientY <= 0 ||
        event.clientX <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight
      ) {
        
        prev.style.top = "50%";
        next.style.left = window.innerWidth - 35 + "px";
        next.style.top = "50%";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mousePos]);

  return (
    <main className="app">
      <Nav menuOpenHandler={menuOpenHandler} />
      {/* <div className="arrow"></div> */}
      {/* {isMenuOpen && <Menu menuOpenHandler={menuOpenHandler} />} */}
      {width > 700 ? (
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          direction={"horizontal"}
          slidesPerView={1}
          mousewheel={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<div class="' + className + '">' + labels[index] + "</div>"
              );
            },
          }}
          modules={[Mousewheel, Pagination, Navigation]}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          className="mySwiper"
          speed={1000}
          resistanceRatio={0}
          touchRatio={0}
        >
          <SwiperSlide>
            <Landpage />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <Skills />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>

          <div className="swiper-button-prev" ref={prevRef}></div>
          <div className="swiper-button-next" ref={nextRef}></div>
        </Swiper>
      ) : (
        <>
          <Landpage />
          <About />
          <Skills />
          <Projects />
        </>
      )}
      {/* <Landpage />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
      {/* <Landpage /> */}
      {/* <About />
      <Skills /> 
       <Projects />
    
      <Footer /> */}
    </main>
  );
};

export default Home;
