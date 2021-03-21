import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/globals';
import Header from './components/Header';
import Home from './pages/Home';
import Exams from './pages/Exams';
import Professor from './pages/Professor';
import Subject from './pages/Subject';
import NewExam from './pages/NewExam';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>                    
        <Route path="/" exact component={Home} />
        <Route path="/exams" component={Exams} />
        <Route path="/subject/:id" component={Subject} />
        <Route path="/professor/:id" component={Professor} />
        <Route path="/add-exam" component={NewExam} />
      </Switch>
    </Router>
  );
}
