import { useContext } from 'react';
import ProductsList from '../components/products/ProductsList';
import Context from '../store';

export default function Products() {
  const products = useContext(Context);
  return (
    <>
      <h1 className='text-center text-blue-400 my-5'>Our Products</h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {products.length > 0 && <ProductsList products={products} />}
      </div>
    </>
  );
}
