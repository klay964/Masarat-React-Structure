import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoutes() {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to='/login' />;
}
