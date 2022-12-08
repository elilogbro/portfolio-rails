import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    width: 100vw;
    height: 100vh;
    align-items: center;
    gap: 4vh;
    font-size: x-large;
`;

export const Input = styled.input`
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    width: 70vw;
    height: 6vh;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :focus{
        color: #212529;
        background-color: #fff;
        border-color: #00C542;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(0 197 66 / 25%);
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;

export const MessageInput = styled.textarea`
    width: 70vw;
    height: 26vh;
    padding: 6px 12px;
    font-size: x-large;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :focus{
        color: #212529;
        background-color: #fff;
        border-color: #00C542;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(0 197 66 / 25%);
    }
`;

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 1.5em;
    height: fit-content;
    width: 18vw;
    align-self: center;
    font-size: 1em;
    color: #ffffff;
    background-color: #00C542;
    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    padding: 1vw 1.5vw;
    :hover {
        color: #ffffff;
        background-color: #00e64d;
    }
    margin-top: 0.5vh;
`;

export const Required = styled.span`
    color: red;
`;

export const MsgContainer = styled.div`

`;