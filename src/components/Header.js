import { logoURL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src={logoURL}
        />
      </div>

      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;