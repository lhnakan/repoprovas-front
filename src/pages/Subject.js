import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import ListPreview from '../components/ListPreview';

export default function Subject() {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/subject/${id}`)
            .then(r => {
                setSubject(r.data)
            })
    }, [])


    if(!subject) return <img src='/images/loading.svg' /> ;

    return(
        <>
            <TestsContainer>
                <h1>Provas da disciplina {subject[0].subject}</h1>
                <ul>
                    {
                        subject 
                            ? (subject.map((e, i) => <ListPreview key={e.id} element={e} index={i} option='all'/>))
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