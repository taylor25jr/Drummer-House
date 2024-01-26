import React, { useEffect } from 'react'
import "./Servicios.css"
import PricingCards from '../Prices';
import Bancolombia from '../BancolombiaButton';
import Daviplata from '../DaviplataButton';
import Nequi from '../NequiButton';
import { handleScroll } from '../../hooks/Servicios/useScroll';
import { Footer } from '../Footer';


export const Servicios = () => {


    useEffect(() => {
      
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <section className="servicios">
        <article className="servicios__info">
          <h3 className="servicios__info__titulo">Nuestro pensum</h3>
        </article>
        <article className="servicios__cards">
          <article className="card" id="cards">
            <header className="card__header">
              <img
                src="https://i.pinimg.com/736x/e1/10/14/e11014695e69b5042fc67b6c46dae5b3.jpg"
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
                src="https://i.pinimg.com/736x/54/fb/0e/54fb0e9b57f0a4a0163c24f787353a6f.jpg"
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
                src="https://i.pinimg.com/736x/53/e2/01/53e201517b82e2a4f17d5a13b4603ae8.jpg"
                alt=""
                className="card__header__img"
              />
            </header>
            <div className="card__body">
              <h3 className="card__header__titulo-avanzado">Avanzado</h3>
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
      <Footer/>
    </>
  );
}
