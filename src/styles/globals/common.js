import { css } from 'styled-components';

export default css`
    body{
        background-image: url('/images/bg.png');
        background-repeat: no-repeat;
        background-size: cover;

        color: #FFF;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 1px;
    }

    h1 {
        font-size: 30px;              
        font-weight: 800;  
    }
    h2 {
        font-size: 25px;
        font-weight: 700;
    }  

    button {
        font-family: 'Poppins', sans-serif;
    }
    a {
        font-family: 'Poppins', sans-serif;
        background: black;
    }
    input {
        font-family: 'Poppins', sans-serif;
    }
`;
