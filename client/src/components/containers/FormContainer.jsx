import React, { Component } from "react";
import API from "../../utils/api";


/* Import Components */
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        games: [],
        name: "",
        age: "",
        dollar: "",
        time: "",
        gender: "",
        about: ""
      },

      genderOptions: ["Private", "Public"],
    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleDollar = this.handleDollar.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    this.loadGames();
  }
  loadGames = () => {
    API.getGames()
      .then(res =>
        this.setState({ games: res.data, name: "", age: "", dollar: "", time: "", gender: "", about: "" })
      )
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
    if (this.state.title && this.state.author) {
      API.saveGame({
        name: this.state.name,
        age: this.state.age,
        dollar: this.state.dollar,
        time: this.state.time,
        gender: this.state.gender,
        about: this.state.about,
      })
        .then(res => this.loadGames())
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
    return (
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
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;