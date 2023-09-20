import BurgerMenu from "../components/menu/BurgerMenu";
import Menu from "../components/menu/Menu";


import Nav from "@components/nav/Nav";
import Home from "@pages/Home";
import About from "@pages/about";
import Skills from "@pages/Skills";
import Projects from "@pages/Projects";
import Contact from "@pages/contact";

function Page() {

  return (
    <>
      <Nav />
      <Menu />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
export default Page;
