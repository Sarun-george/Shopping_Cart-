import Productcard from "../components/product Card";

function Shop() {
    return (
        <div className="shop-content">
            <div className="shop-header">
                <h1>Products</h1>
            </div>
            <div className="shop-products">
                <Productcard  addToCart={addToCart}/>
            </div>
        </div>
    );
}

export default Shop;