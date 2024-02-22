import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialFooter } from "../SocialFooter";

function Main() {

  return (
    <>
      <div className="mainContainer">
        <section></section>
        <section className="mainContainer__textSection">
        <h1 className="mainContainer__title">
        ¡BIENVENIDO AL MUNDO DEL RITMO!
        </h1>
        <p className="mainContainer__text">Descubre el poder de tocar batería</p>
         <Link to="/servicios">
         <Button variant="contained" className="mainContainer__button">
        Inicia ahora
        <img src="/src/assets/arrow-right-circle.svg" alt="" />
      </Button>
         </Link> 
        </section>
        <section className="mainContainer__footer">
         <SocialFooter/>
        </section>
      </div>
    </>
 
  );
}

export default Main;
