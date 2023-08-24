import { CustomIcon } from "@components/images/icons/Icons";
import React from "react";
import coding_icon from "../../assets/icons/hobbies/coding_icon.png";
import development_icon from "../../assets/icons/hobbies/development_icon.png";
import games_icon from "../../assets/icons/hobbies/games_icon.png";
import gym_icon from "../../assets/icons/hobbies/gym_icon.png";
import painting_icon from "../../assets/icons/hobbies/painting_icon.png";
import Line from "@components/line/Line";
const Hobbies = () => {
  return (
    <div className="hobbies-wrapper">
      <div className="hobbies-icon-wrapper">
        <CustomIcon src={coding_icon} />
        <CustomIcon src={development_icon} />
        <CustomIcon src={games_icon} />
        <CustomIcon src={gym_icon} />
        <CustomIcon src={painting_icon} />
      </div>
      <Line
        style={{
          width: "40%",
        }}
      />
      <p>
        My current interests focus on constantly improving myself as a front-end
        developer, but also in other areas, for example, physical fitness.
        Regular strength training provides me with discipline and satisfaction.
        I also occasionally enjoy playing various computer games and painting
        whatever comes to mind.
      </p>
    </div>
  );
};
export default Hobbies;
