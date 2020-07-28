import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo  */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header_optionLineOne"> Hello {user?.email} </span>
            <span className="header_optionLineTwo">
              {" "}
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne"> Returns </span>
            <span className="header_optionLineTwo"> & Orders </span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header_optionLineOne"> Your </span>
            <span className="header_optionLineTwo"> Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shoppting basket icon */}
            <ShoppingBasketIcon />

            {/* number of item in the list */}
            <span className="header_optionLineTwo header__basketcount">
              {" "}
              {basket?.length}{" "}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket icons */}
    </nav>
  );
}

export default Header;
