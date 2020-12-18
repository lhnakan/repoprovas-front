import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import axios from 'axios';

export default function NewExam() {
    const [allSubjects, setAllSubjects] = useState([]);
    const [allProfessors, setAllProfessors] = useState([]);
    const [type, setType] = useState([]);
    const [semester, setSemester] = useState([]);
    const [years, setYears] = useState([]);
    const [url, setUrl] = useState('');
    const [subject, setSubject] = useState(null);
    const [professor, setProfessor] = useState(null);
    const [oneOrOther, setOneOrOther] = useState(false);
    const [loading, setLoading] = useState(false);

    function attSubjects(id) {
        setProfessor(id)
        
        if(!oneOrOther){
            setOneOrOther(true);

            axios.post('http://localhost:3000/api/v1/professorsubjects', { id })
                .then(r => {
                    setSubject(r.data)
                })
        }
    }

    function attProfessors(id) {
        setSubject(id)
        
        if(!oneOrOther){
            setOneOrOther(true);

            axios.post('http://localhost:3000/api/v1/subjectprofessors', { id })
            .then(r => {
                setProfessor(r.data)
            })
        }
    }
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/data')
            .then(r => {
                setAllSubjects(r.data.subjects)
                setAllProfessors(r.data.professors)
                setSemester(r.data.semesters)
                setType(r.data.examTypes)
                setYears(r.data.years)
            })
    }, [])

    function sendNewExam(e) {
        e.preventDefault();

        if (loading) return;
        setLoading(true);

        const body = {
            url, 
            subject, 
            professor, 
            semester, 
            years,
            type
        }
        axios.post('http://localhost:3000/api/v1/new-exam', body)
            .then(r => {
                alert(r.data.name)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <Forms onSubmit={sendNewExam}>
            <input 
                typeof='url' 
                placeholder='Insira o link para o PDF...' 
                onChange={e => setUrl(e.target.value)}
                value={url}
            />
            <div>
                <Select
                    options={years}
                    onChange={e => setYears(e.value)}
                    placeholder='Selecione o ano da prova...'
                />
            </div>
            <div>
                <Select
                    options={semester}
                    onChange={e => setSemester(e.value)}
                    placeholder='Selecione o semestre...'
                />
            </div>
            <div>
                <Select
                    options={subject ? subject : allSubjects}
                    onChange={e => attProfessors(e.value)}
                    placeholder='Selecione uma materia...'
                />
            </div>
            <div>
                <Select
                    options={professor ? professor : allProfessors}
                    onChange={e => attSubjects(e.value)}
                    placeholder='Selecione um(a) professor...'
                />
            </div>
            <div>
                <Select
                    options={type}
                    onChange={e => setType(e.value)}
                    placeholder='Selecione o tipo da prova...'
                />
            </div>
            <button typeof='submit'>Enviar Prova</button>
        </Forms>
    );
}

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        color: black;
        width: 50%;
        margin: 10px;
    }
    & > input, button {
        padding: 4px 8px;
        border-radius: 5px;
        font-size: 16px;
        height: 38px;
    }

    
`;