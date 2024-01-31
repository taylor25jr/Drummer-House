import React, { useEffect } from "react";
import "./Servicios.css";
import PricingCards from "../Prices";
import { handleScroll } from "../../hooks/Servicios/useScroll";
import { Footer } from "../Footer";
import PaymentsMethods from "../PaymentsMethods";
import PropTypes from 'prop-types';
import BasicCard from "../CardGroup";
import PensumCard from "../CardGroup";

export const Servicios = ({ handleShow, handleClick }) => {
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topicsInitiation = ["Rudimentos esenciales","Ritmos Basicos"," Teoria 1 (basico y esencial)"]

  return (
    <>
      <section className="servicios">
        <article className="servicios__info">
          <h3 className="servicios__info__titulo">Nuestro pensum</h3>
        </article>
        <article className="servicios__cards">
          <PensumCard
            img="https://media.istockphoto.com/id/805751134/es/foto/rock-n-roll-baterista-destellos-en-el-aire.jpg?s=1024x1024&w=is&k=20&c=KHb4bS1WH4zKIq5X2A8uZveMKyhzBJlzYBTrY5xCmP4="
            title="Iniciacion del instrumento"
            description="
Un pensum de iniciación para el aprendizaje del instrumento de batería proporciona una guía estructurada para los estudiantes que desean desarrollar habilidades fundamentales en la percusión. Este pensum abarcará desde los conceptos básicos hasta las técnicas más avanzadas"
            topics={topicsInitiation}
          />
          <PensumCard
            img="https://media.istockphoto.com/id/805751134/es/foto/rock-n-roll-baterista-destellos-en-el-aire.jpg?s=1024x1024&w=is&k=20&c=KHb4bS1WH4zKIq5X2A8uZveMKyhzBJlzYBTrY5xCmP4="
            title="Iniciacion del instrumento"
            description="
Un pensum de iniciación para el aprendizaje del instrumento de batería proporciona una guía estructurada para los estudiantes que desean desarrollar habilidades fundamentales en la percusión. Este pensum abarcará desde los conceptos básicos hasta las técnicas más avanzadas"
            topics={topicsInitiation}
          />
          <PensumCard
            img="https://media.istockphoto.com/id/805751134/es/foto/rock-n-roll-baterista-destellos-en-el-aire.jpg?s=1024x1024&w=is&k=20&c=KHb4bS1WH4zKIq5X2A8uZveMKyhzBJlzYBTrY5xCmP4="
            title="Iniciacion del instrumento"
            description="
Un pensum de iniciación para el aprendizaje del instrumento de batería proporciona una guía estructurada para los estudiantes que desean desarrollar habilidades fundamentales en la percusión. Este pensum abarcará desde los conceptos básicos hasta las técnicas más avanzadas"
            topics={topicsInitiation}
          />
          {/*<article className="card" id="cards">
            <header className="card__header">
              <img
                src="https://media.istockphoto.com/id/805751134/es/foto/rock-n-roll-baterista-destellos-en-el-aire.jpg?s=1024x1024&w=is&k=20&c=KHb4bS1WH4zKIq5X2A8uZveMKyhzBJlzYBTrY5xCmP4="
                alt=""
                className="card__header__img"
              />
            </header>
            <div className="card__body">
              <h3 className="card__header__titulo">
                Iniciacion del instrumento
              </h3>
              <ol className="container__list">
                <li className="container__list__item">Rudimentos esenciales</li>
                <li className="container__list__item">Ritmos básicos</li>
                <li className="container__list__item">
                  Teoria 1 (basico y esencial)
                </li>
              </ol>
            </div>
          </article>
          <article className="card" id="cards">
            <article className="card__header">
              <img
                src="https://media.istockphoto.com/id/1308514040/es/foto/el-baterista-toca-la-bater%C3%ADa-hermoso-fondo-azul-y-rojo-con-rayos-de-luz-hermosos-efectos.jpg?s=1024x1024&w=is&k=20&c=e9ULbQHde-rulNQ3ThTNBhQ6qy52TqikRMKaiMoz8gU="
                alt=""
                className="card__header__img"
              />
            </article>
            <div className="card__body">
              <h3 className="card__header__titulo">Intermedio</h3>
              <ol className="container__list">
                <li className="container__list__item">
                  Teoria 2 (Rudimentos, Independencia y Lectura al mismo tiempo)
                </li>
                <li className="container__list__item">Ritmos intermedios</li>
                <li className="container__list__item">Ensamble</li>
                <li className="container__list__item">Técnicas (avanzadas)</li>
              </ol>
            </div>
          </article>
          <article className="card" id="cards">
            <header className="card__header">
              <img
                src="https://media.istockphoto.com/id/1311312996/es/foto/baterista-tocando-la-bater%C3%ADa-con-humo-y-polvo-en-el-fondo.jpg?s=1024x1024&w=is&k=20&c=dmhws8nlrwbpDpHRR2IdFf-dNYz9P6ecK6sNp24G_uM="
                alt=""
                className="card__header__img"
              />
            </header>
            <div className="card__body">
              <h3 className="card__header__titulo">Avanzado</h3>
              <ol className="container__list">
                <li className="container__list__item">Teoria 3</li>
                <li className="container__list__item">Concepto</li>
                <li className="container__list__item">
                  Ensamble, Ritmos y Desplazamiento de ejercicios
                </li>
              </ol>
            </div>
          </article>*/}
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
}