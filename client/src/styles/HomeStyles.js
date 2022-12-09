import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    margin-right: 0;
    align-items: baseline;
    min-height: 20vh;
    font-family: 'Poppins', sans-serif;
`;

export const Column = styled.div`
`;

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 1.5em;
    height: fit-content;
    width: ${props => props.mobile && "fit-content"};
    font-size: ${props => props.mobile ? "1.25em" : "1em"};
    color: #ffffff;
    background-color: #00C542;
    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    padding: ${props => props.mobile ? "1vw 2vw" : "0.5vw 1.5vw"};
    :hover {
        color: #ffffff;
        background-color: #00e64d;
    }
    margin-right: ${props => props.modal && "0.5em"};
    margin-top: ${props => props.modal && "0.2em"};
    margin: ${props => props.mobile && '0.6vh'};
`;