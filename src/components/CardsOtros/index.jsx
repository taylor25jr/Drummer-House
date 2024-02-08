import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./CardOtros.css"

export default function ServiceOtherCard({img,title}) {
  return (
<div className="contenedorOtros">
  <div className="contenedor-cards">
    <div className="contenedor-card-item">
      <div className="contenedor-card-item-wrapper">
        <img src={img} alt="" />
        <div className="contenedor-info">
          <div className="info">
            <p className="titulo">{title}</p>
            <span className="categoria">click para obtenerlo</span>
          </div>
          <div className="fondo"></div>
        </div>
      </div>
    </div>
  </div>
</div>

    // <Card classNameName='containerCardOtros'>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="200"
    //       image={img}
    //       alt="green iguana"
    //       classNameName='cardImgContainer'
    //     />
    //     <CardContent classNameName='cardContent'>
    //       <p classNameName='ContainerCard__title'>
    //         {title}
    //       </p>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions classNameName='buttonGetIt' >
    //     <Button variant='contained' size="small" color="primary" >
    //     <Typography fontWeight="lighter" color="white" fontFamily="sans-serif" textTransform="capitalize" >
    //         Get it
    //       </Typography>
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}