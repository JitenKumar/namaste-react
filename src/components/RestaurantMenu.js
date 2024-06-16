import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenuInfo, setResMenuInfo] = useState([]);
  const { resId } = useParams();
  const fetchRestaurantData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    const resMetaInfo = json?.data?.cards[2]?.card.card.info;
    setResInfo(resMetaInfo);
    // const resMenuInfo =
    //   json?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // setResMenuInfo(resMenuInfo);
  };
  if (resInfo == null) return <Shimmer />;
  const { name, avgRatingString, costForTwoMessage, cuisines, areaName } =
    resInfo;
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  //console.log(sla);
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h2>{avgRatingString}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{cuisines}</h2>
      <h2>{areaName}</h2>
    </div>
  );
};

export default RestaurantMenu;
