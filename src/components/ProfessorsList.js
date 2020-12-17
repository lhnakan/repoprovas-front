import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ListPreview from './ListPreview';

export default function ProfessorsList() {
    const [professors, setProfessors] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/professors')
            .then(r => {
                setProfessors(r.data)
            })
    }, [])
    return(
        <>
            <TestsContainer>
                <h1>Professores cadastrados</h1>
                <ul>
                    {
                        professors 
                            ? (professors.map(p => <ListPreview key={p.id} element={p} option='professors' />))
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