import "./DrummerHouse.css"
import  { Header } from '../Header'
import UncontrolledExample from '../Main'
import { SobreMi } from '../SobreMi'
import { Servicios } from '../Servicios'
import { useState } from "react"
import { Form } from "../Form"
import { Footer } from "../Footer"
import { useForm } from "../../hooks/useForm"
import { Loader } from "../Loader"
import { ParticleBg } from "../Particle"

export const DrummerHouse = () => {

   const [showForm, setShowForm] = useState(false);

   const showChange = () => {
      setShowForm(!showForm);
   }
  return (
    <>
    <ParticleBg/>
        <div className="contenedor">
          <header className="contenedor__header">
            <Header showChange={showChange} />
          </header>
          <section className="contenedor__body">
            {showForm && <Form />}
            {showForm || (
              <>
                <UncontrolledExample />
              </>
            )}
          </section>
          <footer className="contenedor__footer">
         <Footer/>
          </footer>
        </div>
    </>
  );
}
