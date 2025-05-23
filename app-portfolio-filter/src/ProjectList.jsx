import React from "react";

function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <img
                    src={project.img}
                    alt={project.category}
                    className="project-image"
                    />
                </div>
                ))}
        </div>
    );
}

export default ProjectList;