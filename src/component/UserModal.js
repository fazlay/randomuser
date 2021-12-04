import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';
function UserModal({user}) {
console.log(user?.email);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        See Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Image src={user?.picture.large} rounded /></Modal.Body>
        <Modal.Body>Email: {user?.email}</Modal.Body>
        <Modal.Body>Phone: {user?.phone}</Modal.Body>
        <Modal.Body>Country: {user?.location.country}</Modal.Body>
        <Modal.Body>City: {user?.location.city}</Modal.Body>
        <Modal.Body>Age: {user?.dob.age}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal