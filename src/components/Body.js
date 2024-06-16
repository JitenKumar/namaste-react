import restaurantsMockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  //Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  // If no dependency array => useEffect is called on every render
  // if blankk dependency array => useEffect is called once on componet starting render
  // if anything put in the dependency array => useEffect will be called on change of that dependency

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set Interval from useEffect ");
    }, 0.1);
    fetchRestaurants();
    return () => {
      //this is like the unmounting like that in the class
      console.log("Cleaning up the Body component");
      console.log("Clening up the Set Interval from useEffect ");
      clearInterval(timer);
    };
  }, []);

  console.log("Rendering the Body component");

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const responseBody = json?.data;
    const updateRestaurants = responseBody.cards.filter((card) => {
      let cardInLine = card?.card?.card;
      return (
        cardInLine.id != undefined && cardInLine.id == "restaurant_grid_listing"
      );
    });
    const finalValue =
      updateRestaurants[0].card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(finalValue);
    setFilteredListOfRestaurants(finalValue);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredList != null && filteredList != undefined) {
      setFilteredListOfRestaurants(filteredList);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter"></div>
      <div className="search">
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search"
          value={searchText}
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      <button
        className="filter=btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredListOfRestaurants(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="res-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
