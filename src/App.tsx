import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login';
import SobreOProjeto from './paginas/SobreOProjeto/SobreOProjeto'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {  
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<SobreOProjeto />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
        </Routes>
      </div>
    <Footer />
  </Router>
  );
}

export default App;
