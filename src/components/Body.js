import restaurantsMockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  //Local state variable
  const [listOfRestaurants,setListOfRestaurants] = useState(restaurantsMockData);
  return (
    <div className="body">
      <div className="filter"></div>
      <button
        className="filter=btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res)=>( 
            res.info.avgRating < 4));
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
