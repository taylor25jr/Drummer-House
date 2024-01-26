import "bootstrap-icons/font/bootstrap-icons.css";
import "./main.css";
import Button from 'react-bootstrap/Button';
// import Fade from 'react-reveal/Fade';
import { useEffect } from "react";
import { Header } from "../Header";

function Main() {

  return (
    <>
      <div className="mainContainer">
      {/* <Fade> */}
        <h1 className="mainContainer__title">
          Welcome to the World of Rhythm!
        </h1>
        <p className="mainContainer__text">Discover the Power of Drumming</p>
        {/* </Fade> */}
        {/* <Fade bottom> */}
          <Button className="mainContainer__button" variant="danger">
            Get started!
          </Button>
          {/* </Fade> */}
      </div>
    </>
 
  );
}

export default Main;
