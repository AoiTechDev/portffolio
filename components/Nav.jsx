import Navlist from "./navlist/Navlist";

const Nav = ({menuOpenHandler}) => {
  return (
    <nav>
      <Navlist />
      <div id="burger-menu-open" onClick={menuOpenHandler}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};  

export default Nav;
