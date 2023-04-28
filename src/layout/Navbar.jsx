import { Link, useNavigate } from 'react-router-dom';
import { links } from '../utils/data';
import BurgerMenu from '../assets/menu.png';
import { useState } from 'react';

export default function Navbar() {
  const [error] = useState(false);
  const naviagte = useNavigate();

  return (
    <header
      className={`bg-blue-200 border-2 ${
        error ? 'border-red-500' : 'border-s-gray-200'
      } flex justify-between items-center p-2`}
    >
      <div>LOGO</div>
      <nav className='hidden md:flex'>
        {links.map((link, i) => (
          <Link key={i} className='mx-2 md:block text-sm' to={link.link}>
            {link.name}
          </Link>
        ))}
        <button
          type='button'
          onClick={() => {
            localStorage.removeItem('token');
            naviagte('/login');
          }}
          className='text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-xs px-2 py-1 mr-2 mb-2 '
        >
          Logout
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
