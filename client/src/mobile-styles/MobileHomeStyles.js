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
    box-shadow: 0.8vw 0 0 0px #6819fc, 1.6vw 0 0 0px #3e0f97, 2.4vw 0 0 0px #273038;
    margin: 2em;
`;