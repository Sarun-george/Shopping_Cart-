import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h1>Dale's Kart</h1></Link>
      </div>
      <div className="navbar-links">
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>

        

    </div>
  );
}

export default Navbar;
