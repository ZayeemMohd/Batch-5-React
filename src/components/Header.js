import { Link } from "react-router";
import {useState, useEffect} from 'react'
import { logoURL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  
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
          {isOnline ?  <li> 🟢 Online </li> : <li> 🛑 Offline </li>}
         
          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
