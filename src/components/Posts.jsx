import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron, Button, Col } from 'react-bootstrap';

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
                <Jumbotron key={el.id}>
                  <img className="profile-image" src={el.image}/>
                  <h4 className="card-name">{el.first_name}, {el.age}</h4>
                  <p className="card-descr">{el.description}</p>
                </Jumbotron>
              </Col>
            )
          })}
        </div>
      </div>
    )
  }
}

//helper functions
const valArray = (obj) => {
  obj['images'] = [];
  let imageObj = obj['images'];
  for (let key in obj) {
    if (~key.indexOf('image') && obj[key] !== null) {
      imageObj.push(obj[key]);
    }
  }
  return imageObj;
}
