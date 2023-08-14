import React from "react";
import headerLogo from "../images/logo_mesto.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
    </header>
  );
}

export default Header;
