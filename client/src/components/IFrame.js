import { useContext } from 'react';
import {
    Container
} from '../styles/ProjectCardStyles';
import { IsMobileContext } from '../context/IsMobileContext';

function IFrame({project}) {

    const { isMobile } = useContext(IsMobileContext);

    return (
        <Container>
            <iframe src={project.video.embed_code} style={{height: isMobile ? '50vh' : '70vh', width: 'auto'}}></iframe>
        </Container>
    )
}

export default IFrame;