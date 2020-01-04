import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

// Signup Input & Form Button
export function SignupInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function SignUpBtn(props) {
  return (
    <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-success btn-block btn-lg col-10">
      {props.children}
    </button>
  );
}

// Login Input & Form Button
export function LoginInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function LoginBtn(props) {
  return (
    <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn btn-success btn-block btn-lg col-10">
      {props.children}
    </button>
  );
}