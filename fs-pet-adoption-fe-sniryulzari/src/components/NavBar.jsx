import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UsersContext } from "../Context/Context-Users";
import logo from "../Images/logo.jpg";
import { Twirl as Hamburger } from "hamburger-react";

function NavigationBar(props) {
  const {
    isAdmin,
    isLogin,
    setIsLogin,
    setisAdmin,
    firstName,
    lastName,
    getServerUrl,
  } = useContext(UsersContext);

  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const url = `${getServerUrl()}/users/logout`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      if (res.data.ok) {
        localStorage.clear();
        setIsLogin(false);
        setisAdmin(false);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navBar">
      <ul className="desktop_nav">
        <li>
          <a href="/" className="logo-link">
            <img src={logo} alt="logo" className="nav-bar-logo" />
            <span className="nav-bar-logo-text">Ado-Pet</span>
          </a>
        </li>
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

        {isLogin ? (
          <div className="nav-logout-container">
            <li>
              <span className="nav-welcome-user">
                Welcome {firstName} {lastName}
              </span>

              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </div>
        ) : null}
      </ul>

      <ul className="mobile_nav">
        <li className="logo-container">
          <a href="/" className="logo-link">
            <img src={logo} alt="logo" className="nav-bar-logo" />
            <span className="nav-bar-logo-text">Ado-Pet</span>
          </a>
        </li>
        <li className="hamburger-container">
        <Hamburger
            className="hamburgerButton"
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            direction="left"
            rounded
            onToggle={toggled => {
              if (toggled) {
                 // open a menu
                 setOpen(true)
              } else {
                 // close a menu
                 setOpen(false)
              }
            }}
          />
          </li>
        {isOpen ? (
          <ul className="nav_links_container">
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

        {isLogin ? (
          <div className="nav-logout-container">
            <li>
              <span className="nav-welcome-user">
                Welcome {firstName} {lastName}
              </span>

              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </div>
        ) : null}
          </ul>
        ) : null}
      </ul>
    </nav>
  );
}

export default NavigationBar;
