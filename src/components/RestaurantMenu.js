import React from "react";
import { useParams } from "react-router";
import { MenuAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
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

  if (menu === null) {
    return <div>Loading...</div>;
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

  console.log(categories);

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

      {categories.map((category) => {
        console.log(category);
        return (
          <RestaurantCategory
            key={category.card.card.categoryId}
            categoryInfo={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
