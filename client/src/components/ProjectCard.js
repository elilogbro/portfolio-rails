import { AiFillGithub } from 'react-icons/ai';
import IFrame from './IFrame';

function ProjectCard({project}) {

    return (
        <div>
            <div>
                <img src={project.image} alt="website" />
            </div>
            <h2>{project.name}</h2>
            <p>{project.details}</p>
            <a href={project.github_url}>
                <AiFillGithub className="icon" />
            </a>
            <IFrame project={project} />
        </div>
    )
}

export default ProjectCard;