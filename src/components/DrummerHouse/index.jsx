import "./DrummerHouse.css"
import  { Header } from '../Header'
import UncontrolledExample from '../Carousel'
import { SobreMi } from '../SobreMi'
import { Servicios } from '../Servicios'
import { useState } from "react"
import { Form } from "../Form"
import { Footer } from "../Footer"



export const DrummerHouse = () => {

   const [showForm, setShowForm] = useState(false);

   const showChange = () => {
      setShowForm(!showForm);
   }
  return (
   <>

        <div className='contenedor'>
        <header className='contenedor__header'>
         <Header showChange={showChange}/>
        </header>
        <section className='contenedor__body'>
          {showForm && <Form/>}
           {showForm || 
           <>
           <UncontrolledExample/>
            <SobreMi/>
            <Servicios/>
           </>
            }
        </section>
        <footer className="contenedor__footer">
         <Footer/>
        </footer>
        </div>

   </>
   
  )
}
