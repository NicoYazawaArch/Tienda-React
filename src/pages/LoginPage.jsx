// src/pages/LoginPage.jsx
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin(); // Llama a la función que viene de App.jsx
    navigate('/'); // Redirige al usuario a la página principal
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <p>Por favor, inicia sesión para continuar.</p>
      <button onClick={handleLoginClick}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginPage;