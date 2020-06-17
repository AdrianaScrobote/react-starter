import React, {Component} from 'react';
import Header from './componentes/Header';
import './styles.css'
import Main from './pages/main'
import Routes from './routes'
import { Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
)

export default App;
