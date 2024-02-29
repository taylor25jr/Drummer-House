import "./main.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialFooter } from "../SocialFooter";
import { LogoArrow } from "../Svg/LogoArrow";

function Main({unsetGradient}) {

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
         <Button variant="contained" className="mainContainer__button" onClick={unsetGradient}>
        <p className="mainContainer__button__paragraph">Inicia ahora</p>
        <LogoArrow/>
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
