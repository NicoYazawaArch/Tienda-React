// src/App.jsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // <-- NUEVO

  const handleLogin = () => setIsAuthenticated(true); // <-- NUEVO
  const handleLogout = () => setIsAuthenticated(false); // <-- NUEVO

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar 
        cartItemCount={cart.length} 
        isAuthenticated={isAuthenticated} 
        onLogout={handleLogout} 
      />

      <main className="main-container">
        <Routes>
          {/* Rutas Públicas */}
          <Route 
            path="/" 
            element={<ProductList onAddToCart={addToCart} />} 
          />
          <Route 
            path="/login" 
            element={<LoginPage onLogin={handleLogin} />} // <-- NUEVO
          />
          <Route 
            path="/item/:itemId" 
            element={<ItemDetailPage />} 
          />
          
          {/* Rutas Protegidas */}
          <Route 
            path="/cart"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CartPage cartItems={cart} />
              </ProtectedRoute>
            } // <-- MODIFICADO
          />
        </Routes>
      </main>
    </>
  );
}

export default App;