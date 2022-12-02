import { AiFillGithub } from 'react-icons/ai';
import IFrame from '../components/IFrame';
import {
    Container,
    SubContainer,
    SubContainer2
} from '../mobile-styles/MobileProjectCardStyles';
import { FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { DiRuby } from 'react-icons/di';
import { FaRedhat } from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa';

function MobileProjectCard({project}) {

    const renderTechnologies = project && project.technologies.map(technology =>
        {
            if (technology.name === 'React.js') {
                return <FaReact className="logo"/>
            }
            if (technology.name === 'Ruby on Rails') {
                return <SiRubyonrails className="logo"/>
            }
            if (technology.name === 'Custom db.json') {
                return <VscJson className="logo"/>
            }
            if (technology.name === 'Ruby') {
                return <DiRuby className="logo"/>
            }
            if (technology.name === 'Sinatra') {
                return <FaRedhat className="logo"/>
            }
            if (technology.name === 'User Authentication') {
                return <FaCookieBite className="logo"/>
            }
        }
    )

    return (
        <Container>
            <IFrame project={project} />
            <SubContainer2>
                {renderTechnologies}
            </SubContainer2>
            <SubContainer>
                <h1>{project.name}</h1>
                <p>{project.details}</p>
                <a href={project.github_url}>
                    <AiFillGithub className="icon" style={{width: '40vw', height: '8vh'}}/>
                </a>
            </SubContainer>
        </Container>
    )
}

export default MobileProjectCard;