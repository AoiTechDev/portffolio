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
          <CustomIcon src={calendar_icon} />
          <h5>10.2018 - 07.2023</h5>
        </div>
        <div className="education-info">
          <CustomIcon src={location_icon} />
          <h5>ZUT, Szczecin</h5>
        </div>
        <div className="education-info">
          <CustomIcon src={education_icon} />
          <h5>Bachelor of Engineering</h5>
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
