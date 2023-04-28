import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const naviagte = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_KEY}auth/login`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        naviagte('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-blue-400'>
      <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 '>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <h5 className='text-xl font-medium text-gray-900'>Log in</h5>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Your email
            </label>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Your password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              required
            />
          </div>
          <div className='flex items-start'></div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
}
