import { Link } from "react-router";
import { swiggyURL } from "../utils/constants";
import { restaurantsArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [hotelList, setHotelList] = useState(null);
  // const [Count, setCount] = useState(second)

  const isOnline = useOnlineStatus();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();
    console.log(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    console.log("hotel list", hotelList);
  };

  if (!isOnline) {
    return (
      <div className="body">
        <h1 style={{ padding: "10vh 1.5rem", textAlign: "center" }}>
          🔴 You are offline. Please check your internet connection.
        </h1>
      </div>
    );
  }

  if (hotelList == null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="res-container">
        {hotelList.map((resObj) => {
          return (
            <Link to={`/restaurant/${resObj?.info?.id}`} key={resObj?.info?.id}>
              {" "}
              <RestaurantCard resDetail={resObj?.info} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
