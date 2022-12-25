import React from "react";
import { Container } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { Nav, Navbar, NavLink } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <footer className="bgg">
        <Container className="footer-contents">
        <div>
        <NavLink as={Link} to="/" className="childs">
              Home
            </NavLink>
            <NavLink as={Link} to="/leaderboard" className="childs">
              Leaderboard
            </NavLink>
            <NavLink as={Link} to="/add" className="childs">
              New
            </NavLink>
            <NavLink as={Link} to="/leaderboard" className="childs">
              FAQs
            </NavLink>
            <NavLink as={Link} to="/add" className="childs">
              About
            </NavLink>
        </div>
        <hr></hr>
        <div>© 2022 Company, Inc</div>
        </Container>
      </footer>
    </div>
  );
};
