import React, { useEffect } from "react";
import "./SobreMi.css";
import BioCard from "../AboutMe";
import { Footer } from "../Footer";
import { MediaIframe } from "../Iframe";
import { handleScrollAboutMe } from "../../hooks/AboutMe/useScroll";

export const SobreMi = () => {
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
            <MediaIframe />
          </article>
          <article
            className="aboutContainer__textoContenedor"
            id="container-info"
          >
            <h2 className="aboutContainer__textoContenedor__titulo">
              Hi there!
            </h2>
            <br />
            <p className="aboutContainer__textoContenedor__parrafo">
              Johan Sebastián es un joven de 22 años, nacido en la ciudad de
              Barranquilla. Hijo único, criado por su abuela paterna. Desde su
              primer año de edad mostró sus habilidades rítmicas por eso a los
              cuatro años ya ejecutaba instrumentos de percusión folclórica.
              Posteriormente en la iglesia aprendió a tocar bateria,
              desarrollando su talento y en donde hoy en día sigue creciendo su
              ministerio musical.
            </p>
          </article>
        </section>
        <section className="bigraphyCard">
          <h2>more about me</h2>
          <BioCard />
        </section>
        <Footer />
      </section>
    </>
  );
};
