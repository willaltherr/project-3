import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { LoginInput, TextArea, LoginBtn } from "../components/Form";

class Login extends Component {



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
              <h1>Please Enter Your Login Information</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-7">
            <h1>Cool Image Can Go Here</h1>
          </Col>
          <Col size="md-5">
            <form>
              <h3 class="text-left pb-2">Login Here:</h3>
              <LoginInput class="text-left col-10"
                name="email"
                placeholder="Email (required)"
              />
              <LoginInput class="text-left col-10"
                name="password"
                placeholder="Password (required)"
              />
              <LoginBtn class=""
               // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Login
              </LoginBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;