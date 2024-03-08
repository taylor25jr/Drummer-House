import Modal from 'react-bootstrap/Modal';
import {WindowForm} from '../WindowForm'
import PropTypes from 'prop-types';


function ModalForm({show,handleClose,formShow}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Contactate conmigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <WindowForm formShow={formShow} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  formShow: PropTypes.bool,
}

