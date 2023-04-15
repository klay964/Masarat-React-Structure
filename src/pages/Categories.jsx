import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoriesList from '../components/categories/CategoriesList';
import ProductsList from '../components/products/ProductsList';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [catName, setCatName] = useState('jewelery');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}products/categories`)
      .then((response) => {
        setCategories(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}products/category/${catName}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [catName]);

  return (
    <>
      <h1 className='text-center text-blue-400 my-5'>Categories</h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {categories.length > 0 && (
          <CategoriesList setCatName={setCatName} categories={categories} />
        )}
      </div>
      <div>
        <h1>Product of {catName}</h1>
        {products && <ProductsList products={products} />}
      </div>
    </>
  );
}
