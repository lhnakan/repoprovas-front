import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Home() {

    return (
        <Container>
            <h1>Oq deseja fazer?</h1>
            <Link to={'/exams'}>Consultar provas</Link>
            <Link to={'/add-exam'}>Adicionar prova</Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: auto 0;
    padding-top: 50px;

    * {
        margin: 0 20px;
    }

    a {
        padding: 10px 20px;
        border-radius: 5px;
    }
`;