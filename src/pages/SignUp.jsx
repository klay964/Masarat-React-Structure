import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const naviagte = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCreditals) => {
        const user = userCreditals.user;
        sendEmailVerification(user);
        alert('we sent u email please verify ur email address');
        naviagte('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex justify-center items-center h-screen bg-blue-400'>
      <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 '>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <h5 className='text-xl font-medium text-gray-900'>Sign Up</h5>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 '
            >
              Your email
            </label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            SignUp{' '}
          </button>
        </form>
      </div>
    </div>
  );
}
