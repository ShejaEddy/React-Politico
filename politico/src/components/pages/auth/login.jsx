import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AUTH } from "../../../constants";
import store from "../../../store";
import "../../../assets/sass/login.scss";

class Login extends Component {
  state = {
    user: {}
  };

  handleInputs(e) {
    const { value, name } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  }

  login(e) {
    e.preventDefault();
    return this.isAdmin()
      ? (store.dispatch(AUTH), this.goTo("/parties"))
      : this.goTo("/vote");
  }

  render() {
    return (
      <div className="login">
        <form className="login-form p-3" onSubmit={this.login.bind(this)}>
          <p className="login-title font-20" align="center">
            Welcome
          </p>
          <input
            className="username input"
            id="email"
            type="email"
            align="center"
            name="email"
            placeholder="Email"
            onChange={this.handleInputs.bind(this)}
            required
          />
          <input
            className="input"
            id="password"
            type="password"
            align="center"
            name="password"
            placeholder="Password"
            onChange={this.handleInputs.bind(this)}
            required
          />
          <Link to="/forgot-password" className="forgot-pwd font-14">
            Forgot Password?
          </Link>
          <button className="submit" align="center">
            Sign in
          </button>
          <p className="forgot font-14" align="center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
  isAdmin() {
    const { email, password } = this.state.user;
    return email === "admin@example.com" && password === "password";
  }
  goTo(location) {
    return this.props.history.push(location);
  }
}

export default Login;
