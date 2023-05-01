import './Header.css';
import header from '../../images/header.png';

function Header() {
  return (
    <header className='header'>
      <img src={header} alt='org' />
    </header>
  );
}

export default Header;
