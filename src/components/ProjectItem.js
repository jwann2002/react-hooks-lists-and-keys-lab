import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* Map through the technologies array and create a <span> tag for each technology */}
        {technologies.map((technologies, index) => (
          <span key={index}>{technologies}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
