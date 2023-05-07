import { useState, useEffect } from 'react';
import { db, storage } from '../firebase';
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [image, setImage] = useState('');

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
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(collection(db, 'tasks'), {
              name,
              phone,
              image: downloadURL,
            });
          });
        }
      );
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
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='file'
        className='border-2 border-red-400'
        onChange={(e) => setImage(e.target.files[0])}
      />

      {tasks.map((task) => (
        <div className='bg-red-200 my-3'>
          <ul>
            <li>Name:{task.name}</li>
            <li>Task:{task.task}</li>
            <img src={task.image} alt='task' width={50} height={50} />
          </ul>
        </div>
      ))}

      <button className='bg-blue-500 p-3 block' onClick={handleSubmit}>
        add task
      </button>
    </>
  );
}
