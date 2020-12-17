import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import ListPreview from '../components/ListPreview';

export default function Professor() {
    const { id } = useParams();
    const [professor, setProfessor] = useState(null);
    console.log(id)
    console.log(professor)
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/professor/${id}`)
            .then(r => {
                setProfessor(r.data)
            })
    }, [])


    if(!professor) return <img src='/images/loading.svg' /> ;
    
    return(
        <>
            <TestsContainer>
                <h1>Provas do(a) {professor[0].professor}</h1>
                <ul>
                    {professor.map((e, i) => <ListPreview key={e.id} element={e} index={i} option='all'/>)}
                </ul>
            </TestsContainer>
        </>
    );
}

const TestsContainer = styled.main`
    margin: 20px 10px;
    text-align: center;
`;