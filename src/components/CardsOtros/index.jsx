import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./CardOtros.css";
import PropTypes from "prop-types";
import { CalendarIcon } from "../Svg/Calendar";
import { Link } from "react-router-dom";

export default function ServiceOtherCard({ img, title, description, onButtonCLick }) {
  return (
    <Card className="cardOtherServices">
      <CardMedia
        image={img}
        title="green iguana"
        className="cardOtherServices__img"
      />
      <CardContent className="cardContent">
        <h2 className="cardContentTitle">{title}</h2>
        <p className="CardContentText">{description}</p>
        <article>
        <Link to={onButtonCLick} target="_blank" className="socialLink">
          <span>
            Solicitar 
            </span>
            <CalendarIcon/>
        </Link> 
          </article>
      </CardContent>
    </Card>
  );
}

ServiceOtherCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onButtonCLick: PropTypes.string,
};
