import { Link } from 'react-router-dom';
import { links } from '../utils/data';
import BurgerMenu from '../assets/menu.png';

export default function Navbar() {
  return (
    <header className='navbar'>
      <div>LOGO</div>
      <nav className='nav-links'>
        {links.map((link, i) => (
          <Link className='nav-links' to={link.link}>
            {link.name}
          </Link>
        ))}
      </nav>
      <img
        className='burger'
        src={BurgerMenu}
        width={20}
        height={20}
        alt='buger menu'
      />{' '}
    </header>
  );
}
