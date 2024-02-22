import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

//Cambiar color al burger y la ui en mobile

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

  return (
    <>
      {
        <section className="header">
          <NavLink to="/">
            <img
              src="https://i.ibb.co/Wz73GbJ/header-Logo.png"
              alt="logo"
              className="header__logo"
            />
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
