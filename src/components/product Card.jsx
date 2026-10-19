import { useEffect, useState } from "react";
import Product_Counter from "./product counter";

const productCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-card">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-image">
            {product && <img src={product.image} alt={product.title} />}
          </div>
          <div className="product-info">
            <p className="product-title">{product?.title}</p>
            <p className="product-price">${product?.price.toFixed(2)}</p>
          </div>
          <Product_Counter />
          <div className="product-cart">
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default productCard;
