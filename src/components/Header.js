import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logo_mesto.svg";


function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
      <div className="header__container">
        <p className="header__user-email">{props.email}</p>
        <Link to={`/${props.path}`} className="header__link">
          {props.linkText}
        </Link>
      </div>
    </header>
  );
}

export default Header;
