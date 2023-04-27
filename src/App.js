import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetalis';
import ProductsTemplate from './pages/ProductsTemplates';
import ProductsLayout from './layout/ProductsLayout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductDetails />} />
            <Route path='template' element={<ProductsTemplate />} />
          </Route>

          <Route path='/categories' element={<Categories />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
