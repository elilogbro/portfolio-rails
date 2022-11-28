import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMediumCircle } from 'react-icons/ai';
import { HiViewList } from 'react-icons/hi';
import Dropdown from './Dropdown';

function Home() {

    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked)
    }

    return (
        <Container fluid className="mt-5">
            <Col className="text-center">
                <Image
                    roundedCircle
                    fluid
                    src={'/me.jpg'}
                    alt="me"
                    className="image"
                />
                <Col className="details-container">
                    <h4>Hi there! I'm</h4>
                    <h2><span style={{color: "#00C542"}}>Eliott</span> Brown</h2>
                    <p>A <strong><span style={{color: "#00C542"}}>Full-Stack Software Engineer</span></strong> passionate about creating unique software solutions</p>
                    <Container className="link-container">
                        <Col>
                            <button onClick={handleButtonClick}>Resume <HiViewList /></button>
                            {clicked && <Dropdown />}
                        </Col>
                        <Col>
                            <a href="https://github.com/elilogbro">
                                <AiFillGithub
                                    style={{
                                        width: "3vw",
                                        color: "#00C542",
                                        height: "6vh",
                                        padding: "0.4vw",
                                        margin: "0.25vw",
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                    }}
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/eli-in-tech/">
                                <AiFillLinkedin
                                    style={{
                                        width: "3vw",
                                        color: "#00C542",
                                        height: "6vh",
                                        padding: "0.4vw",
                                        margin: "0.25vw",
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                    }}
                                />
                            </a>
                            <a href="https://medium.com/@elilogbro">
                                <AiFillMediumCircle
                                    style={{
                                        width: "3vw",
                                        color: "#00C542",
                                        height: "6vh",
                                        padding: "0.4vw",
                                        margin: "0.25vw",
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                                    }}
                                />
                            </a>
                        </Col>
                    </Container>
                </Col>
            </Col>
        </Container>
    )
}

export default Home;