import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ itemList }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch and action to the cart data store
    dispatch(addItem(item));
  };
  return (
    <div>
      {itemList.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className=" border-gray-200 p-2 m-2 border-b-1 text-left flex
      justify-between"
          >
            <div className="w-9/12">
              <span className="py-2">{item.card.info.name}</span>
              <span className="">
                - Rs.
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-2 m-auto bg-white shadow-lg">
              <div className="absolute">
                <button
                  onClick={() => {
                    handleAddItem(item);
                  }}
                  className="absolute mx-2 bg-black text-white rounded-lg"
                >
                  Add +
                </button>
              </div>
              <div>
                <img
                  className="w-full"
                  src={CDN_URL + item.card.info.imageId}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
