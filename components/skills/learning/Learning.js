import React from "react";
import "@styles/skills/learning.sass";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiRedux,
} from "react-icons/si";
const Learning = () => {
  return (
    <div className="learning-wrapper">
      <div className="skills-left-content">
        <p>
          I continually enhance my skills by adopting new web development
          technologies. Currently, I'm prioritizing TypeScript, Next.js, and
          Redux to strengthen my capabilities in backend development and user
          interface design. I've also gained experience with Node.js, Express,
          MongoDB, and jQuery. Embracing new technical concepts and staying at
          the forefront of innovation drives my enthusiasm in this dynamic
          field.
        </p>
      </div>
      <div className="learning-icons-wrapper">
        <div className="skill-icon">
          <SiTypescript />
        </div>
        <div className="skill-icon">
          <SiNextdotjs />
        </div>
        <div className="skill-icon">
          <SiMongodb />
        </div>
        <div className="skill-icon">
          <SiJquery />
        </div>
        <div className="skill-icon">
          <SiNodedotjs />
        </div>
        <div className="skill-icon">
          <SiExpress />
        </div>
        <div className="skill-icon">
          <SiRedux />
        </div>
      </div>
    </div>
  );
};
export default Learning;
