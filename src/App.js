import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layout';
import Products from './pages/Products';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
