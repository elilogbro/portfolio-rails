import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    margin-right: 0;
    align-items: flex-start;
`;

export const Column = styled.div`

`

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 1.5em;
    height: ${props => props.mobile ? "20px" : "36px"};
    font-size: ${props => props.mobile ? "0.8em" : "1em"};
    color: #ffffff;
    background-color: #00C542;
    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    padding: ${props => props.mobile ? "0 6px" : "0 18px"};
    :hover {
        color: #ffffff;
        background-color: #00e64d;
    }
    margin-right: ${props => props.modal ? "0.5em" : "3vw"};
    margin-top: ${props => props.modal ? "0.2em" : "0.5vh"};
`;