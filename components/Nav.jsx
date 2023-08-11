import Navlist from "./navlist/Navlist";

const Nav = (props) => {
  return (
    <nav>
      <Navlist />
      <div id="burger-menu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
