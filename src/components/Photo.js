import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

class Photo extends Component {
  render() {
    const { blurb } = this.props.photo
    const photo = this.props.photo
    const preURL = "http://localhost:3000"
    return (
      <div className="photo">
          <img className="photoimg" src={preURL+ photo.photo_url} />
          <div className="description">
            <p>Description: {blurb}</p>
          </div>
      </div>
    );
  }
}

export default Photo;
