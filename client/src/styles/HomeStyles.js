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
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 2px;
    height: 36px;
    line-height: 34px;
    font-size: 14px;
    color: #ffffff;
    background-color: #00C542;
    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    padding: 0 18px;
    :hover {
        color: #ffffff;
        background-color: #00e64d;
    }
    margin-right: 3vw;
    margin-top: 0.5vh;
`;