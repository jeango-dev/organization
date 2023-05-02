import './Boton.css';
import PropTypes from 'prop-types';

function Boton(props) {
  return (
    <div>
      <button className='boton'>{props.texto}</button>
    </div>
  );
}

Boton.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Boton;
