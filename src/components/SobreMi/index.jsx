import React, { useEffect } from 'react'
import "./SobreMi.css"
import BioCard from '../AboutMe';

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
    <>
    <section className='aboutContainer'>
      <h1>Sobre mi</h1>
      <BioCard/>
    
    </section>
    <section>
    </section>
  </>
  )
}
