import "@styles/skills/skills.sass";
import Tools from "@components/skills/tools/Tools";
import Learning from "@components/skills/learning/Learning";

import { technologies_content } from "@components/skills/data/data";
import { Tech } from "@components/skills/tech/Tech";
import Gallery from "@components/skills/gallery/Gallery";
const Skills = () => {
  return (
    <section id="skills">
      {/* <Tech technologies_content={technologies_content} />
      <Tools />
      <Learning /> */}

      <Gallery/>
    </section>
  );
};

export default Skills;
