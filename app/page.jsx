'use client'
import About from "@src/pages/About";
import Contact from "@src/pages/Contact";
import Footer from "@components/Footer";
import Projects from "@src/pages/Projects";
import Skills from "@src/pages/Skills";
import Header from "@src/pages/LandPage";

import Menu from "@components/menu/Menu";
import Nav from "@components/Nav";
import React,{useState} from 'react'
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div id="burger-menu-open" onClick={menuOpenHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <Nav menuOpenHandler={menuOpenHandler} />
      {isMenuOpen && <Menu menuOpenHandler={menuOpenHandler} />}
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
