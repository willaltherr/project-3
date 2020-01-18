import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import FormContainer from "../containers/FormContainer"
import "./accordian.css"


function AccordionButton() {
  return(
  <Accordion eventKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Create a Group
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>            
          <h4>Create a Group</h4>
            <FormContainer />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Join a Group
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <h4>Join a Group</h4>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

  )};

  export default AccordionButton;