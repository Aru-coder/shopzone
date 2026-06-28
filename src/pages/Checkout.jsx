import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const { cart, clearCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  function placeOrder() {
    alert("🎉 Order Placed Successfully!");
    clearCart();
  }

  return (
    <div className="container">

      <div className="checkout">

        <h1>Checkout</h1>

        <h3>Total Products : {cart.length}</h3>

        <h2>
          Total Amount : $
          {totalPrice.toFixed(2)}
        </h2>

        <button
          className="shop-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;