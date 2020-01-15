import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Profile.css";
import axios from "axios";

//from image uploader docs
const BASE_URL = 'http://localhost:5000/';

class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  //from Image Uploader Docs
  constructor(props) {
    super(props);
    this.state = {
    images: [],
    imageUrls: [],
    message: ''
    }
  }
  //from image uploader docs
  selectImages = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
    images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
    }

    //from image uploader docs
    uploadImages = () => {
      const uploaders = this.state.images.map(image => {
      const data = new FormData();
      data.append("image", image, image.name);
       
      // Make an AJAX upload request using Axios
      return axios.post(BASE_URL + 'upload', data)
      .then(response => {
      this.setState({
      imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
      });
      })
      });
       
      // Once all the files are uploaded 
      axios.all(uploaders).then(() => {
      console.log('done');
      }).catch(err => alert(err.message));
      }


  render() {
    const { user } = this.props.auth;

    return (
      <div className="container-everything">
      <div style={{ height: "75vh", width: "100%" }} className="container col s5 valign-wrapper">
        <div className="row">
          <div className="landing-copy center-align">

            <h5>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h5>
            <div>
        <br/>
        <div>
          <div className="imageholder">
              <img src="https://www.shareicon.net/data/512x512/2017/02/05/878221_user_512x512.png" alt="profilepicture"></img>
          </div>
        
            <h6>Image Uploader</h6><hr/>
                <div className="">
                    <input className="form-control " type="file" 
                    onChange={this.selectImages} multiple/>
                </div>

              <p className="text-info">{this.state.message}</p>
            <br/><br/><br/>
                <div className="">
                    <button className="btn btn-primary" value="Submit" 
                    onClick={this.uploadImages}>Submit</button>
                </div>
        </div>

        <div className="">
        { 
        this.state.imageUrls.map((url, i) => (
        <div className="" key={i}>
        <img src={BASE_URL + url} className="img-rounded img-responsive"
        alt="not available"/><br/>
        </div>
        ))
        }
        </div>
        </div>
            
          <button
            style={{
              width: "150px",
              borderRadius: "1px",
              letterSpacing: "3.5px",
              marginTop: "1rem"
            }}
            onClick={this.onLogoutClick}
            className="btn hoverable orange accent-3"
          >
            Sign Out
          </button>




          </div>
        </div>
      
      </div>
      <div className="middleLine">

      </div>

      </div>
  
      
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
