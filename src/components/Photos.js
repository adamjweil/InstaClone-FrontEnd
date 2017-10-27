import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

class Photos extends Component {
  render() {
    const photos = this.props.photos
    return (
      <div className="main-content home">
        <center><h2>{this.props.title}</h2></center>
            <div className="timeline">
              {photos.map((photo, i) =>
            <Photo photo={photo} key={i} />
          )}
        </div>
      </div>
    );
  }
}

export default Photos;
