import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import UserModal from "./UserModal";

const SingleUser = ({ user }) => {

  const { gender, name, picture } = user;

  return (
    <>
     
 <Col>
        <Card>
          <Card.Img variant="top" src={picture.large} />
          <Card.Body>
            <Card.Title>{`${name.title} ${name.first} ${name.last}`}</Card.Title>
            <Card.Text>
             Gender :{gender}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <UserModal user={user}></UserModal>
          </Card.Footer>
        </Card>
        
        </Col>
    
   
    </>
  );
};


export default SingleUser;
