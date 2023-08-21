import React from 'react'
import { useInView } from "react-intersection-observer";

const ProjectDescription = ({ projectData, cardId}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
        triggerOnce: true,
      });
  return (
    <div className="project-description">
        <h4
          className={inView && "scroll-down"}
          ref={ref}
          style={{
            animationDelay: "0.5s",
          }}
        >
          Description
        </h4>
        {projectData.map(
          (project) =>
            project.id === cardId && (
              <p
                className={inView && "scroll-left"}
                ref={ref}
                style={{
                  animationDelay: "1s",
                }}
              >
                {project.description}
              </p>
            )
        )}
      </div>
  )
}
export default ProjectDescription