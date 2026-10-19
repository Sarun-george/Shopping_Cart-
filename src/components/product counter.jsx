import { useState } from "react";

const Product_Counter = () => {
  const [quanity, setQuantity] = useState(1);

  function Incrementcounter() {
    setQuantity(quanity + 1);
  }

  function Decrementcounter() {
    if (quanity > 1) {
      setQuantity(quanity - 1);
    }
  }

  return (
    <div>
      <div className="product-count">
        <button onClick={Decrementcounter}>-</button>
        <p id="counting">{quanity}</p>
        <button onClick={Incrementcounter}>+</button>
      </div>
    </div>
  );
};

export default Product_Counter;
