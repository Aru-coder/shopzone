import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="product-details">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="details">

          <h2>{product.title}</h2>

          <h3 className="price">
            ${product.price}
          </h3>

          <p>{product.description}</p>

          <p>
            <strong>Category :</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Brand :</strong>{" "}
            {product.brand}
          </p>

          <p>
            <strong>Rating :</strong>{" "}
            ⭐ {product.rating}
          </p>

          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;