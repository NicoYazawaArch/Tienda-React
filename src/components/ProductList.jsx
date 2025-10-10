// src/components/ProductList.jsx

import { useState, useEffect } from 'react'; // 1. Importa useState y useEffect
import ProductCard from './ProductCard';

// La prop 'onAddToCart' sigue llegando desde App.jsx
const ProductList = ({ onAddToCart }) => {
  // 2. Borramos mockProducts y creamos estados para guardar los productos, la carga y los errores
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. useEffect se ejecuta para llamar a la API cuando el componente se carga
  useEffect(() => {
    // Pega aquí la URL de tu MockAPI que termina en /productos (o /products)
    const apiUrl = 'https://68e96c50f1eeb3f856e3fed9.mockapi.io/products'; 

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data); // Guardamos los productos de la API en nuestro estado
      })
      .catch(error => {
        setError(error); // Guardamos el error si algo falla
      })
      .finally(() => {
        setLoading(false); // La carga termina (ya sea con éxito o con error)
      });
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez

  // 4. Mostramos mensajes de carga o error
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // 5. Si todo está bien, mostramos los productos del estado 'products'
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;