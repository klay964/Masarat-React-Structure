import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetalis';
import ProductsTemplate from './pages/ProductsTemplates';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products/template' element={<ProductsTemplate />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
