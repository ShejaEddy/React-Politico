import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/sass/signup.scss';

class SignUp extends Component {
  state = { user: {} };
  render() {
    return (
      <div className="signup">
        <form className="signup-form p-3">
          <p className="signup-title font-20" align="center">
            Register your account
          </p>
          <input
            className="input"
            type="text"
            placeholder="First name"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Middle name"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Last name"
            required
          />
          <input className="input" type="text" placeholder="Email" required />
          <input
            className="input"
            type="number"
            placeholder="Phone number"
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <input
            className="input"
            type="text"
            placeholder="National Id"
            required
          />
          <button className="submit" align="center">
            Sign up
          </button>
          <p className="forgot font-14" align="center">
            Already have account? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
