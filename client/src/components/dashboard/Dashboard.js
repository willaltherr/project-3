import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import FormContainer from "../containers/FormContainer";
import "./dashboard.css";
import AccordionButton from "./accordian";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "100vh", width: "100vw"}} className = "dash-container">

      <div className="container valign-wrapper">
          <div className="form center-align">
            <h2>
              <b>Get started here, {user.name.split(" ")[0]}!</b> 
              <p className="flow-text">
                Join an existing group, or invite your friends and create your own group!
              </p>
            </h2>
            <p>
              <AccordionButton style = {{position: "absolute"}} />
            </p>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="waves-effect waves-light hoverable"
            >
              Logout
            </button>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);