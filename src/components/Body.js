import { restaurantsArr } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

const Body = () => {
  return (
    <div className="body">
      <Shimmer/>

      <div className="res-container">
        {/* {restaurantsArr.map((resObj) => {
          return <RestaurantCard resDetail={resObj} key={resObj.id} />;
        })} */}
      </div>
    </div>
  );
};

export default Body;
