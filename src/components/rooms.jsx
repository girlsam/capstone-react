import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import { Col, Card, CardTitle } from 'react-materialize';

//components
import NavigationBar from './NavBar';

const URL='https://newmate.herokuapp.com';

export default class Room extends Component {
  constructor() {
    super()

    this.state = {
      rooms: []
    };

    this.getData = this.getData.bind(this);
  }

  getData(rooms) {
    return fetch(`${URL}/rooms`)
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState({rooms: json})
    });
  }

  componentDidMount(rooms) {
    this.getData(rooms);
    console.log('this', this);
    console.log('state', this.state);
    console.log('rooms', this.state.rooms);
  }

  render() {

    return (
      <div>
        <NavigationBar />
        <div className="container-fluid">
            Test
        </div>
      </div>
    )
  }
}
