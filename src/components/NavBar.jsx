import React from 'react';

const NavBar = () => {
  return(
    <nav className="navbar navbar-default" id="nav">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand brand-font"><span className="glyphicon glyphicon-tent" aria-hidden="true"></span>&nbsp;&nbsp;Newmate - Get a Roommate</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/addresses">Find Rooms</a></li>
            <li><a href="/contacts">Find Mates</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
