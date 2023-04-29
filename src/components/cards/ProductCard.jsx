import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Rating from '@mui/material/Rating';

export default function ProductCard({ product }) {
  return (
    <>
      <div className='text-center text-sm w-60 bg-white border border-gray-200 rounded-lg shadow :bg-gray-800 :border-gray-700'>
        <a className='flex justify-center' href='/'>
          <LazyLoadImage
            effect='blur'
            className='p-3 rounded-t-lg'
            alt='product'
            width={100}
            height={100}
            src={product.image}
          />
        </a>
        <div className='px-2 pb-5'>
          <a href='/'>
            <h5 className=' font-semibold tracking-tight text-gray-900 :text-white'>
              {product.title}
            </h5>
          </a>
          <div className='flex items-center mt-2.5 mb-5'>
            <Rating
              name='simple-controlled'
              readOnly
              value={product.rating.rate}
            />
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded :bg-blue-200 :text-blue-800 ml-3'>
              {product.rating.rate}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className=' font-bold text-gray-900 :text-white'>
              {product.price}$
            </span>
          </div>
          <Link
            className='bg-red-200 border rounded p-2 hover:bg-red-500'
            to={`/products/${product.id}`}
          >
            Detalis
          </Link>
        </div>
      </div>
    </>
  );
}
