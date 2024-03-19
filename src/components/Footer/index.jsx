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
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const routesWithGradient = ["/sobre-mi"];
  const { pathname } = useLocation();
  const gradientFooterNew = routesWithGradient.includes(pathname);

  const routes = {
    facebook: "https://www.facebook.com/profile.php?id=100064800582592&locale=es_LA",
    instagram: "https://www.instagram.com/johan_sebas00/",
    whatsapp: "https://api.whatsapp.com/send?phone=+573232067061&text=Hola,me gustaria conocer tus servicios!"
  }

  const {facebook,instagram,whatsapp} = routes


  return (
    <footer
      className="footerSection"
      style={{ backgroundColor: gradientFooterNew ? "#FAFAFA" : "#1E1E1E" }}
    >
      <div className="footerSection__container">
        <section className="social">
          <h2
            className="footerTitle"
            style={
              gradientFooterNew ? { color: "#1E1E1E" } : { color: "#FAFAFA" }
            }
          >
            Visitame
          </h2>
          <article className="socialIcons">
            {gradientFooterNew ? (
              <>
              <Link to={whatsapp}>
                <InstagramBlackIcon />
              </Link>
              <Link to={facebook}>
                <FacebookBlackIcon />
              </Link>
              <Link to={instagram}>
                <WhatsappBlackIcon />
              </Link>
              </>
            ) : (
              <>
              <Link to={instagram}>
                <InstagramIcon />
              </Link>
              <Link to={facebook}>
                <FacebookIcon />
              </Link>
              <Link to={whatsapp}>
                <WhatsappIcon />
              </Link>
              </>
            )}
          </article>
        </section>
        <section className="footer-info">
          <article className="footer-logo">
            {gradientFooterNew ? (
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
              style={
                gradientFooterNew ? { color: "#1E1E1E" } : { color: "#FAFAFA" }
              }
            >
              Términos y Condiciones | Ayuda | © 2024 The Drummer's House Todos
              los derechos reservados
            </p>
          </article>
        </section>
        <section className="powered-section">
          <h2
            className="footerTitle"
            style={
              gradientFooterNew ? { color: "#1E1E1E" } : { color: "#FAFAFA" }
            }
          >
            powered by
          </h2>
          {gradientFooterNew ? (
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
