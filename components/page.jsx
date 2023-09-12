// "use client";
// import About from "@pages/About";
// import Contact from "@pages/Contact";
// import Footer from "@components/Footer";
// import Projects from "@pages/Projects";
// import Skills from "@pages/Skills";
// import Landpage from "@pages/home";

import Nav from '@components/Nav'

// import Menu from "@components/menu/Menu";
// import Nav from "@components/Nav";
// import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/mousewheel";
// import "swiper/css/navigation";
// import { Mousewheel, Pagination, Navigation } from "swiper/modules";

// import "@styles/styles.sass";

// // import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

// const Home = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuOpenHandler = () => {
//     setIsMenuOpen((prev) => !prev);
//   };
//   let labels = ["Home", "About", "Skills", "Projects", "Contact"];

//   const windowWidthSize = () => {
//     const [windowWidth, setWindowWidth] = useState(0);
//     useLayoutEffect(() => {
//       const updateWidth = () => {
//         setWindowWidth(window.innerWidth);
//       };
//       window.addEventListener("resize", updateWidth);
//       updateWidth();
//       return () => window.removeEventListener("resize", updateWidth);
//     }, []);
//     return windowWidth;
//   };

//   let width = windowWidthSize();
//   const nextRef = useRef(null);
//   const prevRef = useRef(null);
//   const [mousePos, setMousePos] = useState({});
//   // useEffect(() => {
//   //   const handleMouseMove = (event) => {
//   //     setMousePos({ x: event.clientX, y: event.clientY });
//   //     const prev = document.querySelector(".swiper-button-prev");
//   //     const next = document.querySelector(".swiper-button-next");
//   //     if (event.clientX < window.innerWidth / 8) {
//   //       prev.style.left = mousePos.x - 10 + "px";
//   //       prev.style.top = mousePos.y + "px";
//   //       prev.style.opacity = '1'
//   //     } else if (
//   //       event.clientX >=     window.innerWidth / 8 &&
//   //       event.clientX < window.innerWidth - window.innerWidth / 8
//   //     ) {
//   //       prev.style.left = "10px";
//   //       prev.style.top = "50%";
//   //       next.style.left = window.innerWidth - 35 + "px";
//   //       next.style.top = "50%";
//   //       next.style.opacity = '0'
//   //       prev.style.opacity = '0'
//   //     } else {
//   //       next.style.left = mousePos.x - 10 + "px";
//   //       next.style.top = mousePos.y + "px";
//   //       next.style.opacity = '1'
//   //     }
//   //   };

//   //   const handleMouseLeave = (event) => {
//   //     const prev = document.querySelector(".swiper-button-prev");
//   //     const next = document.querySelector(".swiper-button-next");
//   //     if (
//   //       event.clientY <= 0 ||
//   //       event.clientX <= 0 ||
//   //       event.clientX >= window.innerWidth ||
//   //       event.clientY >= window.innerHeight
//   //     ) {
//   //       prev.style.top = "50%";
//   //       next.style.left = window.innerWidth - 35 + "px";
//   //       next.style.top = "50%";
//   //       next.style.opacity = '0'
//   //       prev.style.opacity = '0'
//   //     }
//   //   };
//   //   window.addEventListener("mousemove", handleMouseMove);
//   //   window.addEventListener("mouseout", handleMouseLeave);

//   //   return () => {
//   //     window.removeEventListener("mousemove", handleMouseMove);
//   //     window.removeEventListener("mouseout", handleMouseLeave);
//   //   };
//   // }, [mousePos]);

//   return (
//     <main className="app">
//       <Nav menuOpenHandler={menuOpenHandler} />
//       {/* <div className="arrow"></div> */}
//       {/* {isMenuOpen && <Menu menuOpenHandler={menuOpenHandler} />} */}
//       {/* <div className="animation-slide"></div> */}
//       {/* {width > 700 ? (
//         <Swiper
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//           direction={"horizontal"}
//           slidesPerView={1}
         
//           modules={[Navigation]}
//           navigation={{
//             prevEl: prevRef.current ? prevRef.current : undefined,
//             nextEl: nextRef.current ? nextRef.current : undefined,
           
//           }}
//           className="mySwiper"
//           speed={1000}
//           resistanceRatio={0}
//           touchRatio={0}
          
//         >
//           <SwiperSlide>
//             <Landpage />

//             <div className="line right-line">
//               <div className="line-label">About me</div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <About />
//             <div className="line left-line"> <div className="line-label line-label-left">Home</div></div>
//             <div className="line right-line"> <div className="line-label">Skills</div></div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Skills />
//             <div className="line left-line"> <div className="line-label line-label-left">About me</div></div>
//             <div className="line right-line"> <div className="line-label">Projects</div></div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Projects />
//             <div className="line left-line"> <div className="line-label line-label-left">Skills</div></div>
//             <div className="line right-line"> <div className="line-label">Contact</div></div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Contact />
//             <div className="line left-line"> <div className="line-label line-label-left">Projects</div></div>
//           </SwiperSlide>

//           <div className="swiper-button-prev" ref={prevRef}></div>
//           <div className="swiper-button-next" ref={nextRef}></div>
//         </Swiper>
//       ) : (
//         <>
//           <Landpage />
//           <About />
//           <Skills />
//           <Projects />
//         </>
//       )} */}
//       <Landpage />
//         {/* <About />
//         <Skills />
//         <Projects />
//         <Contact /> */}
//       {/* <Landpage /> */}
//       {/* <About />
//       <Skills /> 
//        <Projects />
    
//       <Footer /> */}
//     </main>
//   );
// };

// export default Home;
function Page({children}){
  return(
    <>
      <Nav/>
      <main>{children}</main>
     </>
  )
}
export default Page