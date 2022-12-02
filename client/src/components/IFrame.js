import { useContext } from 'react';
import {
    Container
} from '../styles/ProjectCardStyles';
import { IsMobileContext } from '../context/IsMobileContext';

function IFrame({project}) {

    const { isMobile } = useContext(IsMobileContext);

    return (
        <Container>
            <iframe src={project.video.embed_code} style={{height: isMobile ? '26.1vh' : '41.9vh', width: isMobile ? '100vw' : '36vw'}}></iframe>
        </Container>
    )
}

export default IFrame;