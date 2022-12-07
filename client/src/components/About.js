import {
    Image,
    Container,
    Header,
    SubContainer
} from '../styles/AboutStyles';

function About() {
    return (
        <Container>
            <Header>
                <h4>Who is Eliott Brown?</h4>
                <p>A curious Full Stack Software Engineer who is passionate about the Frontend and is constantly trying to further himself.</p>
            </Header>
            <SubContainer>
                <Image src={'/mewithhenry.jpg'} alt="hiking with my dog, Henry" />
                <div>
                    <p>As a former Forestry Technician of four years, I value all things outdoors and hope to continue sharing my passion for environmental stewardship.</p>
                    <p>After finishing Flatiron School's Software Engineering program, I'm on the hunt for a role where I can put both my passion for the outdoors and technology skills to work.</p>
                </div>
            </SubContainer>
        </Container>
    )
}

export default About;