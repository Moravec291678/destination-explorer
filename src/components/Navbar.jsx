import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";
function Navbar({ searchDestination, wishlistCounter }) {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>Domu</li>
          </Link>
          <Link to="/wishlist">
            <li>
              Whishlist {wishlistCounter > 0 && <span className="wishlistCount">{wishlistCounter}</span>}
            </li>
          </Link>
        </ul>
        <SearchBar searchDestination={searchDestination} />
      </nav>
    </>
  );
}

export default Navbar;
