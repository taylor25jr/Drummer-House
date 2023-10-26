import React from 'react'
import "./DrummerHouse.css"
import  { Header } from '../Header'
import UncontrolledExample from '../Carousel'
import { SobreMi } from '../SobreMi'
import { Servicios } from '../Servicios'


export const DrummerHouse = () => {
  return (
        <div className='contenedor'>
        <header className='contenedor__header'>
           <Header/>
        </header>
        <section className='contenedor__body'>
           <UncontrolledExample/>
            <SobreMi/>
            <Servicios/>
        </section>
        </div>
      
  )
}
