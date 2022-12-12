import { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import {
    Container,
    Input,
    Row,
    Column,
    MessageInput,
    Button,
    Required,
    Right,
    Left,
    Error
} from '../styles/ContactInfoStyles';
import { IsMobileContext } from '../context/IsMobileContext';
import MobileContactInfo from '../mobile-components/MobileContactInfo';

function ContactInfo() {

    const { isMobile } = useContext(IsMobileContext);
    
    const initialFormData = {
        from_name: "",
        from_email: "",
        message: ""
    };

    const falsyFormData = {
        from_name: false,
        from_email: false,
        message: false
    }

    const [formData, setFormData] = useState(initialFormData);
    const [errorLocation, setErrorLocation] = useState(falsyFormData);
    
    if (isMobile) {
        return <MobileContactInfo />
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        if (formData[key] !== "") {
            setErrorLocation({...errorLocation, [key] : false})
        }

        setFormData({...formData, [key] : value})
    };

    const isValid = Boolean(formData.from_name !== "" && formData.from_email !== "" && formData.message !== "");

    function sendEmail(e) {
        e.preventDefault();

        if (isValid) {
            emailjs.sendForm('service_v3bpdl8', 'template_4nl0spn', e.target, 'EhI_xZcAYhshS9nyo')
            .then(() => {
                setFormData(initialFormData);
            });
        };
    };

    const handleErrors = (e) => {
        const currentKey = e.target.name

        if (formData[currentKey] === "") {
            setErrorLocation({...errorLocation, [currentKey] : true})
        }
        
    }
    
    return (
        <Container>
            <Left>
                <h2>Contact</h2>
                <h1>Looking for a new developer or just want to chat?</h1>
                <p>Send me a message to get the process started.</p>
                <p>elilogbro@gmail.com</p>
            </Left>
            <Right onSubmit={sendEmail}>
                <Row>
                    <Column>
                        <label>Name <Required>*</Required></label>
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleFormChange}
                            onClick={handleErrors}
                            error={errorLocation.from_name && "true"}
                        />
                        <Error>{errorLocation.from_name && "Name is empty."}</Error>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label>Email <Required>*</Required></label>
                        <Input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleFormChange}
                            onClick={handleErrors}
                            error={errorLocation.from_email && "true"}
                        />
                        <Error>{errorLocation.from_email && "Email is empty."}</Error>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label>Message <Required>*</Required></label>
                        <MessageInput
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            onClick={handleErrors}
                            error={errorLocation.message && "true"}
                        />
                        <Error>{errorLocation.message && "Message is empty."}</Error>
                    </Column>
                </Row>
                <Button type="submit">Send</Button>
            </Right>
        </Container>
    )
  }

  export default ContactInfo;