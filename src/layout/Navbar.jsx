import { Link } from 'react-router-dom';
import { links } from '../utils/data';
import BurgerMenu from '../assets/menu.png';
import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [error, setError] = useState(false);

  return (
    <header
      className={`bg-blue-200 border-2 ${
        error ? 'border-red-500' : 'border-s-gray-200'
      } flex justify-between items-center p-2`}
    >
      <div>LOGO</div>
      <nav className='hidden md:flex'>
        {links.map((link, i) => (
          <Link className='mx-2 md:block text-sm' to={link.link}>
            {link.name}
          </Link>
        ))}
        <button
          type='button'
          onClick={() => setIsDark(!isDark)}
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-xs px-2 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Default
        </button>
      </nav>
      <img
        className='block md:hidden'
        src={BurgerMenu}
        width={20}
        height={20}
        alt='buger menu'
      />{' '}
    </header>
  );
}
