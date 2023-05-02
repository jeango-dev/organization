import './CampoTexto.css';
import PropTypes from 'prop-types';

function CampoTexto(props) {
  const placeholderModificado = `${props.placeholder} .....`;

  return (
    <div className='campo-texto'>
      <label>{props.titulo}</label>
      <input placeholder={placeholderModificado} required={props.required} />
    </div>
  );
}

CampoTexto.propTypes = {
  titulo: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default CampoTexto;
