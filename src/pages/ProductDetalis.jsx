import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, []);
  return (
    <>
      <h1>Product Detalis</h1>
      <h2>{product.title}</h2>
      <img src={product.image} alt='product detalis' width={100} height={100} />
      <p>{product.description}</p>
    </>
  );
}
