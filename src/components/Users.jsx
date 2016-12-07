import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Jumbotron, Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Pager, PagerItem } from 'react-bootstrap';
import Fetch from 'isomorphic-fetch';

//components
import NavbarInstance from './NavBar';

const URL='https://newmate.herokuapp.com';

export default class User extends Component {
  constructor(props) {

    super(props)

    this.state = {
      users: []
    };

    this.getData = this.getData.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
    getInitialState() {
      return { showModal: false }
    }

    close() {
      this.setState({
        showModal: false
      });
    }

    open(id) {
      this.setState({ showModal: id });
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
                <Jumbotron key={el.id} className="user-tron">
                  <img className="profile-image" src={el.image}/>
                  <h4 className="card-name">{el.first_name}, {el.age}</h4>
                  <p className="card-descr">{el.description}</p>
                  <Pager>
                    <Pager.Item href="#" className="buttons" onClick={() => this.open(el.id)}>Tell Me More</Pager.Item>
                      {' '}
                    <Pager.Item href="#" className="buttons">Let's Chat</Pager.Item>
                  </Pager>
                </Jumbotron>
                <Modal show={this.state.showModal === el.id} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>{el.first_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4 className="name"></h4>
                    <p>About Me: <br/>{el.description}</p>
                    <hr />
                    <p>{el.morning_sleep}</p>
                    <p>{el.night_sleep}</p>
                    <p>{el.smoker_friendly}</p>
                    <p>{el.weekday}</p>
                    <p>{el.weekend}</p>
                    <p>{el.after_hours}</p>
                    <h4>maybe more</h4>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            )
          })}
        </div>
      </div>
    )
  }
}
