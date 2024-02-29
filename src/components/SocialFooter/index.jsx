import React from "react";
import "./SocialFooter.css";
import { FacebookIcon } from "../Svg/Facebook";
import { InstagramIcon } from "../Svg/Instagram";
import { WhatsappIcon } from "../Svg/Whatsapp";
import { Link } from "react-router-dom";

export const SocialFooter = () => {

  const routes = {
    facebook: "https://www.facebook.com/search/top?q=johan%20sebastian",
    instagram: "https://www.instagram.com/johan_sebas00/",
    whatsapp: "https://api.whatsapp.com/send?phone=3008559576&text=hola,soy luis"
  }

  const {facebook,instagram,whatsapp} = routes

  return (
    <div className="social__footer">
      <Link to={facebook} target="_blank">
        <FacebookIcon />
      </Link>
      <Link to={instagram} target="_blank">
        <InstagramIcon />
      </Link>
      <Link to={whatsapp} target="_blank">
        <WhatsappIcon/>
      </Link>
    </div>
  );
};
