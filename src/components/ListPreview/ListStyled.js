import styled from 'styled-components';

export const Box = styled.li`
    display: flex;
    justify-content: ${({ option }) => (option === 'total' ? 'space-between' : 'space-evenly')};
    margin: 25px;  
    font-size: 17px;

    * {
        width: 25%;
    }
`;