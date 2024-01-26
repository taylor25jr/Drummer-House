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
        <img src="data:image/png;base64,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" alt="bancolombia" className='logo' />
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