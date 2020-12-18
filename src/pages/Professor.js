import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { ExamsContainer } from '../styles/ExamsListStyled';

import ListPreview from '../components/ListPreview';

export default function Professor() {
    const { id } = useParams();
    const [professor, setProfessor] = useState(null);
    const history = useHistory();
   
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/professor/${id}`)
            .then(r => {
                setProfessor(r.data)
            })
            .catch(err => {
                console.log(err);
                alert('Erro ao carregar as provas do professor, por favor tente novamente mais tarde.');
                history.push('/exams')
            })
    }, [])


    if(!professor) return <img src='/images/loading.svg' /> ;
    
    return(
        <>
            <ExamsContainer>
                <h1>Provas do(a) {professor[0].professor}</h1>
                <ul>
                    {professor.map((e, i) => <ListPreview key={e.id} element={e} index={i} option='all'/>)}
                </ul>
            </ExamsContainer>
        </>
    );
}