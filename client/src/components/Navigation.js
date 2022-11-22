import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
    return (
        <Nav variant="tabs" className="fixed-top">
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;