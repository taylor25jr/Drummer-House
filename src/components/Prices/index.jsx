import * as React from "react";
import { useRef } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import "./Prices.css";
import { BlackCircle } from "../Svg/BlackCircle";
import { WhiteCircle } from "../Svg/WhiteCircle";
import { VectorIcon } from "../Svg/Vector";
import PropTypes from "prop-types";

export default function PricingCards({ handleClick }) {
  const boton1Ref = useRef(null);
  const boton2Ref = useRef(null);

  return (
    <Box
      sx={{
        width: "100%",
        justifyItems: "center",
        alignContent: "center",
        gap: 2,
        gridAutoFlow: "column",
        display: "flex",
      }}
      className="box"
    >
      <Card size="sm" variant="outlined" className="priceCardWhite priceCard">
        <Chip size="sm" variant="outlined" className="spanBasicWhite">
          BASIC
        </Chip>
        <Typography level="h2" className="nacionalesTitle">
          Nacionales
        </Typography>
        <hr className="divider" />
        <List
          size="sm"
          sx={{ mx: "calc(-1 * var(--ListItem-paddingX))", padding: "2px" }}
        >
          <ListItem className="listItemContainer">
            <ListItemDecorator className="classType__container">
              <BlackCircle />
              <h2 className="classesType">Clase</h2>
            </ListItemDecorator>
            <h3 className="classesPrice">$40.000</h3>
          </ListItem>
          <ListItem className="listItemContainer">
            <ListItemDecorator className="classType__container">
              <BlackCircle />
              <h2 className="classesType">Clase mensual</h2>
            </ListItemDecorator>
            <h3 className="classesPrice">$120.000</h3>
          </ListItem>
          <ListItem className="listItemContainer">
            <ListItemDecorator className="classType__container">
              <BlackCircle />
              <h2 className="classesType">Clase mensual x2</h2>
            </ListItemDecorator>
            <h3 className="classesPrice">$200.000</h3>
          </ListItem>
        </List>
        <hr className="divider" />
        <CardActions>
          <Button
            variant="soft"
            name="boton1"
            className="buttonStart"
            endDecorator={<VectorIcon />}
            ref={boton1Ref}
            onClick={() => handleClick(boton1Ref)}
          >
            Empieza ahora
          </Button>
        </CardActions>
      </Card>

      {/* dark card start */}

      <Card
        size="sm"
        variant="outlined"
        className="priceCardWhite priceCard black"
      >
        <Chip size="sm" variant="outlined" className="spanBasicWhite">
          MÁS POPULAR
        </Chip>
        <Typography level="h2" className="nacionalesTitle international">
          Internacionales
        </Typography>
        <hr className="divider" />
        <List
          size="sm"
          sx={{ mx: "calc(-1 * var(--ListItem-paddingX))", padding: "2px" }}
        >
          <ListItem className="listItemContainer">
            <ListItemDecorator className="classType__container">
              <WhiteCircle />
              <h2 className="classesType blacktype">Clase</h2>
            </ListItemDecorator>
            <h3 className="classesPrice blackPrice">$40.000</h3>
          </ListItem>
          <ListItem className="listItemContainer">
            <ListItemDecorator className="classType__container">
              <WhiteCircle />
              <h2 className="classesType blacktype">Clase mensual</h2>
            </ListItemDecorator>
            <h3 className="classesPrice blackPrice">$120.000</h3>
          </ListItem>
          <ListItem className="listItemContainer">
            <ListItemDecorator className="classType__container">
              <WhiteCircle />
              <h2 className="classesType blacktype">Clase mensual x2</h2>
            </ListItemDecorator>
            <h3 className="classesPrice blackPrice">$200.000</h3>
          </ListItem>
        </List>
        <hr className="divider" />
        <CardActions>
          <Button
            variant="soft"
            name="boton2"
            className="buttonStart"
            endDecorator={<VectorIcon />}
            ref={boton2Ref}
            onClick={() => handleClick(boton2Ref)}
          >
            Empieza ahora
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

PricingCards.propTypes = {
  handleClick: PropTypes.func,
};
