import React, { Component } from "react";

export default class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touch: false
      }
    }
  };
  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}
