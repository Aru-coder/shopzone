import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1>Your Cart</h1>

        <p>Your cart is empty.</p>

        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Your Shopping Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.thumbnail}
            alt={item.title}
          />

          <div className="cart-info">
            <h3>{item.title}</h3>

            <p>Price : ${item.price}</p>

            <p>Quantity : {item.quantity}</p>

            <p>
              Subtotal : $
              {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="total">
        Total : ${totalPrice.toFixed(2)}
      </h2>

      <div className="cart-buttons">
        <button onClick={clearCart}>
          Clear Cart
        </button>

        <Link to="/checkout">
          <button>
            Proceed To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;