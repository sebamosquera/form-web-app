import React, {useState, createContext, useEffect } from 'react';
import './formulario.css'

// Poi: Point of interest (Marcador)
const Formulario = () => {

    const marker1 = {
      "Nombre": "B",
      "Direccion": "A",
      "Telefono": 154475,
      "coordenadas": {"x":150,"y":100},
    }
    const [ newMarker, setNewMarker ] = useState(marker1);

    const handleChange = (e) => {
      let updatedValue = {};
      updatedValue = {[e.target.name]:e.target.value};
      setNewMarker(newMarker => ({
         ...newMarker,
         ...updatedValue
       }));
     }

    const submitMarker = (e) => {
        console.log(newMarker);
        e.preventDefault();
    }

    const isValidInput = () => {
      // chequear que no este vacio
      // chequear tipos de datos
      return true;
    }

    const clearForm = () => {
        setNewMarker(marker1);
    }

    return(
      <div className="form-container">
        <form onSubmit={(e) => {
            if(isValidInput()) {
              submitMarker(e);
              clearForm();
            }
        }}>
          <label>Nombre</label>
          <input
            className='add-form-control'
            placeholder='ej: Aeroterra'
            name="Nombre"
            onChange={(e) => handleChange(e)}
            type='text'>
          </input>
          <label>Direccion</label>
          <input
            className='add-form-control'
            placeholder='ej: Av. Madero'
            name='Direccion'
            onChange={(e) => handleChange(e)}
            type='text'>
          </input>
          <label>Telefono</label>
          <input
            className='add-form-control'
            placeholder='ej: 54 011 5272 0900'
            name='Telefono'
            onChange={(e) => handleChange(e)}
            type='text'>
          </input>
          <label>Categoria</label>
          <input
            className='add-form-control'
            placeholder='seleccionar'
            name="Categoria"
            onChange={(e) => handleChange(e)}
            type='text'>
          </input>
          <label>Coordenadas</label>
          <input
            className='add-form-control'
            placeholder='coordenadas'
            name='coordenadas'
            onChange={(e) => handleChange(e)}
            type='text'>
          </input>
          <button
            className='add-form-control'
            tpye='submit'>Agregar</button>
        </form>
      </div>
    );
};

export default Formulario;
