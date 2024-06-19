import RestaurantCard, { withFreeDeliveryLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { SWIGGY_RES_LIST_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";
import User from "./User.js";
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

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("Set Interval from useEffect ");
    // }, 0.1);
    fetchRestaurants();
    // return () => {
    //   //this is like the unmounting like that in the class
    //   console.log("Cleaning up the Body component");
    //   console.log("Clening up the Set Interval from useEffect ");
    //   clearInterval(timer);
    // };
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>look like you are offline, pleae check your internet</h1>;
  }
  console.log("Rendering the Body component");

  const fetchRestaurants = async () => {
    const data = await fetch(SWIGGY_RES_LIST_URL);
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
  const RestaurantCardWithFreeDelivery = withFreeDeliveryLabel(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search"
            value={searchText}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>

          <input
            className="border border-solid border-black"
            type="text"
            onChange={(e) => {
              setLoggedInUser(e.target.value);
            }}
            placeholder="LoggedInUser"
            value={loggedInUser}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {true ? (
              <RestaurantCardWithFreeDelivery resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
