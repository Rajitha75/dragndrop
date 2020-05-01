import Card from "react-bootstrap/Card";
import React from "react";

function WidgetCard(props) {
   
    return (
        <Card  style={{ width: '240px', float:'left', margin:'20px' }}>
        <Card.Body>
            <Card.Header>Queen Widget</Card.Header>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
        </Card.Body>
      </Card>
    );
   }

   export default WidgetCard;