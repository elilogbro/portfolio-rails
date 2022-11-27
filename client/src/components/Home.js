import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
    return (
        <Container fluid className="mt-5">
            <Row>
                <Col className="text-center">
                    <Image
                        roundedCircle
                        fluid
                        src={'/me.jpg'}
                        alt="me"
                        width="30%"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;