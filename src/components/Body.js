import { swiggyURL } from "../utils/constants";
import { restaurantsArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [hotelList, setHotelList] = useState(null);

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

  if(hotelList == null){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="res-container">
        {hotelList.map((resObj) => {
          return (
            <RestaurantCard resDetail={resObj?.info} key={resObj?.info?.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
