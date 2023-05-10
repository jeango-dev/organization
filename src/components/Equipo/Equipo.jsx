import './Equipo.css';
import PropTypes from 'prop-types';
import Colaborador from '../Colaborador/Colaborador';

function Equipo(props) {
  // Destructuring
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  const backgroundColor = {
    backgroundColor: colorSecundario,
  };

  return (
    <section className='equipo' style={backgroundColor}>
      <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
      <div className='colaboradores'>
        <Colaborador />
        <Colaborador />
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  );
}

Equipo.propTypes = {
  datos: PropTypes.object,
};

export default Equipo;
