import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from '../Form'

function ModalForm({show,handleClose,handleShow}) {


  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title> Contactate conmigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;