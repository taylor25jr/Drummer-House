import React from "react";
import { FacebookIcon } from "../Svg/Facebook";
import { WhatsappIcon } from "../Svg/Whatsapp";
import { InstagramIcon } from "../Svg/Instagram";
import { WhatsappBlackIcon } from "../Svg/BlackIcons/Whatsapp";
import { FacebookBlackIcon } from "../Svg/BlackIcons/Facebook";
import { InstagramBlackIcon } from "../Svg/BlackIcons/Instagram";
import { LogoBlackIcon } from "../Svg/BlackIcons/Logo";
import { AxiosBlackIcon } from "../Svg/BlackIcons/Axios";
import { LogoIcon } from "../Svg/Logo";
import { AxiosIcon } from "../Svg/Axios";
import "./Footer.css";
import PropTypes from "prop-types";

export const Footer = ({ footerColor }) => {
  return (
    <footer
      className="footerSection"
      style={
       { backgroundColor: footerColor ? "#FAFAFA" : "#1E1E1E",}
      }
    >
      <div className="footerSection__container">
        <section className="social">
          <h2
            className="footerTitle"
            style={footerColor ? { color: "#1E1E1E" } : { color: "#FAFAFA" }}
          >
            Visitame
          </h2>
          <article className="socialIcons">
            {footerColor ? (
              <>
                <WhatsappBlackIcon />
                <FacebookBlackIcon />
                <InstagramBlackIcon />
              </>
            ) : (
              <>
                <InstagramIcon />
                <FacebookIcon />
                <WhatsappIcon />
              </>
            )}
          </article>
        </section>
        <section className="footer-info">
          <article className="footer-logo">
            {footerColor ? (
              <>
                <LogoBlackIcon />
              </>
            ) : (
              <>
                <LogoIcon />
              </>
            )}
          </article>
          <article className="footer-content">
            <p
              className="footerTitle"
              style={footerColor ? { color: "#1E1E1E" } : { color: "#FAFAFA" }}
            >
              Términos y Condiciones | Ayuda | © 2024 The Drummer's House Todos
              los derechos reservados
            </p>
          </article>
        </section>
        <section className="powered-section">
          <h2
            className="footerTitle"
            style={footerColor ? { color: "#1E1E1E" } : { color: "#FAFAFA" }}
          >
            powered by
          </h2>
          {footerColor ? (
            <>
              <AxiosBlackIcon />
            </>
          ) : (
            <>
              <AxiosIcon />
            </>
          )}
        </section>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footerColor: PropTypes.bool,
};
