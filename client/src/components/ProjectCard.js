import { useContext } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import IFrame from './IFrame';
import {
    Container,
    SubContainer,
    SubContainer2,
    LinkContainer,
    IconContainer
} from '../styles/ProjectCardStyles';
import { IsMobileContext } from '../context/IsMobileContext';
import MobileProjectCard from '../mobile-components/MobileProjectCard';
import { FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { DiRuby } from 'react-icons/di';
import { FaRedhat } from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

function ProjectCard({ project }) {

    const { isMobile } = useContext(IsMobileContext);

    if (isMobile) {
        return <MobileProjectCard project={project} />
    }

    const findLogo  = (technology) => {
        switch (technology.name) {
            case 'React.js':
                return <FaReact className="logo" />
                break;
            case 'Ruby on Rails':
                return <SiRubyonrails className="logo" />
                break;
            case 'Custom db.json':
                return <VscJson className="logo" />
                break;
            case 'Ruby':
                return <DiRuby className="logo" />
                break;
            case 'Sinatra':
                return <FaRedhat className="logo" />
                break;
            case 'User Authentication':
                return <FaCookieBite className="logo" />
                break;
            case 'Styled Components':
                return null
                break;
            default:
                return <p>{technology.name}</p>
        }
    }
    

    const renderTechnologies = project && project.technologies.map(technology =>
        findLogo(technology)
    )


    return (
        <Container>
            <IFrame project={project} />
            <SubContainer2>
                <IconContainer>
                    {renderTechnologies}
                </IconContainer>
                <LinkContainer>
                    <a href={project.github_url}>
                        <AiFillGithub className="github" />
                    </a>
                </LinkContainer>
            </SubContainer2>
            <SubContainer>
                <h2 style={{fontFamily: 'Azeret Mono, monospace', color: '#6819fc'}}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString(project.name)
                            .start();
                        }}
                    />
                </h2>
                <p style={{fontFamily: 'Roboto Condensed, sans-serif'}}>{project.details}</p>
            </SubContainer>
        </Container>
    )
}

export default ProjectCard;