import React from "react";
import { FacebookIcon } from "../Svg/Facebook";
import { WhatsappIcon } from "../Svg/Whatsapp";
import { InstagramIcon } from "../Svg/Instagram";
import { LogoIcon } from "../Svg/Logo";
import { AxiosIcon } from "../Svg/Axios";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerSection__container">
        <section className="social">
          <h2 className="footerTitle">Visitame</h2>
          <article className="socialIcons">
            <InstagramIcon />
            <FacebookIcon />
            <WhatsappIcon />
          </article>
        </section>
        <section className="footer-info">
          <article className="footer-logo">
            <LogoIcon />
          </article>
          <article className="footer-content">
            <p className="footerTitle">
              Términos y Condiciones | Ayuda | © 2024 The Drummer's House Todos
              los derechos reservados
            </p>
          </article>
        </section>
        <section className="powered-section">
          <h2 className="footerTitle">powered by</h2>
          <AxiosIcon />
        </section>
      </div>
    </footer>
  );
};
