import React, { Component } from 'react';
//import Fetch from 'isomorphic-fetch';
//import { Jumbotron, Button } from 'react-bootstrap';
import { Slider } from 'react-slick';

export default class RoomsCarousel extends Component {
  constructor(props) {
    super(props)
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.refs.slider.slickGoTo(e.target.value)
  }

  render() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <h2>Rooms</h2>
        <input onChange={this.changeHandler} defaultValue={0} type='range' min={0} max={3} />
        <Slider ref='slider' {...settings}>
          <div><img src={"http://photos.zillowstatic.com/p_f/ISal2hequ0opel1000000000.jpg"} /></div>
          <div><img src={
"http://photos.zillowstatic.com/p_f/ISqdn4ug1g29fl1000000000.jpg"} /></div>
          <div><img src={
"http://photos.zillowstatic.com/p_f/ISqdn4ug1g29fl1000000000.jpg"} /></div>
          <div><img src={
"http://photos.zillowstatic.com/p_f/ISqdn4ug1g29fl1000000000.jpg"} /></div>
        </Slider>
      </div></div>
    );
  }
}

// Object.values = function(obj) {
//   var imageArr = [];
//   for(var key in obj ) {
//     if (~key.indexOf('image') ) {
//       imageArr.push(obj[key]);
//     }
//   }
//   return imageArr;
// }
