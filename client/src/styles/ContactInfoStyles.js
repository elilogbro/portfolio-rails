import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: fit-content;
    margin-top: 24vh;
    margin-left: 16vw;
    text-align: center;
    justify-content: center;
`;

export const Input = styled.input`
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    width: 16vw;
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

export const MessageInput = styled.textarea`
    width: 40vw;
    height: 16vh;
    padding: 6px 12px;
    font-size: 16px;
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
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vw;
    margin: 2vh;
`;

export const Column = styled.div`
    display: flex;
    gap: 2vw;
`;

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 1.5em;
    height: ${props => props.mobile ? "5vh" : "fit-content"};
    width: ${props => props.mobile ? "30vw" : "12vw"};
    align-self: center;
    font-size: ${props => props.mobile ? "1em" : "1em"};
    color: #ffffff;
    background-color: #00C542;
    transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
    padding: ${props => props.mobile ? "1vw 1.5vw" : "0.5vw 1.5vw"};
    :hover {
        color: #ffffff;
        background-color: #00e64d;
    }
    margin-top: ${props => props.modal ? "0.2em" : "0.5vh"};
`;

export const Required = styled.span`
    color: red;
`;

export const MsgContainer = styled.div`
    display: flex;
    align-self: center;
    margin-top: 2vh;
    align-items: center;
`;