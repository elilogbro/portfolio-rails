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
    MsgContainer,
    Right,
    Left
} from '../styles/ContactInfoStyles';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { BsHandThumbsUp } from 'react-icons/bs';
import { IsMobileContext } from '../context/IsMobileContext';
import MobileContactInfo from '../mobile-components/MobileContactInfo';

function ContactInfo() {

    const { isMobile } = useContext(IsMobileContext);
    
    const initialFormData = {
        from_name: "",
        from_email: "",
        message: ""
    };
    
    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState(null);
    const [confirmation, setConfirmation] = useState(null);
    
    if (isMobile) {
        return <MobileContactInfo />
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        setFormData({...formData, [key] : value})
    };

    const isValid = Boolean(formData.from_name !== "" && formData.from_email !== "" && formData.message !== "");

    function sendEmail(e) {
        e.preventDefault();

        if (isValid) {
            emailjs.sendForm('service_v3bpdl8', 'template_4nl0spn', e.target, 'EhI_xZcAYhshS9nyo')
            .then(() => {
                setFormData(initialFormData);
                setConfirmation("Your message has been received!");
            });
        }
        else {
            setError("Please fill out the required fields");
        };
    };

    const handleMessages = () => {
        setError(null);
        setConfirmation(null);
    };
  
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
                            onClick={handleMessages}
                            onChange={handleFormChange}
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label>Email <Required>*</Required></label>
                        <Input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onClick={handleMessages}
                            onChange={handleFormChange}    
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <label>Message <Required>*</Required></label>
                        <MessageInput
                            type="text"
                            name="message"
                            value={formData.message}
                            onClick={handleMessages}
                            onChange={handleFormChange}
                        />
                    </Column>
                </Row>
                <Button type="submit">Send</Button>
                {error &&
                    <MsgContainer>
                        <AiFillExclamationCircle
                            style={{
                                color: 'red',
                                fontSize: '20px',
                                marginRight: '0.5vw'
                            }}
                        />
                        {error}
                    </MsgContainer>
                }
                {confirmation &&
                    <MsgContainer>
                        <BsHandThumbsUp
                            style={{
                                color: '#00e64d',
                                fontSize: '18px',
                                marginRight: '0.5vw'
                            }}
                        />
                        {confirmation}
                    </MsgContainer>
                }
            </Right>
        </Container>
    )
  }

  export default ContactInfo;