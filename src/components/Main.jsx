import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import _ from 'lodash';

import NavBar from './NavBar';

const URL='https://www.newmate.herokuapp.com';

export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    };
  }

  componentDidMount(users) {
    fetch(`${URL}/users`)
    .then(res => res.json())
    .then(json => this.setState({users: json.users}))
    console.log(users);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div className="container-fluid">
          // <div>{this.props.users}</div>
        </div>
      </div>
    )
  }
}
