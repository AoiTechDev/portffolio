import React from "react";
import { project_data } from "@components/projects/projects_data/data";
import { DiGithubBadge } from "react-icons/di";
import { Link } from "@chakra-ui/react";

const ProjectInfo = ({ projectID }) => {
  return (
    <div className="project-container">
      {project_data.map((project) => {
        return (
          project.id === projectID && (
            <>
              <h4>{project.title}</h4>
              <div className="project-description">
                <h5>Description</h5>
                <p>{project.description}</p>
              </div>

              <ul className="project-spec">
                {project?.spec?.map((spec, index) => (
                  <li key={index}>
                    <p>{spec}</p>
                  </li>
                ))}
              </ul>

              <div className="project-tech-stack">
                <h5>Technologies I Used</h5>
                <div className="tech-container">
                  {project.tech.map((tech) => tech)}
                </div>
              </div>
              <div className="project-link">
                <DiGithubBadge className="tech-icon github-icon" />
                <Link
                  href={project.github}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  
                >
                  <p data-text='Code'>Code</p>
                </Link>
              </div>
            </>
          )
        );
      })}
    </div>
  );
};
export default ProjectInfo;
