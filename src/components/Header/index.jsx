import React from "react";
import "./Header.css"

export const Header = ({showChange}) => {
  return (
    <>
      <section className="header">
        <img
          src="https://drive.google.com/uc?export=download&id=1fR05iaPoF2x8C4oUJ8XfOe89UqNtrLg1"
          alt=""
          className="header__logo"
        />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__item">sobre mi</li>
            <li className="nav__list__item">servicios</li>
            <li className="nav__list__item">otros</li>
            <li className="nav__list__item" onClick={showChange}>contacto</li>
          </ul>
        </nav>
      </section>
    </>
  );
};
