import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const ref = useRef(0);

  useEffect(() => {
    ref.current++;
  });
  return (
    <>
      <div>component render {ref.current} times</div>
      <button
        className='bg-red-400 border-2 rounded px-3'
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        click
      </button>
      <div> this is count {count}</div>
    </>
  );
}
