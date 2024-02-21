import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {

  return (
    <>
      <div className="mainContainer">
        <h1 className="mainContainer__title">
          Welcome to the World of Rhythm!
        </h1>
        <p className="mainContainer__text">Discover the Power of Drumming</p>
         <Link to="/servicios">
         <Button className="mainContainer__button" variant="danger">
         Get started!
         </Button>
         </Link> 
      </div>
    </>
 
  );
}

export default Main;
