import React from "react";
import '@styles/title/title.sass'
const Title = ({ title }) => {
  return (
    <div className="title-wrapper">
      <div className="title-line"></div>
      <span className="title">{title}</span>
    </div>
  );
};
export default Title;
