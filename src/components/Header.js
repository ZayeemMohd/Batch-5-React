import { Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { logoURL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const data = useContext(UserContext);

  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="header-logo" src={logoURL} />
        </div>
      </Link>

      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          {isOnline ? (
            <li> 🟢 Online </li>
          ) : (
            <li className="red"> 🛑 Offline </li>
          )}

          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About us</Link>{" "}
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>{data.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
