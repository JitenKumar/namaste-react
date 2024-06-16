import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { id, name, avgRating, sla, cloudinaryImageId, costForTwo, cuisines } =
    props.resData;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{id}</h4>
    </div>
  );
};

export default RestaurantCard;
