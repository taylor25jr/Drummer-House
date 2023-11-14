import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import "./ButtonOtros.css"

function ButtonOtros() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className='buttonOtros btn-outline-danger'
        variant="outline-primary"
    
      >
        Ver mas
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          <p className='text-white mt-3'>
         <li className='mt-4 otrosContainer__descripcion__item'> Mantenimiento, reparación y afinación de baterías e instrumentos de percusión. </li>
         <li className='mt-4 otrosContainer__descripcion__item'> Asesoría para la compra de instrumentos de percusión.
          Venta de accesorios de batería (baquetas, superficies de   practica, entre otros). </li>
         <li className='mt-4 otrosContainer__descripcion__item'>Clases de batería personalizadas a domicilios.</li>
            </p>
        </div>
      </Fade>
    </>
  );
}

export default ButtonOtros;