import React from 'react';


import { ClimaProvider } from './componentes/ClimaContext';
import ClimaActual from './componentes/ClimaActual';
import Navbar from './componentes/Navbar';
import './App.css';
export default function App() {

  return (
    <div>
      <ClimaProvider>
        <Navbar>HOLA</Navbar>
        <ClimaActual />
      </ClimaProvider>
    </div>
  )
}
