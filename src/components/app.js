import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    io.connect('http://localhost:3000');
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
