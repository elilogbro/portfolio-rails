import styled from 'styled-components';

export const Container = styled.div`
    top: 100%;
    left: 0;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    width: auto;
    text-align: left;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;
export const ListItem = styled.li`
    padding: 4px 4px;
    &:hover{
        background-color: #ececec;
        cursor: pointer;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    width: 70vw;
    height: 90vh;
`;

export const Row = styled.div`
    justify-content: center;
`;

export const TextContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    padding: 1em;
`;