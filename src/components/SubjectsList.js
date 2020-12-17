import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ListPreview from './ListPreview';

export default function SubjectsList() {
    const [subjects, setSubjects] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/subjects')
            .then(r => {
                setSubjects(r.data)
            })
    }, [])
    return(
        <>
            <TestsContainer>
                <h1>Disciplinas cadastradas</h1>
                <ul>
                    {
                        subjects 
                            ? (subjects.map(s => <ListPreview key={s.id} element={s} option='subjects'/>))
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