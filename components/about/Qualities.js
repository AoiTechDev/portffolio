import React from "react";

const Qualities = () => {
  const qualityDescArray = [
    "Thinking outside the box comes naturally to me. I excel at bringing fresh ideas to projects.",
    "I adapt quickly to new tools, processes, and environments. Change keeps me engaged.",
    "I build positive relationships and enjoy brainstorming in groups. Teams create better outcomes together.",
    "Pushing past mental barriers allows me to persist through challenges. I cultivate a growth mindset.",
    "Understanding communication styles helps me effectively collaborate with teammates of all backgrounds.",
  ];
  const qualityArray = [
    "Creative",
    "Adaptable",
    "Teamwork",
    "Self-discipline",
    "Communication",
  ];

  return (
    <div className="qualities-wrapper">
      <div className="title-wrapper">
        <div className="title-line"></div>
        <span className="title">My qualities</span>
      </div>
      {qualityArray.map((quality, index) => (
        <div className="quality" key={index}>
          <span>{quality}</span>
          <p>{qualityDescArray[index]}</p>
        </div>
      ))}
    </div>
  );
};
export default Qualities;
