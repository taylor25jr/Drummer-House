import React from 'react'
import LightSpeed from 'react-reveal/LightSpeed';
import "./Footer.css"

export const Footer = () => {
  return (
      <>
      <LightSpeed left>
        <section className='footer'>
        <h2 className='social__creator'>Made by Taylor</h2>
       <article className="social">
        <i
          className="bi bi-facebook icon"
          style={{ color: "#ffffff", fontSize: "25px", marginRight: "10px" }}
          ></i>
        <i
          className="bi bi-whatsapp icon"
          style={{ color: "#ffffff", fontSize: "25px", marginRight: "10px" }}
          ></i>
        <i
          className="bi bi-instagram icon"
          style={{ color: "#ffffff", fontSize: "25px", marginRight: "10px" }}
          ></i>
      </article>
          </section>
      </LightSpeed>
      </>

  )
}
