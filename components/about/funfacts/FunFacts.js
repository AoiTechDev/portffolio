import React from "react";
import "@styles/about/funfacts/funfacts.sass";
import Card from "./card/Card";
const Hobbies = () => {
  return (
    <div className="funfacts-wrapper">
      <Card
        id="1"
        title="Fun Fact 1"
        context="I challenge myself to code and make commits to my GitHub. My current milestone is 100 days. You can follow my progress on my profile :)"
      />
      <Card id="2" title="Fun Fact 2" context="" />
      <Card id="3" title="Fun Fact 3" context="" />
    </div>
  );
};
export default Hobbies;
