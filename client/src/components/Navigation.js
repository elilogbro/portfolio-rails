import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';
import { HiViewGrid } from 'react-icons/hi';

function Navigation() {


    return (
        <Navbar className="navbar-custom">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>
                        <AiFillHome
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '0.7vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/projects">
                    <Nav.Link>
                        <HiViewGrid
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '0.7vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/about">
                    <Nav.Link>
                        <BsFillPersonFill
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '0.7vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link>
                        <CgPhone
                            style={{
                                color: 'white',
                                height: '4vh',
                                width: '4vw',
                                margin: '0.7vw'
                            }}
                        />
                    </Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Navbar>
    )
}

export default Navigation;