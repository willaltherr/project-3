import React, { Component } from "react";

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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

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

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

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
          placeholder={"Select Group Type"}
          handlechange={this.handleInput}
        />{" "}
        {/* About */}
        <TextArea
          title={"Group Details"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handlechange={this.handleTextArea}
          placeholder={"Provide details about your group"}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
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