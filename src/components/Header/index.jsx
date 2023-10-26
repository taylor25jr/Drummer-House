import React from "react";
import "./Header.css"

export const Header = () => {
  return (
    <>
      <section className="header">
        <img
          src="../../img/header-logo.png"
          alt=""
          className="header__logo"
        />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__item">sobre mi</li>
            <li className="nav__list__item">servicios</li>
            <li className="nav__list__item">otros</li>
            <li className="nav__list__item">contacto</li>
          </ul>
        </nav>
      </section>
    </>
  );
};
