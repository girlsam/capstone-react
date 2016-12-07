import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let socket;

export default class Chat extends Component {
  constructor(props) {

    super(props);

    this.state = {};
  }

  componentDidMount() {
    socket = io.connect('http://localhost:3000');
    socket.on('message', (data) => {
      console.log(data);
      this.setState({
        messages: data
      })
    })
  }

  render() {
    return (
      <div className="container">
        "Boop"
      </div>
    );
  }
}
