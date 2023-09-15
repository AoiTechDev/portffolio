import React from "react";
import Title from "../reusable/title/Title";
import Image from "next/image";
import study_img from "@assets/images/study-img.jpg";
import { MdLocationPin, MdCalendarMonth } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
const Education = () => {
  return (
    <div className="wrapper">
      {/* <Title title="Education" /> */}
      <div className="education-wrapper ">
        <div className="img-icons-wrapper">
          <Image src={study_img} className="study-img" />
          {/* <div class="bottom">
            <Image src={study_img} className="study-img" />
          </div> */}
          {/* <div class="perspective">
            <Image src={study_img} width={400} height={500}/>
            <div class="bottom">
              <Image src={study_img} width={400} height={500}/>
            </div>
            <div class="left">
              <Image src={study_img} width={400} height={500}/>
            </div>
          </div> */}
          <div className="education-info">
            <MdCalendarMonth className="edu-icon" />
            <p>10.2018 - 07.2023</p>
          </div>
          <div className="education-info">
            <MdLocationPin className="edu-icon" />
            <p>ZUT, Szczecin</p>
          </div>
          <div className="education-info">
            <BsFillMortarboardFill className="edu-icon" />
            <p>
              Bachelor of
              <br />
              Engineering
            </p>
          </div>
        </div>
        <div className="education-content">
          <ul>
            {" "}
            <li>
              Gained broad knowledge of computer science - programming
              languages, technologies, algorithms.
            </li>{" "}
            <li>Hands-on experience through coursework labs and projects.</li>{" "}
            <li>
              Collaborated in groups to deliver projects using agile
              methodologies.
            </li>{" "}
            <li>
              Learned to systematically break down complex problems and apply
              algorithms.
            </li>{" "}
            
            <li>
              Experience with version control, integration, planning, debugging,
              tools.
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Education;
 