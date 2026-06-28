import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>🛍️ Welcome to ShopZone</h1>

      <p>
        Discover amazing products at the best prices.
      </p>

      <Link to="/shop">
        <button className="shop-btn">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}

export default Home;