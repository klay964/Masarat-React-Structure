import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetalis';
import ProductsTemplate from './pages/ProductsTemplates';
import ProductsLayout from './layout/ProductsLayout';
import { ProductsProvider } from './store';
import Login from './pages/Login';

function App() {
  return (
    <>
      <ProductsProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<ProductsLayout />}>
              <Route index element={<Products />} />
              <Route path=':id' element={<ProductDetails />} />
              <Route path='template' element={<ProductsTemplate />} />
            </Route>
            <Route path='/categories' element={<Categories />} />
          </Route>
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
