import React from "react";
import { imgBaseURL } from "../utils/constants";

const RestaurantMenuInfoCard = ({ menu }) => {
  console.log("adsfsdf", menu?.data?.cards[2]?.card?.card?.info);
  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <div className="menu-info-div">
        <h1>{name}</h1>
        <img className="menu-info-img" src={imgBaseURL + cloudinaryImageId} />
        <h3>
          🌟 {avgRatingString} ({totalRatingsString})
        </h3>
        <h3>{cuisines?.join(", ")}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenuInfoCard;
