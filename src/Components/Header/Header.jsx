import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AmazonLogo from "../../images/amazon.png";
import { Link } from "react-router-dom";
import { useContextNew } from "../StateProvider/StateProvider";
import { auth } from "../../Constants/firebase";

function Header() {
  const { basket, user } = useContextNew();
  // console.log(user.email)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img src={AmazonLogo} alt="Amazon Logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Amazon"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <span className="header_optionLineTwo header__basketCount">
              {basket.length}
            </span>
            <ShoppingCartOutlinedIcon className="header__shoppingIcon" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
