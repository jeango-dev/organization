import './ListaOpciones.css';
import PropTypes from 'prop-types';

function ListaOpciones(props) {

  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };

  return (
    <div className='lista-opciones'>
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value='' disabled defaultValue='' hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
}

ListaOpciones.propTypes = {
  valor: PropTypes.string,
  setValor: PropTypes.func,
  equipos: PropTypes.array,
};

export default ListaOpciones;
