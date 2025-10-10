// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ cartItemCount, isAuthenticated, onLogout }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>Tienda</Link>
      <div className={styles.links}>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/tecnologia">Tecnología</Link>
        <Link to="/categoria/ropa">Ropa</Link>
      </div>
      <div className={styles.actions}>
        <Link to="/cart" className={styles.cartLink}>🛒 Carrito ({cartItemCount})</Link>
        
        {/* Lógica para mostrar Login o Logout */}
        {isAuthenticated ? (
          <button onClick={onLogout} className={styles.authButton}>Cerrar Sesión</button>
        ) : (
          <Link to="/login" className={styles.authLink}>Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;