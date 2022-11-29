import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { BiHome } from 'react-icons/bi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import MobileNavigation from '../mobile-components/MobileNavigation';

function Navigation({isMobile}) {

    let navigate = useNavigate();
    const pushToProjectsContainer = () => {
        navigate('/projects')
    }

    if (isMobile) {
        return <MobileNavigation />;
    }

    return (
        <Navbar className="navbar-custom">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>
                        <BiHome
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '1.3vh'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/projects">
                    <Nav.Link>
                        <AiOutlineAppstore
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '1.3vh'
                            }}
                            onClick={pushToProjectsContainer}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/about">
                    <Nav.Link>
                        <MdOutlinePersonOutline
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '1.3vh'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link>
                        <AiOutlinePhone
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '1.3vh'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Navbar>
    )
}

export default Navigation;