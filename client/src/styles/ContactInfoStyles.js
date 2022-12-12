import styled from 'styled-components';

export const Right = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
    justify-content: center;
    align-self: center;
    text-transform: uppercase;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8vw;
    height: 100vh;
    color: white;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: fit-content;
    text-align: left;
    justify-content: center;
`;

export const Input = styled.input`
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    width: 36vw;
    color: white;
    background-color: #1f2731;
    background-clip: padding-box;
    border: ${props => props.error ? "1px solid red" : "1px solid #ced4da"};
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :focus{
        color: white;
        background-color: #1f2731;
        border-color: #6819fc;
        outline: 0;
    }
`;

export const MessageInput = styled.textarea`
    width: 36vw;
    height: 16vh;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    background-color: #1f2731;
    background-clip: padding-box;
    border: ${props => props.error ? "1px solid red" : "1px solid #ced4da"};
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :focus{
        color: white;
        background-color: #1f2731;
        border-color: #6819fc;
        outline: 0;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: flex-start;
    margin: 2vh;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    width: fit-content;
    padding: 14px 18px;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    color: #0f1922;
    background-color: white;
    height: 48px;
    :hover{
        color: #fff;
        background-color: transparent;
        border-color: #6819fc;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(104 25 252 / 25%);
    }
    align-self: center;
`;

export const Required = styled.span`
    color: red;
`;

export const MsgContainer = styled.div`
    display: flex;
    align-self: center;
    margin-top: 2vh;
    align-items: center;
    justify-content: center;
`;

export const Error = styled.p`
    min-height: 4vh;
    margin: 0;
    text-transform: none;
    color: red;
    font-size: small;
    padding-top: 1vh;
`;