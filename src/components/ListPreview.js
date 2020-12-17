import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function ListPreview({ element, index, option }) {
    const history = useHistory();

    function defineRoute() {
        option === 'subjects' 
            ? history.push(`/subject/${element.id}`)
            : history.push(`/professor/${element.id}`)
    }

    if(option === 'all'){    
        let type;
        if(element.type === 1) type = 'P1';
        if(element.type === 2) type = 'P2';
        if(element.type === 3) type = 'P3';
        if(element.type === 4) type = 'P Substitutiva';
        if(element.type === 5) type = 'Exame Final';
    
        return(
            <a  href={element.link} target="_blank" key={`${element.link}${index}`}>
                <WithoutFilter>
                    <p>{element.name}</p>
                    <span>{element.subject}</span>
                    <span>{type}</span>
                    <span>{element.professor}</span>
                </WithoutFilter>
            </a>
        );

    } else {
        return(
            <Container onClick={defineRoute}>
                <p>{element.name}</p>
            </Container>
        );
    }
}

const Container = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;
`;

const WithoutFilter = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 20px 10px;
    
    * {
        width: 25%;
    }
`;