import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';

import { Forms, Input, Button } from './NewExamStyled';

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
  const history = useHistory();

  function attSubjects(id) {
    setProfessor(id);
        
    if (!oneOrOther) {
      setOneOrOther(true);

      axios.post('http://localhost:3000/api/v1/professorsubjects', { id })
        .then((r) => {
          setSubject(r.data);
        });
    }
  }

  function attProfessors(id) {
    setSubject(id);
        
    if (!oneOrOther) {
      setOneOrOther(true);

      axios.post('http://localhost:3000/api/v1/subjectprofessors', { id })
        .then((r) => {
          setProfessor(r.data);
        });
    }
  }
    
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/data')
      .then((r) => {
        setAllSubjects(r.data.subjects);
        setAllProfessors(r.data.professors);
        setSemester(r.data.semesters);
        setType(r.data.examTypes);
        setYears(r.data.years);
      })
      .catch((err) => {
        console.log(err);
        alert('Erro de conexao com servidor, tente novamente mais tarde.');
        history.push('/');
      });
  }, []);

  function sendNewExam(e) {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    if (
      !url
            || !subject || subject.length > 1
            || !professor || professor.length > 1
            || semester.length > 1
            || years.length > 1
            || type.length > 1
    ) {
      alert('Por favor preencha todos os campos.');
      setLoading(false);
      return;
    }

    const body = {
      url, 
      subject, 
      professor, 
      semester, 
      years,
      type,
    };
    axios.post('http://localhost:3000/api/v1/new-exam', body)
      .then(() => {
        alert('Prova enviada com sucesso! Obrigado por contribuir.');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Erro ao postar a prova, por favor tente denovo.');
        setLoading(false);
        window.location.reload();
      });
  }

  return (
    <Forms onSubmit={sendNewExam}>
      <Input 
        typeof="url" 
        placeholder="Insira o link para o PDF..." 
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <Select
        options={years}
        onChange={(e) => setYears(e.value)}
        placeholder="Selecione o ano da prova..."
      />
      <Select
        options={semester}
        onChange={(e) => setSemester(e.value)}
        placeholder="Selecione o semestre..."
      />
      <Select
        options={subject || allSubjects}
        onChange={(e) => attProfessors(e.value)}
        placeholder="Selecione uma materia..."
      />
      <Select
        options={professor || allProfessors}
        onChange={(e) => attSubjects(e.value)}
        placeholder="Selecione um(a) professor..."
      />
      <Select
        options={type}
        onChange={(e) => setType(e.value)}
        placeholder="Selecione o tipo da prova..."
      />
      <Button type="submit">Enviar prova</Button>
    </Forms>
  );
}
