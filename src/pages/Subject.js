import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ExamsContainer } from '../styles/ExamsListStyled';

import ListPreview from '../components/ListPreview';

export default function Subject() {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/subject/${id}`)
            .then(r => {
                setSubject(r.data)
            })
            .catch(err => {
                console.log(err);
                alert('Erro ao carregar as provas da materia, por favor tente novamente mais tarde.');
                history.push('/exams')
            })
    }, [])


    if(!subject) return <img src='/images/loading.svg' /> ;

    return(
        <ExamsContainer>
            <h1>Provas da disciplina {subject[0].subject}</h1>
            <ul>
                {subject 
                    ? (subject.map((e, i) => <ListPreview key={e.id} element={e} index={i} option='all'/>))
                    : <li><img src='/images/loading.svg' /></li>
                }
            </ul>
        </ExamsContainer>
    );
}