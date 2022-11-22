import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Home() {
    return (
        <Container fluid className="d-flex justify-content-center">
            <Row>
                <Image
                    roundedCircle
                    fluid
                    src={'/me.jpg'}
                    alt="me"
                />
            </Row>
        </Container>
    )
}

export default Home;