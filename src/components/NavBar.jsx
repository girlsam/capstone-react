import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router';

const NavigationBar = () => {
  return(
    <Navbar className="brand-font cyan" brand='&nbsp;Newmate - Get a Roommate' right>
      <NavItem className="nav-link">Get a Room</NavItem>
      <NavItem href='components.html' className="nav-link">Get a Mate</NavItem>
    </Navbar>
  )
}

export default NavigationBar;
