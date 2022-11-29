import { AiFillGithub } from 'react-icons/ai';
import IFrame from './IFrame';

function ProjectCard({project}) {

    return (
        <div>
            <div>
                <IFrame project={project} />
            </div>
            <h2>{project.name}</h2>
            <p>{project.details}</p>
            <a href={project.github_url}>
                <AiFillGithub className="icon" />
            </a>
        </div>
    )
}

export default ProjectCard;