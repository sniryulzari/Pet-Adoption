import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../Context/Context-Users";
import logo from "../Images/logo.jpg";

function NavigationBar(props) {
  const { isAdmin, isLogin } = useContext(UsersContext);

  return (
    <nav className="navBar">
      <a href="/" className="logo-link">
        <img src={logo} alt="logo" className="nav-bar-logo" />
        <span className="nav-bar-logo-text">Ado-Pet</span>
      </a>
      <ul className="nav-links">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="link" to="/search">
            Search
          </Link>
        </li>

        {isLogin ? (
          <li>
            <Link className="link" to="/mypets">
              My Pets
            </Link>
          </li>
        ) : null}

        {isLogin ? (
          <li>
            <Link className="link" to="/profile-Settings">
              Profile Settings
            </Link>
          </li>
        ) : null}

        {isAdmin && (
          <li>
            <Link className="link" to="/admin-Dashboard">
              Admin
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavigationBar;
