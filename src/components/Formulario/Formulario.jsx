import './Formulario.css';
import { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';
import PropTypes from 'prop-types'

function Formulario(props) {
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [foto, setFoto] = useState('');
  const [equipo, setEquipo] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(datosAEnviar);
  };

  return (
    <section className='formulario'>
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo='Nombre'
          placeholder='Ingresar nombre'
          required={true}
          valor={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo='Puesto'
          placeholder='Ingresar puesto'
          required={true}
          valor={puesto}
          setValor={setPuesto}
        />
        <CampoTexto
          titulo='Foto'
          placeholder='Ingresar enlace de foto'
          required={true}
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setValor={setEquipo}
          equipos={props.equipos} />
        <Boton texto='Crear' />
      </form>
    </section>
  );
}

Formulario.propTypes = {
  equipos: PropTypes.array,
}

export default Formulario;
