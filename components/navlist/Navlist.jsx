import React from "react";

const Navlist = () => {
  return (
    <div className="test">
      <ul>
        <li>
          <a
            data-text="&nbsp;About"
            style={{
              "--clr": "#0C4A60",
            }}
          >
            &nbsp;About&nbsp;
          </a>
        </li>
        <li>
          <a
            data-text="&nbsp;Skills"
            style={{
              "--clr": "#EF6C33",
            }}
          >
            &nbsp;Skills&nbsp;
          </a>
        </li>
        <li>
          <a
            data-text="&nbsp;Projects"
            style={{
              "--clr": "#0C4A60",
            }}
          >
            &nbsp;Projects&nbsp;
          </a>
        </li>
        <li>
          <a
            data-text="&nbsp;Contact"
            style={{
              "--clr": "#EF6C33",
            }}
          >
            &nbsp;Contact&nbsp;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navlist;
