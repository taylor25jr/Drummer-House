import "./Success.css";
import 'react-bootstrap';

export const SuccessMessage = () => {
  return (
    <div className="alert alert-success mt-2 text-center"  role="alert">
      <strong>Envio exitoso! <br />
       Nos pondremos en contacto contigo lo mas pronto.</strong> 
    </div>
  );
};
