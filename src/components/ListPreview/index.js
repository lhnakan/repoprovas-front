import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from './ListStyled';

export default function ListPreview({ element, index, option }) {
  const history = useHistory();
    
  function defineRoute() {
    if (option === 'subjects') history.push(`/subject/${element.id}`);
    else history.push(`/professor/${element.id}`);
  }

  if (option === 'all') {    
    return (
      <a href={element.link} target="_blank" rel="noreferrer" key={`${element.link}${index}`}>
        <Container option={option}>
          <p>{element.name}</p>
          <span>{element.subject}</span>
          <span>{element.type}</span>
          <span>{element.professor}</span>
        </Container>
      </a>
    );
  } if (option === 'subjects') {
    return (
      <Container option={option} onClick={defineRoute}>
        <p>{element.name}</p>
        <p>
          {element.term}
          º termo
        </p>
      </Container>
    );
  } 
  return (
    <Container option={option} onClick={defineRoute}>
      <p>{element.name}</p>
    </Container>
  );
}
