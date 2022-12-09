import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 10vh;
    align-items: center;
    width: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    text-align: center;
    font-size: x-large;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vw;
    margin-bottom: 12vh;
    font-size: x-large;
    width: 100vw;
    align-items: center;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    gap: 3vh;
`;