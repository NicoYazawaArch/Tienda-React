// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Si el usuario no está autenticado, lo redirigimos a /login
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, le dejamos ver el contenido (usando Outlet o children)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;