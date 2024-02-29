import "./DrummerHouse.css";
import { Header } from "../Header";
import { SobreMi } from "../SobreMi";
import { Servicios } from "../Servicios";
import { useEffect, useState } from "react";
import { Otros } from "../Otros";
import { Form } from "../Form";
import Main from "../Main";
import ModalForm from "../Modal";
import { Error404 } from "../Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const DrummerHouse = () => {
  const [show, setShow] = useState(false),
    [formShow, setFormShow] = useState(null),
    [gradientHeader, setGradientHeader] = useState(true),
    [footerColor, setFooterColor] = useState(false);

    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const unsetGradient = () => setGradientHeader(false);
  const setGradient = () => setGradientHeader(true);


  const handleClick = (ref) => {
    if (ref.current.name === "boton1") {
      setFormShow(true);
      handleShow();
    }
    if (ref.current.name === "boton2") {
      setFormShow(false);
      handleShow();
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className="contenedor">
          <header className="contenedor__header">
            <Header
              setGradient={setGradient}
              unsetGradient={unsetGradient}
              gradientHeader={gradientHeader}
              setFooterColor={setFooterColor}
            />
          </header>
          <section className="contenedor__body">
            <ModalForm
              show={show}
              handleClose={handleClose}
              formShow={formShow}
            />
            <Routes>
              <Route path="/" element={<Main unsetGradient={unsetGradient} />} />
              <Route
                path="/servicios"
                element={<Servicios handleClick={handleClick} />}
              />
              <Route
                path="/sobre-mi"
                element={<SobreMi footerColor={footerColor} />}
              />
              <Route path="/otros" element={<Otros/>} />
              <Route path="/contacto" element={<Form />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
};
