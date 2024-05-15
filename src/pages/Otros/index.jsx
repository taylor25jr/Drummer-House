import React from "react";
import "./Otros.css";
import ServiceOtherCard from "../../components/CardsOtros";
import { Footer } from "../../components/Footer";
import { UpArrowButton } from "../../components/UpArrow";
import images from "../../assets/images";

export const Otros = () => {

  const route = (msg) => `https://api.whatsapp.com/send?phone=+573232067061&text=${msg}`;

  return (
    <>
      <section className="otrosContainer">
        <div className="otrosContainer__titulo">
          <h1 className="otrosTitulo">Otros Servicios</h1>
        </div>
        <div className="otrosContainer__descripcion">
          <ServiceOtherCard
            img={images.img4}
            title=" Mantenimiento, reparación y afinación de baterías o percusión."
            description="
            Ofrecemos servicios especializados en el mantenimiento, reparación y afinación de baterías y percusiones, brindando soluciones personalizadas para optimizar el rendimiento.
"           onButtonCLick={route("Hola! estoy interesado en un sevicios especializados")}
          />
          <ServiceOtherCard
            img={images.img11}
            title="
          Venta de accesorios de batería."
            description="Somos tu destino principal para la venta de accesorios de batería,
             donde ofrecemos una amplia gama de productos diseñados para potenciar tu experiencia musical."
             onButtonCLick={route("Hola! estoy interesado en un accesorio de Bateria")}
          />
          <ServiceOtherCard
            img={images.img3}
            title="Clases de batería personalizadas a domicilios."
            description="
            Toma clases de batería desde la comodidad de tu hogar con nuestras clases personalizadas. Nos enorgullece ofrecer una experiencia educativa única y adaptada a tus necesidades individuales."
            onButtonCLick={route("Hola! Me gustaria obtener clases perzonalizadas")}
          />
          <ServiceOtherCard
            img={images.img10}
            title="Asesoria Para la compra de instrumentos."
            description="
            Facilitamos tu elección del instrumento perfecto con nuestro servicio de asesoría para la compra de instrumentos. 
            estaré dedicado a guiarte a través del emocionante mundo musical,"
            onButtonCLick={route("Hola! estoy interesado en una Asesoria profesional")}
          />
        </div>
      </section>
      <Footer />
      <UpArrowButton/>
    </>
  );
};
