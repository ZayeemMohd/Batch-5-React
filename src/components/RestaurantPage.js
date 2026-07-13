import React from "react";
import { useParams } from "react-router";
import { MenuAPI } from "../utils/constants";
import { useEffect, useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const rawData = await fetch(MenuAPI + resId);
    const json = await rawData.json();
    console.log(json);
    setMenu(json);
  };

   if(menu === null){
    return <div>Loading...</div>
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;


 

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default RestaurantPage;
