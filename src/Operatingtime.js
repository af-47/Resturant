import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ListGroup } from 'react-bootstrap';

function Operatingtime({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
       <Button variant="primary" onClick={handleShow}>
        Operating hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OperatingHours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
         <ListGroup.Item>MONDAY | {timedata.Monday}</ListGroup.Item>
         <ListGroup.Item>TUESDAY | {timedata.Tuesday}</ListGroup.Item>
         <ListGroup.Item>WEDNESDAY | {timedata.Wednesday}</ListGroup.Item>
         <ListGroup.Item>THURSDAY | {timedata.Thursday}</ListGroup.Item>
         <ListGroup.Item>FRIDAY | {timedata.Friday}</ListGroup.Item>
         <ListGroup.Item>SATURDAY | {timedata.Saturday}</ListGroup.Item>
         <ListGroup.Item>SUNDAY| {timedata.Sunday}</ListGroup.Item>
       </ListGroup>
        </Modal.Body>
       
      </Modal>
      
    </>
  )
}

export default Operatingtime
