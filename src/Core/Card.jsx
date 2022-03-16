import React from "react";
import { Button, Card } from "react-bootstrap";

function CardCustom(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <p style={{fontWeight:'bold'}}>{props.title}</p>
          {props.button}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCustom;
