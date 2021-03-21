import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ExamsContainer from '../styles/ExamsListStyled';

import ListPreview from './ListPreview';

export default function ProfessorsList() {
  const [professors, setProfessors] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/professors')
      .then((r) => {
        setProfessors(r.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao filtrar por professores, por favor tente novamente mais tarde.');
        window.location.reload();
      });
  }, []);
  return (
    <ExamsContainer>
      <h1>Professores cadastrados</h1>
      <ul>
        {professors 
          ? (professors.map((p) => <ListPreview key={p.id} element={p} option="professors" />))
          : <li><img src="/images/loading.svg" alt="Loading circle" /></li>}
      </ul>
    </ExamsContainer>
  );
}
