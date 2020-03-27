import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const path = useLocation().pathname;
  const login = (
    <li key="login">
      <Link to="/login">
        <i className="fas fa-sign-in-alt"></i>Login
      </Link>
    </li>
  );
  const signUp = (
    <li key="signup">
      <Link to="/signup">
        <i className="fas fa-user-plus"></i>Register
      </Link>
    </li>
  );
  return (
    <nav>
      <Link to="/" className="logo"></Link>
      <div className="nav-menu">
        <ul className="m-0">
          {path.includes('login')
            ? signUp
            : path.includes('signup')
            ? login
            : [login, signUp]}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
