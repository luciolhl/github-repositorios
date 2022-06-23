import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main/index';
import Repositorio from './pages/Repositorio';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
          <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/repositorio/:repositorio" element={<Repositorio/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
