import { React } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

function Navbar() {
  return (
    <Container className="cont-nav">
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink
            exact
            to="/"
            className="nav-links home"
            activeClassName="main-nav-active"
          >
            HOME
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="nav-links about"
            activeClassName="main-nav-active"
          >
            ABOUT
          </NavLink>
          <NavLink
            exact
            to="/work"
            className="nav-links gallery"
            activeClassName="main-nav-active"
          >
            WORK
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav-links contact"
            activeClassName="main-nav-active"
          >
            CONTACT
          </NavLink>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
