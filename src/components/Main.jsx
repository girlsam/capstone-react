import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import _ from 'lodash';

import NavigationBar from './NavBar';

export default class Main extends Component {
  render() {

    return (
      <div>
        <NavigationBar />
        <div className="hero">
        <img src="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?dpr=2&auto=format&fit=crop&w=767&h=510&q=80&cs=tinysrgb&crop="/>
        <p className="caption" bsStyle="text-center">Bop be bop</p>
        </div>
      </div>
    )
  }
}
