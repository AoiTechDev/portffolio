
import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import Header from "@components/introduce/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <Header/>
      </main>
      <About/>
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
