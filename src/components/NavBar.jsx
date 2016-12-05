import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavbarHeader, NavbarBrand, NavbarToggle, NavbarCollapse, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

const navbarInstance = () => {
  return (
    <Navbar inverse collapseOnSelect className="navbar">
      <Navbar.Header>
        <Navbar.Brand>
          <a className="brand-font" href="#">Newmate</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="nav-link" pullRight>
            <NavDropdown eventKey={1} title="Get a Room" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}><Link to="/rooms">Newmate Room</Link></MenuItem>
              <MenuItem eventKey={1.2}>Post a Room</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Find a Mate" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}><Link to="/users">Find a Newmate</Link></MenuItem>
              <MenuItem eventKey={2.1}><Link to="/users">Update My Profile</Link></MenuItem>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default navbarInstance;
