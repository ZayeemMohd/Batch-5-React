import { Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { logoURL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import HotelListContext from "../utils/HotelListContext";

const Header = () => {
  const data = useContext(UserContext);

  const { hotelList, setHotelList, allItems } = useContext(HotelListContext);

  const [filterToggle, setFilterToggle] = useState(false);

  function setFilter() {
    console.log("button clicked and setfilter function called");
    // setHotelList(null)

    if (!filterToggle) {
      const filteredArray = hotelList.filter((restaurant) => {
        if (restaurant.info.avgRating > 4.3) {
          return true;
        } else {
          return false;
        }
      });

      setHotelList(filteredArray);
      setFilterToggle(!filterToggle);
    } else {
      setHotelList(allItems);
      setFilterToggle(!filterToggle);
    }
  }

  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="header-logo" src={logoURL} />
        </div>
      </Link>

      <div className="search-bar">
        <input
          placeholder="Search For Restaurants and Food"
          onChange={(e) => {
            // console.log(e.target.value);
            const filteredList = allItems.filter((restaurant) => {
              if (
                restaurant.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase()) == true
              ) {
                return true;
              } else {
                return false;
              }
            });
            setHotelList(filteredList);
          }}
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <button className="filter-btn " onClick={setFilter}>
              {filterToggle
                ? "Show All Restaurants"
                : "Filter Top Rated Restaurants"}
            </button>
          </li>

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
