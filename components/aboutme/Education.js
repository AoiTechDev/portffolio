
import React from "react";
import { MdLocationPin, MdCalendarMonth } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
const Education = () => {
  return (
    <div className="education-wrapper">
      <div className="education-icons">
        <div className="education-info">
          <MdCalendarMonth className='edu-icon'/>
          <p>10.2018 - 07.2023</p>
        </div>
        <div className="education-info">
        <MdLocationPin className='edu-icon'/>
          <p>ZUT, Szczecin</p>
        </div>
        <div className="education-info">
        <BsFillMortarboardFill className='edu-icon'/>
          <p>Bachelor of Engineering</p>
        </div>
      </div>
      <div className="education-content">
        <p>I have a broad knowledge of computer science, covering various
        programming languages, technologies, and algorithms. By actively
        participating in team projects, I've gained experience in development
        and management, learning architectural planning and effective
        problem-solving skills in the process.</p>
      </div>
    </div>
  );
};
export default Education;
