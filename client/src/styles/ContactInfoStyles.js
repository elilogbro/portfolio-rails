import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    height: 40vh;
    margin-top: 16vh;
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

export const MessageInput = styled(Input)`
    width: 50vw;
    height: 10vh;
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