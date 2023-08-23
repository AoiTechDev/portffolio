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
        I have a general knowledge of computer science, covering a variety of
        programming languages and technologies. I have actively participated in
        team projects, gaining experience in the development and management of
        such projects, which has allowed me to learn their entire architecture
        and planning process.
      </div>
    </div>
  );
};
export default Education;
