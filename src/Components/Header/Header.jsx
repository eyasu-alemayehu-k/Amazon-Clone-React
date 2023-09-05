import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AmazonLogo from "../../images/amazon.png";
import { Link, useNavigate } from "react-router-dom";
import { useContextNew } from "../StateProvider/StateProvider";
import { auth } from "../../Constants/firebase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Header() {
  const { basket, user } = useContextNew();
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()
  // console.log(user.email)

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(()=>{
    setToggle(false)
  }, [navigate])

  console.log(toggle)
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
        <div className="dropdown__toggle">
          <span className={!toggle ? '' : 'hidden'} onClick={()=>setToggle(true)}>
            <KeyboardArrowDownIcon />
          </span>
          <span className={toggle ? '' : 'hidden'} onClick={()=>setToggle(false)}>
            <KeyboardArrowUpIcon />
          </span>
        </div>
        <div className='large_screen'>
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
        </div>
        <div className={`mobile_screen dropdown__menu ${toggle ? '' : 'dropdown__menu-hidden'}`}>
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
