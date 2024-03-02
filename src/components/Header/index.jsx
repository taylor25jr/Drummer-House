import { NavLink } from "react-router-dom";
import "./Header.css";
import { LogoIcon } from "../Svg/Logo";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MobileNavbar from "../MobileHeader";


export const Header = ({
  setGradient,
  unsetGradient,
  gradientHeader,
  setFooterColor,
}) => {
  const [isPC, setIsPC] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {
        <section
          className="header"
          style={{
            background: gradientHeader
              ? "linear-gradient(180deg, rgba(30, 30, 30, 0.983871) 81.49%, rgba(30, 30, 30, 0) 100%)"
              : "#1E1E1E",
          }}
        >
          <NavLink
            aria-current="page"
            to="/"
            onClick={() => {
              setGradient();
              setFooterColor(false);
            }}
            aria-label="Go to main page"
          >
            <LogoIcon alt="Logo de la empresa" />
          </NavLink>
          {!isPC ? (
            <MobileNavbar
              setGradient={setGradient}
              unsetGradient={unsetGradient}
              setFooterColor={setFooterColor}
            />
          ) : (
            <nav className=" nav__list">
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/servicios"
                onClick={() => {
                  unsetGradient();
                  setFooterColor(false);
                }}
              >
                Servicios
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/sobre-mi"
                onClick={() => {
                  unsetGradient();
                  setFooterColor(true);
                }}
              >
                Sobre mí
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/otros"
                onClick={() => {
                  unsetGradient();
                  setFooterColor(false);
                }}
              >
                Otros
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/contacto"
                onClick={() => {
                  setGradient();
                  setFooterColor(false);
                }}
              >
                Contacto
              </NavLink>
            </nav>
          )}
        </section>
      }
    </>
  );
};

Header.propTypes = {
  setGradient: PropTypes.func,
  unsetGradient: PropTypes.func,
  gradientHeader: PropTypes.bool,
  handleChangeFooterColor: PropTypes.func,
  setFooterColor: PropTypes.func,
};
