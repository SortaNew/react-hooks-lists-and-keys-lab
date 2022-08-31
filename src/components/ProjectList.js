import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // const {name, about, technologies, id} = projects
  // doesn't work here because you want name, about, technologies, id
  // from each project, not the whole projects array
  const renderProject = projects.map((project) => {    
    return <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id}/>
  })
  console.log(renderProject)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProject}</div>
    </div>
  );
}

export default ProjectList;
