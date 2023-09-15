"use client";

import "@styles/skills.sass";

import Page from "@components/page";

import Title from "@components/reusable/title/Title";
import Spinner from "@components/skills/spinner/Spinner";
import Tools from "@components/skills/tools/Tools";

const Skills = () => {


  return (
    <Page>
      <section id="skills">
        <Title title="technologies" />
        <div className="skills-wrapper">
          <div className="skills-icon">
           <Spinner/>
          </div>
          <div className="skills-content">
            <p>
              These skills collectively empower me to create modern and
              user-centric web solutions. I am dedicated to staying updated with
              the latest trends and best practices in these technologies to
              deliver high-quality results consistently.
            </p>
          </div>
        </div>

        <Title title="tools" />
        <Tools />
      </section>
    </Page>
  );
};

export default Skills;
