import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    width: 40%;
    margin: 0 auto;
    margin-top: 100px;
    background: #bb9174;
    border-radius: 20px;

    * {
        margin:  40px;
    }

    a {
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 18px;
    }
`;

export default Container;
