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
        <img src="data:image/png;base64,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" alt="bancolombia" className='logo' />
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