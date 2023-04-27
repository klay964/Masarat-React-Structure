import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const Context = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_KEY}products`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return <Context.Provider value={products}>{children}</Context.Provider>;
}

export default Context;
