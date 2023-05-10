import './MiOrg.css';
import add from '../../images/add.png';
import PropTypes from 'prop-types';

function MiOrg(props) {
  return (
    <section className='orgSection'>
      <h3 className='title'>Mi Organización</h3>
      <img src={add} alt='add' onClick={props.cambiarMostrar} />
    </section>
  );
}

MiOrg.propTypes = {
  cambiarMostrar: PropTypes.func,
};

export default MiOrg;
