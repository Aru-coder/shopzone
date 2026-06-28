import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Login() {

  const { login } = useContext(CartContext);

  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/checkout");
  }

  return (
    <div className="login-box">

      <h1>Guest Login</h1>

      <p>
        Login to continue to checkout.
      </p>

      <button onClick={handleLogin}>
        Login as Guest
      </button>

    </div>
  );
}

export default Login;