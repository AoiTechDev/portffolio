"use client";
import About from "@src/pages/About";
import Contact from "@src/pages/Contact";
import Footer from "@components/Footer";
import Projects from "@src/pages/Projects";
import Skills from "@src/pages/Skills";
import Landpage from "@src/pages/LandPage";

import Menu from "@components/menu/Menu";
import Nav from "@components/Nav";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Mousewheel, Pagination } from "swiper/modules";

import "@styles/styles.sass";

// import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };
  let labels = ["Home", "About", "Skills"];


  return (
    <main className="app">
      <Nav menuOpenHandler={menuOpenHandler} />
      {/* {isMenuOpen && <Menu menuOpenHandler={menuOpenHandler} />} */}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '">' + labels[index] + "</div>";
          },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        speed={1000}
        resistanceRatio={0}
        //touchRatio={0}
        
      >
        <SwiperSlide >
          <Landpage />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
      </Swiper>

      {/* <Landpage />
      <About />
      <Skills /> */}
      {/* <Projects />
      <Contact />
      <Footer /> */}
    </main>
  );
};

export default Home;
