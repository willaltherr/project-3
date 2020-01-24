import React, { Component } from "react";
import API from "../../utils/api";
import Axios from 'axios';


/* Import Components */
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";
import { json } from "body-parser";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        // games: [],
        name: "",
        age: "",
        dollar: "",
        time: "",
        gender: "Public",
        about: "",
        posts: []
      },

      genderOptions: ["Private", "Public"],
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleDollar = this.handleDollar.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

// Get Games into Join Games
componentDidUpdate = () => {
  this.getGamePost();
}

getGamePost = () => {
  Axios.get('/api')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received!');
    })
    .catch(() => {
      alert('Error retrieving data!!');
    });
}

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    this.loadGames();
  }

  loadGames = () => {
    API.getGames()
      .then(res => {
        console.log('res', res)
        this.props.updateParent(res.data)
        this.setState({ name: "", age: "", dollar: "", time: "", gender: "", about: "" })
        // this.setState({
        //   games: res.data,
        //   newUser: {
        //     games: [],
        //     name: "",
        //     age: "",
        //     dollar: "",
        //     time: "",
        //     gender: "Public",
        //     about: ""
        //   },
        // })
      })

      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.name)
    let keys = Object.keys(this.state.newUser);
    console.log("new user test", this.state.newUser);
    if (keys.every(item => this.state.newUser[item])) {
      API.saveGame({
        name: this.state.newUser.name,
        age: this.state.newUser.age,
        dollar: this.state.newUser.dollar,
        time: this.state.newUser.time,
        gender: this.state.newUser.gender,
        about: this.state.newUser.about,
      })
        .then(res => {
          console.log('We did the thing');
          console.log(res)
          this.loadGames();
        })
        .catch(err => console.log(err));
    }
  };

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleDollar(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          dollar: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTime(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          time: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  // handleFormSubmit(e) {
  //   e.preventDefault();
  //   let userData = this.state.newUser;

  //   fetch("http://example.com", {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   }).then(response => {
  //     response.json().then(data => {
  //       console.log("Successful" + data);
  //     });
  //   });
  // }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        dollar: "",
        time: "",
        gender: "",
        skills: [],
        about: ""
      }
    });
  }

  render() {

    console.log(this.state)
    return (
      <>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            inputtype={"text"}
            title={"Group Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your group"}
            handlechange={this.handleInput}
          />{" "}
          {/* Number of Players */}
          <Input
            inputtype={"number"}
            name={"age"}
            title={"Number of Players"}
            value={this.state.newUser.age}
            placeholder={"Enter number of players"}
            handlechange={this.handleAge}
          />{" "}
          {/* Maximum Winnings */}
          <Input
            inputtype={"number"}
            name={"dollar"}
            title={"Maximum Winning Amount"}
            value={this.state.newUser.dollar}
            placeholder={"Enter maximum dollar amount for winner"}
            handlechange={this.handleDollar}
          />{" "}
          {/* Pick Date */}
          <Input
            inputtype={"date"}
            name={"time"}
            title={"Pick Drawing Date"}
            value={this.state.newUser.time}
            placeholder={"Pick the date you want the drawing to occur"}
            handlechange={this.handleTime}
          />{" "}
          {/* Selection */}
          <Select
            title={"Private or Public"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            handlechange={this.handleInput}
            placeholder={"Select Group Type"}
          />{" "}
          {/* About */}
          <TextArea
            title={"Group Details"}
            rows={5}
            value={this.state.newUser.about}
            name={"currentPetInfo"}
            handlechange={this.handleTextArea}
            placeholder={"Provide details about your group"}
          />
          {/* About you */}
          <Button
            disabled={!(this.state.name && this.state.age && this.state.dollar && this.state.time && this.state.gender)}
            onClick={this.handleFormSubmit}
            type={"primary"}
            title={"Create group"}
            style={buttonStyle}
          />{" "}
          {/*Submit */}
          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
          {/* Clear the form */}
        </form>
        <p>{JSON.stringify(this.state.newUser)}</p>
      </>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;