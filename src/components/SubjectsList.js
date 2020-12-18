import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ExamsContainer } from '../styles/ExamsListStyled';

import ListPreview from './ListPreview';

export default function SubjectsList() {
    const [subjects, setSubjects] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/subjects')
            .then(r => {
                setSubjects(r.data)
            })
            .catch(err => {
                console.log(err);
                alert('Erro ao filtrar por materias, por favor tente novamente mais tarde.');
                window.location.reload();
            })
    }, [])
    return(
        <ExamsContainer>
            <h1>Disciplinas cadastradas</h1>
            <ul>
                {subjects 
                    ? (subjects.map(s => <ListPreview key={s.id} element={s} option='subjects'/>))
                    : <li><img src='/images/loading.svg' /></li>
                }
            </ul>
        </ExamsContainer>
    );
}