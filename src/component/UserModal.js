import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import UserLocation from "./UserLocation";
function UserModal({ user }) {
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
        <Modal.Body>
          {" "}
          <Image src={user?.picture.large} rounded />
        </Modal.Body>
        <Modal.Body>Email: {user?.email}</Modal.Body>
        <Modal.Body>Phone: {user?.phone}</Modal.Body>
        <Modal.Body>Country: {user?.location.country}</Modal.Body>
        <Modal.Body>City: {user?.location.city}</Modal.Body>
        <Modal.Body>Age: {user?.dob.age}</Modal.Body>
        <Modal.Body>
          Latitude: {user?.location.coordinates.latitude} Longitude:{" "}
          {user?.location.coordinates.longitude}
        </Modal.Body>

        <UserLocation location={user?.location.coordinates}></UserLocation>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal;
