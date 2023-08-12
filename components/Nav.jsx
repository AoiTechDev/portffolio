import Navlist from "./navlist/Navlist";

const Nav = ({ menuOpenHandler }) => {
  return (
    <div className="fixed">
      <nav>
        <Navlist />
        <div id="burger-menu-open" onClick={menuOpenHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
