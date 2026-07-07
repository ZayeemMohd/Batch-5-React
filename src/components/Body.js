import { restaurantsArr,  } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard"



const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {restaurantsArr.map((resObj) => {
          return <RestaurantCard resDetail={resObj} key={resObj.id}/>;
        })}
      </div>
    </div>
  );
};

export default Body;