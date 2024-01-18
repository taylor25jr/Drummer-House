import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
import { useEffect } from "react";
import { Footer } from "../Footer";

function UncontrolledExample() {

  useEffect(() => {
    const handleScroll = () => {
      const $cards = document.querySelectorAll("#card");

      $cards.forEach((card) => {
        card.classList.add("card-effect");
      });
    };
    handleScroll();

    return () => {
      handleScroll()
    };
  }, []);

  return (
    <div className="externalContainer">
      <div className="mainContainer">
        <div className="mainContainer__backContainer" id="card">
          <iframe
            className="mainContainer__backContainer__iframe"
            src="https://www.youtube.com/embed/0W35CciDl7A?si=C0riiQe4jT1UOoxy&amp;controls=0&amp;start=108&autoplay=1&mute=1&showinfo=0&disablekb=1"
            title="YouTube video player"
            allow="autoplay loop;"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <section className="mainContainer__description" id="card">
          <h1 className="mainContainer__description__titulo">
            Hey! Soy Johan Sebas
          </h1>
          <p className="mainContainer__description__parrafo">
            Soy Musico y baterista 
          </p>
        </section>
      </div>
    </div>
  );
}

export default UncontrolledExample;
