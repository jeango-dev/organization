import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import Boton from '../Boton/Boton';

function Formulario() {
  const manejarEnvio = (e) => {
    e.preventDefault();
  };

  return (
    <section className='formulario'>
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulo='Nombre'
          placeholder='Ingresar nombre'
          required={true}
        />
        <CampoTexto
          titulo='Puesto'
          placeholder='Ingresar puesto'
          required={true}
        />
        <CampoTexto
          titulo='Foto'
          placeholder='Ingresar enlace de foto'
          required={true}
        />
        <ListaOpciones />
        <Boton texto='Crear' />
      </form>
    </section>
  );
}

export default Formulario;
