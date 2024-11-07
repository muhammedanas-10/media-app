import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFilm } from "react-icons/fa6";

    import { MDBInput } from 'mdb-react-ui-kit';

function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='text-center m-5'>
      <button className='btn btn-light' onClick={handleShow}>Add Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
          <FaFilm /> Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill following details</p>
          <form style={{color: 'white'}}>
          <MDBInput label="Add Category" id="typeText" type="text" />
         
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCategory