import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Col, Row, Container } from "../containers/FluidContainer"
import "./Profile.css";

class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
      <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="landing-copy">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
            
          </div>
      </div>
        
           </Col>
        
            <Col size="md-6">
             <div style={{ height: "75vh" }} className="profileGraph">

             </div>

           </Col>

        </Row>

        <Row>
          <div className="buttonDiv">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large blue accent-3"
            >
              Logout
            </button>
          </div>
        </Row>

    </Container>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
