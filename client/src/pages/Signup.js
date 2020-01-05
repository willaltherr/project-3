import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class SignUp extends Component {



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Please Submit Your Information</h1>
            </Jumbotron>
            <form>
              <Input class="text-center"
                name="email"
                placeholder="Email (required)"
              />
              <Input class="text-center"
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
               // disabled={!(this.state.author && this.state.title)}
                //onClick={this.handleFormSubmit}
              >
                Signup
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;