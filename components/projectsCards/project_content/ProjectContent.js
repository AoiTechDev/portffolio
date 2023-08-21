import React from 'react'
import { useInView } from "react-intersection-observer";
const ProjectContent = ({projectData,cardId, title, delay, content}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
        triggerOnce: true,
      });
      const allDelay = delay + 's'
      const halfDelay = (delay/2) + 's'
      console.log(allDelay, halfDelay)
  return (
    <div className="project-description">
        <h4
          className={inView && "scroll-down"}
          ref={ref}
          style={{
            animationDelay: halfDelay,
          }}
        >
          {title}
        </h4>
        {projectData.map(
          (project) =>
            project.id === cardId && (
              <p
                className={inView && "scroll-left"}
                ref={ref}
                style={{
                  animationDelay: allDelay,
                }}
              >
                {content === 'description' ? project.description : project.spec}
              </p>
            )
        )}
      </div>
  )
}
export default ProjectContent