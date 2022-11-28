import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgPhone } from 'react-icons/cg';

function Navigation() {


    return (
        <Navbar className="navbar-custom">
            <Nav.Item>
            <LinkContainer to="/">
                <Nav.Link color="white"><AiFillHome /></Nav.Link>
            </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/about">
                    <Nav.Link><BsFillPersonFill /></Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link><CgPhone /></Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Navbar>
    )
}

export default Navigation;