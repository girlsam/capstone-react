import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import { Pager, PagerItem } from 'react-bootstrap';
import _ from 'lodash';

import NavigationBar from './NavBar';

export default class Main extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="main-container">
          <div className="login">
            <div className="login-triangle"></div>
            <h2 className="login-header">Log in</h2>
            <form className="login-container">
              <p><input type="email" placeholder="EMAIL"/></p>
              <p><input type="password" placeholder="PASSWORD"/></p>
              <Pager>
                <Pager.Item href="#" className="buttons">Log In</Pager.Item>
              </Pager>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
