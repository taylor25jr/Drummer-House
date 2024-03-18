import { NavLink } from "react-router-dom";
import "./Header.css";
import { LogoIcon } from "../Svg/Logo";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MobileNavbar from "../MobileHeader";
import { useLocation } from "react-router-dom";

export const Header = () => {
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

  const routesWithGradient = ["/", "/contacto"];
  const { pathname } = useLocation();
  const gradientHeaderNew = routesWithGradient.includes(pathname);

  return (
    <>
      {
        <section
          className="header"
          style={{
            background: gradientHeaderNew
              ? "linear-gradient(180deg, rgba(30, 30, 30, 0.983871) 81.49%, rgba(30, 30, 30, 0) 100%)"
              : "#1E1E1E",
          }}
        >
          <NavLink aria-current="page" to="/" aria-label="Go to main page">
            <LogoIcon alt="Logo de la empresa" />
          </NavLink>
          {!isPC ? (
            <MobileNavbar />
          ) : (
            <nav className=" nav__list">
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/servicios"
              >
                Servicios
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/sobre-mi"
              >
                Sobre mí
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/otros"
              >
                Otros
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/contacto"
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
