import BurgerMenu from "../components/menu/burger_menu/BurgerMenu";
import Menu from "../components/menu/menu/Menu";
import Nav from "@components/nav/Nav";
import Home from "@pages/Home";
import About from "@pages/about";
import Skills from "@pages/Skills";
import Projects from "@pages/Projects";
import Contact from "@pages/contact";
import Footer from "@components/footer/Footer";
import "@styles/styles.sass";

function Page() {
  return (
    <>
      <Nav />
      <Menu />
      <Home />
      <About />
      <Skills />

      <Contact />
      <Footer />
    </>
  );
}
export default Page;
