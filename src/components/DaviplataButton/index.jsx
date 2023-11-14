import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function Daviplata() {
  const [open, setOpen] = useState(false);

  return (
    <div className='boxContainer'>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className='buttonContainer bg-black border-danger'
      >
        <img src="https://drive.google.com/uc?export=download&id=1LZfA5W36xZjyA2ud8Yrsa9S2_Bc98env" alt="bancolombia" className='logo' />
        <h2 className='titulo'>Daviplata</h2>
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
        <h2 className='parrafo'>323-206-7061</h2>
        </div>
      </Fade>
    </div>
  );
}

export default Daviplata;