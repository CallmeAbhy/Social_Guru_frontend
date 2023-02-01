import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import signUp from './Organization'
function Demo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button bg="dark" onclick={signUp}>Verfify</Button>
      <Button bg="dark" onClick={handleShow}>Register</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h7>Your OTP is Sent Successfully to your Registered Email Id</h7>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your OTP</Form.Label>
        <Form.Control type="integer" placeholder="Enter Your 4 digit Otp" />
        <Form.Text className="text-muted">
          Do not share your OTP with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="dark" type="submit">
        Resend OTP
      </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Demo;