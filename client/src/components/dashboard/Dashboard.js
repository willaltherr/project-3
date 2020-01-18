import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import FormContainer from "../containers/FormContainer";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "100%", width: "100%"}} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h2>
              <b>Play to win here, {user.name.split(" ")[0]}!</b> 
              <p className="flow-text grey-text text-darken-1">
                You now have better options to win by joining or creating your own local group.
              </p>
            </h2>
            <h4>Create a Group</h4>
            <FormContainer />
            <h4>Join a Group</h4>
            <div></div>
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