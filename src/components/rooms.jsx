import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import { Grid, Row, Pager, Jumbotron, Button, Carousel, CarouselItem, CarouselCaption, Col, Image, Clearfix } from 'react-bootstrap';
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
                    <Clearfix visibleLgBlock></Clearfix>
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
                    <Grid>
                      <Row>
                        <Col md={6} mdOffset={6}>
                          <Image className="rooms-image" circle src={el.image} circle/><p className="rooms-user-descr align-center">Posted by: {el.first_name}</p>
                        </Col>
                        <p></p>
                      </Row>
                    </Grid>
                  </Jumbotron>
                </Col>
              )
            })}
        </div>
      </div>
    )
  }
}
