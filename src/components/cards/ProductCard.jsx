export default function ProductCard({ product }) {
  return (
    <>
      <div className='text-center text-sm w-60 bg-white border border-gray-200 rounded-lg shadow :bg-gray-800 :border-gray-700'>
        <a className='flex justify-center' href='/'>
          <img
            className='p-3 rounded-t-lg'
            src={product.image}
            width={100}
            height={100}
            alt='product'
          />
        </a>
        <div className='px-2 pb-5'>
          <a href='/'>
            <h5 className=' font-semibold tracking-tight text-gray-900 :text-white'>
              {product.title}
            </h5>
          </a>
          <div className='flex items-center mt-2.5 mb-5'>
            <svg
              aria-hidden='true'
              className='w-2 h-2 text-yellow-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>First star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-2 h-2 text-yellow-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Second star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-2 h-2 text-yellow-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Third star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-2 h-2 text-yellow-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Fourth star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <svg
              aria-hidden='true'
              className='w-2 h-2 text-yellow-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Fifth star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded :bg-blue-200 :text-blue-800 ml-3'>
              {product.rating.rate}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className=' font-bold text-gray-900 :text-white'>
              {product.price}$
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
