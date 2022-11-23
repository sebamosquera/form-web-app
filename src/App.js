import './App.css';
import React from 'react';
import Formulario from './Formulario/formulario';
import Marcador from './Marcador/marcador';
import Mapa from './Mapa/mapa';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Formulario />
        <Marcador />
        <Mapa className="map-div"/>
      </header>
    </div>
  );
}

export default App;
