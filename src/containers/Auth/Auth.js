import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touch: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touch: false
      }
    }
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        changed={event => this.inputChangedHandler(event, formElement.id)}
        touched={formElement.config.touched}
        errorMessage={this.errorMessageHandler}
      />
    ));
    return (
      <div>
        <form>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </div>
    );
  }
}
