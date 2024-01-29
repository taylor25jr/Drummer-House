import "./DrummerHouse.css";
import { Header } from "../Header";
import { SobreMi } from "../SobreMi";
import { Servicios } from "../Servicios";
import  { useState } from 'react';
import { Otros } from "../Otros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "../Form";
import Main from "../Main";
import ModalForm from "../Modal";


export const DrummerHouse = () => {
  
  const [show, setShow] = useState(false);
  const [formShow, setFormShow] = useState(null);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (ref) => {
    console.log("hola")
    if(ref.current.name === "boton1")  {
     setFormShow(true);
     handleShow();
    }
    if(ref.current.name === "boton2")  {
     setFormShow(false);
     handleShow();
    }
   };
 

  return (
    <>
      <BrowserRouter>
        <div className="contenedor">
          <header className="contenedor__header">
            <Header />
          </header>
          <section className="contenedor__body">
            <ModalForm show={show} handleClose={handleClose} formShow={formShow} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/servicios" element={<Servicios handleClick={handleClick} />} />
              <Route path="/sobre-mi" element={<SobreMi/>} />
              <Route path="/otros" element={<Otros/>}/>
              <Route path="/contacto" element={<Form/>}/>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
};
