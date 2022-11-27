import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
                <Container fluid className="text-center mt-3">
                    <a href="https://github.com/elilogbro">
                        <Button className="m-2">
                            <Image
                                src={'/github-logo.png'}
                                width="30vw"
                            />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/eli-in-tech/">
                        <Button className="m-2">
                            <Image
                                src={'/linkedin-logo.png'}
                                width="30vw"
                            />
                        </Button>
                    </a>
                    <a href="https://medium.com/@elilogbro">
                        <Button className="m-2">
                            <Image
                                src={'/medium-logo.png'}
                                width="30vw"
                            />
                        </Button>
                    </a>
                </Container>
            </Row>
        </Container>
    )
}

export default Home;