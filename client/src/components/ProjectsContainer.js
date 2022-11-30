import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import {
    Container
} from '../styles/ProjectsContainerStyles';

function ProjectsContainer() {

    let location = useLocation();
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('/projects')
        .then(res => res.json())
        .then(projects => setProjects(projects))
    }, [location])

    const renderProjects = projects && projects.map(project =>
            <ProjectCard key={project.id} project={project} />
        )

    return (
        <Container>
            {renderProjects}
        </Container>
    )
}

export default ProjectsContainer;