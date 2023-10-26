import React, { useEffect } from 'react'
import "./SobreMi.css"

export const SobreMi = () => {

    useEffect(() => {
      const handleScroll = () => {
        const $img = document.querySelector('#about'),
         $info = document.querySelector('#container-info'),
         imgDistance = window.innerHeight - $img.getBoundingClientRect().top;
        
        if (imgDistance >= 50) {
          $img.classList.add('aboutMeEffect');
          $info.classList.add('aboutContainerEffect');
        } else{
          $img.classList.remove('aboutMeEffect');
          $info.classList.remove('aboutContainerEffect');
        }
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <section className='aboutContainer'>
    <img src="../../../src/img/about-me-fotor-2023101719130.png" alt="" className='aboutContainer__img' id='about'/>
    <article className="aboutContainer__info" id='container-info'>
        <h2>SOBRE MI</h2>
        <p>Johan Sebastián , Es un joven de 22 años, nacido en la ciudad de Barranquilla. Hijo único, criado por su abuela paterna.
        Desde su primer año de edad mostró sus habilidades rítmicas por eso a los cuatro años ya ejecutaba instrumentos de percusión folclórica. Posteriormente en la iglesia aprendió a tocar bateria, desarrollando su talento  y en donde hoy en día sigue creciendo su ministerio musical.
        </p>
    </article>
    </section>
  
  )
}
