import * as React from "react";
import { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "./CardGroup.css";
import PropTypes from "prop-types";

export default function PensumCard({ img, title, description, topics }) {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    const handleSetTopic = () => {
      setTopicList([...topics]);
    };
    handleSetTopic();
  }, [topics]);

  return (
    <Card className="ContainerPensumCard" id="cards">
      <div>
        <Typography level="title-lg" textTransform="uppercase">
          {title}
        </Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="150px">
        <img src={img} srcSet={img} loading="lazy" alt="cardLogo" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">{description}</Typography>
          <Typography
            fontSize="lg"
            fontWeight="lg"
            textTransform={"uppercase"}
            textColor={"danger.400"}
            marginTop={"10px"}
          >
            Contenido
          </Typography>
          <ul className="contentList">
            {topicList.map((el, index) => (
              <li key={index} value={el}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

PensumCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  topics: PropTypes.array,
};
