// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    // Este es el 'div' principal que envuelve toda la tarjeta
    <div style={{
        border: '1px solid #444', 
        padding: '1rem', 
        margin: '1rem', 
        width: '200px', 
        backgroundColor: 'var(--color-superficie)', 
        borderRadius: '8px',
        color: 'var(--color-texto)'
      }}>
      
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      
      <Link to={`/item/${product.id}`} style={{ color: 'var(--color-blanco)'}}>
        <h4>{product.name}</h4>
      </Link>
      
      <p>${product.price}</p>
      
      <button 
        style={{ 
          backgroundColor: 'var(--color-primario)', 
          color: '#1a1a1a', 
          border: 'none', 
          padding: '8px 12px', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          fontWeight: 'bold' 
        }}
        onClick={() => onAddToCart(product)}
      >
        Agregar al carrito
      </button>

    </div> // Aquí se cierra el 'div' principal
  );
};

export default ProductCard;