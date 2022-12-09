import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import { HiViewList } from 'react-icons/hi';
import Dropdown from '../components/Dropdown';
import {
    Button
} from '../styles/HomeStyles';
import {
    Container,
    Row,
    Image,
    Column,
    LinksContainer,
} from '../mobile-styles/MobileHomeStyles';

function MobileHome() {

    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked)
    }

    return (
        <Container>
            <Row>
                <Image
                    src={'/me.jpg'}
                    alt="me"
                />
                <Row>
                    <h4>Hi there! I'm</h4>
                    <h2><span style={{color: "#00C542"}}>Eliott</span> Brown</h2>
                    <p>A <strong><span style={{color: "#00C542"}}>Full-Stack Software Engineer</span></strong> passionate about creating unique software solutions</p>
                    <LinksContainer>
                        <Column>
                            <Button onClick={handleButtonClick} mobile="true">
                                Resume <HiViewList />
                            </Button>
                            {clicked && <Dropdown mobile="true"/>}
                        </Column>
                        <Column>
                            <a href="https://github.com/elilogbro">
                                <AiFillGithub className="mobile-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/eli-in-tech/">
                                <AiFillLinkedin className="mobile-icon" />
                            </a>
                            <a href="https://medium.com/@elilogbro">
                                <AiFillMediumCircle className="mobile-icon" />
                            </a>
                        </Column>
                    </LinksContainer>
                </Row>
            </Row>
        </Container>
    )
}

export default MobileHome;