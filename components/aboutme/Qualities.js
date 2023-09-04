import React from "react";
import { myData } from "@components/aboutme/aboutMeData";
const Qualities = () => {
  return (
    <div className="qualities-wrapper">
      {myData.map((data) => {
        if (data.id === "myqualities") {
          return data.qualities.map((quality) => {
            return (
              <div className="quality-container">
                <p>{quality}</p>
              </div>
            );
          });
        }
      })}
    </div>
  );
};
export default Qualities;
