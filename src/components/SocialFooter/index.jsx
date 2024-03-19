import React from "react";
import "./SocialFooter.css";
import { FacebookIcon } from "../Svg/Facebook";
import { InstagramIcon } from "../Svg/Instagram";
import { WhatsappIcon } from "../Svg/Whatsapp";
import { Link } from "react-router-dom";

export const SocialFooter = () => {

  const routes = {
    facebook: "https://www.facebook.com/profile.php?id=100064800582592&locale=es_LA",
    instagram: "https://www.instagram.com/johan_sebas00/",
    whatsapp: "https://api.whatsapp.com/send?phone=+573232067061&text=Hola,me gustaria conocer tus servicios!"
  }

  const {facebook,instagram,whatsapp} = routes

  return (
    <div className="social__footer">
      <Link to={facebook} target="_blank" aria-label="go to facebook">
        <FacebookIcon />
      </Link>
      <Link to={instagram} target="_blank" aria-label="go to instagram">
        <InstagramIcon />
      </Link>
      <Link to={whatsapp} target="_blank" aria-label="go to whatsapp">
        <WhatsappIcon/>
      </Link>
    </div>
  );
};
