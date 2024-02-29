import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { LogoIcon } from "../Svg/Logo";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

//Cambiar color al burger y la ui en mobile

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
          style={
          {  background: gradientHeader
            ? "linear-gradient(180deg, rgba(30, 30, 30, 0.983871) 81.49%, rgba(30, 30, 30, 0) 100%)"
            : "#1E1E1E"}
          }
        >
          <NavLink
            aria-current="page"
            to="/"
            onClick={() => {setGradient(); setFooterColor(false)}}
            aria-label="Go to main page"
          >
            <LogoIcon alt="Logo de la empresa" />
          </NavLink>
          {!isPC ? (
            <Dropdown>
              <MenuButton>☰</MenuButton>
              <Menu style={{ backgroundColor: "black" }}>
                <MenuItem style={{ backgroundColor: "black" }}>
                  <NavLink
                    to="/servicios"
                    className={({ isActive }) =>
                      `nav__list__item ${isActive ? "active-link" : null}`
                    }
                    onClick={()=> {unsetGradient(); setFooterColor(false)}}
                  >
                    Servicios
                  </NavLink>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "black" }}>
                  <NavLink
                    to="/sobre-mi"
                    className={({ isActive }) =>
                      `nav__list__item ${isActive ? "active-link" : null}`
                    }
                    onClick={() => {
                      unsetGradient();
                      setFooterColor(true);
                    }}
                  >
                    Sobre mi
                  </NavLink>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "black" }}>
                  <NavLink
                    to="/otros"
                    className={({ isActive }) =>
                      `nav__list__item ${isActive ? "active-link" : null}`
                    }
                    onClick={() => {unsetGradient(); setFooterColor(false)}}
                  >
                    Otros
                  </NavLink>
                </MenuItem>
                <MenuItem style={{ backgroundColor: "black" }}>
                  <NavLink
                    to="/contacto"
                    className={({ isActive }) =>
                      `nav__list__item ${isActive ? "active-link" : null}`
                    }
                    onClick={() => {setGradient(); setFooterColor(false)}}
                  >
                    Contacto
                  </NavLink>
                </MenuItem>
              </Menu>
            </Dropdown>
          ) : (
            <nav className=" nav__list">
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/servicios"
                onClick={() => {unsetGradient(); setFooterColor(false)}}
              >
                Servicios
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav__list__item ${isActive ? "active-link" : null}`
                }
                to="/sobre-mi"
                onClick={() => {unsetGradient(); setFooterColor(true)}}
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
                onClick={() => {setGradient(); setFooterColor(false)}}
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
};
