import React, {Component} from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import FormContainer from "../containers/FormContainer"
import "./accordian.css"


class AccordionButton extends Component {
  state = {
    groups:[],
    games: []
  }
  
  
  // constructor() {
  //   super()
  //   this.state = {
  //     groups: [],
  //     games: [],

  //   }
  // }

  componentDidMount() {
    // get request for existing groups
  }
  
  updateParent = (games) => {
    this.setState({
      games: games
    })
  }

  render() {
    console.log("hello", this.state.games)
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
                  <FormContainer 
                    updateParent={this.updateParent}
                  
                  />
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
                <div>
                  {this.state.games.map(game => (
                    <div> 
                      {game.name}
                      </div>
                  )) }
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
};

  export default AccordionButton;