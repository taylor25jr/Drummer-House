import React from "react";
import "./Otros.css";
import ServiceOtherCard from "../CardsOtros";
import { Footer } from "../Footer";

export const Otros = () => {
  return (
    <>
      <section className="otrosContainer">
        <div className="otrosContainer__titulo">
          <h1 className="otrosTitulo">Otros Servicios</h1>
        </div>
        <div className="otrosContainer__descripcion">
          <ServiceOtherCard
            img="https://i.pinimg.com/564x/91/fe/e9/91fee9eaecb38b5ce901984e81fb3520.jpg"
            title=" Mantenimiento, reparación y afinación de baterías o percusión."
            description="
            Ofrecemos servicios especializados en el mantenimiento, reparación y afinación de baterías y percusiones, brindando soluciones personalizadas para optimizar el rendimiento.
"
          />
          <ServiceOtherCard
            img="https://i.pinimg.com/736x/67/4a/98/674a98ab2ea0d77929c026d373081db4.jpg"
            title="
          Venta de accesorios de batería."
            description="Somos tu destino principal para la venta de accesorios de batería,
             donde ofrecemos una amplia gama de productos diseñados para potenciar tu experiencia musical."
          />
          <ServiceOtherCard
            img="https://i.pinimg.com/736x/fd/e5/a5/fde5a5210357844030d2e4da845d70dc.jpg"
            title="Clases de batería personalizadas a domicilios."
            description="
            Toma clases de batería desde la comodidad de tu hogar con nuestras clases personalizadas. Nos enorgullece ofrecer una experiencia educativa única y adaptada a tus necesidades individuales."
          />
          <ServiceOtherCard
            img="https://i.pinimg.com/736x/86/ff/73/86ff73f2dcba4ff49fc4d21e99558b1c.jpg"
            title="Asesoria Para la compra de instrumentos."
            description="
            Facilitamos tu elección del instrumento perfecto con nuestro servicio de asesoría para la compra de instrumentos. 
            estaré dedicado a guiarte a través del emocionante mundo musical,"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};
