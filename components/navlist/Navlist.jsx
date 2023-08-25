import React from "react";
import Link from "next/link";
const Navlist = ({ menuOpenHandler }) => {
  return (
    <div className="nav-list">
      <ul>
        <li>
          <Link
            href="#about"
            data-text="&nbsp;About"
            style={{
              "--clr": "#0A7D9E",
            }}
            className="link-a"
            onClick={menuOpenHandler}
          >
            &nbsp;About&nbsp;
          </Link>
        </li>
        <li>
          <Link
            data-text="&nbsp;Skills"
            style={{
              "--clr": "#EF6C33",
            }}
            className="link-a"
            href="#skills"
            onClick={menuOpenHandler}
          >
            &nbsp;Skills&nbsp;
          </Link>
        </li>
        <li>
          <Link
            data-text="&nbsp;Projects"
            style={{
              "--clr": "#0A7D9E",
            }}
            className="link-a"
            href="#projects"
            onClick={menuOpenHandler}
          >
            &nbsp;Projects&nbsp;
          </Link>
        </li>
        <li>
          <Link
            data-text="&nbsp;Contact"
            style={{
              "--clr": "#EF6C33",
            }}
            className="link-a"
            href="#contact"
            onClick={menuOpenHandler}
          >
            &nbsp;Contact&nbsp;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlist;
