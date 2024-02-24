import * as React from "react";
import { useState, useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
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
        <h3 className="ContainerPensumCard__title">
          {title}
        </h3>
      </div>
      <AspectRatio minHeight="120px" maxHeight="150px">
        <img src={img} srcSet={img} loading="lazy" alt="cardLogo" />
      </AspectRatio>
      <div className="cardText">
        <div className="cardText__description">
          <p className="cardText__description__body">{description}</p>
        </div>
        <div className="cardText__subtitle">
          <h3
          className="cardText__subtitle__h3"
          >
            Contenido
          </h3>
        </div>
        <ul className="contentList">
          {topicList.map((el, index) => (
            <li className="contentList__item" key={index} value={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

PensumCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  topics: PropTypes.array,
};
