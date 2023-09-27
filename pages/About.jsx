import "@styles/about/about.sass";

import Qualities from "@components/about/qualities/Qualities";
import Whoami from "@components/about/whoami/Whoami";
import Education from "@components/about/education/Education";
import FunFacts from "@components/about/funfacts/FunFacts";
const About = () => {
  return (
    <section id="about">
      <Whoami />
      <Education />
      <Qualities />
      <FunFacts />
    </section>
  );
};
export default About;
