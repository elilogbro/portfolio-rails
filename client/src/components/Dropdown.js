import React, { useState } from 'react';
import {
    Container,
    List,
    ListItem
} from '../styles/DropdownStyles';
import Popup from 'reactjs-popup';
import { ReactPDF } from '@react-pdf/renderer';

function Dropdown() {

    return (
        <Container>
            <List>
                <Popup trigger={<ListItem>View</ListItem>} position="right-center" modal>
                    <object data={'/resume.pdf'} type="application/pdf" width="100%" height="100%">
                        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                    </object>
                </Popup>
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