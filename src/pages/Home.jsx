import { useReducer } from 'react';

export default function Home() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increamnet':
        return { count: state.count + 1 };

      case 'decremnt':
        return { count: state.count - 1 };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button
        className='bg-red-400 border-2 rounded px-3'
        onClick={() => {
          dispatch({ type: 'increamnet' });
        }}
      >
        Increment
      </button>
      <button
        className='bg-red-400 border-2 rounded px-3'
        onClick={() => dispatch({ type: 'decremnt' })}
      >
        decrement
      </button>
      <div> this is count {state.count}</div>
    </>
  );
}
