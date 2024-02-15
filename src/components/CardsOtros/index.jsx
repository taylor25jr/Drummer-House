import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./CardOtros.css";
import PropTypes from "prop-types";

export default function ServiceOtherCard({ img, title, description }) {
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
        <Button size="small">Request</Button>
      </CardContent>
    </Card>
  );
}

ServiceOtherCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
