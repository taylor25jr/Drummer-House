import React, { useEffect } from "react";
import "./SobreMi.css";
import { Footer } from "../../components/Footer";
import { UpArrowButton } from "../../components/UpArrow";
import { handleScrollAboutMe } from "../../hooks/AboutMe/useScroll";
import PropTypes from "prop-types";

export const SobreMi = ({ footerColor }) => {
  useEffect(() => {
    handleScrollAboutMe();
    window.addEventListener("scroll", handleScrollAboutMe);
    return () => {
      window.removeEventListener("scroll", handleScrollAboutMe);
    };
  }, []);

  return (
    <>
      <section className="generalContainer">
        <h1 className="generalContainer__titulo">Sobre mi</h1>
        <section className="aboutContainer">
          <article className="aboutContainer__imagenContenedor" id="about">
            <img src="https://i.ibb.co/hfPWj9H/Pic-2.png" />
          </article>
          <article
            className="aboutContainer__textoContenedor"
            id="container-info"
          >
            <h2 className="aboutContainer__textoContenedor__titulo">
              Hola! 👋🏿
            </h2>
            <br />
            <p className="aboutContainer__textoContenedor__parrafo">
              Johan Sebastián es un joven de 23 años, nacido en la ciudad de
              Barranquilla. Hijo único, criado por su abuela paterna. Desde su
              primer año de edad mostró sus habilidades rítmicas por eso a los
              cuatro años ya ejecutaba instrumentos de percusión folclórica.
              Posteriormente en la iglesia aprendió a tocar bateria,
              desarrollando su talento y en donde hoy en día sigue creciendo su
              ministerio musical.
            </p>
          </article>
        </section>
        <section className="aboutContainer aboutSection2">
          <article
            className="aboutContainer__imagenContenedor container2"
            id="about"
          >
            <img src="https://i.ibb.co/RSNkd9q/Pic-1.png" />
          </article>
          <article
            className="aboutContainer__textoContenedor"
            id="container-info"
          >
            <h2 className="aboutContainer__textoContenedor__titulo left">
              Baterista revelacion en el Drumfest 2019
            </h2>
            <br />
            <p className="aboutContainer__textoContenedor__parrafo left">
              En el ‘Drum Fest’ del año 2019, evento organizado en la ciudad de
              Barranquilla por la fundación ‘Música y tambores’ y el apoyo de la
              Secretaría de cultura de la ciudad.
            </p>
          </article>
        </section>
        <section className="aboutContainer aboutSection2 expodrummer">
          <article
            className="aboutContainer__imagenContenedor container3"
            id="about"
          >
            <img src="https://i.ibb.co/hV8qqrV/Pic.png" />
          </article>
          <article
            className="aboutContainer__textoContenedor"
            id="container-info"
          >
            <h2 className="aboutContainer__textoContenedor__titulo">
              Expodrummer 2020
            </h2>
            <br />
            <p className="aboutContainer__textoContenedor__parrafo">
              Participó junto a bateristas como Iván Olivera, Isaac Valenzuela,
              Carlos Girón y Robiro Márquez desarrollando cada vez más su
              potencial en la batería.
            </p>
          </article>
        </section>
        <Footer footerColor={footerColor} />
        <UpArrowButton />
      </section>
    </>
  );
};

SobreMi.propTypes = {
  footerColor: PropTypes.bool,
};
