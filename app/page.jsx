import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <main></main>
      {/* <section className="skills"></section>
      <section className="projects"></section> */}
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
