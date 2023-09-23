
import "@styles/about.sass";

import Qualities from "@components/about/qualities/Qualities";
import Whoami from "@components/about/whoami/Whoami";
import Education from "@components/about/education/Education";
import FunFacts from "@components/about/funfacts/FunFacts";

import Title from "@components/reusable/title/Title";

const About = () => {
 
  return (
    <section id="about">
    
      <Title title="who am i?" />
      <Whoami />
      <Title title="education" />
      <Education />
      <Title title="my qualities" />
      <Qualities />
      <Title title="fun facts" />
      <FunFacts />
    </section>
  );
};
export default About;
