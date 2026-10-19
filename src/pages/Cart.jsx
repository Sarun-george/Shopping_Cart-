import { useState } from "react";

const Cart = () => {

    const [cart, setCart] = useState(['your cart is empty.']);

    

    return (
        <div className="cart-content">
            <div className="cart-header">
                <h1>Your Basket</h1>
            </div>
            <div className="cart-body">
                <p>{cart}</p>
            </div>
        </div>
    );
}

export default Cart;