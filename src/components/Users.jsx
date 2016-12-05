import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Jumbotron, Button } from 'react-bootstrap';
import Fetch from 'isomorphic-fetch';

//components
import NavbarInstance from './NavBar';

const URL='https://newmate.herokuapp.com';

export default class User extends Component {
  constructor(props) {

    super()

    this.state = {
      users: []
    };

    this.getData = this.getData.bind(this);
  }

  getData(users) {
    return fetch(`${URL}/users`)
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState({users: json.users.users})
    });
  }

  componentDidMount(users) {
    this.getData(users);
  }

  render() {

    return (
      <div>
        <div className="container-fluid">
          <NavbarInstance />
          {this.state.users.map(el => {
            return (
              <Col s={12} md={6}>
                <Jumbotron key={el.id}>
                  <img className="profile-image" src={el.image}/>
                  <h4 className="card-name">{el.first_name}, {el.age}</h4>
                  <p className="card-descr">{el.description}</p>
                  <hr></hr>
                  <p>Sleep Habits: {el.morning_sleep} & {el.night_sleep}</p>
                  <p>Daily Hours: {el.weekday}</p>
                </Jumbotron>
              </Col>
            )
          })}
        </div>
      </div>
    )
  }
}
