import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function Nequi() {
  const [open, setOpen] = useState(false);

  return (
    <div className='boxContainer'>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className='buttonContainer bg-black border-primary'
      >
        <img src="https://drive.google.com/uc?export=download&id=1r9fOR_i4weUsJmfTzVuLmLMmRLTZcbUO" alt="bancolombia" className='logo' />
        <h2 className='titulo'>Nequi</h2>
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
        <h2 className='parrafo'>323-206-7061</h2>
        </div>
      </Fade>
    </div>
  );
}

export default Nequi;