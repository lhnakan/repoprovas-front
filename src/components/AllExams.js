import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ListPreview from './ListPreview';

export default function AllExams() {
    const [examsList, setExamsList] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/exams')
            .then(r => {
                setExamsList(r.data)
            })
    }, [])
    return(
        <>
            <TestsContainer>
                <h1>Todos os arquivos disponiveis</h1>
                <ul>
                    {
                        examsList 
                            ? (examsList.map((e, i) => <ListPreview key={e.id} element={e} index={i} option='all'/>))
                            : <li><img src='/images/loading.svg' /></li>
                    }
                </ul>
            </TestsContainer>
        </>
    );
}

const TestsContainer = styled.main`
    margin: 20px 10px;
    text-align: center;
`;