import './Header.css';
import header from '../../images/header.png';

function Header() {
  return (
    <header className='header'>
      <img src={header} alt='organization' />
    </header>
  );
}

export default Header;
