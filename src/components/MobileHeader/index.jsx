import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import "./MobileHeader.css";
import { LogoIcon } from "../Svg/Logo";
import { SocialFooter } from "../SocialFooter";
import { AxiosIcon } from "../Svg/Axios";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


export default function MobileNavbar({
  setGradient,
  unsetGradient,
  setFooterColor,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
            width: "100%",
          }}
        >
          <ModalClose
            id="close-icon"
            sx={{
              position: "initial",
              "&:hover": {
                backgroundColor: "#1E1E1E",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
            width: "100%",
          }}
          id="logoModal"
        >
          <LogoIcon />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
          className="linksContainer"
        >
          <NavLink
            to="/"
            onClick={() => {
              setOpen(false);
              setGradient();
              setFooterColor(false);
            }}
            className={({ isActive }) =>
              `nav__list__item ${isActive ? "active-link" : null}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/servicios"
            onClick={() => {
              setOpen(false);
              unsetGradient();
              setFooterColor(false);
            }}
            className={({ isActive }) =>
              `nav__list__item ${isActive ? "active-link" : null}`
            }
          >
            Servicios
          </NavLink>
          <NavLink
            to="/otros"
            onClick={() => {
              setOpen(false);
              unsetGradient();
              setFooterColor(false);
            }}
            className={({ isActive }) =>
              `nav__list__item ${isActive ? "active-link" : null}`
            }
          >
            Academia
          </NavLink>
          <NavLink
            to="/sobre-mi"
            onClick={() => {
              setOpen(false);
              setFooterColor(true);
              unsetGradient();
            }}
            className={({ isActive }) =>
              `nav__list__item ${isActive ? "active-link" : null}`
            }
          >
          Sobre mi
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={() => {
              setOpen(false);
              setGradient();
              setFooterColor(false);
            }}
            className={({ isActive }) =>
              `nav__list__item ${isActive ? "active-link" : null}`
            }
          >
          Contacto
          </NavLink>
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <SocialFooter />
          <br />
          <p className="poweredModal">Powered by</p>
          <AxiosIcon />
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

MobileNavbar.propTypes = {
    setGradient:PropTypes.func,
    unsetGradient:PropTypes.func,
    setFooterColor:PropTypes.func,
}