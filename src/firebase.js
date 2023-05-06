import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzL4ku2ciBeOobXhAkATfhQdTQ-cBeCgs',
  authDomain: 'todo-appli-c231b.firebaseapp.com',
  projectId: 'todo-appli-c231b',
  storageBucket: 'todo-appli-c231b.appspot.com',
  messagingSenderId: '663374326175',
  appId: '1:663374326175:web:4f6cde291828fa0c56b5aa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
