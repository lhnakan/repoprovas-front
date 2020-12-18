import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { ExamsContainer } from '../styles/ExamsListStyled';

import ListPreview from './ListPreview';

export default function AllExams() {
    const [examsList, setExamsList] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/exams')
            .then(r => {
                setExamsList(r.data)
            })
            .catch(err => {
                console.log(err);
                alert('Erro ao carregar as provas, tente novamente mais tarde.');
                history.push('/')
            })
    }, [])
    return(
        <>
            <ExamsContainer>
                <h1>Todos os arquivos disponiveis</h1>
                <ul>
                    {
                        examsList 
                            ? (examsList.map((e, i) => <ListPreview key={e.id} element={e} index={i} option='all'/>))
                            : <li><img src='/images/loading.svg' /></li>
                    }
                </ul>
            </ExamsContainer>
        </>
    );
}