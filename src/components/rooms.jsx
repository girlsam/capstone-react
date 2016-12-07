import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import { Grid, Row, Pager, Jumbotron, Button, Carousel, CarouselItem, CarouselCaption, Col, Image, Clearfix, Modal, ModalBody, ModalTitle, ModalHeader, ModalFooter } from 'react-bootstrap';
import _ from 'lodash';

//components
import NavbarInstance from './NavBar';

const ROOMS_URL='https://newmate.herokuapp.com';

export default class Room extends Component {
  constructor() {
    super()

    this.state = {
      rooms: []
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


  getData(rooms) {
    return fetch(`${ROOMS_URL}/rooms`)
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState({rooms: json.results.rooms})
    });
  }

  componentDidMount(rooms) {
    this.getData(rooms);
  }

  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  }

  render() {

    return (
      <div>
        <NavbarInstance />
          <Pager>
            <Pager.Item href="#" className="buttons">Post from Mates</Pager.Item>
              {' '}
            <Pager.Item href="#" className="buttons">External Posts</Pager.Item>
          </Pager>
        <div className="container-fluid">
          {this.state.rooms.map(el => {
            return (
                <Col sm={12} md={6}>
                  <Jumbotron key={el.id} className="room-card">
                    <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={el.image_1}/>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={el.image_2}/>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={el.image_3}/>
                      </Carousel.Item>
                    </Carousel>
                    <h4 className="card-name">{el.bedrooms} Bed, {el.bathrooms} Bath</h4>
                    <p className="card-descr">{el.room_description}</p>
                    <Pager>
                      <Pager.Item href="#" className="buttons" onClick={() => this.open(el.id)}>Show Me More</Pager.Item>
                    </Pager>
                    <hr />
                    <p className="rooms-user-descr align-center">Posted by: {el.first_name} </p>
                    <Image className="rooms-image" circle src={el.image} circle/>
                  </Jumbotron>
                  <Modal show={this.state.showModal === el.id} onHide={this.close}>
                    <Modal.Header closeButton>
                      <Modal.Title className="modal-name"><span className="modal-descr">{el.bedrooms} Bed, {el.bathrooms} Bath in</span> {el.neighborhood}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p className="modal-text">{el.room_description}</p>
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
                        <Pager.Item href="#" className="buttons" onClick={this.close}>Close</Pager.Item>
                      </Pager>
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
