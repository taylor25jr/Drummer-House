import React from 'react';
import "./Otros.css";
import ButtonOtros from '../ButtonOtros';

export const Otros = () => {

  return (
  <>
    <section className="otrosContainer">
        <div className="otrosContainer__titulo">
            <h1 className='otrosTitulo'>Otros Servicios</h1>
        </div>
        <div className="otrosContainer__descripcion">
            <ButtonOtros/>
        </div>
    </section>
  </>
  )
}
