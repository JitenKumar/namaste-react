import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnName, setLoginBtnName] = useState("Login");

  const handleLoginClick = () => {
    loginBtnName === "Login"
      ? setLoginBtnName("Logout")
      : setLoginBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/contact">Cart</Link>
          </li>
          <button onClick={handleLoginClick} className="login-btn">
            {loginBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
