import React from "react";
import { useParams } from "react-router";
import { MenuAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";
import { Shimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const impData = "dummy abc"

  const { resId } = useParams();

  // const [isOpen, setIsOpen] = useState(true);
  const [showIndex, setShowIndex] = useState(1);

  const menu = useRestaurantMenu(resId);

  if (menu === null) {
    return <Shimmer />;
  }

  const categories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        if (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return true;
        } else {
          return false;
        }
      },
    );

  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div
      style={{
        paddingLeft: "340px",
        paddingTop: "100px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
      <RestaurantMenuInfoCard menu={menu} />

      {categories.map((category, index) => {
        console.log(category);
        return (
          <RestaurantCategory
            propData={impData}
            setIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
            order={index === showIndex ? true : false}
            key={category.card.card.categoryId}
            categoryInfo={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
