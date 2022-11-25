import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/InStock-Logo.svg";

const Header = ({
  setShowList,
  setDisplayAdd,
  setShowDetails,
  setDisplayEdit,
}) => {
  return (
    <header className="header">
      <Link
        to="/warehouse"
        onClick={() => {
          setShowList(true);
          setDisplayAdd(false);
          setDisplayEdit(false);
          setShowDetails(false);
        }}
        className="header__company-logo"
      >
        <img
          className="header__logo"
          src={Logo}
          alt="Company logo: 2 blue arrows in a square shaped to the left and company name (INSTOCK) in white to the right"
        ></img>
      </Link>

      <div className="header__buttons-container">
        <Link
          to="/warehouse"
          onClick={() => {
            setShowList(true);
            setDisplayAdd(false);
            setDisplayEdit(false);
            setShowDetails(false);
          }}
        >
          <button className="header__button" type="text">
            <p className="header__button-txt">Warehouses</p>
          </button>
        </Link>
        <Link
          to="/inventory"
          onClick={() => {
            setShowList(true);
            setDisplayAdd(false);
            setDisplayEdit(false);
            setShowDetails(false);
          }}
        >
          <button className="header__button" type="text">
            <p className="header__button-txt">Inventory</p>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
