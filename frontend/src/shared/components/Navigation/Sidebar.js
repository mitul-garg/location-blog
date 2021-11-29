import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoHome, IoPersonSharp, IoLogOutSharp } from "react-icons/io5";
import { MdCreate, MdPlace } from "react-icons/md";

import { AuthContext } from "../../context/auth-context";

import "./Sidebar.css";

export const Sidebar = () => {
  const auth = useContext(AuthContext);

  return (
    <aside className="sidebar">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <ul className="sidebar-links-container">
        <li className="sidebar-icons">
          <NavLink
            to="/"
            exact
            className="sidebar-icon-holder-link"
            activeClassName="active"
          >
            <IoHome className="sidebar-icon" />
          </NavLink>
        </li>
        {!auth.isLoggedIn && (
          <li className="sidebar-icons">
            <NavLink to="/auth" exact className="sidebar-icon-holder-link">
              <IoPersonSharp className="sidebar-icon" />
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className="sidebar-icons">
            <NavLink
              to="/places/new"
              exact
              className="sidebar-icon-holder-link"
            >
              <MdCreate className="sidebar-icon" />
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className="sidebar-icons">
            <NavLink
              to={`/${auth.userId}/places`}
              exact
              className="sidebar-icon-holder-link"
            >
              <MdPlace className="sidebar-icon" />
            </NavLink>
          </li>
        )}
        {auth.isLoggedIn && (
          <li className="sidebar-icons">
            <IoLogOutSharp
              className="logout-icon sidebar-icon"
              onClick={auth.logout}
            />
          </li>
        )}
      </ul>
    </aside>
  );
};
