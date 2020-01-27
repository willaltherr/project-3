import React, {Component} from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import FormContainer from "../containers/FormContainer"
import "./accordian.css"
import moment from "moment";

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

    console.log('games: ', this.state.games);
  }

  render() {
    console.log("hello", this.state.games)
    return(
      <Accordion eventKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} 
            style={{fontFamily: "monospace"}} 
            variant="link" eventKey="0">
              Create a Group
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>            
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
                <div className="gamesText">
                  <table>
                    <tr>
                      <th>Group Name</th>
                      <th>Jackpot</th>
                      <th>Buy-In</th>
                      <th className="join">Join Group</th>
                    </tr>
                  {this.state.games.map(game => (
                    <tr> 
                      {game.name}
                      <td>${game.dollar}</td>
                      <td>${game.cost}</td>
                      <td>{moment(game.time).format('ll')}</td>
                      <td><a href={`/gamelist/${game._id}`}><button className="joinBtn">Join</button></a></td>
                    </tr>
                  )) }
                  </table>
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
};

  export default AccordionButton;