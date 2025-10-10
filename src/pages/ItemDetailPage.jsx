// src/pages/ItemDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Esta URL base ya apunta a tu colección de productos. ¡Está bien!
    const apiUrl = 'https://68e96c50f1eeb3f856e3fed9.mockapi.io/products'; 

    // 2. En la petición fetch, solo añadimos el ID del item al final
    fetch(`${apiUrl}/${itemId}`) // <-- MIRA AQUÍ: CORREGIDO
      .then(response => {
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <p>Cargando detalle del producto...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: '400px', border: '1px solid #ddd', padding: '10px' }} />
      <h2>Precio: ${product.price}</h2>
      <p>Descripción detallada del producto {product.name}.</p>
    </div>
  );
};

export default ItemDetailPage;