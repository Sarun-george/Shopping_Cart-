import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Find Your Next Favourite Thing.</h1>
          <p>
            Discover quality picks, everyday essentials, and little luxuries—all
            in one place.
          </p>
          <p>Shopping made simple, just for you.</p>
          <Link to="/shop">
            <button className="home-button">Shop Now</button>
          </Link>
        </div>
        <div className="home-image">
          <img
            src="/src/assets/images/antony-whittaker-WNIg1626eME-unsplash.jpg"
            alt="Shopping"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
