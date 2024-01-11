import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

export const Footer = () => {
  return (
        <footer className="footer-section">
        <div className="container">
            <div className="footer-content pt-5 pb-3 d-flex justify-content-center border-top">
                <div className="row d-flex justify-content-center">
                    <div className="mb-50 align-items-center">
                        <div className="footer-widget">
                            <div className="footer-logo d-flex">
                                <img src="https://drive.google.com/uc?export=download&id=1fR05iaPoF2x8C4oUJ8XfOe89UqNtrLg1" className="img-fluid" alt="logo"/>
                            </div>
                            <div className="footer-social-icon d-flex flex-column justify-content-center">
                                <span className='text-center'>Follow me</span>
                                <div className='d-flex justify-content-evenly'>
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

  )
}
