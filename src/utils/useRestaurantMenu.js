import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestataurantMenu = (resId) => {
  //return restaurant information
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestataurantMenu;
