import React from 'react';
import "./Otros.css";
import ServiceOtherCard from '../CardsOtros';

export const Otros = () => {

  return (
  <>
    <section className="otrosContainer">
        <div className="otrosContainer__titulo">
            <h1 className='otrosTitulo'>Otros Servicios</h1>
        </div>
        <div className="otrosContainer__descripcion">
            <ServiceOtherCard img="https://i.pinimg.com/736x/09/00/98/0900986916f2d23f18783531744de7b1.jpg" title=" Mantenimiento, reparación y afinación de baterías e instrumentos de percusión."/>
            <ServiceOtherCard  img="https://i.pinimg.com/736x/67/4a/98/674a98ab2ea0d77929c026d373081db4.jpg" title="
          Venta de accesorios de batería (baquetas, superficies de   practica, entre otros)."/>
            <ServiceOtherCard img="https://i.pinimg.com/736x/fd/e5/a5/fde5a5210357844030d2e4da845d70dc.jpg" title="Clases de batería personalizadas a domicilios"/>
            <ServiceOtherCard img="https://i.pinimg.com/736x/86/ff/73/86ff73f2dcba4ff49fc4d21e99558b1c.jpg" title="Asesoria Para la compra de instrumentos"/>
        </div>
    </section>
  </>
  )
}
