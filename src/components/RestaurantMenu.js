import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestataurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestataurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo == null) return <Shimmer />;
  const { name, avgRatingString, costForTwoMessage, cuisines, areaName } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(categories);
  return (
    <div className="res-menu text-center">
      <h1 className="font-bold m-2 text-2xl">{name}</h1>
      <h2 className="text-xl">
        {cuisines.join(", ")} {"- " + costForTwoMessage}
      </h2>
      <h2>
        {avgRatingString} {areaName}
      </h2>
      {categories.map((category, index) => {
        //controller component that control RestaurantCategory
        return (
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          ></RestaurantCategory>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
