import './CampoTexto.css';
import PropTypes from 'prop-types';

function CampoTexto(props) {
  const manejarCambio = (e) => {
    props.setValor(e.target.value);
  };
  const placeholderModificado = `${props.placeholder} .....`;

  return (
    <div className='campo-texto'>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
}

CampoTexto.propTypes = {
  titulo: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  valor: PropTypes.string,
  setValor: PropTypes.func,
};

export default CampoTexto;
