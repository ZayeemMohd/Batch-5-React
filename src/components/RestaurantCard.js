import { imgBaseURL } from "../utils/constants";

const RestaurantCard = ({ resDetail, extraDetail }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
    areaName,
  } = resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`${imgBaseURL}${cloudinaryImageId}`}
        />
      </div>
      <h3 className="res-title">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐️ {avgRating} Stars</h4>
      <h4>
        {sla.delieveryTime} mins | {costForTwo}
      </h4>
      <h4>📍{areaName}</h4>
    </div>
  );
};

export const withDiscountLable = (RestaurantCard) => {
  function newComponent({ resDetail }) {
    return (
      <div>
        <label>Discount</label>
        <RestaurantCard resDetail={resDetail} />
      </div>
    );
  }

  return newComponent;
};

export default RestaurantCard;
