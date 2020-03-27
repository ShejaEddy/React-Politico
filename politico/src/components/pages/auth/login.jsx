import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/sass/login.scss';

class Login extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="login">
        <form className="login-form p-3">
          <p className="login-title font-20" align="center">
            Welcome
          </p>
          <input
            className="username input"
            id="email"
            type="email"
            align="center"
            placeholder="Email"
            required
          />
          <input
            className="input"
            id="password"
            type="password"
            align="center"
            placeholder="Password"
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
}

export default Login;
