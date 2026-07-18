import { Link } from "react-router";
import { swiggyURL } from "../utils/constants";
import { restaurantsArr } from "../utils/mockData";
import RestaurantCard, { withDiscountLable } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useContext} from "react"
import HotelListContext from "../utils/HotelListContext";

const Body = () => {

  const {hotelList, setHotelList, setAllItems} = useContext(HotelListContext)

  const DiscountRestaurantCard =  withDiscountLable(RestaurantCard)
 
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


    setAllItems( data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,)
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
              {
                resObj?.info?.aggregatedDiscountInfoV3 ? <DiscountRestaurantCard resDetail={resObj?.info}/> : <RestaurantCard resDetail={resObj?.info} />
              }
              {" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
