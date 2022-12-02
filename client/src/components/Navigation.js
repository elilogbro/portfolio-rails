import React, { useState, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { BiHome } from 'react-icons/bi';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import MobileNavigation from '../mobile-components/MobileNavigation';
import { IsMobileContext } from '../context/IsMobileContext';

function Navigation() {

    const { isMobile } = useContext(IsMobileContext);

    if (isMobile) {
        return <MobileNavigation/>;
    }
    
    return (
        <Navbar className="navbar-custom">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>
                        <BiHome
                            className="nav"
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/projects">
                    <Nav.Link>
                        <AiOutlineAppstore
                            className="nav"
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/about">
                    <Nav.Link>
                        <MdOutlinePersonOutline
                            className="nav"
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link>
                        <AiOutlinePhone
                            className="nav"
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Navbar>
    )
}

export default Navigation;