import styled from 'styled-components';

export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    & > * {
        color: black;
        width: 50%;
        margin: 10px;
    }    
`;

export const Input = styled.input`
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 16px;
    height: 38px;
`;

export const Button = styled.button`
    padding: 8px;
    border-radius: 5px;
    font-size: 20px;
    background: #000;
    color: #FFF;
    letter-spacing: 1px;
`;
