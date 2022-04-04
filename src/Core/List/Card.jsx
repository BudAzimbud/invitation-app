import React from "react";
import { Card } from "react-bootstrap";

function CardCustom(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.image} loading="lazy" />
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
          <p style={{ fontWeight: "bold" }}>{props.title}</p>
          {props.button}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCustom;
