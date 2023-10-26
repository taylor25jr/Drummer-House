import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import "./BancolombiaButton.css"

function Bancolombia() {
  const [open, setOpen] = useState(false);

  return (
    <div className='boxContainer'>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className='buttonContainer bg-black border-warning'
      >
        <img src="../../../src/img/LogoBancolombia.png" alt="bancolombia" className='logo' />
        <h2 className='titulo'>Bancolombia</h2>
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
        <h2 className='parrafo'>957-000044-26 Ahorros</h2>
        </div>
      </Fade>
    </div>
  );
}

export default Bancolombia;