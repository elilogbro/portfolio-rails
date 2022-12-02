import { useContext } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import IFrame from './IFrame';
import {
    Container,
    SubContainer,
    SubContainer2
} from '../styles/ProjectCardStyles';
import { IsMobileContext } from '../context/IsMobileContext';
import MobileProjectCard from '../mobile-components/MobileProjectCard';

function ProjectCard({project}) {

    const { isMobile } = useContext(IsMobileContext);

    if (isMobile) {
        return <MobileProjectCard project={project} />
    }

    const renderTechnologies = project && project.technologies.map(technology =>
        <p>{technology.name}</p>    
    )

    return (
        <Container>
            <IFrame project={project} />
            <SubContainer2>
                {renderTechnologies}
            </SubContainer2>
            <SubContainer>
                <h2>{project.name}</h2>
                <p>{project.details}</p>
                <a href={project.github_url}>
                    <AiFillGithub className="icon" style={{width: '8vw', height: '7vh'}}/>
                </a>
            </SubContainer>
        </Container>
    )
}

export default ProjectCard;