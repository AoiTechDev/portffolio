import { CustomIcon } from "@components/images/icons/Icons";
import React from "react";
import calendar_icon from "../../assets/icons/education/calendar_icon.png";
import education_icon from "../../assets/icons/education/education_icon.png";
import location_icon from "../../assets/icons/education/location_icon.png";
const Education = () => {
  return (
    <div className="education-wrapper">
      <div className="education-icons">
        <div className="education-info">
          <CustomIcon src={calendar_icon} className='edu-icon'/>
          <p>10.2018 - 07.2023</p>
        </div>
        <div className="education-info">
          <CustomIcon src={location_icon} className='edu-icon'/>
          <p>ZUT, Szczecin</p>
        </div>
        <div className="education-info">
          <CustomIcon src={education_icon} className='edu-icon'/>
          <p>Bachelor of Engineering</p>
        </div>
      </div>
      <div className="education-content">
        I have a broad knowledge of computer science, covering various
        programming languages, technologies, and algorithms. By actively
        participating in team projects, I've gained experience in development
        and management, learning architectural planning and effective
        problem-solving skills in the process.
      </div>
    </div>
  );
};
export default Education;
