import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header>
        <div className="user-profile">
          <Link to="Me">
            <div className="profile"></div>
            <div className="details">Sheja Eddy</div>
          </Link>
        </div>
      </header>
      <ul>
        <li>
          <NavLink to="parties" activeClassName="active-link">
            <i className="far fa-flag main-opt"></i>
            <span className="opt">parties</span>
            <i className="fas fa-plus flt-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="offices" activeClassName="active-link">
            <i className="fas fa-users-cog main-opt"></i>
            <span className="opt">Offices</span>
            <i className="fas fa-plus flt-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="politicians" activeClassName="active-link">
            <i className="fas fa-user-tie main-opt"></i>
            <span className="opt">Politicians</span>
            <i className="fas fa-plus flt-right"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="results" activeClassName="active-link">
            <i className="fas fa-award main-opt"></i>
            <span className="opt">Results</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
