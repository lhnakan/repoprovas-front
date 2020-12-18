import React, { useState } from 'react';
import Select from 'react-select';

import { Container, Filter } from './ExamsStyled'

import AllExams from '../../components/AllExams';
import ProfessorsList from '../../components/ProfessorsList';
import SubjectsList from '../../components/SubjectsList';

const options = [
    { value: 'all', label: 'Todas as provas' },
    { value: 'professors', label: 'Professores' },
    { value: 'subjects', label: 'Materias' }
]

export default function Tests() {
    const [filter, setFilter] = useState('all');

    return(
        <Container>
            <Filter>
                <h2>Selecione como deseja filtrar :</h2>
                <Select 
                    options={options} 
                    onChange={e => setFilter(e.value)}
                    defaultValue={options[0]}
                />
            </Filter>

            {filter === 'subjects' 
                ? <SubjectsList /> 
                : (filter === 'all' ? <AllExams /> : <ProfessorsList />)
            }
        </Container>
    );
}