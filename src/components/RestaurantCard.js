import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { id, name, avgRating, sla, cloudinaryImageId, costForTwo, cuisines } =
    props.resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Restaurant Id : {id}</h4>
    </div>
  );
};

export const withFreeDeliveryLabel = (RestaurantCard) => {
  // takes somethng and return a function
  return (props) => {
    return (
      <div>
        <label className="absolute m-4 p-4 bg-red-300 text-black">
          One Free Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
