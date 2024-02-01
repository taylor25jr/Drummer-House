import React, { useEffect } from "react";
import "./Servicios.css";
import PricingCards from "../Prices";
import { handleScrollServicios } from "../../hooks/Servicios/useScroll";
import { Footer } from "../Footer";
import PaymentsMethods from "../PaymentsMethods";
import PropTypes from "prop-types";
import PensumCard from "../CardGroup";

export const Servicios = ({ handleShow, handleClick }) => {
  
  useEffect(() => {
    handleScrollServicios();
    window.addEventListener("scroll", handleScrollServicios);
    return () => {
      window.removeEventListener("scroll", handleScrollServicios);
    };
  }, []);

  const topicsInitiation = [
    "Rudimentos esenciales",
    "Ritmos Basicos",
    " Teoria 1 (basico y esencial)",
  ];

  const topicsIntermediate = [
    "Teoría 2 (Rudimentos, independencia y lectura al mismo tiempo)",

    "Ritmos intermedios",
    "Ensamble",
    "Técnicas (avanzadas)",
  ];

  const topicsProfessional = [
    "Teoria 3",
    "Concepto",
    "Ensamble, Ritmos y Desplazamiento de ejercicios",
  ];

  return (
    <>
      <section className="servicios">
        <article className="servicios__info">
          <h3 className="servicios__info__titulo">Nuestro pensum</h3>
        </article>
        <article className="servicios__cards" id="cards">
          <PensumCard
            img="https://i.pinimg.com/736x/fa/12/7a/fa127a00ce9da5c440c9ec9cb9eeaf1b.jpg"
            title="Iniciacion del instrumento"
            description="
           Un pensum de iniciación para el aprendizaje del instrumento de batería proporciona una guía
            estructurada para los estudiantes que desean desarrollar habilidades fundamentales en la percusión.
            Este pensum abarcará desde los conceptos básicos hasta las técnicas más avanzadas"
            topics={topicsInitiation}
          />
          <PensumCard
            img="https://i.pinimg.com/736x/c2/c3/59/c2c359eabf1d22928f581249afd4d91e.jpg"
            title="Intermedio"
            description="
            Este programa de estudio intermedio en batería proporciona una sólida formación para músicos en desarrollo.
             Desde la consolidación de técnicas fundamentales hasta la exploración de estilos diversos."
            topics={topicsIntermediate}
          />
          <PensumCard
            img="https://i.pinimg.com/736x/3f/3f/93/3f3f9367dbb700b3132960acf3c786a6.jpg"
            title="Avanzado"
            description="
            Dirigido a bateristas experimentados, el pensum avanzado en batería se sumerge en la complejidad y la expresión artística. 
            Desde la maestría de ritmos polirrítmicos hasta la improvisación avanzada."
            topics={topicsProfessional}
          />
        </article>
      </section>
      <section className="mas-servicios">
        <section className="fechas">
          <article className="fechas__container">
            <h3 className="fechas__titulo">Fechas</h3>
          </article>
          <article className="fechas__cards">
            <div className="cards fechas__cards__inscripciones" id="cardsFecha">
              <h4 className="fechas__cards__inscripciones__titulo">
                Inscripciones
              </h4>
              <p className="fechas__cards__inscripciones__parrafo">
                Del 20 de enero al 3 de febrero
              </p>
            </div>
            <div className=" cards fechas__cards__inicio" id="cardsFecha">
              <h4 className="fechas__cards__inscripciones__titulo">
                Inicio de clases
              </h4>
              <p className="fechas__cards__inscripciones__parrafo">
                4 de febrero del 2024
              </p>
            </div>
            <div className="cards fechas__cards__periodo" id="cardsFecha">
              <h4 className="fechas__cards__inscripciones__titulo">
                Periodo de pago
              </h4>
              <p className="fechas__cards__inscripciones__parrafo">
                Del 20 de enero al 4 de febrero
              </p>
            </div>
          </article>
        </section>
        <section className="tarifas-pagos">
          <article className="tarifas__cards">
            <h3 className="fechas__titulo tarifas__cards__titulo">Tarifas</h3>
            <PricingCards handleShow={handleShow} handleClick={handleClick} />
          </article>

          <article className="medios">
            <article className="medios__titulo">
              <h2 className="fechas__titulo">Medios de pago</h2>
            </article>
            <article className="medios__buttons__container">
              <PaymentsMethods />
            </article>
          </article>
        </section>
      </section>
      <Footer />
    </>
  );
};

Servicios.propTypes = {
  handleShow: PropTypes.func,
  handleClick: PropTypes.func,
};
