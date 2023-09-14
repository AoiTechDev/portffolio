import React from "react";

const Title = ({ title }) => {
  return (
    <div className="title-wrapper">
      <div className="title-line"></div>
      <span className="title">{title}</span>
    </div>
  );
};
export default Title;
