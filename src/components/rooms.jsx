import React, { Component } from 'react';
import Fetch from 'isomorphic-fetch';
import { Grid, Row, Pager, Jumbotron, Button, Carousel, CarouselItem, CarouselCaption, Col } from 'react-bootstrap';
import _ from 'lodash';

//components
import NavbarInstance from './NavBar';

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

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {

    return (
      <div>
        <NavbarInstance />
          <Pager>
            <Pager.Item href="#">Post from Mates</Pager.Item>
              {' '}
            <Pager.Item href="#">Posts from the Web</Pager.Item>
          </Pager>
        <div className="container-fluid">
          {this.state.rooms.map(el => {
            return (
              <Col xs={6} md={6}>
                <Jumbotron key={el.id}>
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
                  <p className="card-descr">{el.description}</p>
                  <Grid>
                  <Row>
                    <Col md={6} mdOffset={6}>
                      <img className="rooms-image" src={el.image}/><p className="rooms-user-descr">Posted by: {el.first_name}</p>
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
