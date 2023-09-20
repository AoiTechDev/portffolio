"use client";

import "@styles/skills.sass";
import Title from "@components/reusable/title/Title";
import Spinner from "@components/skills/spinner/Spinner";
import Tools from "@components/skills/tools/Tools";
import Learning from "@components/skills/learning/Learning";
import { gsap } from "gsap";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    gsap.from('.skills-wrapper .skills-content', {
      scrollTrigger: {
        trigger: '.skills-wrapper',
        start: "top 60%",
        end: "bottom 20%",
     
      },
      duration: 1,
      opacity: 0,
      y: 100,
      ease: 'ease-in',
     

    })
  },[])

  return (
 
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
        <Title title="learning" />
        <Learning />
      </section>
    
  );
};

export default Skills;
