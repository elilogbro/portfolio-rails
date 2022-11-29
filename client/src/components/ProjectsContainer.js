import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function ProjectsContainer() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('/projects')
        .then(res => res.json())
        .then(projects => setProjects(projects))
    }, [])

    const renderProjects = projects && projects.map(project =>
            <ProjectCard key={project.id} project={project} />
        )

    return (
        <div>
            {renderProjects}
        </div>
    )
}

export default ProjectsContainer;