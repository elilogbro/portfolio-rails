import {
    Container,
    List,
    ListItem
} from '../styles/DropdownStyles';

function Dropdown() {

    return (
        <Container>
            <List>
                <ListItem>View</ListItem>
                <a
                    href={'/resume.pdf'}
                    download="EliottBrownResume"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                >
                    <ListItem>Download</ListItem>
                </a>
            </List>
        </Container>
    )
}

export default Dropdown;