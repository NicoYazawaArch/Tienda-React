// src/pages/CartPage.jsx

const CartPage = ({ cartItems }) => { // 1. Recibimos los items del carrito como una prop
  
  // Opcional: Calcular el total
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Carrito de Compras</h1>

      {/* 2. Verificamos si el carrito está vacío */}
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {/* 3. Si no está vacío, usamos .map() para mostrar cada producto */}
          {cartItems.map((item) => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          
          {/* Mostramos el total */}
          <h3 style={{marginTop: '20px'}}>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;