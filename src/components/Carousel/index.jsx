import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://drive.google.com/uc?export=download&id=1GhDg7m8AcFH0d2Rhck1heb__rNi6si__" alt="" className='carousel__img' />
        <Carousel.Caption>
          <h3 className='carousel__caption'>Bienvenido!</h3>
          <p className='carousel__description'>Soy Johan!👋🏾 </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://drive.google.com/uc?export=download&id=1iQ16-ZV0sXdkwzkIkj1oxcw6ohCpFxnk" alt="" className='carousel__img'/>
        <Carousel.Caption>
          <h3 className='carousel__caption'>baterista revelación</h3>
          <p className='carousel__description'>En el ‘Drum Fest’ del año 2019, evento organizado en la ciudad de Barranquilla</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://drive.google.com/uc?export=download&id=16BgXmkTSNwqKCRm1m4iWakvhBu64D97O" alt="" className='carousel__img'/>
        <Carousel.Caption>
          <h3 className='carousel__caption'>Expodrummer 2020</h3>
          <p className='carousel__description'>
          Participé junto a bateristas como Iván Olivera, Isaac Valenzuela, Carlos Girón y Robiro Márquez desarrollando cada vez más su potencial en la batería.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;