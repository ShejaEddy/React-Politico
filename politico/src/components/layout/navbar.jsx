import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../store";
import { AUTH } from "../../constants";

const Navbar = () => {
  const path = useLocation().pathname;
  const route = useHistory();

  const isLogged = useSelector(state => state.isLogged);

  const handleLogout = () => {
    store.dispatch(AUTH);
    route.push("/");
  };

  const login = (
    <li key="login">
      <Link to="/login">
        <i className="fas fa-sign-in-alt"></i>Login
      </Link>
    </li>
  );

  const signUp = (
    <li key="signUp">
      <Link to="/signup">
        <i className="fas fa-user-plus"></i>Register
      </Link>
    </li>
  );

  const logout = (
    <li key="logout" onClick={handleLogout}>
      <i className="fas fa-sign-out-alt"></i>Logout
    </li>
  );

  const ininital = [login, signUp];

  return (
    <nav>
      <Link to="/" className="logo"></Link>
      <div className="nav-menu">
        <ul className="m-0">
          {isLogged
            ? logout
            : path.includes("login")
            ? signUp
            : path.includes("signup")
            ? logout
            : ininital}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
