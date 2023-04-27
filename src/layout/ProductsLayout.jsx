import { Outlet } from 'react-router-dom';
export default function ProductsLayout() {
  return (
    <>
      <h1>Layout of Products</h1>
      <Outlet context={{ name: 'ahmed' }} />
    </>
  );
}
