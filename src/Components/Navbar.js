import React from "react";
import { Nav, NavLink, Bars, NavMenu, Title } from "./NavbarElements";

// The navbar with the content inside

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink exact to="/">
        <Title>Ege</Title>
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/contact">
          Contact
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
