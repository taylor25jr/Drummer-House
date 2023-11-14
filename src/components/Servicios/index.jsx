import React, { useEffect } from 'react'
import "./Servicios.css"
import PricingCards from '../Prices';
import Bancolombia from '../BancolombiaButton';
import Daviplata from '../DaviplataButton';
import Nequi from '../NequiButton';


export const Servicios = () => {


    useEffect(() => {
      const handleScroll = () => {
        const $cards = document.querySelectorAll("#cards");
        const $fechaCards = document.querySelectorAll("#cardsFecha");

        $cards.forEach((card) => {
          const cardDistance =
            window.innerHeight - card.getBoundingClientRect().top;

          if (cardDistance >= 278) {
            card.classList.add("card-effect");
          } else {
            card.classList.remove("card-effect");
          }

          if (cardDistance <= 278) {
            card.classList.add("card-effect-outer");
          } else {
            card.classList.remove("card-effect-outer");
          }
        });

        $fechaCards.forEach((card) => {
          const fechaCardDistance =
            window.innerHeight - card.getBoundingClientRect().top;

          if (fechaCardDistance >= 400) {
            card.classList.add("cards-show");
          } else {
            card.classList.remove("cards-show");
          }

          if (fechaCardDistance <= 400) {
            card.classList.add("cards-show-outer");
          } else {
            card.classList.remove("cards-show-outer");
          }
        });
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <section className="servicios">
        <article className="servicios__info">
          <img
            src="https://drive.google.com/uc?export=download&id=1fR05iaPoF2x8C4oUJ8XfOe89UqNtrLg1"
            alt=""
            className="servicios__info__logo"
          />
          <h3 className="servicios__info__titulo">Nuestro pensum</h3>
        </article>
        <article className="servicios__cards">
          <article className="card" id="cards">
            <header className="card__header">
              <img
                src="https://drive.google.com/uc?export=download&id=1nuDK-gJsjNhi4H0-fznYdzYAsLeZTjai"
                alt=""
                className="card__header__img"
              />
              <h3 className="card__header__titulo">
                Iniciacion del instrumento
              </h3>
            </header>
            <div className="card__body">
              <ol className="container__list">
                <li className="container__list__item">Rudimentos esenciales</li>
                <li className="container__list__item">Ritmos básicos</li>
                <li className="container__list__item">
                  Teoria 1 (basico y esencial)
                </li>
              </ol>
            </div>
          </article>
          <article className="card card-red" id="cards">
            <header className="card__header">
              <img
                src="https://drive.google.com/uc?export=download&id=1lITRDQaFR4Nv0CIBiuJ-kxgby__KQGGr"
                alt=""
                className="card__header__img"
              />
              <h3 className="card__header__titulo">Intermedio</h3>
            </header>
            <div className="card__body">
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
          <article className="card card-black" id="cards">
            <header className="card__header">
              <img
                src="https://drive.google.com/uc?export=download&id=12MjVEy7DfFZ4-6L6Aycby7Ic1aFeLgvp"
                alt=""
                className="card__header__img"
              />
              <h3 className="card__header__titulo-avanzado">Avanzado</h3>
            </header>
            <div className="card__body-black">
              <ol className="container__list">
                <li className="container__list__item">Teoria 3</li>
                <li className="container__list__item">Concepto</li>
                <li className="container__list__item">
                  Ensamble, Ritmos y Desplazamiento de ejercicios
                </li>
              </ol>
            </div>
          </article>
        </article>
      </section>
      <section className="mas-servicios">
      <section className="fechas">
        <article className="fechas__container">
          <h3 className="fechas__titulo">Fechas</h3>
        </article>
        <article className="fechas__cards">
          <div className="cards fechas__cards__inscripciones"  id='cardsFecha'>
            <h4 className='fechas__cards__inscripciones__titulo'>Inscripciones</h4>
            <p className='fechas__cards__inscripciones__parrafo'>Del 20 de enero al 3 de febrero</p>
          </div>
          <div className=" cards fechas__cards__inicio" id='cardsFecha'>
            <h4 className='fechas__cards__inscripciones__titulo'>Inicio de clases</h4>
            <p  className='fechas__cards__inscripciones__parrafo'>4 de febrero del 2024</p>
          </div>
          <div className="cards fechas__cards__periodo" id='cardsFecha'>
            <h4 className='fechas__cards__inscripciones__titulo'>Periodo de pago</h4>
            <p  className='fechas__cards__inscripciones__parrafo'>Del 20 de enero al 4 de febrero</p>
          </div>
        </article>
      </section>
      <section className='tarifas-pagos'>
        <article className="tarifas__cards">
            <h3 className='fechas__titulo tarifas__cards__titulo'>Tarifas</h3>
            <PricingCards/>
        </article>

        <article className="medios">
          <article className="medios__titulo">
            <h2 className='fechas__titulo'>Medios de pago</h2>
          </article>
          <article className="medios__buttons__container">
            <Bancolombia/>
            <Daviplata/>
            <Nequi/>
          </article>
        </article>

      </section>
      </section>
    </>
  );
}
