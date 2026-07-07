import { imgBaseURL } from "../utils/constants";

const RestaurantCard = ({ resDetail, extraDetail }) => {
  const {
    id,
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    imgId,
    location,
  } = resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`${imgBaseURL}${imgId}`}
        />
      </div>
      <h3 className="res-title">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐️ {avgRating} Stars</h4>
      <h4>
        {delieveryTime} mins | {costForTwo}
      </h4>
    </div>
  );
};


export default RestaurantCard;