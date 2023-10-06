import React from "react";
import "./Header.scss";
import closeIcon from "../../assets/icons/X.svg";
import moreIcon from "../../assets/icons/3dot_button.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container-top">
        <h2 className="header__title-main">Scotia Smart Investor</h2>
        <img src={closeIcon} className="header__icon-close" />
      </div>
      <div className="header__container-bottom">
        <div>
          <h6 className="header__title-second">Scotia</h6>
          <h4 className="header__title-third">Smart Investor</h4>
        </div>
        <img src={moreIcon} className="header__icon-more" />
      </div>
    </header>
  );
};

export default Header;
