import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
} from 'firebase/firestore';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState([]);
  const [task, setTask] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'tasks'));
    onSnapshot(q, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(collection(db, 'tasks'), {
        name: name,
        task: task,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>tasks</h1>
      <label>Name</label>
      <input
        className='border-2 border-red-400'
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Task</label>

      <input
        type='text'
        className='border-2 border-red-400'
        name='task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {tasks.map((task) => (
        <div className='bg-red-200 my-3'>
          <ul>
            <li>Name:{task.name}</li>
            <li>Task:{task.task}</li>
          </ul>
        </div>
      ))}

      <button className='bg-blue-500 p-3 block' onClick={handleSubmit}>
        add task
      </button>
    </>
  );
}
