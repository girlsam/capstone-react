import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Card, CardTitle } from 'react-materialize';

//components
import NavigationBar from './NavBar';

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
          <NavigationBar />

          {this.state.users.map(el => {
              return (
                <Card className="profile-image" header={<CardTitle reveal image={el.image} waves='light'/>}
                title={<p>{el.first_name}, {el.age}</p>}
                reveal={<p>{el.description}</p>}>
                <p><a href="#">Check Me Out!</a></p>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}
