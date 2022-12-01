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
                <h2>{project.name}</h2>
                <p>{project.details}</p>
                <a href={project.github_url}>
                    <AiFillGithub className="icon" style={{width: '8vw', height: '7vh'}}/>
                </a>
            </SubContainer>
        </Container>
    )
}

export default MobileProjectCard;