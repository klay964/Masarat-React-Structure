import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsList from '../components/products/ProductsList';
import { useOutletContext } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_KEY}products`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <h1 className='text-center text-blue-400 my-5'>Our Products</h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {products.length > 0 && <ProductsList products={products} />}
      </div>
    </>
  );
}
