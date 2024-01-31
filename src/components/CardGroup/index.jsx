import * as React from 'react';
import { useState,useEffect } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import "./CardGroup.css"
import { List, ListItem } from '@mui/material';

export default function PensumCard({img,title,description,topics}) {

    const [topicList, setTopicList] = useState([]);

    useEffect(() => {
        const handleSetTopic = () => {
        setTopicList([...topicList,topics]); 
        }
        handleSetTopic();
    
      return () => {
        handleSetTopic();
      }
    }, [])
    
   

  return (
    <Card className="ContainerPensumCard">
      <div>
        <Typography level="title-lg">{title}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
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
            <List >
                {topicList.map((el, index) => (
                  <ListItem key={index}>
                   {el}
                  </ListItem>
                ))}
            </List>
        </div>
      </CardContent>
    </Card>
  );
}

//finalizar las viñetas