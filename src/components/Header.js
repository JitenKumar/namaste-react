import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const handleLoginClick = () => {
    loginBtnName === "Login"
      ? setLoginBtnName("Logout")
      : setLoginBtnName("Login");
  };
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg mb-2 bg-slate-100 sticky top-0 w-full p-4 text-center text-lg ">
      <div className="logo">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">
              <div className="px-4 flex">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=44050&format=png&color=000000"
                />
                ({cartItems.length} items)
              </div>
            </Link>
          </li>
          <li className="px-4">
            <button onClick={handleLoginClick} className="login-btn">
              {loginBtnName}
            </button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
