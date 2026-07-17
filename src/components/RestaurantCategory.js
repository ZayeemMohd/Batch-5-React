import React from "react";
import MenuItem from "./MenuItem";
import { useState } from "react";

const RestaurantCategory = ({ categoryInfo, order, setIndex, propData }) => {
  //   console.log("categoryinfo", categoryInfo);
  const { title, itemCards } = categoryInfo;



  let isOpen = order


  function toggleBody() {
    setIndex()
  }

  return (
    <div className="category-accordian ">
      <div className="category-header" onClick={toggleBody}>
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {isOpen ? (
        <div className="category-body">
          {itemCards.map((singleMenu) => {
            return (
              <MenuItem
                propData={propData}
                details={singleMenu.card.info}
                key={singleMenu.card.info.id}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
