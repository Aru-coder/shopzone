import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart, isLoggedIn, logout } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>🛍️ ShopZone</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">
          Cart
          {totalItems > 0 && (
            <span className="cart-badge">
              {totalItems}
            </span>
          )}
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/checkout">Checkout</Link>

            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;