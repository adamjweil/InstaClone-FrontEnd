import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Photos from './Photos';

class Home extends Component {

  render() {
    return (
      <div className="main-content home">
        <Photos photos={this.props.photos} title={this.props.title} />
      </div>
    );
  }
}

export default Home;
