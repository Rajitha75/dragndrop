import Card from "react-bootstrap/Card";
import React from "react";

function LabelCard(props) {
   
    return (
        <Card bg={props.bgcolor}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
   }

   export default LabelCard;