import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

class Photo extends Component {
  render() {
    const { blurb } = this.props.photo
    const photo = this.props.photo
    const date = this.props.photo.created_at
    let year = date.substr(0,4);
    let month = date.substr(5,2);
    let day = date.substr(8, 2);
    let showDate = month + "-" + day;

    const preURL = "http://localhost:3000"
    // const preURL = "https://instagramclone-aweil.herokuapp.com"
    return (
      <div className="photo">
          <img className="photoimg" src={photo.photo_url} />
          <div className="posted-by">
            <div className="author">
              Posted by {photo.username}
            </div>
            <div className="post-date">
              on {showDate}
            </div>
          </div>
          <div className="description">
            <p>Description: {blurb}</p>

          </div>
      </div>
    );
  }
}

export default Photo;
