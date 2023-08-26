import React from "react";
import CloseMenu from "../menu/CloseMenu";
import Line from "../visual_components/line/Line";
import { myData } from "./aboutMeData";
const HiddenContent = ({ onClick, contentId }) => {
  return (
    <div className="hidden-content">
      <CloseMenu
        style={{
          background: "white",
        }}
        onClick={onClick}
      />
      <h2>{myData.map((data) => contentId === data.id && data.title)}</h2>
      <Line
        style={{
          width: "60%",
        }}
      />
      {myData.map((data) => contentId === data.id && data.content)}
    </div>
  );
};
export default HiddenContent;
