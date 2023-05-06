import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC8hhumlPVpx0WHCCiuH4BDjwsLWVDYbH4',
  authDomain: 'todo-fbab6.firebaseapp.com',
  projectId: 'todo-fbab6',
  storageBucket: 'todo-fbab6.appspot.com',
  messagingSenderId: '513985988291',
  appId: '1:513985988291:web:113692545e5847c8968476',
  measurementId: 'G-YCWW6PCN3Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
