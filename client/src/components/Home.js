import React, { useState, useContext } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { HiViewList } from 'react-icons/hi';
import Dropdown from './Dropdown';
import {
    Container,
    LinksContainer,
    Column,
    Button
} from '../styles/HomeStyles';
import MobileHome from '../mobile-components/MobileHome';
import { IsMobileContext } from '../context/IsMobileContext';

function Home() {

    const { isMobile } = useContext(IsMobileContext);
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked)
    }

    if (isMobile) {
        return <MobileHome />
    }

    return (
        <Container>
            <Col className="text-center">
                <Image
                    roundedCircle
                    fluid
                    src={'/me.jpg'}
                    alt="me"
                    className="image"
                />
                <Col className="details-container">
                    <h4><strong>Hi there! I'm</strong></h4>
                    <h2 style={{marginLeft: '4vw'}}><strong><span style={{color: "#6819fc"}}>Eliott</span></strong> Brown</h2>
                    <p style={{color: '#919497'}}>A <strong><span style={{color: "#6819fc"}}>Full-Stack Software Engineer</span></strong> passionate about creating unique software solutions</p>
                    <LinksContainer>
                        <Button onClick={handleButtonClick}>
                            Resume <HiViewList />
                        </Button>
                        {clicked && <Dropdown mobile="false"/>}
                    </LinksContainer>
                </Col>
            </Col>
        </Container>
    )
}

export default Home;