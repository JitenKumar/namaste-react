import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title } = data;
  const length = data?.itemCards.length;
  const handleMenuItemClick = (e) => {
    setShowIndex();
  };
  return (
    <div className="res-accordian w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between" onClick={handleMenuItemClick}>
        <span className="font-bold text-lg">{title + " (" + length + ")"}</span>
        <span>⬇</span>
      </div>
      {showItems && <ItemList itemList={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
