import { AiFillGithub } from 'react-icons/ai';
import IFrame from '../components/IFrame';
import {
    Container,
    SubContainer
} from '../mobile-styles/MobileProjectCardStyles';

function MobileProjectCard({project}) {

    return (
        <Container>
            <IFrame project={project} />
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