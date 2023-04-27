import { useReducer, useContext } from 'react';
import Context from '../store';

export default function Home() {
  const products = useContext(Context);

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
  console.log('Products in Home Page', products);

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
