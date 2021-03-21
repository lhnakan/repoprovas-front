import React from 'react';
import { Link } from 'react-router-dom';

import Container from './HomeStyled';

export default function Home() {
  return (
    <Container>
      <h1>Oq deseja fazer?</h1>
      <div>
        <Link to="/exams">Consultar provas</Link>
        <Link to="/add-exam">Adicionar prova</Link>
      </div>
    </Container>
  );
}
