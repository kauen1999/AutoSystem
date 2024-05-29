import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HighMainHome from './components/Dashboard/home/highMain.js';
import Cadastro from './components/auth/cadastro/Cadastro.js';
import Login from './components/auth/login/Login.js';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/dashboard" element={<HighMainHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
