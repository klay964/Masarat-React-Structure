import { Link, useNavigate } from 'react-router-dom';
import { links } from '../utils/data';
import BurgerMenu from '../assets/menu.png';
import { useState } from 'react';
import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

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
        <Button
          variant='contained'
          size='small'
          color='success'
          type='button'
          onClick={async () => {
            await signOut(auth)
              .then(() => {
                localStorage.removeItem('token');
                naviagte('/login');
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Logout
        </Button>
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
