import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import FormContainer from "../containers/FormContainer";
import "./dashboard.css";
import FunButton from "./accordian";
import AccordionButton from "./accordian";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className = "dash-container">

      <div style={{ height: "100%", width: "100%"}} className="container valign-wrapper">
        <div className="row">
          <div className="form center-align">
            <h2>
              <b>Play here to win, {user.name.split(" ")[0]}!</b> 
              <p className="flow-text">
                Join an existing group, or invite your friends and create your own group!
              </p>
            </h2>
            <p>
              <AccordionButton />
            </p>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
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