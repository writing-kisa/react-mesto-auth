import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/logo_mesto.svg";

//{`/users/${user.id}`}
function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
      <Link to={`/${props.path}`} className="header__link">{props.linkText}</Link>
    </header>
  );
}

export default Header;
