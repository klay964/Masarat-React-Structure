import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import ProductsLayout from './layout/ProductsLayout';
import { ProductsProvider } from './store';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Loading from './components/common/Loading';
import SignUp from './pages/SignUp';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetalis'));
const ProductsTemplate = lazy(() => import('./pages/ProductsTemplates'));
const Login = lazy(() => import('./pages/Login'));
const Categories = lazy(() => import('./pages/Categories'));

function App() {
  return (
    <>
      <ProductsProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

            <Route element={<ProtectedRoutes />}>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/products' element={<ProductsLayout />}>
                  <Route index element={<Products />} />
                  <Route path=':id' element={<ProductDetails />} />
                  <Route path='template' element={<ProductsTemplate />} />
                </Route>
                <Route path='/categories' element={<Categories />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </ProductsProvider>
    </>
  );
}

export default App;
