import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo"></Link>
      <div className="nav-menu">
        <ul className="m-0">
          <li>
            <Link to="/login">
              <i className="fas fa-sign-in-alt"></i>Login
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <i className="fas fa-user-plus"></i>Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
