import React, { Component } from "react";
import Login from "./Login";
// import { validateLoginForm } from "./validate";
const axios = require("axios");
const FormValidators = require("./validate");
const validateLoginForm = FormValidators.validateLoginForm;
const zxcvbn = require("zxcvbn");

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        email: "",
        password: "",
      },
      type: "password",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }
  submitLogin(user) {
    var params = { email: user.email, password: user.password };
    axios
      .post("https://rohit-socially.herokuapp.com/auth/login", params)
      .then((res) => {
        if (res.data.success === true) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          window.location.reload();
        } else {
          this.setState({
            errors: { message: res.data.message },
          });
        }
      })
      .catch((err) => {
        console.log("Login Data Error", err);
      });
  }
  validateForm(event) {
    event.preventDefault();
    var payload = validateLoginForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {},
      });
      var user = {
        email: this.state.user.email,
        pw: this.state.user.password,
      };
      this.submitLogin(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors,
      });
    }
  }
  render() {
    return (
      <div>
        <Login
          onSubmitLogin={this.validateForm}
          onChange={this.handleChange}
          errors={this.state.errors}
          user={this.state.user}
          type={this.state.type}
        />
      </div>
    );
  }
}

export default LoginContainer;
