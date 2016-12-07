import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Row, Jumbotron, Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Pager, PagerItem } from 'react-bootstrap';
import Fetch from 'isomorphic-fetch';

//components
import NavbarInstance from './NavBar';
import Chat from './Chat';

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
                    <Pager.Item href="#" className="buttons" onClick={() => this.open(el.first_name)}>Let's Chat</Pager.Item>
                  </Pager>
                </Jumbotron>
                <Modal show={this.state.showModal === el.id} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title className="modal-name">{el.first_name}, {el.age}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p className="modal-text">{el.description}</p>
                    <hr />
                    <Row>
                      <Col xs={12} md={6} lg={6}>
                        <p className="modal-text"><i className="fa fa-bed" aria-hidden="true"></i> {el.morning_sleep}</p>
                        <p className="modal-text"><i className="fa fa-bed" aria-hidden="true"></i> {el.night_sleep}</p>
                        <p className="modal-text"><i className="fa fa-fire-extinguisher" aria-hidden="true"></i> {el.smoker_friendly}</p>
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <p className="modal-text"><i className="fa fa-sun-o" aria-hidden="true"></i> {el.weekday}</p>
                        <p className="modal-text"><i className="fa fa-hourglass-end" aria-hidden="true"></i> It's the weekend... {el.weekend} </p>
                        <p className="modal-text"> <i className="fa fa-moon-o" aria-hidden="true"></i> {el.after_hours}</p>
                      </Col>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                    <Pager>
                      <Pager.Item hre f="#" className="buttons" onClick={this.close}>Close</Pager.Item>
                    </Pager>
                  </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModal === el.first_name} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title className="modal-name">{el.first_name}, {el.age}</Modal.Title>
                  </Modal.Header>
                  <Chat />
                </Modal>
              </Col>
            )
          })}
        </div>
      </div>
    )
  }
}
