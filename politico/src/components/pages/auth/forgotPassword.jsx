import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/sass/login.scss';

class ForgotPassword extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="forgot-password login">
        <form className="forgot-form login-form">
          <p
            className="forgot-password-title login-title font-20"
            align="center"
          >
            Ouch! I forgot My password
          </p>
          <input
            className="username input"
            id="email"
            type="email"
            align="center"
            placeholder="Provide your email address"
            required
          />
          <button className="submit" align="center">
            Send me a reset link
          </button>
          <p className="forgot font-14" align="center">
            Don't mind, I remember <Link to="login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
