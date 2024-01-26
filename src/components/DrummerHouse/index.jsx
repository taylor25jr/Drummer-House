import "./DrummerHouse.css";
import { Header } from "../Header";
import { SobreMi } from "../SobreMi";
import { Servicios } from "../Servicios";
import { Otros } from "../Otros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "../Form";
import Main from "../Main";

export const DrummerHouse = () => {
  return (
    <>
      <BrowserRouter>
        <div className="contenedor">
          <header className="contenedor__header">
            <Header />
          </header>
          <section className="contenedor__body">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/servicios" element={<Servicios />} />
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
