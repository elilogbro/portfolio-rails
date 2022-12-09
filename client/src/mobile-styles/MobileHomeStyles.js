import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    text-align: center;
    margin-top: 16vh;
`;

export const LinksContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    min-height: 20vh;
`;

export const Row = styled.div`
    justify-content: center;
`

export const Column = styled.div`
    align-self: auto;
`

export const Image = styled.img`
    width: auto;
    height: 30vh;
    border-radius: 50%;
    box-shadow: 0.6vw 0 0 0px #00e64d, 1.4vw 0 0 0px #99F5B7, 2.2vw 0 0 0px #CCFADB;
    margin: 2em;
`;