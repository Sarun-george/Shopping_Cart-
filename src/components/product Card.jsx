import { useEffect, useState } from "react";

const productCard = () => {
    const [product_title, setProduct_title] = useState(null);
    const [product_price, setProduct_price] = useState(null);
    const [product_image, setProduct_image] = useState(null);

     useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then((response) => setProduct_title(response[0].title))
  .then((response) => setProduct_price(response[0].price))
  .then((response) => setProduct_image(response[0].image))        
    .catch((error) => console.error(error));   
  }, []);


    return (
        <div className="product-card">
            <div className="product">
                <div className="product-image">
                     
                </div>
                <div className="product-info">

                </div>
            </div>
        </div>
    );
}

export default productCard;